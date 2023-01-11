"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26117],{10686:(e,t,r)=>{r.d(t,{Z:()=>v});var o=r(44267),i=r(15861),a=r(21519),n=r(78445),s=r(44073),l=r(67294),d=r(39960),m=r(13264),c=r(92949);const p=(0,m.Z)(s.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,m.Z)(n.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:r,imageDark:n,description:s,to:m,sx:v}=e;const{colorMode:u}=(0,c.I)();return l.createElement(d.Z,{href:m,style:{textDecoration:"none"}},l.createElement(p,{dark:"dark"===u?1:0,sx:v},l.createElement(o.Z,{sx:{height:"100%",width:"100%"}},l.createElement(g,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===u&&n?n:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(a.Z,{sx:{marginBottom:"1rem"}}),l.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(86886),i=r(67294),a=r(10686);function n(e){let{items:t,cols:r,sx:n}=e;return i.createElement(o.ZP,{container:!0,spacing:3},t.map((e=>{var t;return i.createElement(o.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},i.createElement(a.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n}))})))}},2078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=r(83117),i=(r(67294),r(3905)),a=r(17547),n=r(44996);const s={sidebar_position:1,slug:".",title:"Developer Resources"},l=void 0,d={unversionedId:"aptos/dev/index",id:"aptos/dev/index",title:"Developer Resources",description:"Clients",source:"@site/docs/aptos/dev/index.mdx",sourceDirName:"aptos/dev",slug:"/aptos/dev/",permalink:"/aptos/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Developer Resources"},sidebar:"aptos",previous:{title:"Devnet",permalink:"/aptos/program/devnet"},next:{title:"Sbv2 CLI",permalink:"/aptos/dev/cli"}},m={},c=[{value:"Clients",id:"clients",level:2},{value:"On-Chain Example Programs",id:"on-chain-example-programs",level:2}],p={toc:c};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)(a.Z,{cols:2,items:[{to:"/aptos/dev/move/",title:"Move",description:"View the switchboard move module for Aptos",image:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/move/logo.png")})},{to:"/aptos/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/aptos.js npm package",image:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}),(0,i.kt)("h2",{id:"on-chain-example-programs"},"On-Chain Example Programs"),(0,i.kt)(a.Z,{cols:2,items:[{to:"/aptos/dev/examples/feed-parser",title:"Feed Parser",description:"View an example program depicting how to read a Switchboard Data Feed on-chain",image:(0,i.kt)("img",{src:(0,n.Z)("/img/icons/move/logo.png")})}],mdxType:"RoundedCardGroup"}))}g.isMDXComponent=!0}}]);