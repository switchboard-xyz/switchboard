"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6514],{10686:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(44267),i=r(15861),s=r(21519),o=r(78445),n=r(44073),l=r(67294),d=r(39960),p=r(13264),m=r(92949);const c=(0,p.Z)(n.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,p.Z)(o.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:r,imageDark:o,description:n,to:p,sx:g}=e;const{colorMode:k}=(0,m.I)();return l.createElement(d.Z,{href:p,style:{textDecoration:"none"}},l.createElement(c,{dark:"dark"===k?1:0,sx:g},l.createElement(a.Z,{sx:{height:"100%",width:"100%"}},l.createElement(u,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===k&&o?o:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),n?l.createElement(l.Fragment,null,l.createElement(s.Z,{sx:{marginBottom:"1rem"}}),l.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},n)):l.createElement(l.Fragment,null))))}},17547:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(86886),i=r(67294),s=r(10686);function o(e){let{items:t,cols:r,sx:o,direction:n,justifyContent:l,alignItems:d}=e;return i.createElement(a.ZP,{container:!0,spacing:3,direction:null!=n?n:"row",justifyContent:l,alignItems:d},t.map((e=>{var t;return i.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},i.createElement(s.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},80730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>m});var a=r(83117),i=(r(67294),r(3905)),s=r(17547),o=r(44996);const n={sidebar_position:10,title:"Feed Parser"},l=void 0,d={unversionedId:"aptos/dev/examples/feed-parser",id:"aptos/dev/examples/feed-parser",title:"Feed Parser",description:"Quick Links",source:"@site/docs/aptos/dev/examples/feed-parser.mdx",sourceDirName:"aptos/dev/examples",slug:"/aptos/dev/examples/feed-parser",permalink:"/aptos/dev/examples/feed-parser",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Feed Parser"},sidebar:"aptos",previous:{title:"sbv2-aptos",permalink:"/aptos/dev/move/"},next:{title:"Table of Contents",permalink:"/aptos/idl/"}},p={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Setup",id:"setup",level:2},{value:"Run",id:"run",level:2}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"quick-links"},"Quick Links"),(0,i.kt)(s.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-aptos/tree/main/programs/feed-parser",title:"Github",description:"View the Github repo",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-aptos\ncd sbv2-aptos/programs/feed-parser\n")),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aptos move compile --named-addresses switchboard_feed_parser=default\n")))}u.isMDXComponent=!0}}]);