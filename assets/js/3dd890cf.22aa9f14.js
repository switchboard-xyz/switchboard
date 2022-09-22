"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(3117),n=(r(7294),r(3905));const l={slug:".",title:"Table of Contents",sidebar_position:1},o="Program",i={unversionedId:"near/idl/overview",id:"near/idl/overview",title:"Table of Contents",description:"Accounts",source:"@site/docs/near/idl/overview.mdx",sourceDirName:"near/idl",slug:"/near/idl/",permalink:"/sbv2-core/near/idl/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:".",title:"Table of Contents",sidebar_position:1},sidebar:"near",previous:{title:"Overview",permalink:"/sbv2-core/near/feeds/"},next:{title:"Overview",permalink:"/sbv2-core/near/idl/accounts/"}},c={},u=[{value:"Accounts",id:"accounts",level:2},{value:"Events",id:"events",level:2},{value:"Types",id:"types",level:2},{value:"Errors",id:"errors",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"program"},"Program"),(0,n.kt)("h2",{id:"accounts"},(0,n.kt)("a",{parentName:"h2",href:"/near/idl/accounts"},"Accounts")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/accounts/AggregatorAccountData"},"AggregatorAccountData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/accounts/CrankAccountData"},"CrankAccountData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/accounts/EscrowAccountData"},"EscrowAccountData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/accounts/JobAccountData"},"JobAccountData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/accounts/OracleAccountData"},"OracleAccountData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/accounts/OracleQueueAccountData"},"OracleQueueAccountData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/accounts/PermissionAccountData"},"PermissionAccountData"))),(0,n.kt)("h2",{id:"events"},(0,n.kt)("a",{parentName:"h2",href:"/near/idl/events"},"Events")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/events/AggregatorOpenRoundEvent"},"AggregatorOpenRoundEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/events/AggregatorValueUpdateEvent"},"AggregatorValueUpdateEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/events/OracleBootedEvent"},"OracleBootedEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/events/OracleRewardEvent"},"OracleRewardEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/events/OracleSlashEvent"},"OracleSlashEvent"))),(0,n.kt)("h2",{id:"types"},(0,n.kt)("a",{parentName:"h2",href:"/near/idl/types"},"Types")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/types/AggregatorHistoryRow"},"AggregatorHistoryRow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/types/AggregatorRound"},"AggregatorRound")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/types/CrankRow"},"CrankRow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/types/OracleMetrics"},"OracleMetrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/near/idl/types/SwitchboardPermission"},"SwitchboardPermission"))),(0,n.kt)("h2",{id:"errors"},(0,n.kt)("a",{parentName:"h2",href:"/near/idl/errors"},"Errors")))}p.isMDXComponent=!0}}]);