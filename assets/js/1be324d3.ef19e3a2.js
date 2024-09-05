"use strict";(self.webpackChunkBOB_docs=self.webpackChunkBOB_docs||[]).push([[3915],{1287:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=s(4848),i=s(8453);const a={position:6,label:"FAQs"},o="FAQs",r={id:"learn/guides/faq/index",title:"FAQs",description:"MetaMask fees are too high. How can I reduce them?",source:"@site/docs/learn/guides/faq/index.md",sourceDirName:"learn/guides/faq",slug:"/learn/guides/faq/",permalink:"/docs/learn/guides/faq/",draft:!1,unlisted:!1,editUrl:"https://github.com/bob-collective/bob/tree/master/docs/docs/learn/guides/faq/index.md",tags:[],version:"current",frontMatter:{position:6,label:"FAQs"},sidebar:"learnSidebar",previous:{title:"BOB Pay",permalink:"/docs/learn/guides/bob-pay/"},next:{title:"Stack Overview",permalink:"/docs/learn/bob-stack/stack-overview"}},c={},h=[{value:"MetaMask fees are too high. How can I reduce them?",id:"metamask-fees-are-too-high-how-can-i-reduce-them",level:2},{value:"I can&#39;t connect to the BOB network. How can I change the RPC node?",id:"i-cant-connect-to-the-bob-network-how-can-i-change-the-rpc-node",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"faqs",children:"FAQs"})}),"\n",(0,n.jsx)(t.h2,{id:"metamask-fees-are-too-high-how-can-i-reduce-them",children:"MetaMask fees are too high. How can I reduce them?"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes MetaMask can have issues with estimating the correct gas fees. Gas fee settings in MetaMask consist of three parts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Max Base Fee"}),": The base fee amount you will pay for the transaction. This will not be refunded if set too high. If it is set too low, the sequencer might take a long time to include transaction."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Max Priority Fee"}),": The amount of gas you are willing to pay per unit of gas as a priority to get the transaction included before others. This will not be refunded if set too high. If it is set too low, the sequencer might take a long time to include the transaction."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Gas Limit"}),": The maximum amount of gas you are willing to spend on a transaction. If this is set too high, it will be refunded. The transaction will fail if it is set too low, and the fees paid are lost."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can reduce the gas fees by following ",(0,n.jsx)(t.a,{href:"https://support.metamask.io/transactions-and-gas/gas-fees/how-to-customize-gas-settings/",children:"the steps from the MetaMask documentation"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'When making a transaction using MetaMask, click the "Pen" icon next to the estimated fee to edit the gas usage.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 1",src:s(9575).A+"",width:"446",height:"454"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:'In the "Advanced Gas Controls" window, you can adjust the "Gas Limit" and "Max Priority Fee" to reduce the gas fees. You can either set one of the suggested gas options like "Low", "Market", or "Aggressive". If these options still seem expensive, or you can manually set the gas limit and max priority fee via the "Advanced" tab.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 2",src:s(1996).A+"",width:"315",height:"377"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:'In the "Advanced" tab, you can manually set the "Max base fee", "Priority Fee", and "Gas limit" to reduce the gas fees.'}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['For "Max base fee" and "Priority fee", check the current gas prices on the ',(0,n.jsx)(t.a,{href:"https://explorer.gobob.xyz/gas-tracker",children:"BOB explorer"}),". In this example, the base fee is 0.2 Gwei, and the priority fee is 0 Gwei."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 3a",src:s(8632).A+"",width:"1628",height:"360"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Set the "Max base fee" and "Priority fee" to the desired values. In this example, the base fee is 0.2 Gwei, and the priority fee is 0 Gwei.'}),"\n",(0,n.jsxs)(t.li,{children:['Ideally, don\'t adjust the "Gas limit" unless you are sure about the amount of gas required for the transaction. The only reason to adjust the gas limit is if MetaMask underestimates the gas required to send a transaction, which might happen if you interact with an unverified smart contract. ',(0,n.jsx)(t.strong,{children:"If you set the gas limit too low, the transaction will fail with an out-of-gas error, and you will lose the fees paid."})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 3b",src:s(5491).A+"",width:"329",height:"653"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Gas fees change based on the BOB network utilization. If you consistently face issues with MetaMask, you might want to consider switching to other wallets such as Rainbow or Rabby."})}),"\n",(0,n.jsx)(t.h2,{id:"i-cant-connect-to-the-bob-network-how-can-i-change-the-rpc-node",children:"I can't connect to the BOB network. How can I change the RPC node?"}),"\n",(0,n.jsx)(t.p,{children:"If you are unable to connect to the BOB network, you can try changing the RPC node in your wallet. Here is an example how to change the RPC node in MetaMask:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open the wallet settings."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Settings",src:s(3821).A+"",width:"354",height:"443"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:'Go to the "Networks" tab and select the BOB Network to change RPC nodes.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We recommend using the following network settings:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Network Name"}),": BOB Mainnet"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"New RPC URL"}),": ",(0,n.jsx)(t.a,{href:"https://bob-mainnet.public.blastapi.io",children:"https://bob-mainnet.public.blastapi.io"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Chain ID"}),": 60808"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Symbol"}),": ETH"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Block Explorer URL"}),": ",(0,n.jsx)(t.a,{href:"https://explorer.gobob.xyz",children:"https://explorer.gobob.xyz"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Networks",src:s(4918).A+"",width:"494",height:"562"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4918:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/metamask-network-b7563b41d4ac065288b4c646b22e0783.png"},3821:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/metamask-settings-57070f2b776137991df77b63c48c54cc.png"},9575:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/metamask-step1-0107552496cf38fb11a7254389fb16ca.png"},1996:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/metamask-step2-f0264cbe26566b5054db8c8a32d39f81.png"},8632:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/metamask-step3a-bec32699763b2cbc97252c41b64b13e2.png"},5491:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/metamask-step3b-c43f93caaf6dbcd4aed960a1a7e8952a.png"},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var n=s(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);