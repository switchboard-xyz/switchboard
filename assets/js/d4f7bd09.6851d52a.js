"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6117],{10686:(e,t,i)=>{i.d(t,{Z:()=>v});var o=i(44267),r=i(15861),a=i(21519),n=i(78445),s=i(44073),l=i(67294),d=i(39960),m=i(13264),c=i(92949);const p=(0,m.Z)(s.Z)((e=>{let{theme:t,dark:i}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:i?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(i?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:i?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,m.Z)(n.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:i,imageDark:n,description:s,to:m,sx:v}=e;const{colorMode:u}=(0,c.I)();return l.createElement(d.Z,{href:m,style:{textDecoration:"none"}},l.createElement(p,{dark:"dark"===u?1:0,sx:v},l.createElement(o.Z,{sx:{height:"100%",width:"100%"}},l.createElement(g,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===u&&n?n:i),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(a.Z,{sx:{marginBottom:"1rem"}}),l.createElement(r.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(86886),r=i(67294),a=i(10686);function n(e){let{items:t,cols:i,sx:n,direction:s,justifyContent:l,alignItems:d}=e;return r.createElement(o.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:l,alignItems:d},t.map((e=>{var t;return r.createElement(o.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/i)?t:2)},r.createElement(a.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n}))})))}},2078:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=i(83117),r=(i(67294),i(3905)),a=i(17547),n=i(44996);const s={sidebar_position:1,slug:".",title:"Developer Resources"},l=void 0,d={unversionedId:"aptos/dev/index",id:"aptos/dev/index",title:"Developer Resources",description:"Clients",source:"@site/docs/aptos/dev/index.mdx",sourceDirName:"aptos/dev",slug:"/aptos/dev/",permalink:"/aptos/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Developer Resources"},sidebar:"aptos",previous:{title:"Testnet",permalink:"/aptos/program/testnet"},next:{title:"Sbv2 CLI",permalink:"/aptos/dev/cli"}},m={},c=[{value:"Clients",id:"clients",level:2},{value:"On-Chain Example Programs",id:"on-chain-example-programs",level:2}],p={toc:c};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"clients"},"Clients"),(0,r.kt)(a.Z,{cols:2,items:[{to:"/aptos/dev/move/",title:"Move",description:"View the switchboard move module for Aptos",image:(0,r.kt)("img",{src:(0,n.Z)("/img/icons/move/logo.png")})},{to:"/aptos/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/aptos.js npm package",image:(0,r.kt)("img",{src:(0,n.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}),(0,r.kt)("h2",{id:"on-chain-example-programs"},"On-Chain Example Programs"),(0,r.kt)(a.Z,{cols:2,items:[{to:"/aptos/dev/examples/feed-parser",title:"Feed Parser",description:"View an example program depicting how to read a Switchboard Data Feed on-chain",image:(0,r.kt)("img",{src:(0,n.Z)("/img/icons/move/logo.png")})}],mdxType:"RoundedCardGroup"}))}g.isMDXComponent=!0}}]);