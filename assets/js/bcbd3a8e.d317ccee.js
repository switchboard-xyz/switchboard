"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70872],{54852:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var r=a(49231);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(a),c=n,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(g,o(o({ref:e},u),{},{components:a})):r.createElement(g,o({ref:e},u))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66635:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(48041),n=(a(49231),a(54852));const l={},o=void 0,i={unversionedId:"solana/idl/types/AggregatorRound",id:"solana/idl/types/AggregatorRound",title:"AggregatorRound",description:"| Field              | Type                                                           | Description                                                         |",source:"@site/docs/solana/idl/types/AggregatorRound.md",sourceDirName:"solana/idl/types",slug:"/solana/idl/types/AggregatorRound",permalink:"/solana/idl/types/AggregatorRound",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"AggregatorResolutionMode",permalink:"/solana/idl/types/AggregatorResolutionMode"},next:{title:"AggregatorSaveResultParams",permalink:"/solana/idl/types/AggregatorSaveResultParams"}},p={},d=[],u={toc:d},s="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numSuccess"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of successful responses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numError"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of error responses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isClosed"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether an update request round has ended")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roundOpenSlot"),(0,n.kt)("td",{parentName:"tr",align:null},"u64"),(0,n.kt)("td",{parentName:"tr",align:null},"Solana slot when the update request round was open")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roundOpenTimestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"i64"),(0,n.kt)("td",{parentName:"tr",align:null},"Unix timestamp when the update request round was open")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"result"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Maintains the current median of all successful round responses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stdDeviation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Standard deviation of the accepted results in the round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minResponse"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Maintains the minimum oracle response this round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maxResponse"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Maintains the maximum oracle response this round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oraclePubkeysData"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Public keys of the oracles fulfilling this round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mediansData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal"),"[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Represents all successful node responses this round. ",(0,n.kt)("inlineCode",{parentName:"td"},"NaN")," if empty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currentPayout"),(0,n.kt)("td",{parentName:"tr",align:null},"i64","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Rewards to provide oracles and round openers on this queue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mediansFulfilled"),(0,n.kt)("td",{parentName:"tr",align:null},"bool","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Keeps track of which responses are fulfilled here")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorsFulfilled"),(0,n.kt)("td",{parentName:"tr",align:null},"bool","[16]"),(0,n.kt)("td",{parentName:"tr",align:null},"Keeps track of which errors are fulfilled here")))))}m.isMDXComponent=!0}}]);