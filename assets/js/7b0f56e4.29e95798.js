"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"aptos/idl/types/SwitchboardPermission",id:"aptos/idl/types/SwitchboardPermission",title:"SwitchboardPermission",description:"| Name                   | Value | Description                                                                                                                                                                               |",source:"@site/docs/aptos/idl/types/SwitchboardPermission.md",sourceDirName:"aptos/idl/types",slug:"/aptos/idl/types/SwitchboardPermission",permalink:"/aptos/idl/types/SwitchboardPermission",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"aptos",previous:{title:"SwitchboardDecimal",permalink:"/aptos/idl/types/SwitchboardDecimal"},next:{title:"Errors",permalink:"/aptos/idl/errors"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PermitOracleHeartbeat"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"queue ",(0,a.kt)("inlineCode",{parentName:"td"},"authority")," has permitted an Oracle Account to heartbeat on it's queue and receive update requests. Oracles ",(0,a.kt)("em",{parentName:"td"},"always")," need permissions to join a queue.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PermitOracleQueueUsage"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"queue ",(0,a.kt)("inlineCode",{parentName:"td"},"authority")," has permitted an Aggregator Account to request updates from it's oracles or join an existing crank. ",(0,a.kt)("strong",{parentName:"td"},"Note:")," Not required if a queue has ",(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedFeedsEnabled"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PermitVrfRequests"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"queue ",(0,a.kt)("inlineCode",{parentName:"td"},"authority")," has permitted a VRF Account to request randomness from it's oracles. ",(0,a.kt)("strong",{parentName:"td"},"Note:")," Not required if a queue has ",(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedVrfEnabled"),".")))))}c.isMDXComponent=!0}}]);