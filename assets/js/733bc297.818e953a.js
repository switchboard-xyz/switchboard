"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70671],{10686:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(44267),o=i(15861),n=i(21519),s=i(78445),a=i(44073),l=i(67294),c=i(39960),m=i(13264),d=i(92949);const u=(0,m.Z)(a.Z)((e=>{let{theme:t,dark:i}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:i?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(i?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:i?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,m.Z)(s.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function p(e){let{title:t,image:i,imageDark:s,description:a,to:m,sx:p}=e;const{colorMode:v}=(0,d.I)();return l.createElement(c.Z,{href:m,style:{textDecoration:"none"}},l.createElement(u,{dark:"dark"===v?1:0,sx:p},l.createElement(r.Z,{sx:{height:"100%",width:"100%"}},l.createElement(g,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===v&&s?s:i),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),a?l.createElement(l.Fragment,null,l.createElement(n.Z,{sx:{marginBottom:"1rem"}}),l.createElement(o.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},a)):l.createElement(l.Fragment,null))))}},17547:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(86886),o=i(67294),n=i(10686);function s(e){let{items:t,cols:i,sx:s,direction:a,justifyContent:l,alignItems:c}=e;return o.createElement(r.ZP,{container:!0,spacing:3,direction:null!=a?a:"row",justifyContent:l,alignItems:c},t.map((e=>{var t;return o.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/i)?t:2)},o.createElement(n.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:s}))})))}},43813:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=i(83117),o=(i(67294),i(3905)),n=i(17547),s=i(44996);const a={sidebar_position:1,title:"Overview",slug:"."},l=void 0,c={unversionedId:"sui/overview",id:"sui/overview",title:"Overview",description:"More information coming soon!",source:"@site/docs/sui/overview.mdx",sourceDirName:"sui",slug:"/sui/",permalink:"/sui/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"sui",next:{title:"Testnet",permalink:"/sui/program/testnet"}},m={},d=[{value:"Networks",id:"networks",level:2},{value:"Resources",id:"resources",level:2}],u={toc:d};function g(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"More information coming soon!"),(0,o.kt)("h2",{id:"networks"},"Networks"),(0,o.kt)(n.Z,{items:[{to:"/sui/program/testnet",title:"Testnet",description:"View the Testnet deployment accounts",image:(0,o.kt)("img",{src:(0,s.Z)("/img/icons/sui/logo.svg")}),imageDark:(0,o.kt)("img",{src:(0,s.Z)("/img/icons/sui/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)(n.Z,{items:[{to:"/sui/dev",title:"Developer Resources",description:"Learn how to develop with Switchboard on Sui",image:(0,o.kt)("img",{src:(0,s.Z)("/img/icons/develop/light.svg")}),imageDark:(0,o.kt)("img",{src:(0,s.Z)("/img/icons/develop/dark.svg")})}],mdxType:"RoundedCardGroup"}))}g.isMDXComponent=!0}}]);