"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9463],{54852:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,m=u["".concat(l,".").concat(p)]||u[p]||g[p]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(95907),a=(r(49231),r(54852));const i={title:"SwitchboardStd",slug:"/sui/sdk/move/",hide_title:!0,sidebar_class_name:"sidebar__move",sidebar_position:1},s=void 0,o={unversionedId:"sui/sdk/clients/SwitchboardStd",id:"sui/sdk/clients/SwitchboardStd",title:"SwitchboardStd",description:"Switchboard Logo",source:"@site/docs/sui/sdk/clients/SwitchboardStd.mdx",sourceDirName:"sui/sdk/clients",slug:"/sui/sdk/move/",permalink:"/sui/sdk/move/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SwitchboardStd",slug:"/sui/sdk/move/",hide_title:!0,sidebar_class_name:"sidebar__move",sidebar_position:1},sidebar:"suiSidebar",previous:{title:"Switchboard x Sui",permalink:"/sui/"},next:{title:"SwitchboardStd (testnet)",permalink:"/sui/sdk/move/testnet"}},l={},c=[{value:"Build",id:"build",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Reading Feeds",id:"reading-feeds",level:3}],d={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png",alt:"Switchboard Logo"})),(0,a.kt)("h1",{id:"switchboard-move"},"switchboard-move"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A Move module to interact with Switchboard V2 on Sui Mainnet."))),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sui move compile\n")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Move.toml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "Package"\nversion = "0.0.1"\n\n[dependencies]\nSui = { git = "https://github.com/MystenLabs/sui.git", subdir = "crates/sui-framework/packages/sui-framework", rev = "mainnet" }\nMoveStdlib = { git = "https://github.com/MystenLabs/sui.git", subdir = "crates/sui-framework/packages/move-stdlib", rev = "mainnet" }\nSwitchboardStdLib = { git = "https://github.com/switchboard-xyz/sbv2-sui.git", subdir = "move/mainnet/switchboard_std/", rev = "main"  }\n\n\n[addresses]\npackage = "0x0"\nstd = "0x1"\nsui =  "0x2"\nswitchboard =  "0x08d79f4d920b03d88faca1e421af023a87fbb1e4a6fd200248e6e9998d09e470"\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Directory")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#reading-feeds"},"Reading Feeds"))),(0,a.kt)("h3",{id:"reading-feeds"},"Reading Feeds"),(0,a.kt)("p",null,"Read an aggregator result on-chain"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-move"},"use switchboard::aggregator;\nuse switchboard::math;\n\n// store latest value\nstruct AggregatorInfo has store, key {\n  id: UID,\n  aggregator_addr: address,\n  latest_result: u128,\n  latest_result_scaling_factor: u8,\n  latest_timestamp: u64,\n}\n\n// get latest value\npublic entry fun save_aggregator_info(\n  feed: &Aggregator,\n  ctx: &mut TxContext\n) {\n  let (latest_result, latest_timestamp) = aggregator::latest_value(feed);\n\n  // get latest value\n  let (value, scaling_factor, _neg) = math::unpack(latest_result);\n  transfer::transfer(\n      AggregatorInfo {\n          id: object::new(ctx),\n          latest_result: value,\n          latest_result_scaling_factor: scaling_factor,\n          aggregator_addr: aggregator::aggregator_address(feed),\n          latest_timestamp,\n      },\n      tx_context::sender(ctx)\n  );\n}\n")))}g.isMDXComponent=!0}}]);