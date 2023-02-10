"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25310],{24008:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(99226),n=r(92949),o=r(44996),s=r(67294);const i=e=>{const{colorMode:t}=(0,n.I)();let r=(0,o.Z)("dark"===t&&e.darkImg?e.darkImg:e.img),i="inherit";e.lightBg&&"dark"!==t&&(i=e.lightBg),e.darkBg&&"dark"===t&&(i=e.darkBg);let c={};return e.sx&&(c={backgroundColor:i,m:"auto",display:"flex",...c,...e.sx}),s.createElement(a.Z,{component:"img",sx:c,src:r})}},809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(83117),n=(r(67294),r(3905)),o=r(24008),s=r(86886);r(39960);const i={sidebar_position:1,title:"Overview",slug:"/network"},c=void 0,l={unversionedId:"network/overview",id:"network/overview",title:"Overview",description:"Program State",source:"@site/docs/network/overview.mdx",sourceDirName:"network",slug:"/network",permalink:"/network",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"/network"},sidebar:"learn",next:{title:"Oracle Queue",permalink:"/queue"}},d={},u=[{value:"Program State",id:"program-state",level:2},{value:"Oracle Queues",id:"oracle-queues",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"program-state"},"Program State"),(0,n.kt)(s.ZP,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",mdxType:"Grid"},(0,n.kt)(s.ZP,{item:!0,md:4,sm:12,order:{xs:2,sm:1},mdxType:"Grid"},(0,n.kt)("p",null,"Switchboard is a multi-chain oracle, currently deployed on Aptos, NEAR, and\nSolana. Each is a native implementation with subtle differences but the overall\narchitecture remains the same. The top-level program state account controls the\ntoken mint used for oracle rewards and data feed update costs for each queue."),(0,n.kt)("p",null,"Switchboard was architected to be permissionless and allow users to create and\nmanage their own Switchboard network. Each chain can support many oracle queues,\nwhich can have varrying levels of security and trust assumptions.")),(0,n.kt)(s.ZP,{item:!0,md:8,sx:12,order:{xs:1,sm:2},mdxType:"Grid"},(0,n.kt)(o.Z,{img:"/img/L0_Architecture.png",sx:{display:"flex"},mdxType:"MarkdownImage"}))),(0,n.kt)("h2",{id:"oracle-queues"},"Oracle Queues"),(0,n.kt)("p",null,"An oracle queue is an independent realm of oracles, responsible for allocating\noracle resources for update requests from data feeds, randomness, or buffer\nrelayers. Oracle queue's act as an aggregator for on-chain consumers looking to\npublish data on-chain by specifying an upfront reward a requester is required to\npay when a new update is requested by an oracle. Oracles act as an off-chain\ncompute resource that can be utilized by on-chain programs needing a\ndecentralized way to source data."),(0,n.kt)(o.Z,{img:"/img/L1_Queue_Functional.png",sx:{display:"flex"},mdxType:"MarkdownImage"}))}p.isMDXComponent=!0}}]);