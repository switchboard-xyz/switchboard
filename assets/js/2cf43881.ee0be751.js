"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>l,Au:()=>i});var a=n(67294),o=n(39960);const l=e=>{const{enumb:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),o=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(n,null),a.createElement(o,null)))},r=e=>{const{fields:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=a.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.createElement(o.Z,{to:t.typeLink},n)},r=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(l,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(n,null),a.createElement(r,null))},i=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(r,{fields:t.fields}))}},43757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(83117),o=(n(67294),n(3905)),l=n(95538);const r={title:"ComparisonTask",hide_title:!0},i=void 0,s={unversionedId:"protos/ComparisonTask",id:"protos/ComparisonTask",title:"ComparisonTask",description:"ComparisonTask",source:"@site/docs/protos/ComparisonTask.mdx",sourceDirName:"protos",slug:"/protos/ComparisonTask",permalink:"/protos/ComparisonTask",draft:!1,tags:[],version:"current",frontMatter:{title:"ComparisonTask",hide_title:!0},sidebar:"publisher",previous:{title:"CacheTask",permalink:"/protos/CacheTask"},next:{title:"ConditionalTask",permalink:"/protos/ConditionalTask"}},p={},c=[{value:"<code>ComparisonTask</code>",id:"comparisontask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>ComparisonTask</code>",id:"comparisontask-1",level:3},{value:"Enums",id:"enums",level:2},{value:"<code>ComparisonTask.Operation</code>",id:"comparisontaskoperation",level:3}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"comparisontask"},(0,o.kt)("inlineCode",{parentName:"h2"},"ComparisonTask")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"path")," ComparisonTask")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"package")," ComparisonTask")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"comparisontask-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"ComparisonTask")),(0,o.kt)(l.Au,{key:0,message:{name:"ComparisonTask",longName:"ComparisonTask",fullName:".ComparisonTask",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"op",description:"",label:"optional",type:"Operation",longType:"ComparisonTask.Operation",fullType:"ComparisonTask.Operation",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"lhs",description:"",label:"optional",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!0,oneofdecl:"LHS",defaultValue:""},{name:"lhs_value",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"LHS",defaultValue:""},{name:"rhs",description:"",label:"optional",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!0,oneofdecl:"RHS",defaultValue:""},{name:"rhs_value",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!0,oneofdecl:"RHS",defaultValue:""},{name:"on_true",description:"",label:"optional",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_true_value",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_false",description:"",label:"optional",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_false_value",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_failure",description:"",label:"optional",type:"OracleJob",longType:"OracleJob",fullType:"OracleJob",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"on_failure_value",description:"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"enums"},"Enums"),(0,o.kt)("h3",{id:"comparisontaskoperation"},(0,o.kt)("inlineCode",{parentName:"h3"},"ComparisonTask.Operation")),(0,o.kt)(l.zY,{key:0,enumb:{name:"Operation",longName:"ComparisonTask.Operation",fullName:".ComparisonTask.Operation",description:"",values:[{name:"OPERATION_EQ",number:"0",description:""},{name:"OPERATION_GT",number:"1",description:""},{name:"OPERATION_LT",number:"2",description:""}]},mdxType:"ProtoEnum"}),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);