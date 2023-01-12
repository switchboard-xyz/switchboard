"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24008:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(99226),a=r(92949),o=r(44996),i=r(67294);const s=e=>{const{colorMode:t}=(0,a.I)();let r="inherit";e.lightBg&&"dark"!==t&&(r=e.lightBg),e.darkBg&&"dark"===t&&(r=e.darkBg);let s={};return e.sx&&(s={backgroundColor:r,m:"auto",display:"flex",...s,...e.sx}),i.createElement(n.Z,{component:"img",sx:s,src:(0,o.Z)(e.img)})}},24798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905)),o=r(24008);const i={sidebar_position:15,title:"Permissions",slug:"/permissions"},s=void 0,l={unversionedId:"network/permissions",id:"network/permissions",title:"Permissions",description:"Oracle queue resources, such as oracles, aggregators, VRF accounts, or buffer",source:"@site/docs/network/permissions.mdx",sourceDirName:"network",slug:"/permissions",permalink:"/permissions",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Permissions",slug:"/permissions"},sidebar:"learn",previous:{title:"Oracle Queue",permalink:"/queue"},next:{title:"Crank",permalink:"/crank"}},u={},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{img:"/img/L1_Queue_Functional.png",mdxType:"MarkdownImage"}),(0,a.kt)("p",null,"Oracle queue resources, such as oracles, aggregators, VRF accounts, or buffer\nrelayer accounts, ",(0,a.kt)("em",{parentName:"p"},"MUST")," have an associated PermissionAccount initialized before\ninteracting with a queue. Permissions are granted by ",(0,a.kt)("inlineCode",{parentName:"p"},"queue.authority"),", which\ncould be a DAO controlled account to allow network participants to vote on new\nentrants."),(0,a.kt)("p",null,"Oracles ",(0,a.kt)("em",{parentName:"p"},"MUST")," have ",(0,a.kt)("strong",{parentName:"p"},"PermitOracleHeartbeat")," permissions before heartbeating on\na queue. This is to prevent a malicious actor from spinning up a plethora of\noracles until it obtains the super majority, at which point it could misreport\ndata feed results and cause honest oracles to be slashed."),(0,a.kt)("p",null,"See the table below for the minimum required permissions for a resource based on\nthe queues settings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Queue Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"False (0)"),(0,a.kt)("th",{parentName:"tr",align:null},"True (1)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedFeedsEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Aggregators & Buffer Relayers ",(0,a.kt)("em",{parentName:"td"},"MUST")," have ",(0,a.kt)("strong",{parentName:"td"},"PermitOracleQueueUsage")," permissions before requesting an update"),(0,a.kt)("td",{parentName:"tr",align:null},"Aggregators & Buffer Relayers require no explicit permissions before requesting an update")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"unpermissionedVrfEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},"VRF Accounts ",(0,a.kt)("em",{parentName:"td"},"MUST")," have ",(0,a.kt)("strong",{parentName:"td"},"PermitVrfRequests")," permissions before requesting an update"),(0,a.kt)("td",{parentName:"tr",align:null},"VRF Accounts require no explicit permissions before requesting an update")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"enableBufferRelayers")),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer Relayers are ",(0,a.kt)("em",{parentName:"td"},"NOT")," permitted to request updates"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer Relayers are permitted to request updates")))))}m.isMDXComponent=!0}}]);