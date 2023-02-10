"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97523],{24008:(t,e,l)=>{l.d(e,{Z:()=>d});var n=l(99226),r=l(92949),u=l(44996),a=l(67294);const d=t=>{const{colorMode:e}=(0,r.I)();let l=(0,u.Z)("dark"===e&&t.darkImg?t.darkImg:t.img),d="inherit";t.lightBg&&"dark"!==e&&(d=t.lightBg),t.darkBg&&"dark"===e&&(d=t.darkBg);let s={};return t.sx&&(s={backgroundColor:d,m:"auto",display:"flex",...s,...t.sx}),a.createElement(n.Z,{component:"img",sx:s,src:l})}},55205:(t,e,l)=>{l.d(e,{Z:()=>s});var n=l(15327),r=l(4665),u=l(15861),a=l(41899),d=l(67294);const s=t=>{let e={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};t.sx&&(e={...e,...t.sx});return d.createElement(n.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},d.createElement(r.Z,{variant:"text",size:"small",startIcon:d.createElement(a.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const e=document.createElement("textarea");e.value=t.publicKey,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},d.createElement(u.Z,{sx:e,color:"textSecondary"},t.publicKey)))}},88458:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>k});var n=l(83117),r=(l(67294),l(3905)),u=(l(24008),l(39960),l(55205));const a={sidebar_position:10},d="Mainnet",s={unversionedId:"aptos/program/mainnet",id:"aptos/program/mainnet",title:"Mainnet",description:"Program ID",source:"@site/docs/aptos/program/mainnet.mdx",sourceDirName:"aptos/program",slug:"/aptos/program/mainnet",permalink:"/aptos/program/mainnet",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"aptos",previous:{title:"Overview",permalink:"/aptos/"},next:{title:"Testnet",permalink:"/aptos/program/testnet"}},o={},k=[{value:"Program ID",id:"program-id",level:2},{value:"Permissioned Queue",id:"permissioned-queue",level:2},{value:"Permissionless Queue",id:"permissionless-queue",level:2}],i={toc:k};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mainnet"},"Mainnet"),(0,r.kt)("h2",{id:"program-id"},"Program ID"),(0,r.kt)("p",null,"Below are the public keys associated with the Switchboard V2 deployment."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Account"),(0,r.kt)("th",null,"Address"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Program ID")),(0,r.kt)("td",null,(0,r.kt)(u.Z,{publicKey:"0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"State Address")),(0,r.kt)("td",null,(0,r.kt)(u.Z,{publicKey:"0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",mdxType:"PublicKeyButton"}))))),(0,r.kt)("h2",{id:"permissioned-queue"},"Permissioned Queue"),(0,r.kt)("p",null,"The permissioned queue requires aggregators to have ",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE"),"\npermissions before using the queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Addresses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(u.Z,{publicKey:"0x11fbd91e4a718066891f37958f0b68d10e720f2edf8d57854fb20c299a119a8c",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(u.Z,{publicKey:"0xbc9576fedda51d33e8129b5f122ef4707c2079dfb11cd836e86adcb168cbd473",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Mainnet Permissioned Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null,"180")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"open_round_reward")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"save_confirmation_reward")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"rewasave_rewardrd")),(0,r.kt)("td",null,"0"))))))),(0,r.kt)("h2",{id:"permissionless-queue"},"Permissionless Queue"),(0,r.kt)("p",null,"The permissionless queue does not require aggregators to have\n",(0,r.kt)("inlineCode",{parentName:"p"},"PERMIT_ORACLE_QUEUE_USAGE")," permissions before using a queue's resources."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Addresses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Oracle Queue")),(0,r.kt)("td",null,(0,r.kt)(u.Z,{publicKey:"0xc887072e37f17f9cc7afc0a00e2b283775d703c610acca3997cb26e74bc53f3b",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Crank #1")),(0,r.kt)("td",null,(0,r.kt)(u.Z,{publicKey:"0x7d5ced8797f212c2eeb36486d5e5f30c1043530a340fe9debf4fc958559f3ec4",mdxType:"PublicKeyButton"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("div",{className:"centeredText"},(0,r.kt)("b",null,"Mainnet Permissionless Queue Settings")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("table",{className:"table_no_border"},(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"unpermissionedFeedsEnabled")),(0,r.kt)("td",null,"True")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"slashingEnabled")),(0,r.kt)("td",null,"False")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"minStake")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"oracleTimeout")),(0,r.kt)("td",null,"180")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"reward")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"open_round_reward")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"save_confirmation_reward")),(0,r.kt)("td",null,"0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"save_reward")),(0,r.kt)("td",null,"0"))))))))}c.isMDXComponent=!0}}]);