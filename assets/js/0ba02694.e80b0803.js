"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95538:(e,t,n)=>{n.d(t,{zY:()=>l,Au:()=>s});var r=n(67294),a=n(39960);const l=e=>{const{enumb:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Number"),r.createElement("th",null,"Description"))),a=()=>r.createElement("tbody",null,t.values.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.number)),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement("table",null,r.createElement(n,null),r.createElement(a,null)))},o=e=>{const{fields:t}=e,n=()=>r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"))),l=e=>{let{field:t}=e;const n=r.createElement("code",null,t.longType);return void 0===t.typeLink?n:r.createElement(a.Z,{to:t.typeLink},n)},o=()=>r.createElement("tbody",null,t.map((e=>r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement(l,{field:e})),r.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return r.createElement("table",null,r.createElement(n,null),r.createElement(o,null))},s=e=>{const{message:t}=e;return r.createElement(r.Fragment,null,r.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),r.createElement(o,{fields:t.fields}))}},9230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(83117),a=(n(67294),n(3905)),l=n(95538);const o={title:"WebsocketTask",hide_title:!0},s=void 0,c={unversionedId:"protos/WebsocketTask",id:"protos/WebsocketTask",title:"WebsocketTask",description:"WebsocketTask",source:"@site/docs/protos/WebsocketTask.mdx",sourceDirName:"protos",slug:"/protos/WebsocketTask",permalink:"/protos/WebsocketTask",draft:!1,tags:[],version:"current",frontMatter:{title:"WebsocketTask",hide_title:!0},sidebar:"publisher",previous:{title:"VwapTask",permalink:"/protos/VwapTask"},next:{title:"XStepPriceTask",permalink:"/protos/XStepPriceTask"}},i={},p=[{value:"<code>WebsocketTask</code>",id:"websockettask",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>WebsocketTask</code>",id:"websockettask-1",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"websockettask"},(0,a.kt)("inlineCode",{parentName:"h2"},"WebsocketTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"path")," WebsocketTask")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"package")," WebsocketTask")),(0,a.kt)("p",null,"Opens and maintains a websocket for light speed data retrieval."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"websockettask-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"WebsocketTask")),(0,a.kt)(l.Au,{key:0,message:{name:"WebsocketTask",longName:"WebsocketTask",fullName:".WebsocketTask",description:"Opens and maintains a websocket for light speed data retrieval.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"url",description:"The websocket url.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"subscription",description:"The websocket message to notify of a new subscription.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"max_data_age_seconds",description:"Minimum amount of time required between when the horses are taking out.",label:"optional",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"filter",description:"Incoming message JSONPath filter.\nExample: \"$[?(@.channel == 'ticker' && @.market == 'BTC/USD')]\"",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);