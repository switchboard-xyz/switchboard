"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4876,3572],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),g=c(r),m=a,d=g["".concat(p,".").concat(m)]||g[m]||s[m]||o;return r?n.createElement(d,l(l({ref:e},u),{},{components:r})):n.createElement(d,l({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6480:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var n=r(7462),a=(r(7294),r(3905));const o={toc:[]};function l(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/idl/types/AggregatorHistoryRow"},"AggregatorHistoryRow"),"[]"),(0,a.kt)("td",{parentName:"tr",align:null},"An array of accepted on-chain values with a timestamp")))))}l.isMDXComponent=!0;var i=r(9309);const p={},c=void 0,u={unversionedId:"accounts/AggregatorHistoryBuffer",id:"accounts/AggregatorHistoryBuffer",title:"AggregatorHistoryBuffer",description:"Serialized buffer account storing a given number of accepted on-chain results for a single aggregator",source:"@site/idl/accounts/AggregatorHistoryBuffer.md",sourceDirName:"accounts",slug:"/accounts/AggregatorHistoryBuffer",permalink:"/idl/accounts/AggregatorHistoryBuffer",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AggregatorAccountData",permalink:"/idl/accounts/AggregatorAccountData"},next:{title:"BufferRelayerAccountData",permalink:"/idl/accounts/BufferRelayerAccountData"}},s={},g=[],m={toc:g};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Serialized buffer account storing a given number of accepted on-chain results for a single aggregator"),(0,a.kt)("b",null,"Size: "),"12 Bytes + (28 Bytes \xd7 Num Samples)",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: ")," Dependent on number of samples to store.",(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 10,000 samples:\xa0\xa0 1.949774400 SOL",(0,a.kt)("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 200,000 samples: 38.976974400 SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l,{mdxType:"AggregatorHistoryBuffer"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AggregatorHistoryRow")),(0,a.kt)(i.default,{mdxType:"AggregatorHistoryRow"}))}d.isMDXComponent=!0},9309:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,i={unversionedId:"types/AggregatorHistoryRow",id:"types/AggregatorHistoryRow",title:"AggregatorHistoryRow",description:"| Field     | Type                                                | Description                  |",source:"@site/idl/types/AggregatorHistoryRow.md",sourceDirName:"types",slug:"/types/AggregatorHistoryRow",permalink:"/idl/types/AggregatorHistoryRow",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AccountMetaZC",permalink:"/idl/types/AccountMetaZC"},next:{title:"AggregatorRound",permalink:"/idl/types/AggregatorRound"}},p={},c=[],u={toc:c};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"i64"),(0,a.kt)("td",{parentName:"tr",align:null},"The timestamp of the sample.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,a.kt)("td",{parentName:"tr",align:null},"The value of the sample.")))))}s.isMDXComponent=!0}}]);