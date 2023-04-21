"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80924],{55106:(e,t,o)=>{o.d(t,{Z:()=>Z});var r=o(45675),a=o(92897),i=o(49231),n=o(19841),s=o(32301),d=o(3396),l=o(7206),c=o(3170),m=o(1274),p=o(7523);function v(e){return(0,p.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var u=o(20264);const g=["className","raised"],h=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),Z=i.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCard"}),{className:i,raised:d=!1}=o,c=(0,a.Z)(o,g),m=(0,r.Z)({},o,{raised:d}),p=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},v,t)})(m);return(0,u.jsx)(h,(0,r.Z)({className:(0,n.Z)(p.root,i),elevation:d?8:void 0,ref:t,ownerState:m},c))}))},65218:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(45675),a=o(92897),i=o(49231),n=o(19841),s=o(32301),d=o(3396),l=o(7206),c=o(1274),m=o(7523);function p(e){return(0,m.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var v=o(20264);const u=["className","component"],g=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),h=i.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:i,component:d="div"}=o,c=(0,a.Z)(o,u),m=(0,r.Z)({},o,{component:d}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(m);return(0,v.jsx)(g,(0,r.Z)({as:d,className:(0,n.Z)(h.root,i),ownerState:m,ref:t},c))}))},932:(e,t,o)=>{o.d(t,{Z:()=>x});var r=o(92897),a=o(45675),i=o(49231),n=o(19841),s=o(32301),d=o(3411),l=o(7206),c=o(3396),m=o(1274),p=o(7523);function v(e){return(0,p.Z)("MuiCardHeader",e)}const u=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var g=o(20264);const h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({[`& .${u.title}`]:t.title,[`& .${u.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),x=i.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:i,avatar:c,className:m,component:p="div",disableTypography:u=!1,subheader:x,subheaderTypographyProps:w,title:k,titleTypographyProps:C}=o,M=(0,r.Z)(o,h),S=(0,a.Z)({},o,{component:p,disableTypography:u}),N=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)})(S);let j=k;null==j||j.type===d.Z||u||(j=(0,g.jsx)(d.Z,(0,a.Z)({variant:c?"body2":"h5",className:N.title,component:"span",display:"block"},C,{children:j})));let D=x;return null==D||D.type===d.Z||u||(D=(0,g.jsx)(d.Z,(0,a.Z)({variant:c?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:D}))),(0,g.jsxs)(Z,(0,a.Z)({className:(0,n.Z)(N.root,m),as:p,ref:t,ownerState:S},M,{children:[c&&(0,g.jsx)(b,{className:N.avatar,ownerState:S,children:c}),(0,g.jsxs)(f,{className:N.content,ownerState:S,children:[j,D]}),i&&(0,g.jsx)(y,{className:N.action,ownerState:S,children:i})]}))}))},55724:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(66685),a=o(49231),i=o(65218),n=o(3411),s=o(57210),d=o(932),l=o(55106),c=o(86583),m=o(74072),p=o(27567);const v=(0,m.Z)(l.Z)((e=>{let{theme:t,dark:o}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:o?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(o?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:o?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,m.Z)(d.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function g(e){let{title:t,image:o,imageDark:r,description:d,to:l,sx:m}=e;const{colorMode:g}=(0,p.I)();return a.createElement(c.Z,{href:l,style:{textDecoration:"none"}},a.createElement(v,{dark:"dark"===g?1:0,sx:m},a.createElement(i.Z,{sx:{height:"100%",width:"100%"}},a.createElement(u,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===g&&r?r:o),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),d?a.createElement(a.Fragment,null,a.createElement(s.Z,{sx:{marginBottom:"1rem"}}),a.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},d)):a.createElement(a.Fragment,null))))}function h(e){let{items:t,cols:o,sx:i,direction:n,justifyContent:s,alignItems:d}=e;return a.createElement(r.ZP,{container:!0,spacing:3,direction:n??"row",justifyContent:s,alignItems:d},t.map((e=>a.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/o??2)},a.createElement(g,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:i})))))}},86567:(e,t,o)=>{o.d(t,{ZP:()=>l});var r=o(48041),a=(o(49231),o(54852)),i=o(55724),n=o(97530);const s={toc:[]},d="wrapper";function l(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{cols:2,items:[{to:"/coredao/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/evm.js npm package",image:(0,a.kt)("img",{src:(0,n.Z)("/img/icons/javascript/light.svg")})},{to:"/coredao/dev/solidity/ISwitchboard",title:"ISwitchboard.sol",description:"View the ISwitchboard.sol contract",image:(0,a.kt)("img",{src:(0,n.Z)("/img/icons/solidity/light.svg")})},{to:"/coredao/dev/solidity/ILegacyOracle",title:"ILegacyOracle.sol",description:"View the ILegacyOracle.sol contract",image:(0,a.kt)("img",{src:(0,n.Z)("/img/icons/solidity/light.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0},49970:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var r=o(48041),a=(o(49231),o(54852)),i=o(86567);const n={sidebar_position:1,slug:".",title:"SDK Overview"},s=void 0,d={unversionedId:"coredao/dev/overview",id:"coredao/dev/overview",title:"SDK Overview",description:"To get started, clone the",source:"@site/docs/coredao/dev/overview.mdx",sourceDirName:"coredao/dev",slug:"/coredao/dev/",permalink:"/coredao/dev/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"SDK Overview"},sidebar:"coredao",previous:{title:"Testnet",permalink:"/coredao/program/testnet"},next:{title:"@switchboard-xyz/evm.js",permalink:"/coredao/dev/javascript"}},l={},c=[{value:"SDK",id:"sdk",level:2}],m={toc:c},p="wrapper";function v(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get started, clone the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-evm"},"sbv2-evm")," repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-evm\n")),(0,a.kt)("h2",{id:"sdk"},"SDK"),(0,a.kt)(i.ZP,{mdxType:"CoreDaoSdkLibraries"}))}v.isMDXComponent=!0}}]);