"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99288],{15861:(t,e,n)=>{n.d(e,{Z:()=>v});var r=n(80102),a=n(83117),l=n(67294),o=n(86010),i=n(39707),u=n(94780),s=n(90948),p=n(33616),m=n(98216),d=n(34867);function c(t){return(0,d.Z)("MuiTypography",t)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var k=n(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,m.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=l.forwardRef((function(t,e){const n=(0,p.Z)({props:t,name:"MuiTypography"}),l=(t=>y[t]||t)(n.color),s=(0,i.Z)((0,a.Z)({},n,{color:l})),{align:d="inherit",className:v,component:x,gutterBottom:Z=!1,noWrap:f=!1,paragraph:T=!1,variant:w="body1",variantMapping:M=b}=s,P=(0,r.Z)(s,g),B=(0,a.Z)({},s,{align:d,color:l,className:v,component:x,gutterBottom:Z,noWrap:f,paragraph:T,variant:w,variantMapping:M}),C=x||(T?"p":M[w]||b[w])||"span",K=(t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:a,variant:l,classes:o}=t,i={root:["root",l,"inherit"!==t.align&&`align${(0,m.Z)(e)}`,n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,u.Z)(i,c,o)})(B);return(0,k.jsx)(h,(0,a.Z)({as:C,ref:e,ownerState:B,className:(0,o.Z)(K.root,v)},P))}))},55205:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(15327),a=n(4665),l=n(15861),o=n(41899),i=n(67294);const u=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return i.createElement(r.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(a.Z,{variant:"text",size:"small",startIcon:i.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},i.createElement(l.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},73874:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(83117),a=(n(67294),n(3905)),l=n(55205);const o={sidebar_position:10},i="Mainnet",u={unversionedId:"near/program/mainnet",id:"near/program/mainnet",title:"Mainnet",description:"Program ID",source:"@site/docs/near/program/mainnet.mdx",sourceDirName:"near/program",slug:"/near/program/mainnet",permalink:"/near/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"near",previous:{title:"Overview",permalink:"/near/"},next:{title:"Testnet",permalink:"/near/program/testnet"}},s={},p=[{value:"Program ID",id:"program-id",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mainnet"},"Mainnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Mainnet"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"switchboard-v2.near",mdxType:"PublicKeyButton"}))))),(0,a.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,a.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,a.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Public Keys"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"Ztup1aJ8WTe81RZHx7nUP9zxUMrDe9r2TyTCzRzpRoY",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Authority")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"sbv2-authority.near",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Mint")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"wrap.near",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Crank #1")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"HeS3xrDqHA2CSHTmN9osstz8vbXfgh2mmcGixJ1v9NFx",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("div",{className:"centeredText"},(0,a.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("table",{className:"table_no_border"},(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"unpermissionedFeedsEnabled")),(0,a.kt)("td",null,"True")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"slashingEnabled")),(0,a.kt)("td",null,"False")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"minStake")),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"oracleTimeout")),(0,a.kt)("td",null,"600"))))))))}d.isMDXComponent=!0}}]);