"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37590],{10686:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(44267),i=r(15861),n=r(21519),o=r(78445),s=r(44073),l=r(67294),d=r(39960),c=r(13264),m=r(92949);const p=(0,c.Z)(s.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,c.Z)(o.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function u(e){let{title:t,image:r,imageDark:o,description:s,to:c,sx:u}=e;const{colorMode:b}=(0,m.I)();return l.createElement(d.Z,{href:c,style:{textDecoration:"none"}},l.createElement(p,{dark:"dark"===b?1:0,sx:u},l.createElement(a.Z,{sx:{height:"100%",width:"100%"}},l.createElement(g,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===b&&o?o:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(n.Z,{sx:{marginBottom:"1rem"}}),l.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(86886),i=r(67294),n=r(10686);function o(e){let{items:t,cols:r,sx:o,direction:s,justifyContent:l,alignItems:d}=e;return i.createElement(a.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:l,alignItems:d},t.map((e=>{var t;return i.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},i.createElement(n.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},79558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=r(83117),i=(r(67294),r(3905)),n=r(17547),o=r(44996);const s={sidebar_position:10,title:"Feed Parser"},l=void 0,d={unversionedId:"near/dev/examples/feed-parser",id:"near/dev/examples/feed-parser",title:"Feed Parser",description:"Quick Links",source:"@site/docs/near/dev/examples/feed-parser.mdx",sourceDirName:"near/dev/examples",slug:"/near/dev/examples/feed-parser",permalink:"/near/dev/examples/feed-parser",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Feed Parser"},sidebar:"near",previous:{title:"sbv2-near",permalink:"/near/dev/rust/"},next:{title:"Table of Contents",permalink:"/near/idl/"}},c={},m=[{value:"Quick Links",id:"quick-links",level:2}],p={toc:m};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-near\ncd sbv2-near/programs/feed-parser\n")),(0,i.kt)("h2",{id:"quick-links"},"Quick Links"),(0,i.kt)(n.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-near/tree/main/programs/feed-parser",title:"Github",description:"View the repo",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}))}g.isMDXComponent=!0}}]);