"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99288],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35371:(e,t,n)=>{var r=n(68001);t.Z=void 0;var o=r(n(28627)),a=n(20264),i=(0,o.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=i},94731:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(92897),o=n(45675),a=n(49231),i=n(19841),l=n(75965),s=n(32301),c=n(10803),d=n(56133),u=n(32268),p=n(46568),m=n(92899),b=n(1274),v=n(7523);function h(e){return(0,v.Z)("MuiButton",e)}const y=(0,b.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const g=a.createContext({});var x=n(20264);const k=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,m.Z)(n.color)}`],t[`size${(0,m.Z)(n.size)}`],t[`${n.variant}Size${(0,m.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,r;return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${y.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${y.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}})),z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},f(e)))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(n.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},f(e)))),Z=a.forwardRef((function(e,t){const n=a.useContext(g),c=(0,l.Z)(n,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:b="primary",component:v="button",className:y,disabled:f=!1,disableElevation:Z=!1,disableFocusRipple:C=!1,endIcon:O,focusVisibleClassName:P,fullWidth:E=!1,size:I="medium",startIcon:T,type:$,variant:R="text"}=d,M=(0,r.Z)(d,k),j=(0,o.Z)({},d,{color:b,component:v,disabled:f,disableElevation:Z,disableFocusRipple:C,fullWidth:E,size:I,type:$,variant:R}),N=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:a,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,m.Z)(t)}`,`size${(0,m.Z)(a)}`,`${i}Size${(0,m.Z)(a)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(a)}`]},d=(0,s.Z)(c,h,l);return(0,o.Z)({},l,d)})(j),D=T&&(0,x.jsx)(z,{className:N.startIcon,ownerState:j,children:T}),W=O&&(0,x.jsx)(w,{className:N.endIcon,ownerState:j,children:O});return(0,x.jsxs)(S,(0,o.Z)({ownerState:j,className:(0,i.Z)(n.className,N.root,y),component:v,disabled:f,focusRipple:!C,focusVisibleClassName:(0,i.Z)(N.focusVisible,P),ref:t,type:$},M,{classes:N,children:[D,p,W]}))}))},49675:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(69787),o=n(94731),a=n(69681),i=n(35371),l=n(49231);const s=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return l.createElement(r.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},l.createElement(o.Z,{variant:"text",size:"small",startIcon:l.createElement(i.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},l.createElement(a.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},17567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(48041),o=(n(49231),n(54852)),a=n(49675);const i={sidebar_position:10},l="Mainnet",s={unversionedId:"near/program/mainnet",id:"near/program/mainnet",title:"Mainnet",description:"Program ID",source:"@site/docs/near/program/mainnet.mdx",sourceDirName:"near/program",slug:"/near/program/mainnet",permalink:"/near/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"near",previous:{title:"Overview",permalink:"/near/"},next:{title:"Testnet",permalink:"/near/program/testnet"}},c={},d=[{value:"Program ID",id:"program-id",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mainnet"},"Mainnet"),(0,o.kt)("h2",{id:"program-id"},"Program ID"),(0,o.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Mainnet"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Program ID")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"switchboard-v2.near",mdxType:"PublicKeyButton"}))))),(0,o.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,o.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,o.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Public Keys"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Oracle Queue")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"Ztup1aJ8WTe81RZHx7nUP9zxUMrDe9r2TyTCzRzpRoY",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Authority")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"sbv2-authority.near",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Mint")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"wrap.near",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Crank #1")),(0,o.kt)("td",null,(0,o.kt)(a.Z,{publicKey:"HeS3xrDqHA2CSHTmN9osstz8vbXfgh2mmcGixJ1v9NFx",mdxType:"PublicKeyButton"}))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("div",{className:"centeredText"},(0,o.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},(0,o.kt)("table",{className:"table_no_border"},(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"unpermissionedFeedsEnabled")),(0,o.kt)("td",null,"True")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"slashingEnabled")),(0,o.kt)("td",null,"False")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"minStake")),(0,o.kt)("td",null,"0")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"oracleTimeout")),(0,o.kt)("td",null,"600"))))))))}m.isMDXComponent=!0}}]);