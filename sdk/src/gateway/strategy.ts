import { createPublicClient, http, type PublicClient, type Chain, Transport, erc20Abi, Address } from 'viem';
import { avalonTokens, bobSepoliaTokens, bobTokens, ionicTokens, segmentTokens, vedaTokens } from './tokens';
import type { Token } from './types';
import { aaveV2AtokenAbi, compoundV2CTokenAbi } from './abi';

const tokenToStrategyTypeMap = new Map([
    ...bobTokens.map((token) => [token.tokens['bob'].address.toLowerCase(), 'none'] as const),
    ...bobSepoliaTokens.map((token) => [token.tokens['bob-sepolia'].address.toLowerCase(), 'none'] as const),
    ...segmentTokens.map((token) => [token.tokens['bob'].address.toLowerCase(), 'segment'] as const),
    ...ionicTokens.map((token) => [token.tokens['bob'].address.toLowerCase(), 'ionic'] as const),
    ...vedaTokens.map((token) => [token.tokens['bob'].address.toLowerCase(), 'veda'] as const),
    ...avalonTokens.map((token) => [token.tokens['bob'].address.toLowerCase(), 'avalon'] as const),
]);

interface StrategyAssetState {
    address: Address | 'usd';
    amount: bigint;
}

export default class Strategy {
    private viemClient: PublicClient;

    constructor(chain: Chain) {
        this.viemClient = createPublicClient({
            transport: http(),
            chain,
        }) as PublicClient;
    }

    async getStrategyAssetState(token: Token): Promise<StrategyAssetState> {
        const strategyType = tokenToStrategyTypeMap.get(token.address.toLowerCase()) ?? 'none';

        switch (strategyType) {
            case 'none': {
                return this.getTokenAssetState(token);
            }

            case 'segment': {
                return this.getCompoundV2StrategyAssetState(token);
            }

            case 'ionic': {
                return this.getCompoundV2StrategyAssetState(token);
            }

            case 'veda': {
                return this.getVedaStrategyAssetState(token);
            }

            case 'avalon': {
                return this.getAAVEV2StrategyAssetState(token);
            }

            default: {
                return {
                    address: 'usd',
                    amount: 0n,
                };
            }
        }
    }

    private async getTokenAssetState(token: Token): Promise<StrategyAssetState> {
        const outputTokenAddress = token.address as Address;

        const [{ result: totalSupply }] = await this.viemClient.multicall({
            contracts: [
                {
                    address: outputTokenAddress,
                    abi: erc20Abi,
                    functionName: 'totalSupply',
                    args: [],
                },
            ],
        });

        return {
            address: outputTokenAddress,
            amount: totalSupply,
        };
    }

    private async getCompoundV2StrategyAssetState(token: Token): Promise<StrategyAssetState> {
        const outputTokenAddress = token.address as Address;

        const [{ result: totalSupply }, { result: exchangeRate }, { result: underlyingAddress }] =
            await this.viemClient.multicall({
                contracts: [
                    {
                        address: outputTokenAddress,
                        abi: erc20Abi,
                        functionName: 'totalSupply',
                        args: [],
                    },
                    {
                        address: outputTokenAddress,
                        abi: compoundV2CTokenAbi,
                        functionName: 'exchangeRateCurrent',
                        args: [],
                    },
                    {
                        address: outputTokenAddress,
                        abi: compoundV2CTokenAbi,
                        functionName: 'underlying',
                        args: [],
                    },
                ],
            });

        return {
            address: underlyingAddress,
            amount: (exchangeRate * totalSupply) / 10n ** 18n,
        };
    }

    private async getAAVEV2StrategyAssetState(token: Token): Promise<StrategyAssetState> {
        const outputTokenAddress = token.address as Address;

        const [{ result: totalSupply }, { result: underlyingAddress }] = await this.viemClient.multicall({
            contracts: [
                {
                    address: outputTokenAddress,
                    abi: erc20Abi,
                    functionName: 'totalSupply',
                    args: [],
                },
                {
                    address: outputTokenAddress,
                    abi: aaveV2AtokenAbi,
                    functionName: 'UNDERLYING_ASSET_ADDRESS',
                    args: [],
                },
            ],
        });

        return {
            address: underlyingAddress,
            amount: totalSupply,
        };
    }

    private async getVedaStrategyAssetState(token: Token): Promise<StrategyAssetState> {
        // NOTE: remove 1 day so we are sure to pick up at least one historical data point
        const timestamp = Math.floor(Date.now() / 1000) - 24 * 3600;

        const res = await fetch(`https://api.sevenseas.capital/hourlyData/bob/${token.address}/${timestamp}/latest`);

        if (!res.ok) {
            return {
                address: 'usd',
                amount: 0n,
            };
        }

        const body = await res.json();

        if (!body.Response?.[0]) {
            return {
                address: 'usd',
                amount: 0n,
            };
        }

        const { tvl } = body.Response[0];

        return {
            address: 'usd',
            amount: BigInt(Math.floor(tvl)),
        };
    }
}
