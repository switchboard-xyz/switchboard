"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3380],{54852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(95907),o=(r(49231),r(54852));const a={title:"Switchboard v3",description:"Presenting Switchboard v3\u200a\u2014\u200aan oracle protocol using <strong>Trusted Execution Environments</strong> (TEEs).",authors:["yy"],tags:[],hide_table_of_contents:!0},i="Introduction to Switchboard v3",s={permalink:"/blog/2023/03/30/Switchboard-v3",source:"@site/blog/2023-03-30-Switchboard-v3.mdx",title:"Switchboard v3",description:"Presenting Switchboard v3\u200a\u2014\u200aan oracle protocol using <strong>Trusted Execution Environments</strong> (TEEs).",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[],readingTime:2.185,hasTruncateMarker:!0,authors:[{name:"YY",title:"Business Development",url:"https://twitter.com/0xYankee",imageURL:"https://pbs.twimg.com/profile_images/1610178005091094528/8eIdMfh6_400x400.jpg",key:"yy"}],frontMatter:{title:"Switchboard v3",description:"Presenting Switchboard v3\u200a\u2014\u200aan oracle protocol using <strong>Trusted Execution Environments</strong> (TEEs).",authors:["yy"],tags:[],hide_table_of_contents:!0},prevItem:{title:"Dialed in with Switchboard: April 06, 2023",permalink:"/blog/2023/04/06/Dialed-in-with-Switchboard"},nextItem:{title:"Switchboard Oracle on Core Mainnet Alpha",permalink:"/blog/2023/02/23/Switchboard-Oracle-on-Core-Mainnet-Alpha"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Presenting Switchboard v3 \u2014 an oracle protocol using ",(0,o.kt)("strong",{parentName:"p"},"Trusted Execution\nEnvironments")," (TEEs)."),(0,o.kt)("h1",{id:"current-oracle-consensus-mechanisms"},"Current oracle consensus mechanisms"),(0,o.kt)("p",null,"Today, most oracle protocols achieve consensus using trusted nodes to aggregate\nresults to publish on-chain. For example, a price feed involves a number of\noracles aggregating a number of results from different sources and publishing\nthe results on-chain."),(0,o.kt)("p",null,"From the example, this carries the assumption of an honest majority of nodes\nanswering correctly. This introduces additional overhead of additional network\nfees (to incentivise oracles) and latency waiting for sources to respond/network\npropagation."),(0,o.kt)("p",null,"Additionally, if an oracle is responsible for securing millions of TVL on each\nupdate, shouldn\u2019t the oracle be at risk of losing millions of dollars on each\nupdate to align on incentives? This form of economic majority introduces\nadditional challenges with capital efficiency."),(0,o.kt)("p",null,"What if there was a way to use verifiable computation and cryptography so that\nyou didn\u2019t need to rely exclusively on an economic majority for every\ntransaction? What if you could rely on just 1 of N nodes to respond and know the\nresult was accurate?"),(0,o.kt)("h1",{id:"how-is-switchboard-v3-different"},"How is Switchboard v3 different?"),(0,o.kt)("p",null,"TRUST BUT VERIFY!"),(0,o.kt)("p",null,"Switchboard v3\u2019s TEEs enable oracles to become verifiable, offering low latency,\nlow cost and most importantly verifiable compute services."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data retrieval was indeed from the configured source;"),(0,o.kt)("li",{parentName:"ul"},"Code execution was executed as intended.")),(0,o.kt)("p",null,"To simply put it, when you tell the oracles to do XYZ, the oracles can execute\nthe jobs and publish the data, all in a verifiable manner."),(0,o.kt)("h1",{id:"current-usage-switchboard-v2"},"Current usage: Switchboard v2"),(0,o.kt)("p",null,"Since inception, Switchboard believes in a developer-first approach where we\u2019ve\nempowered developers with the necessary tools to explore, build and manage data\nfeeds \u2014 such as the Explorer and Publisher."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://switchboard.xyz"},"https://switchboard.xyz")),(0,o.kt)("h1",{id:"future-usage-switchboard-v3"},"Future usage: Switchboard v3"),(0,o.kt)("p",null,"Being able to offer verifiable compute services as part of feed creation allows\nfor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fast & secure data feeds"),(0,o.kt)("li",{parentName:"ul"},"Incorporate advanced calculations & risk metrics into price feeds"),(0,o.kt)("li",{parentName:"ul"},"Customized logic & support for any API"),(0,o.kt)("li",{parentName:"ul"},"and much more!")),(0,o.kt)("p",null,"A literal switchboard."),(0,o.kt)("p",null,"Now, imagine yourself as a developer, in a world where a literal web3\n",(0,o.kt)("em",{parentName:"p"},"switchboard")," is accessible, where you plug and play with data, tools, services,\nall provided by Switchboard Services!"),(0,o.kt)("h1",{id:"wen-v3"},"Wen v3?"),(0,o.kt)("p",null,"Stay plugged in! We\u2019re heads down finalizing on our Switchboard v3 iteration.\nSoon, we will be natively implemented on all of the chains we support and more\nto come!"),(0,o.kt)("p",null,"Looking to discuss TEEs, integrate with Switchboard v3 or partner with us?\nFollow our socials, check out our documentation and fill up our contact form!"),(0,o.kt)("p",null,"Contact us: ",(0,o.kt)("a",{parentName:"p",href:"https://switchboard.xyz/contact"},"https://switchboard.xyz/contact")),(0,o.kt)("p",null,"Twitter:\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},"https://twitter.com/switchboardxyz")),(0,o.kt)("p",null,"Discord: ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/switchboardxyz"},"https://discord.gg/switchboardxyz")),(0,o.kt)("p",null,"Github: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz"},"https://github.com/switchboard-xyz")),(0,o.kt)("p",null,"Docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz"},"https://docs.switchboard.xyz")),(0,o.kt)("p",null,"More links: ",(0,o.kt)("a",{parentName:"p",href:"https://linktr.ee/switchboardxyz"},"https://linktr.ee/switchboardxyz")))}d.isMDXComponent=!0}}]);