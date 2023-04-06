"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56754],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(49231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88491:(e,t,n)=>{n.d(t,{zY:()=>r,l1:()=>p,Au:()=>o});var a=n(49231),l=n(15733);const r=e=>{const{enumb:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Number"),a.createElement("th",null,"Description"))),l=()=>a.createElement("tbody",null,t.values.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement("code",null,e.number)),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement("table",null,a.createElement(n,null),a.createElement(l,null)))},s=e=>{const{fields:t}=e,n=()=>a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const n=a.createElement("code",null,t.longType);return void 0===t.typeLink?n:a.createElement(l.Z,{to:t.typeLink},n)},s=()=>a.createElement("tbody",null,t.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,a.createElement(r,{field:e})),a.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return a.createElement("table",null,a.createElement(n,null),a.createElement(s,null))},o=e=>{const{message:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),a.createElement(s,{fields:t.fields}))};var i=n(59415),c=n(17558);const p=e=>{(0,i.Z)();return a.createElement(a.Fragment,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.description),a.createElement("p",null,a.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.inputSample):a.createElement(a.Fragment,null)),a.createElement(c.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),a.createElement("p",null,a.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?a.createElement(a.Fragment,null,a.createElement("br",null),e.outputSample):a.createElement(a.Fragment,null)))}},32387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(48041),l=(n(49231),n(54852)),r=n(88491);const s={title:"SushiswapExchangeRateTask",hide_title:!0},o=void 0,i={unversionedId:"tasks/SushiswapExchangeRateTask",id:"tasks/SushiswapExchangeRateTask",title:"SushiswapExchangeRateTask",description:"SushiswapExchangeRateTask",source:"@site/docs/tasks/SushiswapExchangeRateTask.mdx",sourceDirName:"tasks",slug:"/tasks/SushiswapExchangeRateTask",permalink:"/tasks/SushiswapExchangeRateTask",draft:!1,tags:[],version:"current",frontMatter:{title:"SushiswapExchangeRateTask",hide_title:!0},sidebar:"publisher",previous:{title:"SubtractTask",permalink:"/tasks/SubtractTask"},next:{title:"SysclockOffsetTask",permalink:"/tasks/SysclockOffsetTask"}},c={},p=[{value:"<code>SushiswapExchangeRateTask</code>",id:"sushiswapexchangeratetask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>SushiswapExchangeRateTask</code>",id:"sushiswapexchangeratetask-1",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sushiswapexchangeratetask"},(0,l.kt)("inlineCode",{parentName:"h2"},"SushiswapExchangeRateTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," SushiswapExchangeRateTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," SushiswapExchangeRateTask")),(0,l.kt)("p",null,"Fetch the swap price from SushiSwap."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"sushiswapexchangeratetask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"SushiswapExchangeRateTask")),(0,l.kt)(r.Au,{key:0,message:{name:"SushiswapExchangeRateTask",longName:"SushiswapExchangeRateTask",fullName:".SushiswapExchangeRateTask",description:"Fetch the swap price from SushiSwap.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"in_token_address",description:"The input token address.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"out_token_address",description:"The output token address.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"in_token_amount",description:"The amount of tokens to swap.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"slippage",description:"The allowable slippage in percent for the swap.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"provider",description:"The RPC provider to use for the swap.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);