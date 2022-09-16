"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3184],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),f=c(r),s=n,m=f["".concat(i,".").concat(s)]||f[s]||p[s]||l;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const l={},o=void 0,u={unversionedId:"idl/accounts/BufferRelayerAccountData",id:"idl/accounts/BufferRelayerAccountData",title:"BufferRelayerAccountData",description:"| Field                 | Type                                                             | Description                                                                                                                                                       |",source:"@site/feeds/solana/idl/accounts/BufferRelayerAccountData.md",sourceDirName:"idl/accounts",slug:"/idl/accounts/BufferRelayerAccountData",permalink:"/sbv2-core/feeds/solana/idl/accounts/BufferRelayerAccountData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AggregatorHistoryBuffer",permalink:"/sbv2-core/feeds/solana/idl/accounts/AggregatorHistoryBuffer"},next:{title:"CrankAccountData",permalink:"/sbv2-core/feeds/solana/idl/accounts/CrankAccountData"}},i={},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the buffer account to store on-chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queuePubkey"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"Public key of the ",(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/accounts/OracleQueueAccountData"},"OracleQueueAccountData")," that is currently assigned to fulfill buffer relayer update request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"escrow"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"Token account to reward oracles for completing update request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"authority"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making account changes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobPubkey"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"Public key of the ",(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/accounts/JobAccountData"},"JobAccountData")," that defines how the buffer relayer is updated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobHash"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minUpdateDelaySeconds"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum delay between update request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isLocked"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether buffer relayer config is locked for further changes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currentRound"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/types/BufferRelayerRound"},"BufferRelayerRound")),(0,n.kt)("td",{parentName:"tr",align:null},"The current buffer relayer update round that is yet to be confirmed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"latestConfirmedRound"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/types/BufferRelayerRound"},"BufferRelayerRound")),(0,n.kt)("td",{parentName:"tr",align:null},"The latest confirmed buffer relayer update round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"result"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"The buffer holding the latest confirmed result")))))}p.isMDXComponent=!0}}]);