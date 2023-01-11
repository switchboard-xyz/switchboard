"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62342],{10686:(e,t,i)=>{i.d(t,{Z:()=>v});var o=i(44267),r=i(15861),n=i(21519),a=i(78445),s=i(44073),l=i(67294),m=i(39960),c=i(13264),p=i(92949);const d=(0,c.Z)(s.Z)((e=>{let{theme:t,dark:i}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:i?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(i?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:i?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,c.Z)(a.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:i,imageDark:a,description:s,to:c,sx:v}=e;const{colorMode:k}=(0,p.I)();return l.createElement(m.Z,{href:c,style:{textDecoration:"none"}},l.createElement(d,{dark:"dark"===k?1:0,sx:v},l.createElement(o.Z,{sx:{height:"100%",width:"100%"}},l.createElement(g,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===k&&a?a:i),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(n.Z,{sx:{marginBottom:"1rem"}}),l.createElement(r.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(86886),r=i(67294),n=i(10686);function a(e){let{items:t,cols:i,sx:a}=e;return r.createElement(o.ZP,{container:!0,spacing:3},t.map((e=>{var t;return r.createElement(o.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/i)?t:2)},r.createElement(n.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:a}))})))}},29195:(e,t,i)=>{i.d(t,{ZP:()=>l});var o=i(83117),r=(i(67294),i(3905)),n=i(17547),a=i(44996);const s={toc:[]};function l(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.Z,{cols:3,items:[{to:"/aptos/program/mainnet",title:"Mainnet",description:"View the Mainnet deployment accounts",image:(0,r.kt)("img",{src:(0,a.Z)("/img/icons/aptos/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,a.Z)("/img/icons/aptos/dark.svg")})},{to:"/aptos/program/testnet",title:"Testnet",description:"View the Testnet deployment accounts",image:(0,r.kt)("img",{src:(0,a.Z)("/img/icons/aptos/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,a.Z)("/img/icons/aptos/dark.svg")})},{to:"/aptos/program/devnet",title:"Devnet",description:"View the Devnet deployment accounts",image:(0,r.kt)("img",{src:(0,a.Z)("/img/icons/aptos/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,a.Z)("/img/icons/aptos/dark.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0},38022:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=i(83117),r=(i(67294),i(3905)),n=(i(17547),i(44996),i(29195));const a={sidebar_position:1,title:"Overview",slug:"."},s=void 0,l={unversionedId:"aptos/overview",id:"aptos/overview",title:"Overview",description:"The Switchboard V2 Aptos implementation is still in beta.",source:"@site/docs/aptos/overview.mdx",sourceDirName:"aptos",slug:"/aptos/",permalink:"/aptos/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"aptos",next:{title:"Mainnet",permalink:"/aptos/program/mainnet"}},m={},c=[{value:"Networks",id:"networks",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Switchboard V2 Aptos implementation is still in beta."),(0,r.kt)("h2",{id:"networks"},"Networks"),(0,r.kt)(n.ZP,{mdxType:"AptosNetworks"}))}d.isMDXComponent=!0}}]);