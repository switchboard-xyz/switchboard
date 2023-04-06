"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90699,97299],{54852:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>b});var n=l(49231);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=d(l),p=r,b=c["".concat(i,".").concat(p)]||c[p]||k[p]||a;return l?n.createElement(b,o(o({ref:e},s),{},{components:l})):n.createElement(b,o({ref:e},s))}));function b(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=p;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[c]="string"==typeof t?t:r,o[1]=u;for(var d=2;d<a;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},35371:(t,e,l)=>{var n=l(68001);e.Z=void 0;var r=n(l(28627)),a=l(20264),o=(0,r.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");e.Z=o},94731:(t,e,l)=>{l.d(e,{Z:()=>Z});var n=l(92897),r=l(45675),a=l(49231),o=l(19841),u=l(75965),i=l(32301),d=l(10803),s=l(56133),c=l(32268),k=l(46568),p=l(92899),b=l(1274),m=l(7523);function y(t){return(0,m.Z)("MuiButton",t)}const v=(0,b.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const h=a.createContext({});var g=l(20264);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=t=>(0,r.Z)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,s.ZP)(k.Z,{shouldForwardProp:t=>(0,s.FO)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,e[l.variant],e[`${l.variant}${(0,p.Z)(l.color)}`],e[`size${(0,p.Z)(l.size)}`],e[`${l.variant}Size${(0,p.Z)(l.size)}`],"inherit"===l.color&&e.colorInherit,l.disableElevation&&e.disableElevation,l.fullWidth&&e.fullWidth]}})((({theme:t,ownerState:e})=>{var l,n;return(0,r.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===e.variant&&"inherit"!==e.color&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===e.variant&&"inherit"!==e.color&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===e.variant&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===e.variant&&"inherit"!==e.color&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":(0,r.Z)({},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${v.focusVisible}`]:(0,r.Z)({},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${v.disabled}`]:(0,r.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===e.variant&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"contained"===e.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===e.variant&&{padding:"6px 8px"},"text"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main},"outlined"===e.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(t.palette[e.color].main,.5)}`},"contained"===e.variant&&{color:t.vars?t.vars.palette.text.primary:null==(l=(n=t.palette).getContrastText)?void 0:l.call(n,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},"contained"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},"inherit"===e.color&&{color:"inherit",borderColor:"currentColor"},"small"===e.size&&"text"===e.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"text"===e.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===e.size&&"outlined"===e.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"outlined"===e.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===e.size&&"contained"===e.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"contained"===e.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})}),(({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),P=(0,s.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.startIcon,e[`iconSize${(0,p.Z)(l.size)}`]]}})((({ownerState:t})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t)))),T=(0,s.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.endIcon,e[`iconSize${(0,p.Z)(l.size)}`]]}})((({ownerState:t})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t)))),Z=a.forwardRef((function(t,e){const l=a.useContext(h),d=(0,u.Z)(l,t),s=(0,c.Z)({props:d,name:"MuiButton"}),{children:k,color:b="primary",component:m="button",className:v,disabled:x=!1,disableElevation:Z=!1,disableFocusRipple:K=!1,endIcon:w,focusVisibleClassName:C,fullWidth:E=!1,size:B="medium",startIcon:z,type:N,variant:R="text"}=s,D=(0,n.Z)(s,f),q=(0,r.Z)({},s,{color:b,component:m,disabled:x,disableElevation:Z,disableFocusRipple:K,fullWidth:E,size:B,type:N,variant:R}),M=(t=>{const{color:e,disableElevation:l,fullWidth:n,size:a,variant:o,classes:u}=t,d={root:["root",o,`${o}${(0,p.Z)(e)}`,`size${(0,p.Z)(a)}`,`${o}Size${(0,p.Z)(a)}`,"inherit"===e&&"colorInherit",l&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(a)}`]},s=(0,i.Z)(d,y,u);return(0,r.Z)({},u,s)})(q),O=z&&(0,g.jsx)(P,{className:M.startIcon,ownerState:q,children:z}),A=w&&(0,g.jsx)(T,{className:M.endIcon,ownerState:q,children:w});return(0,g.jsxs)(S,(0,r.Z)({ownerState:q,className:(0,o.Z)(l.className,M.root,v),component:m,disabled:x,focusRipple:!K,focusVisibleClassName:(0,o.Z)(M.focusVisible,C),ref:e,type:N},D,{classes:M,children:[O,k,A]}))}))},93451:(t,e,l)=>{l.d(e,{Z:()=>u});var n=l(229),r=l(65137),a=l(43939),o=l(49231);const u=t=>{const{colorMode:e}=(0,r.I)();let l=(0,a.Z)("dark"===e&&t.darkImg?t.darkImg:t.img),u="inherit";t.lightBg&&"dark"!==e&&(u=t.lightBg),t.darkBg&&"dark"===e&&(u=t.darkBg);let i={};return t.sx&&(i={backgroundColor:u,m:"auto",display:"flex",...i,...t.sx}),o.createElement(n.Z,{component:"img",sx:i,src:l})}},49675:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(69787),r=l(94731),a=l(69681),o=l(35371),u=l(49231);const i=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return u.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},u.createElement(r.Z,{variant:"text",size:"small",startIcon:u.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},u.createElement(a.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},7106:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var n=l(48041),r=(l(49231),l(54852));const a={},o=void 0,u={unversionedId:"solana/idl/accounts/SbState",id:"solana/idl/accounts/SbState",title:"SbState",description:"Size 0.008741760 SOL",source:"@site/docs/solana/idl/accounts/SbState.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/SbState",permalink:"/solana/idl/accounts/SbState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"PermissionAccountData",permalink:"/solana/idl/accounts/PermissionAccountData"},next:{title:"SlidingResultAccountData",permalink:"/solana/idl/accounts/SlidingResultAccountData"}},i={},d=[],s={toc:d},c="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(c,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"Size: "),"1128 Bytes",(0,r.kt)("br",null),(0,r.kt)("b",null,"Rent Exemption: "),"0.008741760 SOL",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The account authority permitted to make account changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenMint"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The token mint used for oracle rewards, aggregator leases, and other reward incentives.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenVault"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Token vault used by the program to receive kickbacks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"daoMint"),(0,r.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"The token mint used by the DAO.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[992]"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved for future info.")))))}k.isMDXComponent=!0},70682:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=l(48041),r=(l(49231),l(54852)),a=(l(93451),l(15733),l(7106),l(49675));const o={sidebar_position:20},u="Devnet",i={unversionedId:"solana/program/devnet",id:"solana/program/devnet",title:"Devnet",description:"You can find a list of Devnet feeds in the",source:"@site/docs/solana/program/devnet.mdx",sourceDirName:"solana/program",slug:"/solana/program/devnet",permalink:"/solana/program/devnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"solana",previous:{title:"Mainnet",permalink:"/solana/program/mainnet"},next:{title:"Data Feed Integration",permalink:"/solana/feed-integration"}},d={},s=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],c={toc:s},k="wrapper";function p(t){let{components:e,...l}=t;return(0,r.kt)(k,(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"devnet"},"Devnet"),(0,r.kt)("p",null,"You can find a list of Devnet feeds in the\n",(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/"},"Switchboard Explorer"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Note:")," The Solana devnet program was migrated on March 17 to a new program ID. Click here to view the old pubkeys."),(0,r.kt)("h2",null,"Program ID"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Devnet"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program ID")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"IDL Address")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"CKwZcshn4XDvhaWVH9EXnk3iu19t6t5xP2Sy2pD6TRDp",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program Data Address")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"J4CArpsbrZqu1axqQ4AnrqREs3jwoyA1M5LMiQQmAzB9",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program State Account")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"BYM81n8HvTJuqZU1PmTVcwZ9G8uoji7FKM6EaPkwphPt",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Token Vault")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"FVLfR6C2ckZhbSwBzZY4CX7YBcddUSge5BNeGQv5eKhy",mdxType:"PublicKeyButton"}))))),(0,r.kt)("h2",null,"Permissioned Queue"),(0,r.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Public Keys"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Authority")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Buffer")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"DQXUDDcDoQ2FjzjYRi45gjdRqe1EsLwoqNhW2hf488gf",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Devnet Permissioned Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedVrfEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"enableBufferRelayers")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null,"12500")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null,"180"))))))),(0,r.kt)("h2",null,"Permissionless Queue"),(0,r.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Public Keys"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Authority")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Buffer")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"7yJ3sSifpmUFB5BcXy6yMDje15xw2CovJjfXfBKsCfT5",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"GN9jjCy2THzZxhYqZETmPM3my8vg4R5JyNkgULddUMa5",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Devnet Permissionless Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"True")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedVrfEnabled")),(0,r.kt)("td",null,"True")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"enableBufferRelayers")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null,"12500")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null,"180")))))))),(0,r.kt)("h2",{id:"program-id"},"Program ID"),(0,r.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Devnet"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program ID")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"IDL Address")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program Data Address")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"7nYabs9dUhvxYwdTnrWVBL9MYviKSfrEbdWCUbcnwkpF",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program State Account")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"CyZuD7RPDcrqCGbNvLCyqk6Py9cEZTKmNKujfPi3ynDd",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Token Vault")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"7hkp1xfPBcD2t1vZMoWWQPzipHVcXeLAAaiGXdPSfDie",mdxType:"PublicKeyButton"}))))),(0,r.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,r.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Public Keys"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"PeRMnAqNqHQYHUuCBEjhm1XPeVTh4BxjY4t4TPan1pG",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Authority")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Buffer")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"dBufSqtKN59Whpq3oeh6pyxJm1yzpf9XJTTubTKVQtf",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"crnKsPsuP6f7uiDbAYYw66h2RNBrqoazmtZHwazkC6V",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Devnet Permissioned Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedVrfEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"enableBufferRelayers")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null,"12500")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null,"180"))))))),(0,r.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,r.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Public Keys"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"uPeRMdfPmrPqgRWSrjAnAkH78RqAhe5kXoW6vBYRqFX",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Authority")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Mint")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Buffer")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"dBufJumLPqiEhSvVK9D8tp8vkDCgMXWfDnaHgGZUnBj",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{publicKey:"UcrnK4w2HXCEjY8z6TcQ9tysYr3c9VcFLdYAU9YQP5e",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Devnet Permissionless Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"True")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedVrfEnabled")),(0,r.kt)("td",null,"True")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"enableBufferRelayers")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null,"12500")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null,"180"))))))))}p.isMDXComponent=!0}}]);