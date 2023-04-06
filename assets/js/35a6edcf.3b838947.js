"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76671],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),i=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),f=r,k=m["".concat(o,".").concat(f)]||m[f]||p[f]||a;return n?l.createElement(k,s(s({ref:t},u),{},{components:n})):l.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[m]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88491:(e,t,n)=>{n.d(t,{zY:()=>a,l1:()=>u,Au:()=>c});var l=n(49231),r=n(15733);const a=e=>{const{enumb:t}=e,n=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Number"),l.createElement("th",null,"Description"))),r=()=>l.createElement("tbody",null,t.values.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement("code",null,e.number)),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement("table",null,l.createElement(n,null),l.createElement(r,null)))},s=e=>{const{fields:t}=e,n=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"))),a=e=>{let{field:t}=e;const n=l.createElement("code",null,t.longType);return void 0===t.typeLink?n:l.createElement(r.Z,{to:t.typeLink},n)},s=()=>l.createElement("tbody",null,t.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement(a,{field:e})),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement("table",null,l.createElement(n,null),l.createElement(s,null))},c=e=>{const{message:t}=e;return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.createElement(s,{fields:t.fields}))};var o=n(59415),i=n(17558);const u=e=>{(0,o.Z)();return l.createElement(l.Fragment,null,l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("p",null,l.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.inputSample):l.createElement(l.Fragment,null)),l.createElement(i.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),l.createElement("p",null,l.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.outputSample):l.createElement(l.Fragment,null)))}},71855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var l=n(48041),r=(n(49231),n(54852)),a=n(88491);const s={title:"SysclockOffsetTask",hide_title:!0},c=void 0,o={unversionedId:"tasks/SysclockOffsetTask",id:"tasks/SysclockOffsetTask",title:"SysclockOffsetTask",description:"SysclockOffsetTask",source:"@site/docs/tasks/SysclockOffsetTask.mdx",sourceDirName:"tasks",slug:"/tasks/SysclockOffsetTask",permalink:"/tasks/SysclockOffsetTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SysclockOffsetTask",hide_title:!0},sidebar:"publisher",previous:{title:"SushiswapExchangeRateTask",permalink:"/tasks/SushiswapExchangeRateTask"},next:{title:"TpsTask",permalink:"/tasks/TpsTask"}},i={},u=[{value:"<code>SysclockOffsetTask</code>",id:"sysclockoffsettask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SysclockOffsetTask</code>",id:"sysclockoffsettask-1",level:3}],m={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sysclockoffsettask"},(0,r.kt)("inlineCode",{parentName:"h2"},"SysclockOffsetTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"path")," SysclockOffsetTask")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"package")," SysclockOffsetTask")),(0,r.kt)("p",null,"Return the difference between an oracle's clock and the current timestamp at\n",(0,r.kt)("inlineCode",{parentName:"p"},"SYSVAR_CLOCK_PUBKEY"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"sysclockoffsettask-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"SysclockOffsetTask")),(0,r.kt)(a.Au,{key:0,message:{name:"SysclockOffsetTask",longName:"SysclockOffsetTask",fullName:".SysclockOffsetTask",description:"Return the difference between an oracle's clock and the current timestamp at `SYSVAR_CLOCK_PUBKEY`.",hasExtensions:!1,hasFields:!1,hasOneofs:!1,extensions:[],fields:[]},mdxType:"ProtoMessage"}),(0,r.kt)("hr",null))}f.isMDXComponent=!0}}]);