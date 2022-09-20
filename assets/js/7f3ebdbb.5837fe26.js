"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),v=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=v(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=v(n),u=r,c=f["".concat(s,".").concat(u)]||f[u]||p[u]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var v=2;v<l;v++)i[v]=n[v];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>v});var a=n(3117),r=(n(7294),n(3905));const l={sidebar_position:1,title:"Overview",slug:"."},i=void 0,o={unversionedId:"solana/idl/events/overview",id:"solana/idl/events/overview",title:"Overview",description:"- AggregatorCrankEvictionEvent",source:"@site/docs/solana/idl/events/overview.md",sourceDirName:"solana/idl/events",slug:"/solana/idl/events/",permalink:"/sbv2-core/solana/idl/events/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"solanaFeeds",previous:{title:"vrfRequestRandomness",permalink:"/sbv2-core/solana/idl/instructions/vrfRequestRandomness"},next:{title:"AggregatorCrankEvictionEvent",permalink:"/sbv2-core/solana/idl/events/AggregatorCrankEvictionEvent"}},s={},v=[],d={toc:v};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/AggregatorCrankEvictionEvent"},"AggregatorCrankEvictionEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/AggregatorInitEvent"},"AggregatorInitEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/AggregatorOpenRoundEvent"},"AggregatorOpenRoundEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/AggregatorValueUpdateEvent"},"AggregatorValueUpdateEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/BufferRelayerOpenRoundEvent"},"BufferRelayerOpenRoundEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/CrankLeaseInsufficientFundsEvent"},"CrankLeaseInsufficientFundsEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/CrankPopExpectedFailureEvent"},"CrankPopExpectedFailureEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/FeedPermissionRevokedEvent"},"FeedPermissionRevokedEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/GarbageCollectFailureEvent"},"GarbageCollectFailureEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/LeaseFundEvent"},"LeaseFundEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/LeaseWithdrawEvent"},"LeaseWithdrawEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/OracleBootedEvent"},"OracleBootedEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/OracleRewardEvent"},"OracleRewardEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/OracleSlashEvent"},"OracleSlashEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/OracleWithdrawEvent"},"OracleWithdrawEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/ProbationBrokenEvent"},"ProbationBrokenEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/VrfCallbackPerformedEvent"},"VrfCallbackPerformedEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/VrfProveEvent"},"VrfProveEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/VrfRequestEvent"},"VrfRequestEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/VrfRequestRandomnessEvent"},"VrfRequestRandomnessEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/solana/idl/events/VrfVerifyEvent"},"VrfVerifyEvent"))))}p.isMDXComponent=!0}}]);