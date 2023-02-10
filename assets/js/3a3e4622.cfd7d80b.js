"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88274],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=u(n),s=r,k=m["".concat(i,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97478:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const l={hide_table_of_contents:!0},o=void 0,c={unversionedId:"near/idl/accounts/CrankAccountData",id:"near/idl/accounts/CrankAccountData",title:"CrankAccountData",description:"| Field              | Type                                       | Description                                                  |",source:"@site/docs/near/idl/accounts/CrankAccountData.md",sourceDirName:"near/idl/accounts",slug:"/near/idl/accounts/CrankAccountData",permalink:"/near/idl/accounts/CrankAccountData",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"near",previous:{title:"AggregatorAccountData",permalink:"/near/idl/accounts/AggregatorAccountData"},next:{title:"EscrowAccountData",permalink:"/near/idl/accounts/EscrowAccountData"}},i={},u=[],p={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the crank account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the crank to store on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata of the crank to store on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the oracle queue that owns the crank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_rows"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of aggregators allowed to be added to a crank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jitter_modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"Pseudorandom value added to next aggregator update time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<",(0,r.kt)("a",{parentName:"td",href:"/near/idl/types/CrankRow"},"CrankRow"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregators currently on the crank.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creation_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp when the crank was created on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","ebuf"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"features"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);