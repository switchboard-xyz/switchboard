"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8555],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(95634),a=(n(49231),n(54852));const i={slug:".",title:"Contract Overview"},o=void 0,c={unversionedId:"evm/contract/overview",id:"evm/contract/overview",title:"Contract Overview",description:"The Switchboard EVM contract implements",source:"@site/docs/202-evm/10-contract/00-overview.mdx",sourceDirName:"202-evm/10-contract",slug:"/evm/contract/",permalink:"/evm/contract/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:".",title:"Contract Overview"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/evm/"},next:{title:"Sb Push Oracle",permalink:"/evm/sb-push-prac;e"}},l={},s=[{value:"Diamond Facets",id:"diamond-facets",level:2},{value:"Admin",id:"admin",level:3},{value:"Attestation Queue",id:"attestation-queue",level:3},{value:"Permission",id:"permission",level:3},{value:"Enclave",id:"enclave",level:3},{value:"Function Call",id:"function-call",level:3},{value:"Sb Function",id:"sb-function",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Switchboard EVM contract implements\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2535.md"},"EIP-2535 Diamond Proxy Pattern"),"\nto facilitate a modular contract design allowing each module to be updated and\nmaintained individually. This allows Switchboard's EVM contract to be used\nacross blockchains with different engineering constraints. Each module is a\nfacet that can be added to the contract to give it additional functionality."),(0,a.kt)("p",null,"The Switchboard EVM contract supports an on-chain attestation service where\nuser's can write their own custom functions then have it be executed by an\noff-chain oracle. When the function result is routed on-chain, the generated\nMRENCLAVE measurement is verified on-chain; if the value is allowed, the user's\ncustom contract call is executed, if the value is not allowed, the transaction\nwill revert."),(0,a.kt)("h2",{id:"diamond-facets"},"Diamond Facets"),(0,a.kt)("p",null,"The Switchboard EVM contract supports the following facets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#admin"},"Admin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#attestation-queue"},"Attestation Queue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#permission"},"Permission")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enclave"},"Enclave")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#function-call"},"Function Call")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sb-function"},"Sb Function"))),(0,a.kt)("h3",{id:"admin"},"Admin"),(0,a.kt)("p",null,"Manages the admin of the\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2771"},"EIP-2771: Meta Transactions")," interface\nto support third-parties paying for gas fees."),(0,a.kt)("h3",{id:"attestation-queue"},"Attestation Queue"),(0,a.kt)("h3",{id:"permission"},"Permission"),(0,a.kt)("h3",{id:"enclave"},"Enclave"),(0,a.kt)("h3",{id:"function-call"},"Function Call"),(0,a.kt)("h3",{id:"sb-function"},"Sb Function"))}m.isMDXComponent=!0}}]);