"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24008:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(99226),o=n(92949),a=n(44996),i=n(67294);const s=e=>{const{colorMode:t}=(0,o.I)();let n="inherit";e.lightBg&&"dark"!==t&&(n=e.lightBg),e.darkBg&&"dark"===t&&(n=e.darkBg);let s={};return e.sx&&(s={backgroundColor:n,m:"auto",display:"flex",...s,...e.sx}),i.createElement(r.Z,{component:"img",sx:s,src:(0,a.Z)(e.img)})}},47206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(83117),o=(n(67294),n(3905)),a=n(24008);const i={sidebar_position:10,title:"Solana VRF"},s=void 0,l={unversionedId:"randomness/solana",id:"randomness/solana",title:"Solana VRF",description:"The diagram below depicts the events for how VRF is fulfilled on Solana.",source:"@site/docs/randomness/solana.mdx",sourceDirName:"randomness",slug:"/randomness/solana",permalink:"/randomness/solana",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Solana VRF"},sidebar:"learn",previous:{title:"What is Randomness?",permalink:"/randomness/"}},c={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The diagram below depicts the events for how VRF is fulfilled on Solana."),(0,o.kt)("p",null,"The current costs of requesting randomness is 0.002 SOL, which consists of mainly transaction fees (math and compute costs) and oracle incentives. We're actively working to reduce overall costs and designing an example, VrfPool for heavy VRF use cases."),(0,o.kt)(a.Z,{img:"/img/Activity_VRF_Request.png",sx:{display:"flex",width:"90%"},mdxType:"MarkdownImage"}))}d.isMDXComponent=!0}}]);