"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62342],{55205:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(15327),i=r(4665),o=r(15861),n=r(41899),l=r(67294);const s=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return l.createElement(a.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},l.createElement(i.Z,{variant:"text",size:"small",startIcon:l.createElement(n.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},l.createElement(o.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},43725:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(86886),i=r(67294),o=r(44267),n=r(15861),l=r(21519),s=r(78445),m=r(44073),c=r(39960),d=r(13264),p=r(92949);const g=(0,d.Z)(m.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,d.Z)(s.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function b(e){let{title:t,image:r,imageDark:a,description:s,to:m,sx:d}=e;const{colorMode:b}=(0,p.I)();return i.createElement(c.Z,{href:m,style:{textDecoration:"none"}},i.createElement(g,{dark:"dark"===b?1:0,sx:d},i.createElement(o.Z,{sx:{height:"100%",width:"100%"}},i.createElement(u,{avatar:i.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===b&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?i.createElement(i.Fragment,null,i.createElement(l.Z,{sx:{marginBottom:"1rem"}}),i.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):i.createElement(i.Fragment,null))))}function k(e){let{items:t,cols:r,sx:o,direction:n,justifyContent:l,alignItems:s}=e;return i.createElement(a.ZP,{container:!0,spacing:3,direction:null!=n?n:"row",justifyContent:l,alignItems:s},t.map((e=>{var t;return i.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},i.createElement(b,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},20595:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(83117),i=(r(67294),r(3905)),o=r(43725),n=r(44996);const l={toc:[]};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{cols:2,items:[{to:"/aptos/dev/move/",title:"Rust",description:"View the sbv2-aptos Move module",image:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/move/logo.png")})},{to:"/aptos/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/aptos.js npm package",image:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/javascript/light.svg")})},{to:"/aptos/dev/cli/",title:"CLI",description:"View the @switchboard-xyz/cli npm package",image:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/terminal/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/terminal/teal.svg")})}],mdxType:"RoundedCardGroup"}))}s.isMDXComponent=!0},38022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>m,metadata:()=>d,toc:()=>g});var a=r(83117),i=(r(67294),r(3905)),o=r(43725),n=r(44996),l=r(55205),s=r(20595);const m={sidebar_position:1,title:"Overview",slug:"."},c=void 0,d={unversionedId:"aptos/overview",id:"aptos/overview",title:"Overview",description:"Getting Started",source:"@site/docs/aptos/overview.mdx",sourceDirName:"aptos",slug:"/aptos/",permalink:"/aptos/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"aptos",next:{title:"Mainnet",permalink:"/aptos/program/mainnet"}},p={},g=[{value:"Getting Started",id:"getting-started",level:2},{value:"Program IDs",id:"program-ids",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Resources",id:"resources",level:2}],u={toc:g};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"To get started, clone the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-aptos"},"sbv2-aptos")," repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-aptos\n")),(0,i.kt)("h2",{id:"program-ids"},"Program IDs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Network")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Program ID")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{publicKey:"0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8",mdxType:"PublicKeyButton"})," ",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"aptos/program/mainnet"},"program/mainnet")," for a full list of public keys.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{publicKey:"0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271",mdxType:"PublicKeyButton"})," ",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"aptos/program/testnet"},"program/testnet")," for a full list of public keys.")))),(0,i.kt)("h2",{id:"libraries"},"Libraries"),(0,i.kt)(s.ZP,{mdxType:"AptosLibraries"}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)(o.Z,{items:[{to:"/aptos/dev",title:"Developer Resources",description:"Learn how to develop with Switchboard on Aptos",image:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/develop/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/develop/dark.svg")})}],mdxType:"RoundedCardGroup"}))}b.isMDXComponent=!0}}]);