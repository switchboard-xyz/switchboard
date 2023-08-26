"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6682],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(95634),o=(r(49231),r(54852));const a={slug:"/the-oracle-problem",title:"The Oracle Problem",hide_table_of_contents:!0},i=void 0,l={unversionedId:"learn/the-oracle-problem",id:"learn/the-oracle-problem",title:"The Oracle Problem",description:"The oracle problem arises due to the inability of blockchains to interact",source:"@site/docs/101-learn/00-the-oracle-problem.mdx",sourceDirName:"101-learn",slug:"/the-oracle-problem",permalink:"/the-oracle-problem",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/the-oracle-problem",title:"The Oracle Problem",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"\ud83c\udf10 The Network",permalink:"/network"},next:{title:"Program Architecture",permalink:"/architecture"}},s={},c=[{value:"Our Solution",id:"our-solution",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The oracle problem arises due to the inability of blockchains to interact\ndirectly with external systems. Blockchains are isolated networks that only rely\non data stored in their ledger for consensus. The deterministic nature of smart\ncontracts is a result of the narrow focus of blockchain consensus and their\nability to execute exactly as written with a higher degree of certainty than\ntraditional systems. Incorrect reporting of external data can lead to\ndevastating outcomes for on-chain applications dependent on these data feeds."),(0,o.kt)("p",null,"Below is a high-level overview of the evolution of oracles:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Trusted Signer")," ","[Single Party Trust]"," - The first iteration of oracles used\na trusted signer to update a price account on-chain. This model allows a\nsingle keypair leak to pwn the entire system and should never be considered\nwith better options available.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Highly vulnerable"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Round-Based Consensus")," ","[Multi-Party Trust]"," - Multiple oracles are polled\nand the final result is determined from the median of the responses.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Oracles have no incentives to be honest"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Stake-Weighted Consensus")," ","[Incentive Based]"," - Stake is required to\nparticipate and oracles lose their stake for acting maliciously. Almost\nthere - this system will naturally imbalance as the opportunity cost of\nacting maliciously outweighs the slashing penalty.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"High infrastructure cost"),(0,o.kt)("li",{parentName:"ul"},"Misalignment of incentives when TVL attack exceeds slashing penalty")))),(0,o.kt)("h3",{id:"our-solution"},"Our Solution"),(0,o.kt)("p",null,"Switchboard addresses the oracle problem by combining:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Verifiable Execution")," - Trusted Execution Environments (TEEs) are\nleveraged to enforce that off-chain oracles are operated within a secure\nenclave. TEEs provide cryptographic proof that the code being executed wasn't\ntampered with and provides a way to enforce a set of protocol rules. Code is\nlaw."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Economic Incentives")," - Oracles must have a minimum stake to join the\nnetwork and get rewarded for honest reporting. Oracles who fail to respond or\nrespond incorrectly will be slashed and lose part of their stake to\nincentivize honest behavior."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Independent Queues")," - Oracles join a set queue which defines the security\nsettings of its compute network. The queue authority could be controlled by a\nDAO creating an autonomous compute network governed by its participants. The\nqueue controls the reward and slashing behavior to entice new oracles to join\nthe network during congestion."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Permissionless / Customization")," - Developers can worry about coding and\nleave the execution to the Switchboard oracle network. Write the code and let\nSwitchboard do the rest.")))}d.isMDXComponent=!0}}]);