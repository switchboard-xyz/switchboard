"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18899],{15861:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(80102),a=r(83117),l=r(67294),o=r(86010),i=r(39707),s=r(94780),u=r(90948),p=r(33616),d=r(98216),m=r(34867);function c(t){return(0,m.Z)("MuiTypography",t)}(0,r(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var k=r(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=l.forwardRef((function(t,e){const r=(0,p.Z)({props:t,name:"MuiTypography"}),l=(t=>y[t]||t)(r.color),u=(0,i.Z)((0,a.Z)({},r,{color:l})),{align:m="inherit",className:v,component:Z,gutterBottom:x=!1,noWrap:f=!1,paragraph:w=!1,variant:T="body1",variantMapping:P=b}=u,B=(0,n.Z)(u,g),M=(0,a.Z)({},u,{align:m,color:l,className:v,component:Z,gutterBottom:x,noWrap:f,paragraph:w,variant:T,variantMapping:P}),K=Z||(w?"p":P[T]||b[T])||"span",S=(t=>{const{align:e,gutterBottom:r,noWrap:n,paragraph:a,variant:l,classes:o}=t,i={root:["root",l,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,s.Z)(i,c,o)})(M);return(0,k.jsx)(h,(0,a.Z)({as:K,ref:e,ownerState:M,className:(0,o.Z)(S.root,v)},B))}))},55205:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(15327),a=r(4665),l=r(15861),o=r(41899),i=r(67294);const s=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return i.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(a.Z,{variant:"text",size:"small",startIcon:i.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},i.createElement(l.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},2171:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(83117),a=(r(67294),r(3905)),l=r(55205);const o={sidebar_position:20},i="Testnet",s={unversionedId:"near/program/testnet",id:"near/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/near/program/testnet.mdx",sourceDirName:"near/program",slug:"/near/program/testnet",permalink:"/near/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"near",previous:{title:"Mainnet",permalink:"/near/program/mainnet"},next:{title:"Developer Resources",permalink:"/near/dev/"}},u={},p=[{value:"Program ID",id:"program-id",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],d={toc:p};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testnet"},"Testnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Mainnet"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"switchboard-v2.testnet",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"HFSJrvA1w2uhciLGLUfE4sADGwGBpUiAjxZPgeFSs61M",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"sbv2-authority.testnet",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"wrap.testnet",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"9Vzzu1Z74oPLctxwjRHwkKSd5H32AiQe32iMesuQwKnQ",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Testnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"180"))))))))}m.isMDXComponent=!0}}]);