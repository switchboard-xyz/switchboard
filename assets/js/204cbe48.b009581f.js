"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73601],{96148:(e,t,a)=>{var o=a(68001);t.Z=void 0;var r=o(a(44967)),n=a(20264),i=(0,r.default)((0,n.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=i},39528:(e,t,a)=>{a.d(t,{Z:()=>C});var o=a(92897),r=a(45675),n=a(49231),i=a(19841),l=a(75965),s=a(32301),d=a(81937),c=a(3396),p=a(7206),m=a(27982),u=a(2182),v=a(1274),h=a(7523);function g(e){return(0,h.Z)("MuiButton",e)}const b=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const x=n.createContext({});var y=a(20264);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),k=(0,c.ZP)(m.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,u.Z)(a.color)}`],t[`size${(0,u.Z)(a.size)}`],t[`${a.variant}Size${(0,u.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var a,o;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(o=e.palette).getContrastText)?void 0:a.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),S=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,u.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e)))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,u.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e)))),C=n.forwardRef((function(e,t){const a=n.useContext(x),d=(0,l.Z)(a,e),c=(0,p.Z)({props:d,name:"MuiButton"}),{children:m,color:v="primary",component:h="button",className:b,disabled:Z=!1,disableElevation:C=!1,disableFocusRipple:z=!1,endIcon:N,focusVisibleClassName:I,fullWidth:R=!1,size:M="medium",startIcon:E,type:$,variant:P="text"}=c,T=(0,o.Z)(c,f),D=(0,r.Z)({},c,{color:v,component:h,disabled:Z,disableElevation:C,disableFocusRipple:z,fullWidth:R,size:M,type:$,variant:P}),j=(e=>{const{color:t,disableElevation:a,fullWidth:o,size:n,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,u.Z)(t)}`,`size${(0,u.Z)(n)}`,`${i}Size${(0,u.Z)(n)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(n)}`]},c=(0,s.Z)(d,g,l);return(0,r.Z)({},l,c)})(D),L=E&&(0,y.jsx)(S,{className:j.startIcon,ownerState:D,children:E}),F=N&&(0,y.jsx)(w,{className:j.endIcon,ownerState:D,children:N});return(0,y.jsxs)(k,(0,r.Z)({ownerState:D,className:(0,i.Z)(a.className,j.root,b),component:h,disabled:Z,focusRipple:!z,focusVisibleClassName:(0,i.Z)(j.focusVisible,I),ref:t,type:$},T,{classes:j,children:[L,m,F]}))}))},55106:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(45675),r=a(92897),n=a(49231),i=a(19841),l=a(32301),s=a(3396),d=a(7206),c=a(3170),p=a(1274),m=a(7523);function u(e){return(0,m.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var v=a(20264);const h=["className","raised"],g=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:s=!1}=a,c=(0,r.Z)(a,h),p=(0,o.Z)({},a,{raised:s}),m=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)})(p);return(0,v.jsx)(g,(0,o.Z)({className:(0,i.Z)(m.root,n),elevation:s?8:void 0,ref:t,ownerState:p},c))}))},65218:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(45675),r=a(92897),n=a(49231),i=a(19841),l=a(32301),s=a(3396),d=a(7206),c=a(1274),p=a(7523);function m(e){return(0,p.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var u=a(20264);const v=["className","component"],h=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:s="div"}=a,c=(0,r.Z)(a,v),p=(0,o.Z)({},a,{component:s}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},m,t)})(p);return(0,u.jsx)(h,(0,o.Z)({as:s,className:(0,i.Z)(g.root,n),ownerState:p,ref:t},c))}))},932:(e,t,a)=>{a.d(t,{Z:()=>Z});var o=a(92897),r=a(45675),n=a(49231),i=a(19841),l=a(32301),s=a(3411),d=a(7206),c=a(3396),p=a(1274),m=a(7523);function u(e){return(0,m.Z)("MuiCardHeader",e)}const v=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=a(20264);const g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,r.Z)({[`& .${v.title}`]:t.title,[`& .${v.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),x=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Z=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:c,className:p,component:m="div",disableTypography:v=!1,subheader:Z,subheaderTypographyProps:k,title:S,titleTypographyProps:w}=a,C=(0,o.Z)(a,g),z=(0,r.Z)({},a,{component:m,disableTypography:v}),N=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)})(z);let I=S;null==I||I.type===s.Z||v||(I=(0,h.jsx)(s.Z,(0,r.Z)({variant:c?"body2":"h5",className:N.title,component:"span",display:"block"},w,{children:I})));let R=Z;return null==R||R.type===s.Z||v||(R=(0,h.jsx)(s.Z,(0,r.Z)({variant:c?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:R}))),(0,h.jsxs)(b,(0,r.Z)({className:(0,i.Z)(N.root,p),as:m,ref:t,ownerState:z},C,{children:[c&&(0,h.jsx)(x,{className:N.avatar,ownerState:z,children:c}),(0,h.jsxs)(f,{className:N.content,ownerState:z,children:[I,R]}),n&&(0,h.jsx)(y,{className:N.action,ownerState:z,children:n})]}))}))},70916:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(86543),r=a(39528),n=a(3411),i=a(96148),l=a(49231);const s=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return l.createElement(o.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},l.createElement(r.Z,{variant:"text",size:"small",startIcon:l.createElement(i.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},l.createElement(n.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},55724:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(66685),r=a(49231),n=a(65218),i=a(3411),l=a(57210),s=a(932),d=a(55106),c=a(86583),p=a(74072),m=a(27567);const u=(0,p.Z)(d.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),v=(0,p.Z)(s.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function h(e){let{title:t,image:a,imageDark:o,description:s,to:d,sx:p}=e;const{colorMode:h}=(0,m.I)();return r.createElement(c.Z,{href:d,style:{textDecoration:"none"}},r.createElement(u,{dark:"dark"===h?1:0,sx:p},r.createElement(n.Z,{sx:{height:"100%",width:"100%"}},r.createElement(v,{avatar:r.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===h&&o?o:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?r.createElement(r.Fragment,null,r.createElement(l.Z,{sx:{marginBottom:"1rem"}}),r.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):r.createElement(r.Fragment,null))))}function g(e){let{items:t,cols:a,sx:n,direction:i,justifyContent:l,alignItems:s}=e;return r.createElement(o.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:l,alignItems:s},t.map((e=>r.createElement(o.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/a??2)},r.createElement(h,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n})))))}},86567:(e,t,a)=>{a.d(t,{ZP:()=>d});var o=a(48041),r=(a(49231),a(54852)),n=a(55724),i=a(97530);const l={toc:[]},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.Z,{cols:2,items:[{to:"/coredao/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/evm.js npm package",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})},{to:"/coredao/dev/solidity/ISwitchboard",title:"ISwitchboard.sol",description:"View the ISwitchboard.sol contract",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/solidity/light.svg")})},{to:"/coredao/dev/solidity/ILegacyOracle",title:"ILegacyOracle.sol",description:"View the ILegacyOracle.sol contract",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/solidity/light.svg")})}],mdxType:"RoundedCardGroup"}))}d.isMDXComponent=!0},16197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var o=a(48041),r=(a(49231),a(54852)),n=a(55724),i=a(97530),l=a(70916),s=a(86567);const d={sidebar_position:1,title:"Overview",slug:"."},c=void 0,p={unversionedId:"coredao/overview",id:"coredao/overview",title:"Overview",description:"Getting Started",source:"@site/docs/coredao/overview.mdx",sourceDirName:"coredao",slug:"/coredao/",permalink:"/coredao/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"coredao",next:{title:"Mainnet",permalink:"/coredao/program/mainnet"}},m={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Program IDs",id:"program-ids",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Resources",id:"resources",level:2}],v={toc:u},h="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,o.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To get started, clone the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-evm"},"sbv2-evm")," repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-evm\n")),(0,r.kt)("h2",{id:"program-ids"},"Program IDs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Network")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Program ID")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{publicKey:"0x73d6C66874e570f058834cAA666b2c352F1C792D",mdxType:"PublicKeyButton"})," ",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"aptos/program/mainnet"},"program/mainnet")," for a full list of public keys.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{publicKey:"0xe9F5Ecb00BC437F061DF59d899F00f260740dC48",mdxType:"PublicKeyButton"})," ",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"aptos/program/testnet"},"program/testnet")," for a full list of public keys.")))),(0,r.kt)("h2",{id:"libraries"},"Libraries"),(0,r.kt)(s.ZP,{mdxType:"CoreDaoSdkLibraries"}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)(n.Z,{items:[{to:"/coredao/dev",title:"Developer Resources",description:"Learn how to develop with Switchboard on CoreDAO",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/develop/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/develop/dark.svg")})}],mdxType:"RoundedCardGroup"}))}g.isMDXComponent=!0}}]);