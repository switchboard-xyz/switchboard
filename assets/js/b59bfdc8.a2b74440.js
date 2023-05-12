"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7321],{54852:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||n;return r?a.createElement(b,s(s({ref:t},d),{},{components:r})):a.createElement(b,s({ref:t},d))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(95907),o=(r(49231),r(54852));const n={title:"feed-parser",slug:"/aptos/sdk/move/feed-parser",hide_title:!0,sidebar_class_name:"sidebar__move",sidebar_position:1},s=void 0,i={unversionedId:"aptos/sdk/examples/feed-parser",id:"aptos/sdk/examples/feed-parser",title:"feed-parser",description:"Switchboard Logo",source:"@site/docs/aptos/sdk/examples/feed-parser.mdx",sourceDirName:"aptos/sdk/examples",slug:"/aptos/sdk/move/feed-parser",permalink:"/aptos/sdk/move/feed-parser",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"feed-parser",slug:"/aptos/sdk/move/feed-parser",hide_title:!0,sidebar_class_name:"sidebar__move",sidebar_position:1},sidebar:"aptosSidebar",previous:{title:"@switchboard-xyz/aptos.js",permalink:"/aptos/sdk/javascript/"}},p={},l=[{value:"Build",id:"build",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png",alt:"Switchboard Logo"})),(0,o.kt)("h1",{id:"aptos-feed-parser"},"Aptos feed-parser"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An example contract reading the price of a Switchboard data feed on-chain."))),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aptos move compile --named-addresses switchboard=default\n")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Move.toml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[addresses]\nswitchboard = "0x34e2eead0aefbc3d0af13c0522be94b002658f4bef8e0740a21086d22236ad77"\n\n[dependencies]\nMoveStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/move-stdlib/", rev = "devnet" }\nAptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-framework/", rev = "devnet" }\nAptosStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-stdlib/", rev = "devnet" }\nSwitchboard = { git = "https://github.com/switchboard-xyz/sbv2-aptos.git", subdir = "move/switchboard/", rev = "main" }\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"N/A"))}u.isMDXComponent=!0}}]);