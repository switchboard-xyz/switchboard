"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53864],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(49231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57425:(e,t,n)=>{n.d(t,{zY:()=>r,l1:()=>c,Au:()=>i});var a=n(49231),l=n(86583);const r=e=>{const{enumb:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),l=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(n,null),a.createElement(l,null)))},s=e=>{const{fields:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const n=a.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.createElement(l.Z,{to:t.typeLink},n)},s=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(r,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(n,null),a.createElement(s,null))},i=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(s,{fields:t.fields}))};var o=n(69232),u=n(91740);const c=e=>{(0,o.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(u.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},62175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(48041),l=(n(49231),n(54852)),r=n(57425);const s={title:"MedianTask",hide_title:!0},i=void 0,o={unversionedId:"tasks/MedianTask",id:"tasks/MedianTask",title:"MedianTask",description:"MedianTask",source:"@site/docs/tasks/MedianTask.mdx",sourceDirName:"tasks",slug:"/tasks/MedianTask",permalink:"/tasks/MedianTask",draft:!1,tags:[],version:"current",frontMatter:{title:"MedianTask",hide_title:!0},sidebar:"publisher",previous:{title:"MeanTask",permalink:"/tasks/MeanTask"},next:{title:"MinTask",permalink:"/tasks/MinTask"}},u={},c=[{value:"<code>MedianTask</code>",id:"mediantask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>MedianTask</code>",id:"mediantask-1",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"mediantask"},(0,l.kt)("inlineCode",{parentName:"h2"},"MedianTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," MedianTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," MedianTask")),(0,l.kt)("p",null,"Returns the median of all the results returned by the provided subtasks and\nsubjobs. Nested tasks must return a Number."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"mediantask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"MedianTask")),(0,l.kt)(r.Au,{key:0,message:{name:"MedianTask",longName:"MedianTask",fullName:".MedianTask",description:"Returns the median of all the results returned by the provided subtasks and subjobs. Nested tasks must return a Number.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"tasks",description:"A list of subtasks to process and produce a list of result values.",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"jobs",description:"A list of subjobs to process and produce a list of result values.",label:"repeated",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"min_successful_required",description:"",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);