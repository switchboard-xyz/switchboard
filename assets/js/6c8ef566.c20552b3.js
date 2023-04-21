"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11596],{54852:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(49231);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,s(s({ref:t},i),{},{components:a})):n.createElement(k,s({ref:t},i))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:l,s[1]=c;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57425:(e,t,a)=>{a.d(t,{zY:()=>r,l1:()=>i,Au:()=>c});var n=a(49231),l=a(86583);const r=e=>{const{enumb:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Number"),n.createElement("th",null,"Description"))),l=()=>n.createElement("tbody",null,t.values.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement("code",null,e.number)),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement("table",null,n.createElement(a,null),n.createElement(l,null)))},s=e=>{const{fields:t}=e,a=()=>n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"))),r=e=>{let{field:t}=e;const a=n.createElement("code",null,t.longType);return void 0===t.typeLink?a:n.createElement(l.Z,{to:t.typeLink},a)},s=()=>n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,n.createElement(r,{field:e})),n.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return n.createElement("table",null,n.createElement(a,null),n.createElement(s,null))},c=e=>{const{message:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),n.createElement(s,{fields:t.fields}))};var o=a(69232),p=a(91740);const i=e=>{(0,o.Z)();return n.createElement(n.Fragment,null,n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,n.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.inputSample):n.createElement(n.Fragment,null)),n.createElement(p.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),n.createElement("p",null,n.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?n.createElement(n.Fragment,null,n.createElement("br",null),e.outputSample):n.createElement(n.Fragment,null)))}},77472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=a(48041),l=(a(49231),a(54852)),r=a(57425);const s={title:"PancakeswapExchangeRateTask",hide_title:!0},c=void 0,o={unversionedId:"tasks/PancakeswapExchangeRateTask",id:"tasks/PancakeswapExchangeRateTask",title:"PancakeswapExchangeRateTask",description:"PancakeswapExchangeRateTask",source:"@site/docs/tasks/PancakeswapExchangeRateTask.mdx",sourceDirName:"tasks",slug:"/tasks/PancakeswapExchangeRateTask",permalink:"/tasks/PancakeswapExchangeRateTask",draft:!1,tags:[],version:"current",frontMatter:{title:"PancakeswapExchangeRateTask",hide_title:!0},sidebar:"publisher",previous:{title:"OracleTask",permalink:"/tasks/OracleTask"},next:{title:"PerpMarketTask",permalink:"/tasks/PerpMarketTask"}},p={},i=[{value:"<code>PancakeswapExchangeRateTask</code>",id:"pancakeswapexchangeratetask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>PancakeswapExchangeRateTask</code>",id:"pancakeswapexchangeratetask-1",level:3}],u={toc:i},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"pancakeswapexchangeratetask"},(0,l.kt)("inlineCode",{parentName:"h2"},"PancakeswapExchangeRateTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"path")," PancakeswapExchangeRateTask")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"package")," PancakeswapExchangeRateTask")),(0,l.kt)("p",null,"Fetch the swap price from PancakeSwap."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("h3",{id:"pancakeswapexchangeratetask-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"PancakeswapExchangeRateTask")),(0,l.kt)(r.Au,{key:0,message:{name:"PancakeswapExchangeRateTask",longName:"PancakeswapExchangeRateTask",fullName:".PancakeswapExchangeRateTask",description:"Fetch the swap price from PancakeSwap.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"in_token_address",description:"The input token address.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"out_token_address",description:"The output token address.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"in_token_amount",description:"The amount of tokens to swap.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"slippage",description:"The allowable slippage in percent for the swap.",label:"optional",type:"double",longType:"double",fullType:"double",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"provider",description:"The RPC provider to use for the swap.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);