"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12160],{54852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93451:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(229),o=r(65137),a=r(43939),i=r(49231);const s=e=>{const{colorMode:t}=(0,o.I)();let r=(0,a.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),s="inherit";e.lightBg&&"dark"!==t&&(s=e.lightBg),e.darkBg&&"dark"===t&&(s=e.darkBg);let l={};return e.sx&&(l={backgroundColor:s,m:"auto",display:"flex",...l,...e.sx}),i.createElement(n.Z,{component:"img",sx:l,src:r})}},28526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(48041),o=(r(49231),r(54852)),a=r(93451);const i={sidebar_position:10,title:"Solana VRF"},s=void 0,l={unversionedId:"randomness/solana",id:"randomness/solana",title:"Solana VRF",description:"The diagram below depicts the events for how VRF is fulfilled on Solana.",source:"@site/docs/randomness/solana.mdx",sourceDirName:"randomness",slug:"/randomness/solana",permalink:"/randomness/solana",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Solana VRF"},sidebar:"learn",previous:{title:"What is Randomness?",permalink:"/randomness/"}},c={},p=[],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The diagram below depicts the events for how VRF is fulfilled on Solana."),(0,o.kt)("p",null,"The current costs of requesting randomness is 0.002 SOL, which consists of mainly transaction fees (math and compute costs) and oracle incentives. We're actively working to reduce overall costs and designing an example, VrfPool for heavy VRF use cases."),(0,o.kt)(a.Z,{img:"/img/Activity_VRF_Request.png",sx:{display:"flex",width:"90%"},mdxType:"MarkdownImage"}))}m.isMDXComponent=!0}}]);