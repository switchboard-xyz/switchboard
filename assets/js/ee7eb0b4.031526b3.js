"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50359],{54852:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88491:(e,t,n)=>{n.d(t,{zY:()=>l,l1:()=>i,Au:()=>s});var r=n(49231),a=n(15733);const l=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),a=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(a,null)))},o=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(a.Z,{to:t.typeLink},n)},o=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(l,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(o,null))},s=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(o,{fields:t.fields}))};var c=n(59415),p=n(17558);const i=e=>{(0,c.Z)();return r.createElement(r.Fragment,null,r.createElement("h3",null,e.title),r.createElement("p",null,e.description),r.createElement("p",null,r.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?r.createElement(r.Fragment,null,r.createElement("br",null),e.inputSample):r.createElement(r.Fragment,null)),r.createElement(p.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),r.createElement("p",null,r.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?r.createElement(r.Fragment,null,r.createElement("br",null),e.outputSample):r.createElement(r.Fragment,null)))}},47335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(48041),a=(n(49231),n(54852)),l=n(88491);const o={title:"MangoPerpMarketTask",hide_title:!0},s=void 0,c={unversionedId:"tasks/MangoPerpMarketTask",id:"tasks/MangoPerpMarketTask",title:"MangoPerpMarketTask",description:"MangoPerpMarketTask",source:"@site/docs/tasks/MangoPerpMarketTask.mdx",sourceDirName:"tasks",slug:"/tasks/MangoPerpMarketTask",permalink:"/tasks/MangoPerpMarketTask",draft:!1,tags:[],version:"current",frontMatter:{title:"MangoPerpMarketTask",hide_title:!0},sidebar:"publisher",previous:{title:"LpTokenPriceTask",permalink:"/tasks/LpTokenPriceTask"},next:{title:"MarinadeStateTask",permalink:"/tasks/MarinadeStateTask"}},p={},i=[{value:"<code>MangoPerpMarketTask</code>",id:"mangoperpmarkettask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>MangoPerpMarketTask</code>",id:"mangoperpmarkettask-1",level:3}],m={toc:i},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mangoperpmarkettask"},(0,a.kt)("inlineCode",{parentName:"h2"},"MangoPerpMarketTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," MangoPerpMarketTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," MangoPerpMarketTask")),(0,a.kt)("p",null,"Fetch the current price for a Mango perpetual market"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"mangoperpmarkettask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"MangoPerpMarketTask")),(0,a.kt)(l.Au,{key:0,message:{name:"MangoPerpMarketTask",longName:"MangoPerpMarketTask",fullName:".MangoPerpMarketTask",description:"Fetch the current price for a Mango perpetual market",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"perp_market_address",description:"Mainnet address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);