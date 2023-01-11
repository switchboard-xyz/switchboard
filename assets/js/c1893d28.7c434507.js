"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88418],{10686:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(44267),n=a(15861),i=a(21519),o=a(78445),s=a(44073),l=a(67294),c=a(39960),d=a(13264),p=a(92949);const m=(0,d.Z)(s.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,d.Z)(o.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function h(e){let{title:t,image:a,imageDark:o,description:s,to:d,sx:h}=e;const{colorMode:g}=(0,p.I)();return l.createElement(c.Z,{href:d,style:{textDecoration:"none"}},l.createElement(m,{dark:"dark"===g?1:0,sx:h},l.createElement(r.Z,{sx:{height:"100%",width:"100%"}},l.createElement(u,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===g&&o?o:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(i.Z,{sx:{marginBottom:"1rem"}}),l.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(86886),n=a(67294),i=a(10686);function o(e){let{items:t,cols:a,sx:o}=e;return n.createElement(r.ZP,{container:!0,spacing:3},t.map((e=>{var t;return n.createElement(r.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/a)?t:2)},n.createElement(i.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},49641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(83117),n=(a(67294),a(3905)),i=a(17547),o=(a(10686),a(44996));const s={sidebar_position:1,title:"anchor-feed-parser"},l=void 0,c={unversionedId:"solana/dev/examples/anchor-feed-parser",id:"solana/dev/examples/anchor-feed-parser",title:"anchor-feed-parser",description:"Quick Links",source:"@site/docs/solana/dev/examples/anchor-feed-parser.mdx",sourceDirName:"solana/dev/examples",slug:"/solana/dev/examples/anchor-feed-parser",permalink:"/solana/dev/examples/anchor-feed-parser",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"anchor-feed-parser"},sidebar:"solana",previous:{title:"Python",permalink:"/solana/dev/python"},next:{title:"anchor-history-parser",permalink:"/solana/dev/examples/anchor-history-parser"}},d={},p=[{value:"Quick Links",id:"quick-links",level:2},{value:"Setup",id:"setup",level:2},{value:"Run",id:"run",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(i.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/programs/anchor-feed-parser",title:"Github",description:"View the repo",image:(0,n.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-solana\ncd sbv2-solana/programs/anchor-feed-parser\n")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"anchor build")," and update the program ID in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),"."),(0,n.kt)("h2",{id:"run"},"Run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"anchor test\n")))}u.isMDXComponent=!0}}]);