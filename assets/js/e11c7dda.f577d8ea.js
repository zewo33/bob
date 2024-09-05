"use strict";(self.webpackChunkBOB_docs=self.webpackChunkBOB_docs||[]).push([[3193],{8946:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(4848),t=n(8453);const o={sidebar_position:4,sidebar_label:"Phase 2: Optimistic Merged Mining"},c="Phase 2: Optimistic Merged Mining",l={id:"learn/bob-stack/merged-mining",title:"Phase 2: Optimistic Merged Mining",description:"BOB will be the first to implement the OptiMine optimistic merged mining protocol.",source:"@site/docs/learn/bob-stack/merged-mining.md",sourceDirName:"learn/bob-stack",slug:"/learn/bob-stack/merged-mining",permalink:"/docs/learn/bob-stack/merged-mining",draft:!1,unlisted:!1,editUrl:"https://github.com/bob-collective/bob/tree/master/docs/docs/learn/bob-stack/merged-mining.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Phase 2: Optimistic Merged Mining"},sidebar:"learnSidebar",previous:{title:"Phase 1: Optimistic BOB",permalink:"/docs/learn/bob-stack/op-stack"},next:{title:"Privileged Roles in BOB Mainnet",permalink:"/docs/learn/security/privileged-roles"}},r={},d=[{value:"Benefits",id:"benefits",level:2},{value:"Merged Mining",id:"merged-mining",level:2},{value:"Optimistic Merged Mining in a Nutshell",id:"optimistic-merged-mining-in-a-nutshell",level:2},{value:"Optimistic Merged Mining in Detail",id:"optimistic-merged-mining-in-detail",level:2},{value:"Preliminaries",id:"preliminaries",level:3},{value:"Sequenced Block Production",id:"sequenced-block-production",level:3},{value:"Sequenced Merged Mining Block Finalization",id:"sequenced-merged-mining-block-finalization",level:3},{value:"Protocol",id:"protocol",level:3},{value:"BOB L2 consensus rules",id:"bob-l2-consensus-rules",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Communication between BOB and Bitcoin",id:"communication-between-bob-and-bitcoin",level:3},{value:"Inclusion of Block Bundle in Bitcoin Block",id:"inclusion-of-block-bundle-in-bitcoin-block",level:3},{value:"BOB L2 Block States",id:"bob-l2-block-states",level:3},{value:"References",id:"references",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"phase-2-optimistic-merged-mining",children:"Phase 2: Optimistic Merged Mining"})}),"\n",(0,s.jsxs)(i.p,{children:["BOB will be the first to implement the ",(0,s.jsx)(i.a,{href:"https://gobob.xyz/optimine",children:"OptiMine"})," optimistic merged mining protocol.\nOptiMine extends ",(0,s.jsx)(i.a,{href:"https://bitcoin.stackexchange.com/questions/273/how-does-merged-mining-work",children:"traditional merged mining"})," to separate block production from Proof-of-Work (PoW) finalization, following the hybrid consensus model. In a nutshell, blocks are produced optimistically while PoW eventually finalizes batches of blocks. BOB inherits security from Bitcoin miners, offsets the reliance on centralized sequencers, and retains fast block times."]}),"\n",(0,s.jsx)(i.h2,{id:"benefits",children:"Benefits"}),"\n",(0,s.jsx)(i.p,{children:"Optimistic Merged Mining has the following benefits:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"EVM rollups with Bitcoin miner security: BOB inherits security from Bitcoin miners."}),"\n",(0,s.jsx)(i.li,{children:"Removing trust in (centralized) sequencers: Bitcoin miners run full nodes of BOB and thereby verify that the sequencer(s) are producing valid blocks. This offsets trust in the sequencer(s) and thereby provides Bitcoin security through mining to a rollup."}),"\n",(0,s.jsx)(i.li,{children:"No extra PoW: Merged mining reuses work of the Bitcoin network, i.e., no extra PoW is required for BOB. No extra electricity spend is required."}),"\n",(0,s.jsx)(i.li,{children:"Fast block times: With optimistic merged mining, BOB can retain its 2-second block times. Other merged mining approaches require a lower bound of roughly 15-second block times due to high uncle rates."}),"\n",(0,s.jsx)(i.li,{children:"No Bitcoin modifications needed: Optimistic merged mining works on Bitcoin today. While we are working on BitVM, we can implement optimistic merged mining today."}),"\n",(0,s.jsx)(i.li,{children:"Block fee stability: Since multiple blocks are merged mined at once, the fees are averaged over multiple blocks such that fee variance across blocks is reduced for Bitcoin miners."}),"\n",(0,s.jsx)(i.li,{children:"Prevention of Bitcoin miner attacks: Since blocks are produced by the sequencer and miners only verify, they can at worst halt block production but not create forks or invalid blocks."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"merged-mining",children:"Merged Mining"}),"\n",(0,s.jsx)(i.p,{children:"An existing technique to receive Bitcoin security is through merged mining. In \u201cvanilla\u201d merged mining, Miners submit PoW to two or more chains simultaneously. Thereby, an auxiliary chain inherits (some of) the security of the parent chain (e.g., Bitcoin)."}),"\n",(0,s.jsxs)(i.p,{children:["In ",(0,s.jsx)(i.a,{href:"https://www.namecoin.org/",children:"Namecoin"}),", Bitcoin Miners submit Bitcoin blocks and block candidates with sufficient PoW to the Namecoin chain, where the coinbase transaction includes a reference to the to-be-mined Namecoin block hash. On receiving a valid auxiliary PoW, block production in Namecoin continues.\n",(0,s.jsx)(i.a,{href:"https://rootstock.io/",children:"RSK (Rootstock)"})," is currently the most widely adopted merged mined chain. Each block in RSK receives PoW and block production depends on the previous merged mined block."]}),"\n",(0,s.jsx)(i.p,{children:"A limitation of merged mining is the slow block production rate compared to Proof-of-Stake networks and L2 solutions. For example, RSK achieves a 30-second block time on average, while Optimism produces a block every two seconds. This limitation is due to the non-deterministic nature of PoW, as well as the increased chance of forks due to network propagation delays when two or more blocks are found for the same high within a short period of time."}),"\n",(0,s.jsx)(i.h2,{id:"optimistic-merged-mining-in-a-nutshell",children:"Optimistic Merged Mining in a Nutshell"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"https://docs.optimism.io/stack/components#sequencing",children:"BOB sequencer"})," creates signed blocks optimistically by collecting transactions from the BOB L2 and Ethereum L1 which are then assembled into blocks. Block finalization is achieved by Bitcoin Miners running a BOB L2 full node to verify the correctness of the signed blocks. Miners periodically submit PoW solutions according to the BOB PoW difficulty. Miners and the sequencer(s) finalize multiple signed blocks at once by including the signed blocks\u2019 combined hashes into the PoW solutions produced by mining, i.e., so-called \u201cmined blocks\u201d. The mined blocks are verified and signed by the sequencer to prevent attacks by miners."]}),"\n",(0,s.jsx)(i.p,{children:"If no valid PoW mined blocks are generated for a pre-defined timeout period, the rollup/BOB L2 considers this a consensus failure and block production is halted - until a mined block is found."}),"\n",(0,s.jsx)(i.h2,{id:"optimistic-merged-mining-in-detail",children:"Optimistic Merged Mining in Detail"}),"\n",(0,s.jsx)(i.h3,{id:"preliminaries",children:"Preliminaries"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Actors"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Sequencer:"})," a block producer subject to the rollup rules. The sequencer is responsible for creating and signing blocks."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Miners:"})," Bitcoin miners that participate in merged mining the BOB L2. Miners are assumed to run a BOB full node."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Notation"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Signed blocks"}),": Blocks proposed and signed by the sequencer."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Mined blocks"}),": Blocks created by miners (have PoW) that commit to a set of existing signed blocks."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Block bundle"}),": A block bundle refers to a set ",(0,s.jsx)(i.code,{children:"N"})," of signed blocks that are not yet merged mined. For data efficiency, the block bundle is a single hash derived from a vector of ",(0,s.jsx)(i.code,{children:"N"})," signed block hashes that are not yet merged mined. Note that we use a vector instead of a Merkle tree or similar since the BOB rollup full nodes operated both by the miners and the sequencer(s) need to validate that all signed block hashes are correctly included in the block bundle."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Optimistic Merged Mining",src:n(2897).A+"",width:"1124",height:"692"})}),"\n",(0,s.jsx)(i.p,{children:"Figure 1: Optimistic Merged Mining"}),"\n",(0,s.jsx)(i.h3,{id:"sequenced-block-production",children:"Sequenced Block Production"}),"\n",(0,s.jsx)(i.p,{children:"The sequencer produces and validates blocks based on two inputs:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Transactions submitted to the BOB L2."}),"\n",(0,s.jsx)(i.li,{children:"Transactions submitted to the BOB rollup contracts on Ethereum."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["BOB is operating with a single sequencer as are other OP stack chains.\nYou can learn more details about the block production and the working of the optimistic rollup part in the ",(0,s.jsx)(i.a,{href:"https://docs.optimism.io/stack/protocol/overview#block-production",children:"Optimism Docs"})]}),"\n",(0,s.jsx)(i.p,{children:"In comparison to other OP stack rollups, Bitcoin miners need to finalize BOB L2 blocks. This means that settlement on Ethereum is not sufficient to consider blocks finalized."}),"\n",(0,s.jsx)(i.h3,{id:"sequenced-merged-mining-block-finalization",children:"Sequenced Merged Mining Block Finalization"}),"\n",(0,s.jsxs)(i.p,{children:["Every ",(0,s.jsx)(i.code,{children:"N"}),' BOB L2 blocks, the state of the rollup will be subject to a merged mining "block bundle", akin to a finality gadget in hybrid consensus protocols.']}),"\n",(0,s.jsx)(i.h3,{id:"protocol",children:"Protocol"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Rollup block production."})," The BOB sequencer collects transactions (from Ethereum and BOB L2) and creates blocks as described above."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Prepare merged mining block bundle."})," Merged miners query their BOB L2 full node for the latest block bundle. The BOB L2 full node will provide a block bundle that includes a reference to all ",(0,s.jsx)(i.code,{children:"N"})," blocks that have not yet been finalized. The block bundle is a hash of the ",(0,s.jsx)(i.code,{children:"N"})," BOB L2 block hashes."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Merge mining."})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The miner fetches the block bundle and other merged mining information from the BOB L2 node(s) and verifies the signatures of the block bundle."}),"\n",(0,s.jsx)(i.li,{children:"The miner includes the block bundle in the coinbase transaction of the next Bitcoin block template."}),"\n",(0,s.jsx)(i.li,{children:"The miner performs AuxPoW over this block template until an AuxPoW solution matches the required BOB L2 difficulty."}),"\n",(0,s.jsx)(i.li,{children:"The miner sends the AuxPoW solution (Bitcoin block) to the Federation BOB L2 node."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"BOB L2 finalizes N signed blocks."})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The BOB L2 sequencer verifies the AuxPoW solution. Verification includes verifying the coinbase transaction of the Bitcoin block, the sequencer signature, and the BOB L2 AuxPoW."}),"\n",(0,s.jsx)(i.li,{children:"The BOB L2 sequencer distributes the fee share of the miners since the last block bundle to the miners as part of the EVM block that includes the AuxPoW. Other full nodes verify the inclusion of the fee as part of consensus."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Block intervals"})}),"\n",(0,s.jsx)(i.p,{children:"The merged mining interval will be determined by the BOB L2 AuxPoW difficulty target, i.e., miners continuously mine and submit a mined block whenever a valid AuxPoW solution is found. The initial target merged mining interval shall be 1 minute."}),"\n",(0,s.jsx)(i.h3,{id:"bob-l2-consensus-rules",children:"BOB L2 consensus rules"}),"\n",(0,s.jsx)(i.p,{children:'Follow the longest chain of sequencer signed blocks. If no merged mined block bundles are created for a predefined number of blocks ("mining timeout period"), e.g., 10,000 blocks, the sequencer will stop producing new signed blocks. This is considered a critical failure.'}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"If merged mining block bundles are submitted again, the chain will resume producing blocks."}),"\n",(0,s.jsx)(i.li,{children:"If merged mining block bundles are never submitted or not for a very long time mitigation out of band is required."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(i.p,{children:"The figure below describes in a simplified way how merged mining will be implemented in BOB."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"BOB Architecture",src:n(1425).A+"",width:"3279",height:"2739"})}),"\n",(0,s.jsx)(i.p,{children:"Figure 2: Overview of the BOB Architecture"}),"\n",(0,s.jsx)(i.h3,{id:"communication-between-bob-and-bitcoin",children:"Communication between BOB and Bitcoin"}),"\n",(0,s.jsx)(i.p,{children:"In black, we show the interaction between the BOB sequencer and the miner (mining pool):"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The sequencer is responsible for block production and verification of L2 blocks and the AuxPoW."}),"\n",(0,s.jsxs)(i.li,{children:["The sequencer runs the rollup clients and the execution client (geth).","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The execution client is responsible for transaction gossiping, executing transactions and smart contracts. BOB does not modify op-geth and therefore, other execution clients such as ",(0,s.jsx)(i.a,{href:"https://github.com/paradigmxyz/reth",children:"reth"})," with the ",(0,s.jsx)(i.code,{children:"op"})," flag can also be used."]}),"\n",(0,s.jsx)(i.li,{children:"The consensus client is responsible for block gossiping, block production, and finalization. We are currently researching how to integrate the merged mining part with the least changes possible into the OP stack components (the smart contracts, op-node, op-batcher, and op-proposer)."}),"\n",(0,s.jsxs)(i.li,{children:["The consensus and execution client communicate via the via the ",(0,s.jsx)(i.code,{children:"getPayload"})," and ",(0,s.jsx)(i.code,{children:"newPayload"})," RPCs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["The mining pool connects to their own BOB L2 full node, i.e., it does not directly use the sequencer RPC (as shown in a simplified way in the diagram).","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"createAuxBlock"})," RPC is used to create a Bitcoin block template that includes the block bundle."]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"submitAuxBlock"})," RPC is used to submit the mined block to the BOB L2 node."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"inclusion-of-block-bundle-in-bitcoin-block",children:"Inclusion of Block Bundle in Bitcoin Block"}),"\n",(0,s.jsx)(i.p,{children:"In orange, we show the inclusion of the block bundle in the Bitcoin block:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The miner receives the block template that includes the latest block bundle from the BOB L2 node ",(0,s.jsx)(i.code,{children:"createAuxBlock"})," RPC."]}),"\n",(0,s.jsx)(i.li,{children:"The miner mines Bitcoin blocks and includes the block bundle hash in the output of the coinbase transaction."}),"\n",(0,s.jsxs)(i.li,{children:["When the miner has found a Bitcoin block that meets the BOB L2 difficulty, it submits the block to the BOB L2 node using the ",(0,s.jsx)(i.code,{children:"submitAuxBlock"})," RPC."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"bob-l2-block-states",children:"BOB L2 Block States"}),"\n",(0,s.jsx)(i.p,{children:"In green and red, we show how each BOB L2 node keeps its view of the finalized and non-finalized blocks:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The green blocks ",(0,s.jsx)(i.code,{children:"n-3"})," and ",(0,s.jsx)(i.code,{children:"n-2"})," are finalized blocks."]}),"\n",(0,s.jsxs)(i.li,{children:["The red blocks ",(0,s.jsx)(i.code,{children:"n-1"}),", ",(0,s.jsx)(i.code,{children:"n"}),", ",(0,s.jsx)(i.code,{children:"n+1"})," are non-finalized blocks."]}),"\n",(0,s.jsxs)(i.li,{children:["The red blocks ",(0,s.jsx)(i.code,{children:"n-1"})," and ",(0,s.jsx)(i.code,{children:"n"})," are signed blocks, i.e., they are signed by the sequencer."]}),"\n",(0,s.jsxs)(i.li,{children:["The red block ",(0,s.jsx)(i.code,{children:"n+1"})," is the head of the BOB L2. It is not yet signed by the sequencer and currently being prepared for inclusion."]}),"\n",(0,s.jsxs)(i.li,{children:["Finalization of blocks consists of the successful submission of the AuxPoW (via the ",(0,s.jsx)(i.code,{children:"submitAuxBlock"})," RPC) and the sequencer including and signing the AuxPoW confirmation as part of a BOB L2 block.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["On block ",(0,s.jsx)(i.code,{children:"n"}),", the sequencer producing block ",(0,s.jsx)(i.code,{children:"n"})," added an extra data to the BOB L2 block:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The sequencer received a Bitcoin block with a coinbase output that included the block bundle ",(0,s.jsx)(i.code,{children:"sha256(sha256(x), sha256(y))"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"The sequencer verified that the Bitcoin block meets the BOB L2 difficulty."}),"\n",(0,s.jsxs)(i.li,{children:["The sequencer then added the data to the BOB L2 block:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"start"}),": The start height of the block bundle ",(0,s.jsx)(i.code,{children:"n-3"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"end"}),": The end height of the block bundle ",(0,s.jsx)(i.code,{children:"n-2"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"bits"}),": The difficulty of the block bundle ",(0,s.jsx)(i.code,{children:"n-3"})," to ",(0,s.jsx)(i.code,{children:"n-2"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"coinbase_txn"}),": The coinbase transaction of the Bitcoin block and includes the block bundle hash."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"merkle branches"}),": The Merkle proof of the coinbase transaction to the Bitcoin block Merkle root."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"parent block"}),": The parent block header of the Bitcoin block."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["The sequencer sent block ",(0,s.jsx)(i.code,{children:"n"})," including the merged mining data to Ethereum to settle."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf",children:"EVM Overview"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://ethereum.stackexchange.com/a/6413/5370",children:"Ethereum Block Architecture"})}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1425:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/block-architecture-1a66cca2e82f45210c18510f2a42b1ef.png"},2897:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/merged-mining-checkpoints-c11530ca6778f9d1b0727a5c7098a214.png"},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>l});var s=n(6540);const t={},o=s.createContext(t);function c(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);