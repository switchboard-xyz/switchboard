"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5643],{24008:(t,e,r)=>{r.d(e,{Z:()=>c});var o=r(87357),a=r(92949),l=r(44996),n=r(67294);const c=t=>{const{colorMode:e}=(0,a.I)();let r="inherit";t.lightBg&&"dark"!==e&&(r=t.lightBg),t.darkBg&&"dark"===e&&(r=t.darkBg);let c={};return t.sx&&(c={backgroundColor:r,m:"auto",display:"flex",...c,...t.sx}),n.createElement(o.Z,{component:"img",sx:c,src:(0,l.Z)(t.img)})}},55205:(t,e,r)=>{r.d(e,{Z:()=>s});var o=r(15327),a=r(54882),l=r(15861),n=r(41899),c=r(67294);const s=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return c.createElement(o.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},c.createElement(a.Z,{variant:"text",size:"small",startIcon:c.createElement(n.Z,{sx:{fill:"#4c6fff"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},c.createElement(l.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},95022:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=r(83117),a=(r(67294),r(3905)),l=(r(24008),r(39960),r(55205));const n={sidebar_position:10},c="Testnet",s={unversionedId:"aptos/program/testnet",id:"aptos/program/testnet",title:"Testnet",description:"Program ID",source:"@site/docs/aptos/program/testnet.mdx",sourceDirName:"aptos/program",slug:"/aptos/program/testnet",permalink:"/sbv2-core/aptos/program/testnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"aptos",previous:{title:"Overview",permalink:"/sbv2-core/aptos/"},next:{title:"Devnet",permalink:"/sbv2-core/aptos/program/devnet"}},i={},d=[{value:"Program ID",id:"program-id",level:2}],u={toc:d};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testnet"},"Testnet"),(0,a.kt)("h2",{id:"program-id"},"Program ID"),(0,a.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Account"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Program ID")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"State Address")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b",mdxType:"PublicKeyButton"}))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Oracle Queue")),(0,a.kt)("td",null,(0,a.kt)(l.Z,{publicKey:"0xbdb92db64cc9b3072381c5f98c57ef77c9ceb12163187b1e691b8a677a015f61",mdxType:"PublicKeyButton"}))))))}p.isMDXComponent=!0}}]);