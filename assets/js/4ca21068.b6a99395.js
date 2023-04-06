"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62342],{35371:(e,t,a)=>{var o=a(68001);t.Z=void 0;var r=o(a(28627)),n=a(20264),i=(0,r.default)((0,n.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=i},94731:(e,t,a)=>{a.d(t,{Z:()=>z});var o=a(92897),r=a(45675),n=a(49231),i=a(19841),s=a(75965),l=a(32301),d=a(10803),c=a(56133),p=a(32268),m=a(46568),u=a(92899),v=a(1274),g=a(7523);function h(e){return(0,g.Z)("MuiButton",e)}const b=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const x=n.createContext({});var f=a(20264);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),k=(0,c.ZP)(m.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,u.Z)(a.color)}`],t[`size${(0,u.Z)(a.size)}`],t[`${a.variant}Size${(0,u.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var a,o;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),S=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,u.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e)))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,u.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e)))),z=n.forwardRef((function(e,t){const a=n.useContext(x),d=(0,s.Z)(a,e),c=(0,p.Z)({props:d,name:"MuiButton"}),{children:m,color:v="primary",component:g="button",className:b,disabled:Z=!1,disableElevation:z=!1,disableFocusRipple:C=!1,endIcon:N,focusVisibleClassName:R,fullWidth:M=!1,size:I="medium",startIcon:E,type:$,variant:P="text"}=c,T=(0,o.Z)(c,y),j=(0,r.Z)({},c,{color:v,component:g,disabled:Z,disableElevation:z,disableFocusRipple:C,fullWidth:M,size:I,type:$,variant:P}),D=(e=>{const{color:t,disableElevation:a,fullWidth:o,size:n,variant:i,classes:s}=e,d={root:["root",i,`${i}${(0,u.Z)(t)}`,`size${(0,u.Z)(n)}`,`${i}Size${(0,u.Z)(n)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(n)}`]},c=(0,l.Z)(d,h,s);return(0,r.Z)({},s,c)})(j),L=E&&(0,f.jsx)(S,{className:D.startIcon,ownerState:j,children:E}),W=N&&(0,f.jsx)(w,{className:D.endIcon,ownerState:j,children:N});return(0,f.jsxs)(k,(0,r.Z)({ownerState:j,className:(0,i.Z)(a.className,D.root,b),component:g,disabled:Z,focusRipple:!C,focusVisibleClassName:(0,i.Z)(D.focusVisible,R),ref:t,type:$},T,{classes:D,children:[L,m,W]}))}))},82764:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(45675),r=a(92897),n=a(49231),i=a(19841),s=a(32301),l=a(56133),d=a(32268),c=a(38026),p=a(1274),m=a(7523);function u(e){return(0,m.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var v=a(20264);const g=["className","raised"],h=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=a,c=(0,r.Z)(a,g),p=(0,o.Z)({},a,{raised:l}),m=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(p);return(0,v.jsx)(h,(0,o.Z)({className:(0,i.Z)(m.root,n),elevation:l?8:void 0,ref:t,ownerState:p},c))}))},63607:(e,t,a)=>{a.d(t,{Z:()=>h});var o=a(45675),r=a(92897),n=a(49231),i=a(19841),s=a(32301),l=a(56133),d=a(32268),c=a(1274),p=a(7523);function m(e){return(0,p.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var u=a(20264);const v=["className","component"],g=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),h=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=a,c=(0,r.Z)(a,v),p=(0,o.Z)({},a,{component:l}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(p);return(0,u.jsx)(g,(0,o.Z)({as:l,className:(0,i.Z)(h.root,n),ownerState:p,ref:t},c))}))},27429:(e,t,a)=>{a.d(t,{Z:()=>Z});var o=a(92897),r=a(45675),n=a(49231),i=a(19841),s=a(32301),l=a(69681),d=a(32268),c=a(56133),p=a(1274),m=a(7523);function u(e){return(0,m.Z)("MuiCardHeader",e)}const v=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var g=a(20264);const h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.Z)({[`& .${v.title}`]:t.title,[`& .${v.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),x=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Z=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:c,className:p,component:m="div",disableTypography:v=!1,subheader:Z,subheaderTypographyProps:k,title:S,titleTypographyProps:w}=a,z=(0,o.Z)(a,h),C=(0,r.Z)({},a,{component:m,disableTypography:v}),N=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)})(C);let R=S;null==R||R.type===l.Z||v||(R=(0,g.jsx)(l.Z,(0,r.Z)({variant:c?"body2":"h5",className:N.title,component:"span",display:"block"},w,{children:R})));let M=Z;return null==M||M.type===l.Z||v||(M=(0,g.jsx)(l.Z,(0,r.Z)({variant:c?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:M}))),(0,g.jsxs)(b,(0,r.Z)({className:(0,i.Z)(N.root,p),as:m,ref:t,ownerState:C},z,{children:[c&&(0,g.jsx)(x,{className:N.avatar,ownerState:C,children:c}),(0,g.jsxs)(y,{className:N.content,ownerState:C,children:[R,M]}),n&&(0,g.jsx)(f,{className:N.action,ownerState:C,children:n})]}))}))},49675:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(69787),r=a(94731),n=a(69681),i=a(35371),s=a(49231);const l=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return s.createElement(o.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},s.createElement(r.Z,{variant:"text",size:"small",startIcon:s.createElement(i.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},s.createElement(n.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},26365:(e,t,a)=>{a.d(t,{Z:()=>h});var o=a(68868),r=a(49231),n=a(63607),i=a(69681),s=a(44018),l=a(27429),d=a(82764),c=a(15733),p=a(57236),m=a(65137);const u=(0,p.Z)(d.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),v=(0,p.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:a,imageDark:o,description:l,to:d,sx:p}=e;const{colorMode:g}=(0,m.I)();return r.createElement(c.Z,{href:d,style:{textDecoration:"none"}},r.createElement(u,{dark:"dark"===g?1:0,sx:p},r.createElement(n.Z,{sx:{height:"100%",width:"100%"}},r.createElement(v,{avatar:r.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===g&&o?o:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?r.createElement(r.Fragment,null,r.createElement(s.Z,{sx:{marginBottom:"1rem"}}),r.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):r.createElement(r.Fragment,null))))}function h(e){let{items:t,cols:a,sx:n,direction:i,justifyContent:s,alignItems:l}=e;return r.createElement(o.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:s,alignItems:l},t.map((e=>r.createElement(o.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/a??2)},r.createElement(g,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n})))))}},47565:(e,t,a)=>{a.d(t,{ZP:()=>d});var o=a(48041),r=(a(49231),a(54852)),n=a(26365),i=a(43939);const s={toc:[]},l="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.Z,{cols:2,items:[{to:"/aptos/dev/move/",title:"Rust",description:"View the sbv2-aptos Move module",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/move/logo.png")})},{to:"/aptos/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/aptos.js npm package",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})},{to:"/aptos/dev/cli/",title:"CLI",description:"View the @switchboard-xyz/cli npm package",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/terminal/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/terminal/dark.svg")})}],mdxType:"RoundedCardGroup"}))}d.isMDXComponent=!0},85751:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var o=a(48041),r=(a(49231),a(54852)),n=a(26365),i=a(43939),s=a(49675),l=a(47565);const d={sidebar_position:1,title:"Overview",slug:"."},c=void 0,p={unversionedId:"aptos/overview",id:"aptos/overview",title:"Overview",description:"Getting Started",source:"@site/docs/aptos/overview.mdx",sourceDirName:"aptos",slug:"/aptos/",permalink:"/aptos/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"aptos",next:{title:"Mainnet",permalink:"/aptos/program/mainnet"}},m={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Program IDs",id:"program-ids",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Resources",id:"resources",level:2}],v={toc:u},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,o.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To get started, clone the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-aptos"},"sbv2-aptos")," repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-aptos\n")),(0,r.kt)("h2",{id:"program-ids"},"Program IDs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Network")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Program ID")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s.Z,{publicKey:"0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",mdxType:"PublicKeyButton"})," ",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"aptos/program/mainnet"},"program/mainnet")," for a full list of public keys.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s.Z,{publicKey:"0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",mdxType:"PublicKeyButton"})," ",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"aptos/program/testnet"},"program/testnet")," for a full list of public keys.")))),(0,r.kt)("h2",{id:"libraries"},"Libraries"),(0,r.kt)(l.ZP,{mdxType:"AptosLibraries"}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)(n.Z,{items:[{to:"/aptos/dev",title:"Developer Resources",description:"Learn how to develop with Switchboard on Aptos",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/develop/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/develop/dark.svg")})}],mdxType:"RoundedCardGroup"}))}h.isMDXComponent=!0}}]);