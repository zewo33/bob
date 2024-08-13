//@ts-nocheck
/**
 * @ignore
 */
import { Block } from "bitcoinjs-lib";
//@ts-nocheck
/**
 * @ignore
 */
import { hash256 } from "bitcoinjs-lib/src/crypto";
//@ts-nocheck
/**
 * @ignore
 */
import { Transaction, TaprootControlBlock } from '@scure/btc-signer';
import {hash160} from "@scure/btc-signer/lib/utils"; // Reference


/**
 * @ignore
 */
export function encodeRawInput(tx: Transaction) {
    // Calculate the size of the input buffer
    const inputSize = 1 + tx.inputsLength * 40 + Array.from({ length: tx.inputsLength }).reduce((sum, _, idx) => {
        const input = tx.getInput(idx);
        return sum + input.finalScriptSig.length + 1;
    }, 0);

    let inputBuffer = Buffer.allocUnsafe(inputSize);
    let offset = 0;

    // Write the number of inputs directly (since inputsLength should fit within one byte)
    offset = inputBuffer.writeUInt8(tx.inputsLength, offset);

    for (let idx = 0; idx < tx.inputsLength; idx++) {
        const txIn = tx.getInput(idx);

        // Write the reversed txid
        const reversedTxid = Buffer.from(txIn.txid).reverse();
        offset += reversedTxid.copy(inputBuffer, offset);

        // Write the index
        offset = inputBuffer.writeUInt32LE(txIn.index, offset);

        // Write the scriptSig length and the scriptSig itself
        const scriptSig = Buffer.from(txIn.finalScriptSig);
        offset = inputBuffer.writeUInt8(scriptSig.length, offset);
        offset += scriptSig.copy(inputBuffer, offset);

        // Write the sequence
        offset = inputBuffer.writeUInt32LE(txIn.sequence, offset);
    }
    return inputBuffer;
}

/**
 * @ignore
 */
function calculateScriptSize(script: Uint8Array): number {
    const length = script.length;
    return 1 + length; // 1 byte for the length, followed by the script itself
}

/**
 * @ignore
 */
export function encodeRawOutput(tx: Transaction) {
    // Calculate the size of the output buffer
    const outputSize = 1 + tx.outputsLength * 8 + Array.from({ length: tx.outputsLength }).reduce((sum, _, idx) => {
        const output = tx.getOutput(idx);
        return sum + calculateScriptSize(output.script);
    }, 0);

    let outputBuffer = Buffer.allocUnsafe(outputSize);
    let offset = 0;

    // Write the number of outputs directly (assuming outputsLength fits within one byte)
    offset = outputBuffer.writeUInt8(tx.outputsLength, offset);

    for (let idx = 0; idx < tx.outputsLength; idx++) {
        const txOut = tx.getOutput(idx);

        // Write the amount (8 bytes)
        offset = outputBuffer.writeBigUInt64LE(BigInt(txOut.amount), offset);

        // Write the script length and the script itself
        const script = Buffer.from(txOut.script);
        offset = outputBuffer.writeUInt8(script.length, offset);
        offset += script.copy(outputBuffer, offset);
    }

    return outputBuffer;
}

/**
 * @ignore
 */
export function encodeRawWitness(tx: Transaction) {
    // Initialize witnessBuffer as an empty Buffer
    let witnessBuffer = Buffer.alloc(0);

    // Loop through each input and concatenate the witness data to witnessBuffer
    Array.from({ length: tx.inputsLength }).forEach((_, idx) => {
        const input = tx.getInput(idx);
        if (input.finalScriptWitness) {
            // Concatenate each witness data directly to the witnessBuffer
            input.finalScriptWitness.forEach((witness) => {
                const witnessPart = Buffer.from(witness);
                witnessBuffer = Buffer.concat([witnessBuffer, witnessPart]);
            });
        }
    });

    return witnessBuffer;
}

/**
 * @ignore
 */
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunkedArray: T[][] = [];
    let index = 0;
    while (index < array.length) {
        chunkedArray.push(array.slice(index, index + chunkSize));
        index += chunkSize;
    }
    return chunkedArray;
}

/**
 * Create a Merkle branch and root based on a list of hashes and a specific index.
 *
 * @param hashes - An array of hashes for Merkle construction.
 * @param index - The index of the hash for which the branch and root are calculated.
 * @returns An object containing the Merkle branch and root.
 */
// https://github.com/Blockstream/electrs/blob/fd35014283c7d3a7a85c77b9fd647c9f09de12c9/src/util/electrum_merkle.rs#L86-L105
function createMerkleBranchAndRoot(hashes: Buffer[], index: number): {
    merkle: Buffer[],
    root: Buffer,
} {
    let merkle: Buffer[] = [];
    while (hashes.length > 1) {
        if (hashes.length % 2 != 0) {
            let last = hashes[hashes.length - 1];
            hashes.push(last);
        }
        if (index % 2 == 0) { index++ } else { index-- }
        merkle.push(hashes[index]);
        index = Math.floor(index / 2);
        hashes = chunkArray(hashes, 2).map(pair => hash256(Buffer.concat([pair[0], pair[1]])));
    }
    return {
        merkle,
        root: hashes[0],
    };
}

/**
 * Retrieve a Merkle proof for a Bitcoin transaction from a block's raw data.
 *
 * @param block - The Bitcoin block containing the transaction.
 * @param txHash - The transaction hash to construct a proof for.
 * @param forWitness - Set to `true` to construct a witness proof (default is `false`).
 * @returns An object containing the position, proof, and root of the Merkle proof.
 */
export function getMerkleProof(block: Block, txHash: string, forWitness?: boolean) {
    const txIds = block.transactions!.map(tx => tx.getHash(forWitness));
    const pos = txIds.map(value => value.toString("hex")).indexOf(txHash);

    const merkleAndRoot = createMerkleBranchAndRoot(txIds, pos);
    return {
        pos: pos,
        // hashes are already little-endian
        proof: merkleAndRoot.merkle.map(value => value.toString("hex")).join(''),
        root: merkleAndRoot.root.toString("hex"),
    };
}

/**
 * Estimate the tx inclusion fee for N P2WPKH inputs and 3 P2WPKH outputs.
 *
 * @param feeRate - The current rate for inclusion, satoshi per byte.
 * @param numInputs - The number of inputs to estimate for.
 * @returns The estimated fee for transaction inclusion.
 */
export function estimateTxFee(feeRate: number, numInputs: number = 1) {
    const tx = new Transaction();
    for (let i = 0; i < numInputs; i++) {
        tx.addInput({
            txid: Buffer.alloc(32, 0),
            index: 0
        });
    }
    // https://github.com/interlay/interbtc-clients/blob/6bd3e81d695b93180c5aeae4f33910ad4395ff1a/bitcoin/src/light/wallet.rs#L80
    tx.updateInput(0, { finalScriptWitness: [Buffer.alloc(33 + 32 + 7, 0)] });

    // can't add dummy output as will get an error 'Cannot find previous output info'

    return feeRate * tx.vsize; // i.e satoshis
}
