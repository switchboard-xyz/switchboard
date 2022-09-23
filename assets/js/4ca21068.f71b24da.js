"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2342],{4073:(e,t,o)=>{o.d(t,{Z:()=>k});var a=o(3117),r=o(102),n=o(7294),i=o(6010),s=o(4780),l=o(948),d=o(3616),c=o(1796),p=o(4867),v=o(1588);function u(e){return(0,p.Z)("MuiPaper",e)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=o(5893);const f=["className","component","elevation","square","variant"],h=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Z=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t[`elevation${o.elevation}`]]}})((({theme:e,ownerState:t})=>{var o;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,c.Fq)("#fff",h(t.elevation))}, ${(0,c.Fq)("#fff",h(t.elevation))})`},e.vars&&{backgroundImage:null==(o=e.vars.overlays)?void 0:o[t.elevation]}))})),g=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:c=1,square:p=!1,variant:v="elevation"}=o,h=(0,r.Z)(o,f),g=(0,a.Z)({},o,{component:l,elevation:c,square:p,variant:v}),b=(e=>{const{square:t,elevation:o,variant:a,classes:r}=e,n={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${o}`]};return(0,s.Z)(n,u,r)})(g);return(0,m.jsx)(Z,(0,a.Z)({as:l,ownerState:g,className:(0,i.Z)(b.root,n),ref:t},h))}));function b(e){return(0,p.Z)("MuiCard",e)}(0,v.Z)("MuiCard",["root"]);const w=["className","raised"],x=(0,l.ZP)(g,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),k=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=o,c=(0,r.Z)(o,w),p=(0,a.Z)({},o,{raised:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},b,t)})(p);return(0,m.jsx)(x,(0,a.Z)({className:(0,i.Z)(v.root,n),elevation:l?8:void 0,ref:t,ownerState:p},c))}))},4267:(e,t,o)=>{o.d(t,{Z:()=>f});var a=o(3117),r=o(102),n=o(7294),i=o(6010),s=o(4780),l=o(948),d=o(3616),c=o(4867);function p(e){return(0,c.Z)("MuiCardContent",e)}(0,o(1588).Z)("MuiCardContent",["root"]);var v=o(5893);const u=["className","component"],m=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),f=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=o,c=(0,r.Z)(o,u),f=(0,a.Z)({},o,{component:l}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(f);return(0,v.jsx)(m,(0,a.Z)({as:l,className:(0,i.Z)(h.root,n),ownerState:f,ref:t},c))}))},5864:(e,t,o)=>{o.d(t,{Z:()=>A});var a=o(3117),r=o(102),n=o(7294),i=o(6010),s=o(4780),l=o(3616),d=o(948),c=o(4867);function p(e){return(0,c.Z)("MuiCardActionArea",e)}const v=(0,o(1588).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var u=o(4976),m=o(5893);const f=["children","className","focusVisibleClassName"],h=(0,d.ZP)(u.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${v.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${v.focusVisible} .${v.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),Z=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),g=n.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCardActionArea"}),{children:n,className:d,focusVisibleClassName:c}=o,v=(0,r.Z)(o,f),u=o,g=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,t)})(u);return(0,m.jsxs)(h,(0,a.Z)({className:(0,i.Z)(g.root,d),focusVisibleClassName:(0,i.Z)(c,g.focusVisible),ref:t,ownerState:u},v,{children:[n,(0,m.jsx)(Z,{className:g.focusHighlight,ownerState:u})]}))}));var b=o(4267),w=o(5861),x=o(4073),k=o(9960),C=o(3264),y=o(2734),M=o(2949);const R=(0,C.Z)(x.Z)((e=>{let{theme:t,dark:o}=e;return{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",textAlign:"left",minWidth:"50%",backgroundColor:o?"rgba(53, 76, 79, 0.4)":"rgba(200, 202, 204, 0.4)",position:"relative",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",[t.breakpoints.down(300)]:{paddingLeft:""},"&:hover":{background:o?"rgba(42, 56, 68, 1)":t.palette.white}}})),N=(0,C.Z)(w.Z)((e=>{let{theme:t}=e;return{whiteSpace:"nowrap",fontSize:22,marginLeft:"22px",fontWeight:600,letterSpacing:"0.16px",[t.breakpoints.down(300)]:{marginLeft:"10px"}}})),S=(0,C.Z)(w.Z)((e=>{let{theme:t}=e;return{fontSize:18.5,margin:"20px 0px 0px",minHeight:"50px",lineHeight:1.29,letterSpacing:"0.44px",[t.breakpoints.down(400)]:{fontSize:"17px"},[t.breakpoints.down(300)]:{fontSize:13}}})),T=(0,C.Z)(b.Z)((e=>{let{theme:t}=e;return{padding:"21px",[t.breakpoints.down(300)]:{paddingLeft:"10px",paddingRight:"10px"}}}));function A(e){let{title:t,image:o,description:a,linkTo:r,style:i}=e;const{colorMode:s}=(0,M.I)();(0,y.Z)();return n.createElement(R,{dark:"dark"===s?1:0},n.createElement(g,{LinkComponent:k.Z,href:r},n.createElement(T,null,n.createElement(N,{sx:{color:"dark"===s?"#dbdbdb":"#0b3863"}},t),n.createElement(S,{variant:"body2",sx:{color:"dark"===s?"#dbdbdb":"#313e79"}},a))))}},547:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>v});var a=o(3117),r=(o(7294),o(3905)),n=o(5864),i=o(4996),s=o(6886);const l={sidebar_position:1,title:"Overview",slug:"."},d=void 0,c={unversionedId:"aptos/overview",id:"aptos/overview",title:"Overview",description:"The Switchboard V2 Aptos implementation is still in beta.",source:"@site/docs/aptos/overview.mdx",sourceDirName:"aptos",slug:"/aptos/",permalink:"/sbv2-core/aptos/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"aptos",next:{title:"Testnet",permalink:"/sbv2-core/aptos/program/testnet"}},p={},v=[{value:"Networks",id:"networks",level:2}],u={toc:v};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Switchboard V2 Aptos implementation is still in beta."),(0,r.kt)("h2",{id:"networks"},"Networks"),(0,r.kt)(s.ZP,{container:!0,spacing:3,mdxType:"Grid"},(0,r.kt)(s.ZP,{item:!0,xs:6,mdxType:"Grid"},(0,r.kt)(n.Z,{title:"Testnet",description:"View the Testnet deployment accounts",linkTo:(0,i.Z)("/aptos/program/testnet"),mdxType:"RoundedCard"})),(0,r.kt)(s.ZP,{item:!0,xs:6,mdxType:"Grid"},(0,r.kt)(n.Z,{title:"Devnet",description:"View the Devnet deployment accounts",linkTo:(0,i.Z)("/aptos/program/devnet"),mdxType:"RoundedCard"}))))}m.isMDXComponent=!0}}]);