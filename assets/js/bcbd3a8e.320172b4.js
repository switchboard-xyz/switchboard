"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[872],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=d(r),c=n,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return r?a.createElement(g,o(o({ref:e},u),{},{components:r})):a.createElement(g,o({ref:e},u))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46550:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(83117),n=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"solana/idl/types/AggregatorRound",id:"solana/idl/types/AggregatorRound",title:"AggregatorRound",description:"| Field | Type | Description |",source:"@site/docs/solana/idl/types/AggregatorRound.md",sourceDirName:"solana/idl/types",slug:"/solana/idl/types/AggregatorRound",permalink:"/solana/idl/types/AggregatorRound",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"AggregatorHistoryRow",permalink:"/solana/idl/types/AggregatorHistoryRow"},next:{title:"BorshDecimal",permalink:"/solana/idl/types/BorshDecimal"}},p={},d=[],u={toc:d};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numSuccess"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of successful responses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numError"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of error responses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isClosed"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether an update request round has ended")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roundOpenSlot"),(0,n.kt)("td",{parentName:"tr",align:null},"u64"),(0,n.kt)("td",{parentName:"tr",align:null},"Solana slot when the update request round was open")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roundOpenTimestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"i64"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp when the update request round was open")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"result"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Maintains the current median of all successful round responses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stdDeviation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Standard deviation of the accepted results in the round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minResponse"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Maintains the minimum oracle response this round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maxResponse"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Maintains the maximum oracle response this round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oraclePubkeysData"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Public keys of the oracles fulfilling this round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mediansData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal"),"[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Represents all successful node responses this round. ",(0,n.kt)("inlineCode",{parentName:"td"},"NaN")," if empty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currentPayout"),(0,n.kt)("td",{parentName:"tr",align:null},"i64","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Rewards to provide oracles and round openers on this queue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mediansFulfilled"),(0,n.kt)("td",{parentName:"tr",align:null},"bool","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Keeps track of which responses are fulfilled here")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorsFulfilled"),(0,n.kt)("td",{parentName:"tr",align:null},"bool","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Keeps track of which errors are fulfilled here")))))}s.isMDXComponent=!0}}]);