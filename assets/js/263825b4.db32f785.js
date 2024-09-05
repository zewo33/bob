"use strict";(self.webpackChunkBOB_docs=self.webpackChunkBOB_docs||[]).push([[2091],{1624:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(4848),o=t(8453);const r={sidebar_position:1},s="Technical Vision",a={id:"drafts/vision",title:"Technical Vision",description:"We see BOB as a collective undertaking to scale Bitcoin the right way: inheriting security from Bitcoin while providing usable decentralization for builders today without waiting for hard forks.",source:"@site/docs/drafts/vision.md",sourceDirName:"drafts",slug:"/drafts/vision",permalink:"/docs/drafts/vision",draft:!1,unlisted:!1,editUrl:"https://github.com/bob-collective/bob/tree/master/docs/docs/drafts/vision.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"rootSidebar",previous:{title:"WitnessTx",permalink:"/docs/contracts/src/src/utils/WitnessTx.sol/library.WitnessTx"},next:{title:"Roadmap and Contribution",permalink:"/docs/drafts/roadmap"}},l={},c=[{value:"Bringing Bitcoin Security to Rollups",id:"bringing-bitcoin-security-to-rollups",level:2},{value:"Ideal World: Verifiably Secure through Zero Knowledge Proofs",id:"ideal-world-verifiably-secure-through-zero-knowledge-proofs",level:3},{value:"Hardfork-free Bitcoin Security through Merged Mining",id:"hardfork-free-bitcoin-security-through-merged-mining",level:3},{value:"Usable Decentralization",id:"usable-decentralization",level:2},{value:"Adoption Through UX",id:"adoption-through-ux",level:3},{value:"Multi-Chain and Multi-Rollup Future",id:"multi-chain-and-multi-rollup-future",level:3},{value:"Off-chain Computation before On-chain Computation",id:"off-chain-computation-before-on-chain-computation",level:3},{value:"Briding BTC, Ordinals, and BRC20s",id:"briding-btc-ordinals-and-brc20s",level:2},{value:"Bitcoin Bridges without Trusted Parties",id:"bitcoin-bridges-without-trusted-parties",level:3}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"technical-vision",children:"Technical Vision"})}),"\n",(0,n.jsx)(i.p,{children:"We see BOB as a collective undertaking to scale Bitcoin the right way: inheriting security from Bitcoin while providing usable decentralization for builders today without waiting for hard forks."}),"\n",(0,n.jsx)(i.p,{children:"The technical vision outlines the endgame for BOB and describes how it differs from the first deployments. The discrepancy between the endgame and current state forms opportunities to contribute and push the BOB stack further."}),"\n",(0,n.jsx)(i.h2,{id:"bringing-bitcoin-security-to-rollups",children:"Bringing Bitcoin Security to Rollups"}),"\n",(0,n.jsx)(i.p,{children:"We believe that rollups and sidechains should receive their consensus security from Bitcoin rather than relying on other L1s."}),"\n",(0,n.jsx)(i.h3,{id:"ideal-world-verifiably-secure-through-zero-knowledge-proofs",children:"Ideal World: Verifiably Secure through Zero Knowledge Proofs"}),"\n",(0,n.jsx)(i.p,{children:"To inherit full Bitcoin security, Bitcoin miners need to validate a BOB rollup state transition as part of Bitcoin consensus such that the rollup state transition function becomes part of the Bitcoin state transition function. No current Bitcoin sidechain achieves this level of security as this will require a hard fork of Bitcoin."}),"\n",(0,n.jsxs)(i.p,{children:["In our opinion, non-interactive zero-knowledge proofs (NIZKP) are the ideal candidates to achieve full Bitcoin security as the verification of the proof is much simpler than its creation. The creation of the proof can be done by the rollup nodes. Bitcoin would need to add an OP code to verify ZK proofs or there would need to be great improvements in the efficiency of ",(0,n.jsx)(i.a,{href:"https://bitvm.org",children:"BitVM"})," to be able to verify ZK proofs."]}),"\n",(0,n.jsx)(i.p,{children:'However, adding a ZK verification OP code and being able to verify ZK proofs in BitVM will likely take years as there is still heavy changes around ZK proofs and no "gold standard" has yet emerged.'}),"\n",(0,n.jsx)(i.h3,{id:"hardfork-free-bitcoin-security-through-merged-mining",children:"Hardfork-free Bitcoin Security through Merged Mining"}),"\n",(0,n.jsx)(i.p,{children:"As we expect that verifying ZK proofs is still a long way to go, the next best thing to inherit Bitcoin security for BOB rollups is to allow miners to verify rollup state transitions. Miners can opt-in to verify rollups and if all miners were to merge mine a rollup, it would have equivalent PoW security as Bitcoin itself."}),"\n",(0,n.jsx)(i.p,{children:"When using Ethereum rollups, Ethereum becomes a co-processor to Bitcoin where the computation happens on the EVM rollup but the verification is done by the miner."}),"\n",(0,n.jsx)(i.p,{children:"We see a staged approach to make use of the rollup PoW:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Stage 1"}),": Dapps deployed on an EVM rollup can check the submitted PoW to the rollup and customize their interpretation. For example, a ordinals P2P exchange might want to pause their platform if insufficient PoW is attached to the rollup, Other dapps might ignore the PoW alltogether, making the model quite flexible."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Stage 2"}),": Merged minig becomes a condition for a valid state transition of the rollup. Assuming that a rollup is launched on an L1 with smart contracts like Ethereum, the sequencer needs to ensure that at certain intervals a sufficient PoW is added. The rollup would be paused and its state could be invalidated through including the PoW as part of the fraud proofs (in optimistic rollups) and validity proofs (in zk rollups). Requiring PoW as part of a valid state transition for the rollup ensures that the state transition of the rollup on say Ethereum cannot settle without the explicit consent from Bitcoin miners."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Stage 3"}),": Staking sequencers on Bitcoin and proving incorrect behavior through BitVM, one-time signatures, and other techniques ensures that sequencers are ecnomically incentivized on Bitcoin to correctly produce L2 blocks."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Stage 4"}),": In the final stage, the rollup transitions to a fully zk-verified rollup that can then be verified by Bitcoin consensus without merged mining. We expect this to take about five years from now as it will require zk technology to mature and Bitcoin made capable of verifying zk proofs."]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"We will share a technical paper on optimistic sequenced merged mining detailing the technical protocol soon."})}),"\n",(0,n.jsxs)(i.admonition,{title:"BOB Launch PLan",type:"note",children:[(0,n.jsx)(i.p,{children:"BOB launches as an optimistic rollup using the OP Stack which may seem counterintuitive to the above goal of eventually being a ZK rollup. However, we see having full EVM compatibility and tooling a worthwhile trade-off to adopting zkEVM rollups. Moreover, we see promising progress around abstracting the entire EVM execution into higher level zkVM like Risc Zero. Executing entire rollup blocks in a zkVM requires no changes to the EVM while still allowing validity proof production that then can eventually be used for a Bitcoin-verified ZK rollup."}),(0,n.jsx)(i.p,{children:"We further will launch the merged mining option shortly after BOB will go live in the stage 1 option described above."})]}),"\n",(0,n.jsx)(i.h2,{id:"usable-decentralization",children:"Usable Decentralization"}),"\n",(0,n.jsx)(i.p,{children:"Centralization is plaguing development on Bitcoin today. Due to Bitcoin's limited programmability, many applications building on Bitcoin, like the majority of Lightning wallets, are centralized as it allows for a better UX than their dencentralized counterparts."}),"\n",(0,n.jsx)(i.p,{children:"Lack of decentalized appliocations with great UX is a major issue that can be resolved by (1) allowing more epxressive smart contracts and piggy-backing off of the developments made on Ethereum and other L1 chains, and (2) ensuring that the EVM rollups are still secured by Bitcoin."}),"\n",(0,n.jsx)(i.h3,{id:"adoption-through-ux",children:"Adoption Through UX"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Readily available assets for Bitcoin users by native bridged (rollups) to Ethereum"}),"\n",(0,n.jsx)(i.li,{children:"Unified UX of Bitcoin with BOB-enhanced rollups will win out"}),"\n",(0,n.jsx)(i.li,{children:"Mass adoption will need privacy"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"multi-chain-and-multi-rollup-future",children:"Multi-Chain and Multi-Rollup Future"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"BOB is not a single rollup: different rollups can make different trade-offs for various use cases. Examples: very fast block times with limited contracting for payments, large blocks for storing ordinals, ..."}),"\n",(0,n.jsx)(i.li,{children:"BOB is an enhancer of existing sidechains and rollups and can be added to existing EVM chains"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"off-chain-computation-before-on-chain-computation",children:"Off-chain Computation before On-chain Computation"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Even in the EVM, some computations/programs might still be too complex"}),"\n",(0,n.jsx)(i.li,{children:"Complex programs like a BRC20 or Ordinals co-processor should be operated off-chain and its correct execution proven on-chain"}),"\n",(0,n.jsx)(i.li,{children:"Simple programs can be kept on-chain"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"briding-btc-ordinals-and-brc20s",children:"Briding BTC, Ordinals, and BRC20s"}),"\n",(0,n.jsx)(i.p,{children:"We believe that in some cases, bridging BTC, Ordinals, and BRC20s to more chains with higher programmability than Bitcoin is required."}),"\n",(0,n.jsx)(i.h3,{id:"bitcoin-bridges-without-trusted-parties",children:"Bitcoin Bridges without Trusted Parties"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"In theory, if Bitcoin could verify the consensus of another chain, it would be possible to build a bridge that would only rely on the Bitcoin and other chains consensus security plus untrusted block relayers"}),"\n",(0,n.jsx)(i.li,{children:"In practice, verifying another chains consensus is not possible on Bitcoin and therefore we have to find workarounds"}),"\n",(0,n.jsx)(i.li,{children:"Add details about different bridge models"}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{title:"BOB Launch Plan",type:"note",children:(0,n.jsx)(i.p,{children:"BOB will launch with the tBTC bridge as it provides a good trade-off that features a 1:1 peg, a distribution of trust among many parties through their threshold signatures, and partial collateralization."})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(6540);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);