"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64236],{55205:(t,e,l)=>{l.d(e,{Z:()=>k});var n=l(15327),u=l(4665),r=l(15861),s=l(41899),i=l(67294);const k=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return i.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},i.createElement(u.Z,{variant:"text",size:"small",startIcon:i.createElement(s.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},i.createElement(r.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},55719:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>k,toc:()=>a});var n=l(83117),u=(l(67294),l(3905)),r=l(55205);const s={sidebar_position:20},i="Testnet",k={unversionedId:"sui/program/testnet",id:"sui/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/sui/program/testnet.mdx",sourceDirName:"sui/program",slug:"/sui/program/testnet",permalink:"/sui/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"sui",previous:{title:"Overview",permalink:"/sui/"},next:{title:"SDK Overview",permalink:"/sui/dev/"}},o={},a=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],d={toc:a};function c(t){let{components:e,...l}=t;return(0,u.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"testnet"},"Testnet"),(0,u.kt)("h2",{id:"program-id"},"Program ID"),(0,u.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Testnet"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Program ID")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))))),(0,u.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,u.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Testnet Permissioned Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null))))))),(0,u.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,u.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,u.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{colspan:"2"},"Public Keys"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Oracle Queue")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Authority")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Mint")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Crank #1")),(0,u.kt)("td",null,(0,u.kt)(r.Z,{publicKey:"",mdxType:"PublicKeyButton"}))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("div",{className:"centeredText"},(0,u.kt)("b",null,"Testnet Permissionless Queue Settings")))),(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"2"},(0,u.kt)("table",{className:"table_no_border"},(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"unpermissionedFeedsEnabled")),(0,u.kt)("td",null,"True")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"slashingEnabled")),(0,u.kt)("td",null,"False")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"reward")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"minStake")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"oracleTimeout")),(0,u.kt)("td",null))))))))}c.isMDXComponent=!0}}]);