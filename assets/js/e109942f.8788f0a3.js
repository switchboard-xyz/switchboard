"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>l,Au:()=>i});var r=n(67294),o=n(39960);const l=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),o=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(o,null)))},a=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(o.Z,{to:t.typeLink},n)},a=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(l,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(a,null))},i=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(a,{fields:t.fields}))}},76537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(83117),o=(n(67294),n(3905)),l=n(95538);const a={title:"HistoryFunctionTask",hide_title:!0},i=void 0,s={unversionedId:"protos/HistoryFunctionTask",id:"protos/HistoryFunctionTask",title:"HistoryFunctionTask",description:"HistoryFunctionTask",source:"@site/docs/protos/HistoryFunctionTask.mdx",sourceDirName:"protos",slug:"/protos/HistoryFunctionTask",permalink:"/protos/HistoryFunctionTask",draft:!1,tags:[],version:"current",frontMatter:{title:"HistoryFunctionTask",hide_title:!0},sidebar:"publisher",previous:{title:"EwmaTask",permalink:"/protos/EwmaTask"},next:{title:"HttpTask",permalink:"/protos/HttpTask"}},c={},u=[{value:"<code>HistoryFunctionTask</code>",id:"historyfunctiontask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>HistoryFunctionTask</code>",id:"historyfunctiontask-1",level:3},{value:"Enums",id:"enums",level:2},{value:"<code>HistoryFunctionTask.Method</code>",id:"historyfunctiontaskmethod",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"historyfunctiontask"},(0,o.kt)("inlineCode",{parentName:"h2"},"HistoryFunctionTask")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"path")," HistoryFunctionTask")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"package")," HistoryFunctionTask")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"historyfunctiontask-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"HistoryFunctionTask")),(0,o.kt)(l.Au,{key:0,message:{name:"HistoryFunctionTask",longName:"HistoryFunctionTask",fullName:".HistoryFunctionTask",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"method",description:"",label:"optional",type:"Method",longType:"HistoryFunctionTask.Method",fullType:"HistoryFunctionTask.Method",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"aggregator_address",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"period",description:"",label:"optional",type:"uint32",longType:"uint32",fullType:"uint32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"enums"},"Enums"),(0,o.kt)("h3",{id:"historyfunctiontaskmethod"},(0,o.kt)("inlineCode",{parentName:"h3"},"HistoryFunctionTask.Method")),(0,o.kt)(l.zY,{key:0,enumb:{name:"Method",longName:"HistoryFunctionTask.Method",fullName:".HistoryFunctionTask.Method",description:"",values:[{name:"METHOD_MIN",number:"0",description:""},{name:"METHOD_MAX",number:"1",description:""}]},mdxType:"ProtoEnum"}),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);