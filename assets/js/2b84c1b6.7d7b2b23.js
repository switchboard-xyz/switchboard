"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45518,97299],{54852:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var l=n(49231);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=d(n),k=a,m=c["".concat(u,".").concat(k)]||c[k]||p[k]||r;return n?l.createElement(m,o(o({ref:e},s),{},{components:n})):l.createElement(m,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},35371:(t,e,n)=>{var l=n(68001);e.Z=void 0;var a=l(n(28627)),r=n(20264),o=(0,a.default)((0,r.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");e.Z=o},94731:(t,e,n)=>{n.d(e,{Z:()=>w});var l=n(92897),a=n(45675),r=n(49231),o=n(19841),i=n(75965),u=n(32301),d=n(10803),s=n(56133),c=n(32268),p=n(46568),k=n(92899),m=n(1274),b=n(7523);function y(t){return(0,b.Z)("MuiButton",t)}const v=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const h=r.createContext({});var g=n(20264);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=t=>(0,a.Z)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,s.ZP)(p.Z,{shouldForwardProp:t=>(0,s.FO)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${(0,k.Z)(n.color)}`],e[`size${(0,k.Z)(n.size)}`],e[`${n.variant}Size${(0,k.Z)(n.size)}`],"inherit"===n.color&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})((({theme:t,ownerState:e})=>{var n,l;return(0,a.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===e.variant&&"inherit"!==e.color&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===e.variant&&"inherit"!==e.color&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===e.variant&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===e.variant&&"inherit"!==e.color&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":(0,a.Z)({},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${v.focusVisible}`]:(0,a.Z)({},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${v.disabled}`]:(0,a.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===e.variant&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"contained"===e.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===e.variant&&{padding:"6px 8px"},"text"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main},"outlined"===e.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(t.palette[e.color].main,.5)}`},"contained"===e.variant&&{color:t.vars?t.vars.palette.text.primary:null==(n=(l=t.palette).getContrastText)?void 0:n.call(l,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},"contained"===e.variant&&"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},"inherit"===e.color&&{color:"inherit",borderColor:"currentColor"},"small"===e.size&&"text"===e.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"text"===e.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===e.size&&"outlined"===e.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"outlined"===e.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===e.size&&"contained"===e.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===e.size&&"contained"===e.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})}),(({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}})),z=(0,s.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${(0,k.Z)(n.size)}`]]}})((({ownerState:t})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t)))),Z=(0,s.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${(0,k.Z)(n.size)}`]]}})((({ownerState:t})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t)))),w=r.forwardRef((function(t,e){const n=r.useContext(h),d=(0,i.Z)(n,t),s=(0,c.Z)({props:d,name:"MuiButton"}),{children:p,color:m="primary",component:b="button",className:v,disabled:x=!1,disableElevation:w=!1,disableFocusRipple:P=!1,endIcon:T,focusVisibleClassName:E,fullWidth:N=!1,size:C="medium",startIcon:K,type:M,variant:O="text"}=s,B=(0,l.Z)(s,f),I=(0,a.Z)({},s,{color:m,component:b,disabled:x,disableElevation:w,disableFocusRipple:P,fullWidth:N,size:C,type:M,variant:O}),R=(t=>{const{color:e,disableElevation:n,fullWidth:l,size:r,variant:o,classes:i}=t,d={root:["root",o,`${o}${(0,k.Z)(e)}`,`size${(0,k.Z)(r)}`,`${o}Size${(0,k.Z)(r)}`,"inherit"===e&&"colorInherit",n&&"disableElevation",l&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,k.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,k.Z)(r)}`]},s=(0,u.Z)(d,y,i);return(0,a.Z)({},i,s)})(I),D=K&&(0,g.jsx)(z,{className:R.startIcon,ownerState:I,children:K}),F=T&&(0,g.jsx)(Z,{className:R.endIcon,ownerState:I,children:T});return(0,g.jsxs)(S,(0,a.Z)({ownerState:I,className:(0,o.Z)(n.className,R.root,v),component:b,disabled:x,focusRipple:!P,focusVisibleClassName:(0,o.Z)(R.focusVisible,E),ref:e,type:M},B,{classes:R,children:[D,p,F]}))}))},93451:(t,e,n)=>{n.d(e,{Z:()=>i});var l=n(229),a=n(65137),r=n(43939),o=n(49231);const i=t=>{const{colorMode:e}=(0,a.I)();let n=(0,r.Z)("dark"===e&&t.darkImg?t.darkImg:t.img),i="inherit";t.lightBg&&"dark"!==e&&(i=t.lightBg),t.darkBg&&"dark"===e&&(i=t.darkBg);let u={};return t.sx&&(u={backgroundColor:i,m:"auto",display:"flex",...u,...t.sx}),o.createElement(l.Z,{component:"img",sx:u,src:n})}},49675:(t,e,n)=>{n.d(e,{Z:()=>u});var l=n(69787),a=n(94731),r=n(69681),o=n(35371),i=n(49231);const u=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return i.createElement(l.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(a.Z,{variant:"text",size:"small",startIcon:i.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},i.createElement(r.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},7106:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var l=n(48041),a=(n(49231),n(54852));const r={},o=void 0,i={unversionedId:"solana/idl/accounts/SbState",id:"solana/idl/accounts/SbState",title:"SbState",description:"Size 0.008741760 SOL",source:"@site/docs/solana/idl/accounts/SbState.md",sourceDirName:"solana/idl/accounts",slug:"/solana/idl/accounts/SbState",permalink:"/solana/idl/accounts/SbState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"PermissionAccountData",permalink:"/solana/idl/accounts/PermissionAccountData"},next:{title:"SlidingResultAccountData",permalink:"/solana/idl/accounts/SlidingResultAccountData"}},u={},d=[],s={toc:d},c="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("b",null,"Size: "),"1128 Bytes",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: "),"0.008741760 SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The account authority permitted to make account changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenMint"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The token mint used for oracle rewards, aggregator leases, and other reward incentives.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenVault"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"Token vault used by the program to receive kickbacks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"daoMint"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The token mint used by the DAO.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[992]"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved for future info.")))))}p.isMDXComponent=!0},15038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var l=n(48041),a=(n(49231),n(54852)),r=(n(93451),n(15733),n(7106),n(49675));const o={sidebar_position:10},i="Mainnet",u={unversionedId:"solana/program/mainnet",id:"solana/program/mainnet",title:"Mainnet",description:"You can find a list of Mainnet feeds in the",source:"@site/docs/solana/program/mainnet.mdx",sourceDirName:"solana/program",slug:"/solana/program/mainnet",permalink:"/solana/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"solana",previous:{title:"Overview",permalink:"/solana/"},next:{title:"Devnet",permalink:"/solana/program/devnet"}},d={},s=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],c={toc:s},p="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mainnet"},"Mainnet"),(0,a.kt)("p",null,"You can find a list of Mainnet feeds in the\n",(0,a.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/"},"Switchboard Explorer"),"."),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Mainnet-Beta"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"IDL Address")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"Fi8vncGpNKbq62gPo56G4toCehWNy77GgqGkTaAF5Lkk",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program Data Address")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"7nYabs9dUhvxYwdTnrWVBL9MYviKSfrEbdWCUbcnwkpF",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program State Account")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"CyZuD7RPDcrqCGbNvLCyqk6Py9cEZTKmNKujfPi3ynDd",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Token Vault")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"J7nSEX8ADf3pVVicd6yKy2Skvg8iLePEmkLUisAAaioD",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,a.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Buffer")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"FZ3CAm8o5zf18Ua23jhrZJRYCMtGhFxFrTux8N5yrf2T",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Mainnet Permissioned Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedVrfEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"enableBufferRelayers")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"12500")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"5JYwqvKkqp35w8Nq3ba4z1WYUeJQ1rB36V8XvaGp6zn1",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"31Sof5r1xi7dfcaz4x9Kuwm8J9ueAdDduMcme59sP8gc",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"So11111111111111111111111111111111111111112",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Buffer")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"FozqXFMS1nQKfPqwVdChr7RJ3y7ccSux39zU682kNYjJ",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(r.Z,{publicKey:"BKtF8yyQsj3Ft6jb2nkfpEKzARZVdGgdEPs6mFmZNmbA",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedVrfEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"enableBufferRelayers")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"reward")),(0,a.kt)("td",null,"12500")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);