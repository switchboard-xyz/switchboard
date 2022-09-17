"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=i(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const o={toc:[]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer account storing an array of oracle public keys.")))))}l.isMDXComponent=!0;const c={},u=void 0,i={unversionedId:"solana/idl/accounts/OracleQueueBuffer",id:"solana/idl/accounts/OracleQueueBuffer",title:"OracleQueueBuffer",description:"Serialized buffer account storing the list of oracle's for a queue.",source:"@site/docs/solana/idl/accounts/OracleQueueBuffer.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/OracleQueueBuffer",permalink:"/sbv2-core/solana/idl/accounts/OracleQueueBuffer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solanaFeeds",previous:{title:"OracleQueueAccountData",permalink:"/sbv2-core/solana/idl/accounts/OracleQueueAccountData"},next:{title:"PermissionAccountData",permalink:"/sbv2-core/solana/idl/accounts/PermissionAccountData"}},s={},p=[],f={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Serialized buffer account storing the list of oracle's for a queue."),(0,a.kt)("b",null,"Size: "),"8 Bytes + (32 Bytes \xd7 Num Oracles)",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: ")," Dependent on number of oracles.",(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 1,000 oracles:\xa0\xa0 0.223666560 SOL",(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 25,000 oracles: 5.568946560 SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l,{mdxType:"QueueBuffer"}))}m.isMDXComponent=!0}}]);