"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9313],{10686:(e,t,r)=>{r.d(t,{Z:()=>g});var i=r(44267),a=r(15861),n=r(21519),o=r(78445),s=r(44073),l=r(67294),c=r(39960),d=r(13264),m=r(92949);const u=(0,d.Z)(s.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),p=(0,d.Z)(o.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:r,imageDark:o,description:s,to:d,sx:g}=e;const{colorMode:b}=(0,m.I)();return l.createElement(c.Z,{href:d,style:{textDecoration:"none"}},l.createElement(u,{dark:"dark"===b?1:0,sx:g},l.createElement(i.Z,{sx:{height:"100%",width:"100%"}},l.createElement(p,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===b&&o?o:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(n.Z,{sx:{marginBottom:"1rem"}}),l.createElement(a.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(86886),a=r(67294),n=r(10686);function o(e){let{items:t,cols:r,sx:o}=e;return a.createElement(i.ZP,{container:!0,spacing:3},t.map((e=>{var t;return a.createElement(i.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},a.createElement(n.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},59253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var i=r(83117),a=(r(67294),r(3905)),n=r(17547),o=r(44996);const s={sidebar_position:10,slug:".",title:"sbv2-near"},l=void 0,c={unversionedId:"near/dev/rust/client",id:"near/dev/rust/client",title:"sbv2-near",description:"A Rust library to interact with Switchboard V2 accounts.",source:"@site/docs/near/dev/rust/client.mdx",sourceDirName:"near/dev/rust",slug:"/near/dev/rust/",permalink:"/near/dev/rust/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"sbv2-near"},sidebar:"near",previous:{title:"@switchboard-xyz/near.js",permalink:"/near/dev/javascript/"},next:{title:"Feed Parser",permalink:"/near/dev/examples/feed-parser"}},d={},m=[{value:"Quick Links",id:"quick-links",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Rust library to interact with Switchboard V2 accounts."),(0,a.kt)("h2",{id:"quick-links"},"Quick Links"),(0,a.kt)(n.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-near/tree/main/rust/sbv2-near",title:"Github",description:"View the Github repo",image:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,a.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}))}p.isMDXComponent=!0}}]);