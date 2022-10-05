"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(83117),n=(r(67294),r(3905));const o={sidebar_position:1,id:"introduction",slug:"."},i="Introduction",l={unversionedId:"about/introduction",id:"about/introduction",title:"Introduction",description:"Welcome to Switchboard's Documentation",source:"@site/docs/about/introduction.mdx",sourceDirName:"about",slug:"/about/",permalink:"/about/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"introduction",slug:"."},sidebar:"gettingStarted",next:{title:"Network",permalink:"/about/network"}},c={},s=[{value:"Welcome to Switchboard&#39;s Documentation",id:"welcome-to-switchboards-documentation",level:2},{value:"Origin of Switchboard",id:"origin-of-switchboard",level:2},{value:"What is an Oracle?",id:"what-is-an-oracle",level:2},{value:"What makes Switchboard different?",id:"what-makes-switchboard-different",level:2},{value:"Use Cases",id:"use-cases",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("h2",{id:"welcome-to-switchboards-documentation"},"Welcome to Switchboard's Documentation"),(0,n.kt)("p",null,"Switchboard is a multichain, permissionless oracle protocol for general purpose data feeds",(0,n.kt)("br",{parentName:"p"}),"\n","and verifiable random function (VRF)."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The documentation includes information and guides on the following:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"about/network"},"Switchboard architecture on the different chains")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"about/faq"},"Frequently Asked Questions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"feeds/about"},"All about Data Feeds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"randomness/about"},"All about VRF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"operator/about"},"Oracle operator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"dev"},"Developer resources")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"origin-of-switchboard"},"Origin of Switchboard"),(0,n.kt)("p",null,"Switchboard gets its name from the early days of phone networks, where operators would shuffle",(0,n.kt)("br",{parentName:"p"}),"\n","telephone lines around a 'switchboard' to complete a circuit and forward a dialer\u2019s call to the",(0,n.kt)("br",{parentName:"p"}),"\n","next hop in the circuit."),(0,n.kt)("p",null,"Similarly, Switchboard, our oracle network is responsible for how external data gets updated",(0,n.kt)("br",{parentName:"p"}),"\n","and routed through a blockchain until it reaches its appropriate destination."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-is-an-oracle"},"What is an Oracle?"),(0,n.kt)("p",null,"Blockchains do not have the capability of directly relaying information from off-chain to on-chain.",(0,n.kt)("br",{parentName:"p"}),"\n","Hence, enter oracles, a gateway between blockchain and real world data."),(0,n.kt)("p",null,"An oracle is not the data source, it is an infrastructure layer for querying, verifying",(0,n.kt)("br",{parentName:"p"}),"\n","and authenticating external data sources; which is relayed to the blockchain for a smart contract",(0,n.kt)("br",{parentName:"p"}),"\n","to read and carry out necessary course of action for its intended product."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-makes-switchboard-different"},"What makes Switchboard different?"),(0,n.kt)("p",null,"Switchboard is permissionless. From a developer's perspective, you customize, build and manage",(0,n.kt)("br",{parentName:"p"}),"\n","your own data feeds where all of which can be done from Switchboard's ",(0,n.kt)("a",{parentName:"p",href:"https://app.switchboard.xyz"},"Publisher"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"No friction, no contact, build permissionlessly.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"With the power of off-chain data being brought on-chain, Switchboard has plugged into mulitple verticals",(0,n.kt)("br",{parentName:"p"}),"\n","to build blockchain based applications today, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Determining the current price of an asset for collateralized lending"),(0,n.kt)("li",{parentName:"ul"},"Determining the state of a tracking number to auto settle funds on arrival"),(0,n.kt)("li",{parentName:"ul"},"Determining the current standings of the MLB for fantasy sports rankings")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Find out more use cases and integrations ",(0,n.kt)("a",{parentName:"em",href:"docs/faq#use-cases-and-integrations"},"here"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We are only scraping the surface of blockchain technology and we're excited to see the future use cases",(0,n.kt)("br",{parentName:"p"}),"\n","plugged in by Switchboard!")))}p.isMDXComponent=!0}}]);