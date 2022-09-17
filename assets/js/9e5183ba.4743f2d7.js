"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8384],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),s=c(a),f=n,m=s["".concat(i,".").concat(f)]||s[f]||p[f]||l;return a?r.createElement(m,o(o({ref:e},d),{},{components:a})):r.createElement(m,o({ref:e},d))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:n,o[1]=u;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7167:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(3117),n=(a(7294),a(3905));const l={},o=void 0,u={unversionedId:"solana/idl/accounts/BufferRelayerAccountData",id:"solana/idl/accounts/BufferRelayerAccountData",title:"BufferRelayerAccountData",description:"| Field                 | Type                                                             | Description                                                                                                                                                       |",source:"@site/docs/solana/idl/accounts/BufferRelayerAccountData.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/BufferRelayerAccountData",permalink:"/sbv2-core/solana/idl/accounts/BufferRelayerAccountData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solanaFeeds",previous:{title:"AggregatorHistoryBuffer",permalink:"/sbv2-core/solana/idl/accounts/AggregatorHistoryBuffer"},next:{title:"CrankAccountData",permalink:"/sbv2-core/solana/idl/accounts/CrankAccountData"}},i={},c=[],d={toc:c};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the buffer account to store on-chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queuePubkey"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"Public key of the ",(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/accounts/OracleQueueAccountData"},"OracleQueueAccountData")," that is currently assigned to fulfill buffer relayer update request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"escrow"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"Token account to reward oracles for completing update request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"authority"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making account changes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobPubkey"),(0,n.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,n.kt)("td",{parentName:"tr",align:null},"Public key of the ",(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/accounts/JobAccountData"},"JobAccountData")," that defines how the buffer relayer is updated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobHash"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minUpdateDelaySeconds"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum delay between update request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isLocked"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether buffer relayer config is locked for further changes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currentRound"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/types/BufferRelayerRound"},"BufferRelayerRound")),(0,n.kt)("td",{parentName:"tr",align:null},"The current buffer relayer update round that is yet to be confirmed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"latestConfirmedRound"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/feeds/solana/idl/types/BufferRelayerRound"},"BufferRelayerRound")),(0,n.kt)("td",{parentName:"tr",align:null},"The latest confirmed buffer relayer update round")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"result"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"The buffer holding the latest confirmed result")))))}p.isMDXComponent=!0}}]);