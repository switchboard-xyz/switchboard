"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53327],{55106:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(45675),o=r(92897),n=r(49231),i=r(19841),s=r(32301),l=r(3396),d=r(7206),c=r(3170),m=r(1274),p=r(7523);function u(e){return(0,p.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var v=r(20264);const g=["className","raised"],h=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=r,c=(0,o.Z)(r,g),m=(0,a.Z)({},r,{raised:l}),p=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(m);return(0,v.jsx)(h,(0,a.Z)({className:(0,i.Z)(p.root,n),elevation:l?8:void 0,ref:t,ownerState:m},c))}))},65218:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(45675),o=r(92897),n=r(49231),i=r(19841),s=r(32301),l=r(3396),d=r(7206),c=r(1274),m=r(7523);function p(e){return(0,m.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var u=r(20264);const v=["className","component"],g=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),h=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=r,c=(0,o.Z)(r,v),m=(0,a.Z)({},r,{component:l}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(m);return(0,u.jsx)(g,(0,a.Z)({as:l,className:(0,i.Z)(h.root,n),ownerState:m,ref:t},c))}))},932:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(92897),o=r(45675),n=r(49231),i=r(19841),s=r(32301),l=r(3411),d=r(7206),c=r(3396),m=r(1274),p=r(7523);function u(e){return(0,p.Z)("MuiCardHeader",e)}const v=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var g=r(20264);const h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${v.title}`]:t.title,[`& .${v.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),y=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:c,className:m,component:p="div",disableTypography:v=!1,subheader:y,subheaderTypographyProps:k,title:w,titleTypographyProps:C}=r,M=(0,a.Z)(r,h),N=(0,o.Z)({},r,{component:p,disableTypography:v}),j=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)})(N);let T=w;null==T||T.type===l.Z||v||(T=(0,g.jsx)(l.Z,(0,o.Z)({variant:c?"body2":"h5",className:j.title,component:"span",display:"block"},C,{children:T})));let P=y;return null==P||P.type===l.Z||v||(P=(0,g.jsx)(l.Z,(0,o.Z)({variant:c?"body2":"body1",className:j.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:P}))),(0,g.jsxs)(b,(0,o.Z)({className:(0,i.Z)(j.root,m),as:p,ref:t,ownerState:N},M,{children:[c&&(0,g.jsx)(Z,{className:j.avatar,ownerState:N,children:c}),(0,g.jsxs)(x,{className:j.content,ownerState:N,children:[T,P]}),n&&(0,g.jsx)(f,{className:j.action,ownerState:N,children:n})]}))}))},55724:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(66685),o=r(49231),n=r(65218),i=r(3411),s=r(57210),l=r(932),d=r(55106),c=r(86583),m=r(74072),p=r(27567);const u=(0,m.Z)(d.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),v=(0,m.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:r,imageDark:a,description:l,to:d,sx:m}=e;const{colorMode:g}=(0,p.I)();return o.createElement(c.Z,{href:d,style:{textDecoration:"none"}},o.createElement(u,{dark:"dark"===g?1:0,sx:m},o.createElement(n.Z,{sx:{height:"100%",width:"100%"}},o.createElement(v,{avatar:o.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===g&&a?a:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?o.createElement(o.Fragment,null,o.createElement(s.Z,{sx:{marginBottom:"1rem"}}),o.createElement(i.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):o.createElement(o.Fragment,null))))}function h(e){let{items:t,cols:r,sx:n,direction:i,justifyContent:s,alignItems:l}=e;return o.createElement(a.ZP,{container:!0,spacing:3,direction:i??"row",justifyContent:s,alignItems:l},t.map((e=>o.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},o.createElement(g,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n})))))}},84638:(e,t,r)=>{r.d(t,{ZP:()=>d});var a=r(48041),o=(r(49231),r(54852)),n=r(55724),i=r(97530);const s={toc:[]},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{cols:2,items:[{to:"/starknet/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/starknet.js npm package",image:(0,o.kt)("img",{src:(0,i.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}))}d.isMDXComponent=!0},86811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(48041),o=(r(49231),r(54852)),n=r(84638);const i={sidebar_position:1,slug:".",title:"SDK Overview"},s=void 0,l={unversionedId:"starknet/dev/overview",id:"starknet/dev/overview",title:"SDK Overview",description:"To get started, clone the",source:"@site/docs/starknet/dev/overview.mdx",sourceDirName:"starknet/dev",slug:"/starknet/dev/",permalink:"/starknet/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"SDK Overview"},sidebar:"starknet",previous:{title:"Testnet",permalink:"/starknet/program/testnet"},next:{title:"@switchboard-xyz/starknet.js",permalink:"/starknet/dev/javascript"}},d={},c=[{value:"Libraries",id:"libraries",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To get started, clone the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-aptos"},"sbv2-aptos")," repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-aptos\n")),(0,o.kt)("h2",{id:"libraries"},"Libraries"),(0,o.kt)(n.ZP,{mdxType:"StarknetLibraries"}))}u.isMDXComponent=!0}}]);