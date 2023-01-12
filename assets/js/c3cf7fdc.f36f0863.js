"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6123],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(r),s=a,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(g,o(o({ref:e},d),{},{components:r})):n.createElement(g,o({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33820:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=r(83117),a=(r(67294),r(3905));const l={toc:[]};function o(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addr"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the job account resource.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"u8[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the job to store on-chain.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata"),(0,a.kt)("td",{parentName:"tr",align:null},"u8[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Metadata of the job to store on-chain.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"HexString"),(0,a.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiration"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp when the feed is no longer needed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hash"),(0,a.kt)("td",{parentName:"tr",align:null},"u8[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Hash of the job account to prevent malicous RPC nodes from providing an incorrect job definition.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"u8[]"),(0,a.kt)("td",{parentName:"tr",align:null},"The serialized ",(0,a.kt)("inlineCode",{parentName:"td"},"OracleJob"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"referenceCount"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of aggregators currently referencing this job.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalSpent"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"The total amount spent on leases associated with this job.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createdAt"),(0,a.kt)("td",{parentName:"tr",align:null},"u64"),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp when the resource was created.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variables"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[][]"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"features"),(0,a.kt)("td",{parentName:"tr",align:null},"bool[]"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"u8[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}o.isMDXComponent=!0;const i={},p=void 0,u={unversionedId:"aptos/idl/resources/Job",id:"aptos/idl/resources/Job",title:"Job",description:"",source:"@site/docs/aptos/idl/resources/Job.mdx",sourceDirName:"aptos/idl/resources",slug:"/aptos/idl/resources/Job",permalink:"/aptos/idl/resources/Job",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"aptos",previous:{title:"EscrowManager",permalink:"/aptos/idl/resources/EscrowManager"},next:{title:"Oracle",permalink:"/aptos/idl/resources/Oracle"}},d={},m=[],c={toc:m};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"Job"}))}s.isMDXComponent=!0}}]);