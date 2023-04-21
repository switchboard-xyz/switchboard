"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68842],{54852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62350:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(79741),o=r(27567),a=r(97530),i=r(49231);const l=e=>{const{colorMode:t}=(0,o.I)();let r=(0,a.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),l="inherit";e.lightBg&&"dark"!==t&&(l=e.lightBg),e.darkBg&&"dark"===t&&(l=e.darkBg);let s={};return e.sx&&(s={backgroundColor:l,m:"auto",display:"flex",...s,...e.sx}),i.createElement(n.Z,{component:"img",sx:s,src:r})}},8631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(48041),o=(r(49231),r(54852)),a=r(62350),i=r(3411),l=r(86583);const s={sidebar_position:1,title:"Overview",slug:"/publisher"},c=void 0,p={unversionedId:"publisher/overview",id:"publisher/overview",title:"Overview",description:"\x3c!-- TODO:",source:"@site/docs/publisher/overview.mdx",sourceDirName:"publisher",slug:"/publisher",permalink:"/publisher",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"/publisher"},sidebar:"publisher",next:{title:"Connect Wallet",permalink:"/publisher/connect-wallet"}},u={},d=[{value:"Directory",id:"directory",level:2}],f={toc:d},b="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{variant:"h4",mdxType:"Typography"},(0,o.kt)(l.Z,{to:"https://app.switchboard.xyz/",mdxType:"Link"},"# app.switchboard.xyz")),(0,o.kt)("p",null,"The publisher site is a decentralized marketplace that allows anyone to build a\ndata feed and deploy it on-chain. The site includes a directory of pre-defined\nfeeds from popular sources such as Coinbase or Binance, as well as on-chain\nsources like Orca and OpenBook. The publisher site streamlines the on-chain\nworkflow and allows a user to configure a data feed from a convenient UI."),(0,o.kt)("p",null,"The publisher allows you to build feeds on"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aptos ","[Mainnet / Testnet]"),(0,o.kt)("li",{parentName:"ul"},"CoreDAO ","[Mainnet / Testnet]"),(0,o.kt)("li",{parentName:"ul"},"NEAR ","[Mainnet / Testnet]"),(0,o.kt)("li",{parentName:"ul"},"Solana ","[Mainnet-Beta / Devnet]"),(0,o.kt)("li",{parentName:"ul"},"Starknet ","[goerli-alpha]")),(0,o.kt)("h2",{id:"directory"},"Directory"),(0,o.kt)("p",null,"The publisher site includes some pre-defined sources to help developers publish\ndata feeds. Pre-defined sources can be added to your basket by selecting them in\nthe directory, from there you can toggle individual data sources to meet your\non-chain needs."),(0,o.kt)(a.Z,{img:"/img/publisher/Landing_Page.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"}))}m.isMDXComponent=!0}}]);