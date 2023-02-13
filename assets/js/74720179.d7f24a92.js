"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},i),{},{components:n})):r.createElement(k,o({ref:t},i))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>a,Au:()=>s});var r=n(67294),l=n(39960);const a=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),l=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(l,null)))},o=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),a=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(l.Z,{to:t.typeLink},n)},o=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(a,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(o,null))},s=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(o,{fields:t.fields}))}},87110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(83117),l=(n(67294),n(3905)),a=n(95538);const o={title:"SplTokenParseTask",hide_title:!0},s=void 0,p={unversionedId:"protos/SplTokenParseTask",id:"protos/SplTokenParseTask",title:"SplTokenParseTask",description:"SplTokenParseTask",source:"@site/docs/protos/SplTokenParseTask.mdx",sourceDirName:"protos",slug:"/protos/SplTokenParseTask",permalink:"/protos/SplTokenParseTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SplTokenParseTask",hide_title:!0},sidebar:"publisher",previous:{title:"SplStakePoolTask",permalink:"/protos/SplStakePoolTask"},next:{title:"SubtractTask",permalink:"/protos/SubtractTask"}},c={},i=[{value:"<code>SplTokenParseTask</code>",id:"spltokenparsetask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SplTokenParseTask</code>",id:"spltokenparsetask-1",level:3}],u={toc:i};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"spltokenparsetask"},(0,l.kt)("inlineCode",{parentName:"h2"},"SplTokenParseTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," SplTokenParseTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," SplTokenParseTask")),(0,l.kt)("p",null,"Fetch the JSON representation of an SPL token mint."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"spltokenparsetask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"SplTokenParseTask")),(0,l.kt)(a.Au,{key:0,message:{name:"SplTokenParseTask",longName:"SplTokenParseTask",fullName:".SplTokenParseTask",description:"Fetch the JSON representation of an SPL token mint.",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"token_account_address",description:"The publicKey of a token account to fetch the mintInfo for.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"AccountAddress",defaultValue:""},{name:"mint_address",description:"The publicKey of the token mint address.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"AccountAddress",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);