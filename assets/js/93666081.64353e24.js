"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,k=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:8,title:"Network"},l=void 0,i={unversionedId:"about/network",id:"about/network",title:"Network",description:"- What is a switchboard network?",source:"@site/docs/about/network.mdx",sourceDirName:"about",slug:"/about/network",permalink:"/sbv2-core/about/network",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Network"},sidebar:"gettingStarted",previous:{title:"Introduction",permalink:"/sbv2-core/about/"},next:{title:"FAQ",permalink:"/sbv2-core/faq"}},u={},s=[{value:"Oracle Queue",id:"oracle-queue",level:2},{value:"Oracles",id:"oracles",level:2},{value:"Data Feeds",id:"data-feeds",level:2},{value:"Crank",id:"crank",level:3},{value:"Randomness",id:"randomness",level:2},{value:"Buffer Relayers",id:"buffer-relayers",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is a switchboard network?"),(0,a.kt)("li",{parentName:"ul"},"What switchboard networks currently exist?"),(0,a.kt)("li",{parentName:"ul"},"High level overview of different components"),(0,a.kt)("li",{parentName:"ul"},"whitepaper esque content")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Switchboard is a permission-less network where users are able to create their\nown Switchboard network (Oracle Queue) and run their own infrastructure to\nfulfill update requests on their chain of choice."),(0,a.kt)("p",null,"Switchboard currently supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aptos"),(0,a.kt)("li",{parentName:"ul"},"Near"),(0,a.kt)("li",{parentName:"ul"},"Solana")),(0,a.kt)("h2",{id:"oracle-queue"},"Oracle Queue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"permissions"),(0,a.kt)("li",{parentName:"ul"},"sets rewards"),(0,a.kt)("li",{parentName:"ul"},"links to queue pubkeys for each chain")),(0,a.kt)("h2",{id:"oracles"},"Oracles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"off-chain compute resources"),(0,a.kt)("li",{parentName:"ul"},"must be permitted to join a network")),(0,a.kt)("h2",{id:"data-feeds"},"Data Feeds"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"uses task types to instruct the oracle how to respond"),(0,a.kt)("li",{parentName:"ul"},"link to explorer for data feeds on each chain")),(0,a.kt)("h3",{id:"crank"},"Crank"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"off-chain scheduler")),(0,a.kt)("h2",{id:"randomness"},"Randomness"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"only on solana"),(0,a.kt)("li",{parentName:"ul"},"pseudo-random")),(0,a.kt)("h2",{id:"buffer-relayers"},"Buffer Relayers"))}p.isMDXComponent=!0}}]);