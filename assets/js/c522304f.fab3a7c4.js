"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9022],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(95634),a=(r(49231),r(54852));const o={slug:"/evm/sb-push-prac;e",title:"Sb Push Oracle"},i=void 0,c={unversionedId:"evm/contract/sb-push-oracle",id:"evm/contract/sb-push-oracle",title:"Sb Push Oracle",description:"The Sb Push Oracle is an example of using a single Switchboard Function to fetch",source:"@site/docs/202-evm/10-contract/11-sb-push-oracle.mdx",sourceDirName:"202-evm/10-contract",slug:"/evm/sb-push-prac;e",permalink:"/evm/sb-push-prac;e",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{slug:"/evm/sb-push-prac;e",title:"Sb Push Oracle"},sidebar:"sidebar",previous:{title:"Contract Overview",permalink:"/evm/contract/"},next:{title:"Developer Resources",permalink:"/evm/dev/"}},s={},l=[{value:"Diamond Facets",id:"diamond-facets",level:2},{value:"Admin",id:"admin",level:3},{value:"Receiver",id:"receiver",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Sb Push Oracle is an example of using a single Switchboard Function to fetch\nand push 500+ prices from a centralized exchange on-chain. Like the Switchboard\ncontract, it also implements\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2535.md"},"EIP-2535 Diamond Proxy Pattern"),"\nto support customizing for your needs."),(0,a.kt)("h2",{id:"diamond-facets"},"Diamond Facets"),(0,a.kt)("p",null,"The Sb Push Oracle contract implements the following facets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#admin"},"Admin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#receiver"},"Receiver"))),(0,a.kt)("h3",{id:"admin"},"Admin"),(0,a.kt)("p",null,"The admin module is responsible for program based authoritative actions such as\nprogram upgrades and setting which function is allowed to send new updates to\nthis receiver."),(0,a.kt)("h3",{id:"receiver"},"Receiver"),(0,a.kt)("p",null,"The Push Receiver contract is responsible for the actual storage of the updated\nvalues given some threshold of variance for each price point."))}m.isMDXComponent=!0}}]);