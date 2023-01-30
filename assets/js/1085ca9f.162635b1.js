"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3866],{10686:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(44267),n=r(15861),i=r(21519),o=r(78445),s=r(44073),l=r(67294),c=r(39960),d=r(13264),m=r(92949);const p=(0,d.Z)(s.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),h=(0,d.Z)(o.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function u(e){let{title:t,image:r,imageDark:o,description:s,to:d,sx:u}=e;const{colorMode:g}=(0,m.I)();return l.createElement(c.Z,{href:d,style:{textDecoration:"none"}},l.createElement(p,{dark:"dark"===g?1:0,sx:u},l.createElement(a.Z,{sx:{height:"100%",width:"100%"}},l.createElement(h,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===g&&o?o:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(i.Z,{sx:{marginBottom:"1rem"}}),l.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(86886),n=r(67294),i=r(10686);function o(e){let{items:t,cols:r,sx:o,direction:s,justifyContent:l,alignItems:c}=e;return n.createElement(a.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:l,alignItems:c},t.map((e=>{var t;return n.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},n.createElement(i.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},31174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=r(83117),n=(r(67294),r(3905)),i=r(17547),o=(r(10686),r(44996));const s={sidebar_position:7,title:"anchor-history-parser"},l=void 0,c={unversionedId:"solana/dev/examples/anchor-history-parser",id:"solana/dev/examples/anchor-history-parser",title:"anchor-history-parser",description:"Quick Links",source:"@site/docs/solana/dev/examples/anchor-history-parser.mdx",sourceDirName:"solana/dev/examples",slug:"/solana/dev/examples/anchor-history-parser",permalink:"/solana/dev/examples/anchor-history-parser",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"anchor-history-parser"},sidebar:"solana",previous:{title:"anchor-feed-parser",permalink:"/solana/dev/examples/anchor-feed-parser"},next:{title:"anchor-vrf-walkthrough",permalink:"/solana/dev/examples/anchor-vrf-walkthrough"}},d={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Setup",id:"setup",level:2},{value:"Run",id:"run",level:2}],p={toc:m};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/programs/anchor-history-parser",title:"Github",description:"View the repo",image:(0,n.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-solana\ncd sbv2-solana/programs/anchor-history-parser\n")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"anchor build")," and update the program ID in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),"."),(0,n.kt)("h2",{id:"run"},"Run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"anchor test\n")))}h.isMDXComponent=!0}}]);