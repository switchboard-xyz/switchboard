"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17645],{10686:(e,t,i)=>{i.d(t,{Z:()=>v});var r=i(44267),n=i(15861),o=i(21519),a=i(78445),s=i(44073),l=i(67294),c=i(39960),d=i(13264),m=i(92949);const p=(0,d.Z)(s.Z)((e=>{let{theme:t,dark:i}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:i?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(i?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:i?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,d.Z)(a.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:i,imageDark:a,description:s,to:d,sx:v}=e;const{colorMode:g}=(0,m.I)();return l.createElement(c.Z,{href:d,style:{textDecoration:"none"}},l.createElement(p,{dark:"dark"===g?1:0,sx:v},l.createElement(r.Z,{sx:{height:"100%",width:"100%"}},l.createElement(u,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===g&&a?a:i),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(o.Z,{sx:{marginBottom:"1rem"}}),l.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(86886),n=i(67294),o=i(10686);function a(e){let{items:t,cols:i,sx:a,direction:s,justifyContent:l,alignItems:c}=e;return n.createElement(r.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:l,alignItems:c},t.map((e=>{var t;return n.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/i)?t:2)},n.createElement(o.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:a}))})))}},662:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var r=i(83117),n=(i(67294),i(3905)),o=i(17547),a=i(44996);const s={toc:[]};function l(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{cols:2,items:[{to:"/sui/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/sui.js npm package",image:(0,n.kt)("img",{src:(0,a.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0;const c={sidebar_position:1,slug:".",title:"SDK Overview"},d=void 0,m={unversionedId:"sui/dev/overview",id:"sui/dev/overview",title:"SDK Overview",description:"To get started, clone the",source:"@site/docs/sui/dev/overview.mdx",sourceDirName:"sui/dev",slug:"/sui/dev/",permalink:"/sui/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"SDK Overview"},sidebar:"sui",previous:{title:"Testnet",permalink:"/sui/program/testnet"},next:{title:"Javascript",permalink:"/sui/dev/javascript"}},p={},u=[{value:"SDK",id:"sdk",level:2}],v={toc:u};function g(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To get started, clone the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-sui"},"sbv2-sui")," repository."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-sui\n")),(0,n.kt)("h2",{id:"sdk"},"SDK"),(0,n.kt)(l,{mdxType:"SuiSdkClients"}))}g.isMDXComponent=!0}}]);