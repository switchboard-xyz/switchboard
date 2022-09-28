"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[985],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(b,i(i({ref:e},u),{},{components:n})):r.createElement(b,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81293:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"solana/idl/accounts/PermissionAccountData",id:"solana/idl/accounts/PermissionAccountData",title:"PermissionAccountData",description:"Size 0.003480000 SOL",source:"@site/docs/solana/idl/accounts/PermissionAccountData.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/PermissionAccountData",permalink:"/solana/idl/accounts/PermissionAccountData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"OracleQueueAccountData",permalink:"/solana/idl/accounts/OracleQueueAccountData"},next:{title:"SbState",permalink:"/solana/idl/accounts/SbState"}},c={},s=[],u={toc:s};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("b",null,"Size: "),"372 Bytes",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: "),"0.003480000 SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The authority that is allowed to set permissions for this account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"permissions"),(0,a.kt)("td",{parentName:"tr",align:null},"u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardPermission"},"SwitchboardPermission")," enumeration assigned by the ",(0,a.kt)("inlineCode",{parentName:"td"},"granter")," to the ",(0,a.kt)("inlineCode",{parentName:"td"},"grantee"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"granter"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"Public key of account that is granting permissions to use its resources.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"grantee"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"Public key of account that is being assigned permissions to use a granters resources.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiration"),(0,a.kt)("td",{parentName:"tr",align:null},"i64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp when the permissions expire.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[256]"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}p.isMDXComponent=!0}}]);