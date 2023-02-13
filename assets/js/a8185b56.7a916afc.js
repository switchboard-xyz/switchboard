"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>a,Au:()=>i});var r=n(67294),o=n(39960);const a=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),o=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(o,null)))},l=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),a=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(o.Z,{to:t.typeLink},n)},l=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(a,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(l,null))},i=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(l,{fields:t.fields}))}},53915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(83117),o=(n(67294),n(3905)),a=n(95538);const l={title:"DefiKingdomsTask",hide_title:!0},i=void 0,s={unversionedId:"protos/DefiKingdomsTask",id:"protos/DefiKingdomsTask",title:"DefiKingdomsTask",description:"DefiKingdomsTask",source:"@site/docs/protos/DefiKingdomsTask.mdx",sourceDirName:"protos",slug:"/protos/DefiKingdomsTask",permalink:"/protos/DefiKingdomsTask",draft:!1,tags:[],version:"current",frontMatter:{title:"DefiKingdomsTask",hide_title:!0},sidebar:"publisher",previous:{title:"CronParseTask",permalink:"/protos/CronParseTask"},next:{title:"DivideTask",permalink:"/protos/DivideTask"}},m={},p=[{value:"<code>DefiKingdomsTask</code>",id:"defikingdomstask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>DefiKingdomsTask</code>",id:"defikingdomstask-1",level:3},{value:"<code>DefiKingdomsTask.Token</code>",id:"defikingdomstasktoken",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"defikingdomstask"},(0,o.kt)("inlineCode",{parentName:"h2"},"DefiKingdomsTask")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"path")," DefiKingdomsTask")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"package")," DefiKingdomsTask")),(0,o.kt)("p",null,"Fetch the swap price from DefiKingdoms."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"defikingdomstask-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"DefiKingdomsTask")),(0,o.kt)(a.Au,{key:0,message:{name:"DefiKingdomsTask",longName:"DefiKingdomsTask",fullName:".DefiKingdomsTask",description:"Fetch the swap price from DefiKingdoms.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"provider",description:"The RPC provider to use for the swap.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"in_token",description:"The input token of the swap.",label:"optional",type:"Token",longType:"DefiKingdomsTask.Token",fullType:"DefiKingdomsTask.Token",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"out_token",description:"The output token of the swap.",label:"optional",type:"Token",longType:"DefiKingdomsTask.Token",fullType:"DefiKingdomsTask.Token",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("h3",{id:"defikingdomstasktoken"},(0,o.kt)("inlineCode",{parentName:"h3"},"DefiKingdomsTask.Token")),(0,o.kt)(a.Au,{key:1,message:{name:"Token",longName:"DefiKingdomsTask.Token",fullName:".DefiKingdomsTask.Token",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"address",description:"The address of the token.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"decimals",description:"The number of decimal places for a token.",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);