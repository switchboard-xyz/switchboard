"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87075],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var n=r(48041),a=(r(49231),r(54852));const o={toc:[]},i="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(i,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oracleAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of oracle that is heartbeating on-chain to signal readiness.")))))}l.isMDXComponent=!0;const p={},c=void 0,s={unversionedId:"aptos/idl/scripts/OracleHeartbeat",id:"aptos/idl/scripts/OracleHeartbeat",title:"OracleHeartbeat",description:"parameters for script $::run",source:"@site/docs/aptos/idl/scripts/OracleHeartbeat.mdx",sourceDirName:"aptos/idl/scripts",slug:"/aptos/idl/scripts/OracleHeartbeat",permalink:"/aptos/idl/scripts/OracleHeartbeat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"aptos",previous:{title:"LeaseWithdraw",permalink:"/aptos/idl/scripts/LeaseWithdraw"},next:{title:"OracleInit",permalink:"/aptos/idl/scripts/OracleInit"}},u={},d=[],m={toc:d},f="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"parameters for script ",(0,a.kt)("inlineCode",{parentName:"p"},"${SWITCHBOARD_PROGRAM_ID}::oracle_heartbeat_action::run")),(0,a.kt)(l,{mdxType:"OracleHeartbeatParams"}))}b.isMDXComponent=!0}}]);