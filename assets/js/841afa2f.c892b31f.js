"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8842],{15861:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(80102),o=a(83117),n=a(67294),i=a(86010),l=a(39707),s=a(94780),d=a(90948),p=a(33616),u=a(98216),h=a(34867);function c(e){return(0,h.Z)("MuiTypography",e)}(0,a(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=a(85893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,u.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=n.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiTypography"}),n=(e=>b[e]||e)(a.color),d=(0,l.Z)((0,o.Z)({},a,{color:n})),{align:h="inherit",className:f,component:x,gutterBottom:v=!1,noWrap:w=!1,paragraph:T=!1,variant:Z="body1",variantMapping:D=k}=d,M=(0,r.Z)(d,g),C=(0,o.Z)({},d,{align:h,color:n,className:f,component:x,gutterBottom:v,noWrap:w,paragraph:T,variant:Z,variantMapping:D}),P=x||(T?"p":D[Z]||k[Z])||"span",W=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:o,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,c,i)})(C);return(0,m.jsx)(y,(0,o.Z)({as:P,ref:t,ownerState:C,className:(0,i.Z)(W.root,f)},M))}))},24008:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(99226),o=a(92949),n=a(44996),i=a(67294);const l=e=>{const{colorMode:t}=(0,o.I)();let a="inherit";e.lightBg&&"dark"!==t&&(a=e.lightBg),e.darkBg&&"dark"===t&&(a=e.darkBg);let l={};return e.sx&&(l={backgroundColor:a,m:"auto",display:"flex",...l,...e.sx}),i.createElement(r.Z,{component:"img",sx:l,src:(0,n.Z)(e.img)})}},38761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var r=a(83117),o=(a(67294),a(3905)),n=a(24008),i=a(15861),l=a(86886),s=a(39960);const d={sidebar_position:1,title:"Overview",slug:"/publisher"},p=void 0,u={unversionedId:"publisher/overview",id:"publisher/overview",title:"Overview",description:"\x3c!-- TODO:",source:"@site/docs/publisher/overview.mdx",sourceDirName:"publisher",slug:"/publisher",permalink:"/publisher",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"/publisher"},sidebar:"publisher",next:{title:"Exchanges",permalink:"/publisher/examples/exchanges"}},h={},c=[{value:"Connect",id:"connect",level:2},{value:"Directory",id:"directory",level:2},{value:"Checkout",id:"checkout",level:2},{value:"Lease",id:"lease",level:3},{value:"Account Creation",id:"account-creation",level:3},{value:"My Feeds",id:"my-feeds",level:2}],m={toc:c};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{variant:"h4",mdxType:"Typography"},(0,o.kt)(s.Z,{to:"https://app.switchboard.xyz/",mdxType:"Link"},"# app.switchboard.xyz")),(0,o.kt)("p",null,"The publisher site is a decentralized marketplace that allows anyone to build a\ndata feed and deploy it on-chain. The site includes a directory of pre-defined\nfeeds from popular sources such as FTX, Coinbase, or any permissionless Serum\nmarket. The publisher site streamlines the on-chain workflow and allows a user\nto configure a data feed from a convenient UI."),(0,o.kt)("h2",{id:"connect"},"Connect"),(0,o.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,o.kt)(l.ZP,{item:!0,md:4,mdxType:"Grid"},(0,o.kt)(n.Z,{img:"/img/publisher/Connect_Wallet.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,o.kt)(l.ZP,{item:!0,md:6,mdxType:"Grid"},(0,o.kt)(i.Z,{mdxType:"Typography"},"The publisher site contains a ",(0,o.kt)("i",null,"Connect Wallet")," button in the top right corner that allows you to connect your web wallet to Devnet or Mainnet."),(0,o.kt)("br",null),(0,o.kt)(i.Z,{mdxType:"Typography"},"The publisher site currently supports the following wallets:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://phantom.app/",target:"_blank"},"Phantom")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://slope.finance/",target:"_blank"},"Slope")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://wallet.coin98.com/",target:"_blank"},"Coin98")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://solflare.com/",target:"_blank"},"Solflare")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://www.sollet.io/",target:"_blank"},"Sollet"))))),(0,o.kt)("h2",{id:"directory"},"Directory"),(0,o.kt)("p",null,"The publisher site includes some pre-defined sources to help developers publish\ndata feeds. Pre-defined sources can be added to your basket by selecting them in\nthe directory, from there you can toggle individual data sources to meet your\non-chain needs."),(0,o.kt)(n.Z,{img:"/img/publisher/Landing_Page.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"}),(0,o.kt)("h2",{id:"checkout"},"Checkout"),(0,o.kt)("p",null,"During checkout, the publisher will create the necessary accounts for your data\nfeed."),(0,o.kt)("h3",{id:"lease"},"Lease"),(0,o.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,o.kt)(l.ZP,{item:!0,md:5,sm:12,mdxType:"Grid"},(0,o.kt)("b",null,(0,o.kt)("u",null,"Automatic Updates")),(0,o.kt)(i.Z,{mdxType:"Typography"},"The ",(0,o.kt)("i",null,"Enable automatic updates")," checkbox determines whether your data feed will be added to a crank. A crank allows data feeds to be updated at regular intervals. Event based feeds should uncheck this box."),(0,o.kt)("br",null),(0,o.kt)("b",null,(0,o.kt)("u",null,"Update Interval")),(0,o.kt)(i.Z,{mdxType:"Typography"},"The update interval lets you configure how often and how long a data feed should be updated for. This derives the total cost deposited into the lease contract escrow account, which is used to fund oracles each time a feed is updated. You can extend or terminate a lease at anytime."),(0,o.kt)("br",null)),(0,o.kt)(l.ZP,{item:!0,md:6,mdxType:"Grid"},(0,o.kt)(n.Z,{img:"/img/publisher/Lease_Contract_Modal.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:5},mdxType:"MarkdownImage"}))),(0,o.kt)("h3",{id:"account-creation"},"Account Creation"),(0,o.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,o.kt)(l.ZP,{item:!0,md:6,order:{xs:2,md:1},mdxType:"Grid"},(0,o.kt)(n.Z,{img:"/img/publisher/Account_Creation.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,o.kt)(l.ZP,{item:!0,md:6,order:{xs:1,md:2},mdxType:"Grid"},(0,o.kt)(i.Z,{mdxType:"Typography"},"The ",(0,o.kt)("i",null,"Account Creation")," modal gives you a summary of your balance changes before any on-chain transactions occur. Once you have verified the total cost, hit ",(0,o.kt)("i",null,"Create Feed")," to submit the transactions."),(0,o.kt)("br",null),(0,o.kt)(i.Z,{mdxType:"Typography"},"After the accounts have been created, you will be redirected to the My Feeds page to view your newly created data feeds."),(0,o.kt)("br",null),(0,o.kt)(i.Z,{mdxType:"Typography"},"By default, data feeds are added to the permissionless queue, where they can begin updating immediately. Data feeds can be upgraded to the permissioned queue by submitting a request to the Switchboard DAO."))),(0,o.kt)("h2",{id:"my-feeds"},"My Feeds"),(0,o.kt)("p",null,"The My Feeds page shows you a list of active data feeds associated with your\nwallet."),(0,o.kt)(n.Z,{img:"/img/publisher/My_Feeds.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"The publisher site lets you manage your on-chain feeds and currently lets you:"),(0,o.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,o.kt)(l.ZP,{item:!0,md:3,order:{xs:2,md:1},mdxType:"Grid"},(0,o.kt)(n.Z,{img:"/img/publisher/My_Feeds_Actions.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,o.kt)(l.ZP,{item:!0,md:7,order:{xs:1,md:2},mdxType:"Grid"},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"View Feed Details: ")," View the Aggregator configuration such as current accepted result, oracle batch size, and associated Job account public keys."),(0,o.kt)("li",null,(0,o.kt)("b",null,"View In Explorer: ")," View the Aggregator in Switchboard's explorer."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Track Feed History: ")," Optionally, add an aggregator history buffer to track the last N recorded samples."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Extend Lease: ")," Deposit funds in the feeds lease contract."),(0,o.kt)("li",null,(0,o.kt)("b",null,"Terminate Lease: ")," Withdraw remaining funds from a feeds lease contract and if present, remove it from its crank.")))))}g.isMDXComponent=!0}}]);