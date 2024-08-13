import { assert, describe, it } from "vitest";
import { DefaultEsploraClient } from "../src/esplora";
import { getBitcoinTxInfo, getBitcoinTxProof } from "../src/relay";
import {
    encodeRawInput,
    encodeRawOutput,
    encodeRawWitness,
} from "../src/utils";
import { Transaction } from '@scure/btc-signer'; // Reference

describe("Relay Tests", () => {
    it("should encode output and op return", async () => {
        const client = new DefaultEsploraClient();
        // https://www.blockchain.com/explorer/transactions/btc/2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79
        const txHex = await client.getTransactionHex('2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79');
        const tx = Transaction.fromRaw(Buffer.from(txHex, 'hex'), { allowUnknownOutputs: true });
        assert.deepEqual(encodeRawOutput(tx).toString("hex"), '0200e9a435000000001976a914fd7e6999cd7e7114383e014b7e612a88ab6be68f88ac804a5d05000000001976a9145c1addbd0e4e78479e71fdca0555d2d44b67378e88ac');
    });

    it("should encode input", async () => {
        const client = new DefaultEsploraClient();
        // https://www.blockchain.com/explorer/transactions/btc/2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79
        const txHex = await client.getTransactionHex('2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79');
        const tx = Transaction.fromRaw(Buffer.from(txHex, 'hex'), { allowUnknownOutputs: true });
        assert.deepEqual(encodeRawInput(tx).toString("hex"), '01996cf4e2f0016a1f092aaaba653c7eae5dd4b6eef1f9a2a94c64f34b2fecbd85010000006a47304402206f99da49ce586528ed8981842df30b4a5a91195fd2d83e440d4193fc16a944ec022055cfdf63a2c90638821f1b5ff1fdf77526163ae057a0d0de30a6e1d3009e7a29012102811832eef7216470f489991f1d87e36d2890755d2bbf827eb1e71804491506afffffffff');
    });

    it("should encode raw witness", async () => {
        const client = new DefaultEsploraClient();
        // https://www.blockchain.com/explorer/transactions/btc/e56e6da305fe4489b3a4d8e96a08fbcee36ead158762f84bdb76d49eb6eeeb6b
        const txHex = await client.getTransactionHex('e56e6da305fe4489b3a4d8e96a08fbcee36ead158762f84bdb76d49eb6eeeb6b');
        const tx = Transaction.fromRaw(Buffer.from(txHex, 'hex'), { allowUnknownOutputs: true });
        assert.deepEqual(encodeRawWitness(tx).toString("hex"), '304402207be31361192a64e35df1c0e03037b9069d4e6658d1005e7e474e4ea5c69bf18702207f3c69f686e3c56dcc33bfe4b3275be5371a6ec429610fb993fff1806a156c4a0130440220753a57f41ede632da17f5ccdb7010b318a0d7b85d47dbe0ed867791575bff10e022065bb348d7ce8e2a1f5c4c44ba611019d538be1626df0e1184fdfad2d38135cc20152210375e00eb72e29da82b89367947f29ef34afb75e8654f6ea368e0acdfd92976b7c2103a1b26313f430c4b15bb1fdce663207659d8cac749a0e53d70eff01874496feff2103c96d495bfdd5ba4145e3e046fee45e84a8a48ad05bd8dbb395c011a32cf9f88053ae');
    });

    it("even if raw witness is Null should handle gracefully", async () => {
        const client = new DefaultEsploraClient();
        // https://www.blockchain.com/explorer/transactions/btc/2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79
        const txHex = await client.getTransactionHex('2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79');
        const tx = Transaction.fromRaw(Buffer.from(txHex, 'hex'), { allowUnknownOutputs: true });
        assert.deepEqual(encodeRawWitness(tx).toString("hex"), '');
    });


    it("should get tx info", async () => {
        const client = new DefaultEsploraClient();
        const txId = "2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79";
        const txInfo = await getBitcoinTxInfo(client, txId);

        assert.deepEqual(txInfo, {
            version: '01000000',
            inputVector: '01996cf4e2f0016a1f092aaaba653c7eae5dd4b6eef1f9a2a94c64f34b2fecbd85010000006a47304402206f99da49ce586528ed8981842df30b4a5a91195fd2d83e440d4193fc16a944ec022055cfdf63a2c90638821f1b5ff1fdf77526163ae057a0d0de30a6e1d3009e7a29012102811832eef7216470f489991f1d87e36d2890755d2bbf827eb1e71804491506afffffffff',
            outputVector: '0200e9a435000000001976a914fd7e6999cd7e7114383e014b7e612a88ab6be68f88ac804a5d05000000001976a9145c1addbd0e4e78479e71fdca0555d2d44b67378e88ac',
            locktime: '00000000',
            witnessVector: undefined
        });
    });

    it("should get tx proof", async () => {
        const client = new DefaultEsploraClient();
        const txId = "2ef69769cc0ee81141c79552de6b91f372ff886216dbfa84e5497a16b0173e79";
        const txProof = await getBitcoinTxProof(client, txId, 2);
        assert.equal(txProof.txIndexInBlock, 1);
        assert.equal(Buffer.from(txProof.bitcoinHeaders, "hex").byteLength / 80, 2);
    });
});
