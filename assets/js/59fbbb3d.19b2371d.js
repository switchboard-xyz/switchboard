"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2064],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=o(t),k=s,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,r(r({ref:e},l),{},{components:t})):n.createElement(h,r({ref:e},l))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var o=2;o<m;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},2340:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=t(3117),s=(t(7294),t(3905));const m={sidebar_position:1,slug:".",title:"Background"},r="Background",p={unversionedId:"oracle/background",id:"oracle/background",title:"Background",description:"A Switchboard oracle is a Node.js container that sits between the Solana",source:"@site/docs/oracle/background.mdx",sourceDirName:"oracle",slug:"/oracle/",permalink:"/sbv2-core/oracle/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Background"},sidebar:"oracle",next:{title:"Configuration",permalink:"/sbv2-core/oracle/config"}},i={},o=[{value:"Staking",id:"staking",level:2},{value:"Heartbeat",id:"heartbeat",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Cost &amp; Reward Estimations",id:"cost--reward-estimations",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2}],l=(c="OracleMetrics",function(a){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)});var c;const N={toc:o};function k(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"background"},"Background"),(0,s.kt)("p",null,"A Switchboard oracle is a Node.js container that sits between the Solana\nblockchain and the internet and waits for update requests from an oracle queue.\nAn oracle queue assigns updates to oracles in a round robin fashion."),(0,s.kt)("p",null,"An oracle account is a program derived address (PDA) between the oracle queue\nit\u2019s being initialized for, as well as the oracles staking wallet. Before an\noracle is granted permissions to use a queue, it must transfer the minimum stake\namount, set by the queue, to its staking wallet."),(0,s.kt)("h2",{id:"staking"},"Staking"),(0,s.kt)("p",null,"An oracle is required to transfer ",(0,s.kt)("inlineCode",{parentName:"p"},"queue.minStake")," tokens to its staking wallet,\n",(0,s.kt)("inlineCode",{parentName:"p"},"oracle.tokenAccount"),", before being granted queue permissions. The minStake acts\nas an insurance policy to entice honest oracle behavior."),(0,s.kt)("h2",{id:"heartbeat"},"Heartbeat"),(0,s.kt)("p",null,"An oracle is required to heartbeat on-chain in order to join the queue and be\nassigned update request. An oracle must heartbeat before the queue's specified\n",(0,s.kt)("inlineCode",{parentName:"p"},"queue.oracleTimeout")," or it will be removed from the queue by the queue's\ngarbage collector."),(0,s.kt)("h2",{id:"metrics"},"Metrics"),(0,s.kt)("p",null,"The oracle also tracks its performance, ",(0,s.kt)("inlineCode",{parentName:"p"},"oracle.metrics"),"."),(0,s.kt)(l,{mdxType:"OracleMetrics"}),(0,s.kt)("h2",{id:"cost--reward-estimations"},"Cost & Reward Estimations"),(0,s.kt)("p",null,"An oracle is required to submit an SaveResult transaction each time it updates a\nfeed, which incurs a cost of 5000 lamports. This fee is set by the Solana\nnetwork and is subject to change."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"q"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"w"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d"))),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T_{perUpdate}=T_{queueReward} - T_{transactionCost}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"q"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"R"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"an"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"os"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))),(0,s.kt)("p",null,"where,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"T")," is the raw token amount in base units (",(0,s.kt)("em",{parentName:"li"},"Ex: lamports, tGas, or satoshis"),")")),(0,s.kt)("p",null,"To estimate an oracles cost basis, you will need to know a queue's capacity\n(Oracles, Feeds, VRFs) and the average number of update request an oracle is\nassigned over a given time period."),(0,s.kt)("p",null,"You will also need to factor in the oracle's heartbeat cost, which is 5000\nlamports each. The number of heartbeats is dependent on its\n",(0,s.kt)("inlineCode",{parentName:"p"},"queue.oracleTimeout"),", which determines how often an oracle is required to\nheartbeat."),(0,s.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,s.kt)("p",null,"A Switchboard oracle should be hosted in a highly available environment with\nsome level of redundancy and fail over to prevent outages, although oracles are\nnot deducted for being offline."),(0,s.kt)("p",null,"At the very minimum a node should have:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"4gb RAM"),(0,s.kt)("li",{parentName:"ul"},"3.0 Ghz CPU"),(0,s.kt)("li",{parentName:"ul"},"100+ Mbps connection")))}k.isMDXComponent=!0}}]);