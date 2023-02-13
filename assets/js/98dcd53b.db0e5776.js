"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80924],{10686:(e,t,r)=>{r.d(t,{Z:()=>g});var o=r(44267),a=r(15861),i=r(21519),n=r(78445),s=r(44073),l=r(67294),c=r(39960),d=r(13264),m=r(92949);const p=(0,d.Z)(s.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),v=(0,d.Z)(n.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:r,imageDark:n,description:s,to:d,sx:g}=e;const{colorMode:u}=(0,m.I)();return l.createElement(c.Z,{href:d,style:{textDecoration:"none"}},l.createElement(p,{dark:"dark"===u?1:0,sx:g},l.createElement(o.Z,{sx:{height:"100%",width:"100%"}},l.createElement(v,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===u&&n?n:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(i.Z,{sx:{marginBottom:"1rem"}}),l.createElement(a.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(86886),a=r(67294),i=r(10686);function n(e){let{items:t,cols:r,sx:n,direction:s,justifyContent:l,alignItems:c}=e;return a.createElement(o.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:l,alignItems:c},t.map((e=>{var t;return a.createElement(o.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/r)?t:2)},a.createElement(i.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n}))})))}},30659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>m,toc:()=>v});var o=r(83117),a=(r(67294),r(3905)),i=r(17547),n=r(44996);const s={toc:[]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{cols:2,items:[{to:"/coredao/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/evm.js npm package",image:(0,a.kt)("img",{src:(0,n.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0;const c={sidebar_position:1,slug:".",title:"SDK Overview"},d=void 0,m={unversionedId:"coredao/dev/overview",id:"coredao/dev/overview",title:"SDK Overview",description:"To get started, clone the",source:"@site/docs/coredao/dev/overview.mdx",sourceDirName:"coredao/dev",slug:"/coredao/dev/",permalink:"/coredao/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"SDK Overview"},sidebar:"coredao",previous:{title:"Testnet",permalink:"/coredao/program/testnet"},next:{title:"Javascript",permalink:"/coredao/dev/javascript"}},p={},v=[{value:"SDK",id:"sdk",level:2}],g={toc:v};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get started, clone the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-evm"},"sbv2-evm")," repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-evm\n")),(0,a.kt)("h2",{id:"sdk"},"SDK"),(0,a.kt)(l,{mdxType:"CoreDaoSdkClients"}))}u.isMDXComponent=!0}}]);