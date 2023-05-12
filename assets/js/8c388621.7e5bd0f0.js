"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1504],{54852:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(95907),a=(r(49231),r(54852));const i={title:"feed-parser",slug:"/sui/sdk/move/feed-parser",hide_title:!0,sidebar_class_name:"sidebar__move",sidebar_position:1},s=void 0,o={unversionedId:"sui/sdk/examples/feed-parser",id:"sui/sdk/examples/feed-parser",title:"feed-parser",description:"Switchboard Logo",source:"@site/docs/sui/sdk/examples/feed-parser.mdx",sourceDirName:"sui/sdk/examples",slug:"/sui/sdk/move/feed-parser",permalink:"/sui/sdk/move/feed-parser",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"feed-parser",slug:"/sui/sdk/move/feed-parser",hide_title:!0,sidebar_class_name:"sidebar__move",sidebar_position:1},sidebar:"suiSidebar",previous:{title:"@switchboard-xyz/sui.js",permalink:"/sui/sdk/javascript/"},next:{title:"feed-parser (testnet)",permalink:"/sui/sdk/move/feed-parser-testnet"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Usage",id:"usage-1",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png",alt:"Switchboard Logo"})),(0,a.kt)("h1",{id:"sui-mainnet-feed-parser"},"Sui Mainnet feed-parser"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An example contract reading the price of a Switchboard V2 data feed on-chain."))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Build the example program"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sui move compile\n\n# skip dependency verification because we're only pulling in a binding (not the full source)\nsui client publish --gas-budget 100000000\n")),(0,a.kt)("h2",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);