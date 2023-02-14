"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,u=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43725:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(86886),a=r(67294),i=r(44267),o=r(15861),s=r(21519),l=r(78445),c=r(44073),m=r(39960),p=r(13264),d=r(92949);const g=(0,p.Z)(c.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,p.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:r,imageDark:n,description:l,to:c,sx:p}=e;const{colorMode:v}=(0,d.I)();return a.createElement(m.Z,{href:c,style:{textDecoration:"none"}},a.createElement(g,{dark:"dark"===v?1:0,sx:p},a.createElement(i.Z,{sx:{height:"100%",width:"100%"}},a.createElement(u,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===v&&n?n:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?a.createElement(a.Fragment,null,a.createElement(s.Z,{sx:{marginBottom:"1rem"}}),a.createElement(o.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):a.createElement(a.Fragment,null))))}function f(e){let{items:t,cols:r,sx:i,direction:o,justifyContent:s,alignItems:l}=e;return a.createElement(n.ZP,{container:!0,spacing:3,direction:null!=o?o:"row",justifyContent:s,alignItems:l},t.map((e=>{var t;return a.createElement(n.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},a.createElement(v,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:i}))})))}},22921:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(83117),a=(r(67294),r(3905)),i=r(43725),o=r(44996);const s={toc:[]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{cols:2,items:[{to:"/near/dev/rust/",title:"Rust",description:"View the sbv2-near crate",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/rust/crab.svg")})},{to:"/near/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/near.js npm package",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/javascript/light.svg")})},{to:"/near/dev/cli/",title:"CLI",description:"View the @switchboard-xyz/cli npm package",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/terminal/light.svg")}),imageDark:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/terminal/teal.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0},97497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=r(83117),a=(r(67294),r(3905)),i=r(43725),o=r(44996),s=r(22921);const l={sidebar_position:1,slug:".",title:"Developer Resources"},c=void 0,m={unversionedId:"near/dev/overview",id:"near/dev/overview",title:"Developer Resources",description:"To get started, clone the",source:"@site/docs/near/dev/overview.mdx",sourceDirName:"near/dev",slug:"/near/dev/",permalink:"/near/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Developer Resources"},sidebar:"near",previous:{title:"Testnet",permalink:"/near/program/testnet"},next:{title:"Sbv2 CLI",permalink:"/near/dev/cli"}},p={},d=[{value:"Libraries",id:"libraries",level:2},{value:"Example Programs",id:"example-programs",level:2}],g={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get started, clone the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-near"},"sbv2-near")," repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-near\n")),(0,a.kt)("h2",{id:"libraries"},"Libraries"),(0,a.kt)(s.ZP,{mdxType:"NearLibraries"}),(0,a.kt)("h2",{id:"example-programs"},"Example Programs"),(0,a.kt)(i.Z,{cols:2,items:[{to:"/near/dev/feed-parser",title:"Feed Parser",description:"View an example program depicting how to read a Switchboard Data Feed on-chain",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/near/light.svg")}),imageDark:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/near/dark.svg")})}],mdxType:"RoundedCardGroup"}))}u.isMDXComponent=!0}}]);