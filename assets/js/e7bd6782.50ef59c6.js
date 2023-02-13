"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>l,Au:()=>o});var r=n(67294),a=n(39960);const l=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),a=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(a,null)))},s=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(a.Z,{to:t.typeLink},n)},s=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(l,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(s,null))},o=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(s,{fields:t.fields}))}},65275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(83117),a=(n(67294),n(3905)),l=n(95538);const s={title:"MedianTask",hide_title:!0},o=void 0,i={unversionedId:"protos/MedianTask",id:"protos/MedianTask",title:"MedianTask",description:"MedianTask",source:"@site/docs/protos/MedianTask.mdx",sourceDirName:"protos",slug:"/protos/MedianTask",permalink:"/protos/MedianTask",draft:!1,tags:[],version:"current",frontMatter:{title:"MedianTask",hide_title:!0},sidebar:"publisher",previous:{title:"MeanTask",permalink:"/protos/MeanTask"},next:{title:"MinTask",permalink:"/protos/MinTask"}},c={},u=[{value:"<code>MedianTask</code>",id:"mediantask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>MedianTask</code>",id:"mediantask-1",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mediantask"},(0,a.kt)("inlineCode",{parentName:"h2"},"MedianTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," MedianTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," MedianTask")),(0,a.kt)("p",null,"Returns the median of all the results returned by the provided subtasks and\nsubjobs. Nested tasks must return a Number."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"mediantask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"MedianTask")),(0,a.kt)(l.Au,{key:0,message:{name:"MedianTask",longName:"MedianTask",fullName:".MedianTask",description:"Returns the median of all the results returned by the provided subtasks and subjobs. Nested tasks must return a Number.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"tasks",description:"A list of subtasks to process and produce a list of result values.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"jobs",description:"A list of subjobs to process and produce a list of result values.",label:"repeated",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"min_successful_required",description:"",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);