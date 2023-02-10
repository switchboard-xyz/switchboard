"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,s(s({ref:t},i),{},{components:n})):r.createElement(k,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>l,Au:()=>o});var r=n(67294),a=n(39960);const l=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),a=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(a,null)))},s=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(a.Z,{to:t.typeLink},n)},s=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(l,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(s,null))},o=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(s,{fields:t.fields}))}},25907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(83117),a=(n(67294),n(3905)),l=n(95538);const s={title:"TpsTask",hide_title:!0},o=void 0,c={unversionedId:"protos/TpsTask",id:"protos/TpsTask",title:"TpsTask",description:"TpsTask",source:"@site/docs/protos/TpsTask.mdx",sourceDirName:"protos",slug:"/protos/TpsTask",permalink:"/protos/TpsTask",draft:!1,tags:[],version:"current",frontMatter:{title:"TpsTask",hide_title:!0},sidebar:"publisher",previous:{title:"SysclockOffsetTask",permalink:"/protos/SysclockOffsetTask"},next:{title:"TwapTask",permalink:"/protos/TwapTask"}},p={},i=[{value:"<code>TpsTask</code>",id:"tpstask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>TpsTask</code>",id:"tpstask-1",level:3}],u={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tpstask"},(0,a.kt)("inlineCode",{parentName:"h2"},"TpsTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," TpsTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," TpsTask")),(0,a.kt)("p",null,"Fetch the current transactions per second."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"tpstask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"TpsTask")),(0,a.kt)(l.Au,{key:0,message:{name:"TpsTask",longName:"TpsTask",fullName:".TpsTask",description:"Fetch the current transactions per second.",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);