"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{4073:(e,t,o)=>{o.d(t,{Z:()=>k});var r=o(3117),n=o(102),a=o(7294),i=o(6010),l=o(4780),c=o(948),d=o(3616),s=o(1796),p=o(4867),h=o(1588);function u(e){return(0,p.Z)("MuiPaper",e)}(0,h.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=o(5893);const m=["className","component","elevation","square","variant"],f=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},v=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t[`elevation${o.elevation}`]]}})((({theme:e,ownerState:t})=>{var o;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",f(t.elevation))}, ${(0,s.Fq)("#fff",f(t.elevation))})`},e.vars&&{backgroundImage:null==(o=e.vars.overlays)?void 0:o[t.elevation]}))})),b=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiPaper"}),{className:a,component:c="div",elevation:s=1,square:p=!1,variant:h="elevation"}=o,f=(0,n.Z)(o,m),b=(0,r.Z)({},o,{component:c,elevation:s,square:p,variant:h}),x=(e=>{const{square:t,elevation:o,variant:r,classes:n}=e,a={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${o}`]};return(0,l.Z)(a,u,n)})(b);return(0,g.jsx)(v,(0,r.Z)({as:c,ownerState:b,className:(0,i.Z)(x.root,a),ref:t},f))}));function x(e){return(0,p.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);const S=["className","raised"],w=(0,c.ZP)(b,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),k=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiCard"}),{className:a,raised:c=!1}=o,s=(0,n.Z)(o,S),p=(0,r.Z)({},o,{raised:c}),h=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},x,t)})(p);return(0,g.jsx)(w,(0,r.Z)({className:(0,i.Z)(h.root,a),elevation:c?8:void 0,ref:t,ownerState:p},s))}))},4267:(e,t,o)=>{o.d(t,{Z:()=>m});var r=o(3117),n=o(102),a=o(7294),i=o(6010),l=o(4780),c=o(948),d=o(3616),s=o(4867);function p(e){return(0,s.Z)("MuiCardContent",e)}(0,o(1588).Z)("MuiCardContent",["root"]);var h=o(5893);const u=["className","component"],g=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),m=a.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:a,component:c="div"}=o,s=(0,n.Z)(o,u),m=(0,r.Z)({},o,{component:c}),f=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)})(m);return(0,h.jsx)(g,(0,r.Z)({as:c,className:(0,i.Z)(f.root,a),ownerState:m,ref:t},s))}))},5789:(e,t,o)=>{o.r(t),o.d(t,{default:()=>he});var r=o(3117),n=o(7294),a=o(3616),i=o(917),l=o(5893);function c(e){const{styles:t,defaultTheme:o={}}=e,r="function"==typeof t?e=>{return t(null==(r=e)||0===Object.keys(r).length?o:e);var r}:t;return(0,l.jsx)(i.xB,{styles:r})}var d=o(247);const s=function(e){return(0,l.jsx)(c,(0,r.Z)({},e,{defaultTheme:d.Z}))},p=(e,t)=>(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode}),h=e=>(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}});const u=function(e){const t=(0,a.Z)({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:i=!1}=t;return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(s,{styles:e=>((e,t=!1)=>{var o,n;let a={html:p(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},h(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})};const i=null==(o=e.components)||null==(n=o.MuiCssBaseline)?void 0:n.styleOverrides;return i&&(a=[a,i]),a})(e,i)}),o]})};var g=o(7357),m=o(2949),f=o(2263),v=o(3264),b=o(4819),x=o(6760);const S="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";const w=function(e){const{children:t,theme:o}=e,a=(0,x.Z)(),i=n.useMemo((()=>{const e=null===a?o:function(e,t){if("function"==typeof t)return t(e);return(0,r.Z)({},e,t)}(a,o);return null!=e&&(e[S]=null!==a),e}),[o,a]);return(0,l.jsx)(b.Z.Provider,{value:i,children:t})};var k=o(4880),y=o(6682);function Z(e){const t=(0,y.Z)();return(0,l.jsx)(k.T.Provider,{value:"object"==typeof t?t:{},children:e.children})}const C=function(e){const{children:t,theme:o}=e;return(0,l.jsx)(w,{theme:o,children:(0,l.jsx)(Z,{children:t})})};var M=o(9882),P=o(6886),E=o(5861),R=o(2734),T=o(8396),W=o(102),z=o(6010),F=o(4780),A=o(1796),I=o(948),j=o(4867);function B(e){return(0,j.Z)("MuiDivider",e)}(0,o(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const D=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],L=(0,I.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,"vertical"===o.orientation&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&"vertical"===o.orientation&&t.withChildrenVertical,"right"===o.textAlign&&"vertical"!==o.orientation&&t.textAlignRight,"left"===o.textAlign&&"vertical"!==o.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,A.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),N=(0,I.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,"vertical"===o.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),H=n.forwardRef((function(e,t){const o=(0,a.Z)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:i,className:c,component:d=(i?"div":"hr"),flexItem:s=!1,light:p=!1,orientation:h="horizontal",role:u=("hr"!==d?"separator":void 0),textAlign:g="center",variant:m="fullWidth"}=o,f=(0,W.Z)(o,D),v=(0,r.Z)({},o,{absolute:n,component:d,flexItem:s,light:p,orientation:h,role:u,textAlign:g,variant:m}),b=(e=>{const{absolute:t,children:o,classes:r,flexItem:n,light:a,orientation:i,textAlign:l,variant:c}=e,d={root:["root",t&&"absolute",c,a&&"light","vertical"===i&&"vertical",n&&"flexItem",o&&"withChildren",o&&"vertical"===i&&"withChildrenVertical","right"===l&&"vertical"!==i&&"textAlignRight","left"===l&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,F.Z)(d,B,r)})(v);return(0,l.jsx)(L,(0,r.Z)({as:d,className:(0,z.Z)(b.root,c),role:u,ref:t,ownerState:v},f,{children:i?(0,l.jsx)(N,{className:b.wrapper,ownerState:v,children:i}):null}))}));var $=o(4267),q=o(4073),O=o(9960),V=o(4996);const _=(0,v.Z)(q.Z)((e=>{let{theme:t,dark:o}=e;return{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",textAlign:"left",backgroundColor:o?t.palette.footer.background:t.palette.white,position:"relative",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba("+(o?"107 107 107":"86, 86, 86")+", 0.03)",[t.breakpoints.down(300)]:{paddingLeft:""}}})),G=(0,v.Z)(E.Z)((e=>{let{theme:t}=e;return{whiteSpace:"nowrap",fontSize:22,marginLeft:"22px",fontWeight:600,letterSpacing:"0.16px",[t.breakpoints.down(300)]:{marginLeft:"10px"}}})),Q=(0,v.Z)(E.Z)((e=>{let{theme:t}=e;return{fontSize:18.5,margin:"20px 0px 0px",height:"110px",lineHeight:1.29,letterSpacing:"0.44px",[t.breakpoints.down(400)]:{fontSize:"17px"},[t.breakpoints.down(300)]:{fontSize:13}}})),X=(0,v.Z)($.Z)((e=>{let{theme:t}=e;return{padding:"21px",[t.breakpoints.down(300)]:{paddingLeft:"10px",paddingRight:"10px"}}}));function Y(e){let{title:t,image:o,description:r,linkTo:a}=e;const{colorMode:i}=(0,m.I)();(0,R.Z)();return n.createElement(_,{dark:"dark"===i?1:0},n.createElement(X,null,n.createElement("div",{style:{display:"flex",alignItems:"center"}},n.createElement("div",{style:{backgroundColor:"#4c6fff",borderRadius:"8px",height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("img",{src:(0,V.Z)(o),alt:"feature card",height:26,width:26})),n.createElement(G,{sx:{color:"dark"===i?"#dbdbdb":"#0b3863"}},t)),n.createElement(Q,{variant:"body2",sx:{color:"dark"===i?"#dbdbdb":"#313e79"}},r),n.createElement("div",{style:{width:"100%",height:"31px",display:"flex",flexDirection:"column"}},n.createElement(H,{sx:{margin:"0px -21px 15px",borderColor:"dark"===i?"gray":"Active Border"}}),n.createElement(O.Z,{to:a,style:{fontWeight:"bold",alignSelf:"flex-end",fontSize:14,marginRight:"21px"}},"View More"))))}const J=[{title:"Getting Started",image:"/img/icons/info.png",description:"Learn about Switchboard and how it enables the community to dictate what data lives on-chain.",linkTo:"/about"},{title:"Network",image:"/img/icons/arc.png",description:"Learn about Switchboard Oracle Queues and how they allocate oracle resources on-chain.",linkTo:"/about/network"},{title:"Oracle",image:"/img/icons/oracle.png",description:"Learn how to contribute to the network and process data feed updates.",linkTo:"/oracles"},{title:"Data Feeds",image:"/img/icons/sol.png",description:"Learn how Switchboard data feeds work.",linkTo:"/feeds/tasks"},{title:"Develop",image:"/img/icons/developers.png",description:"Learn how to develop with Switchboard and use the APIs.",linkTo:"/dev"},{title:"Publish",image:"/img/icons/publish.svg",description:"Publish your own data feeds on-chain through Switchboard.",linkTo:"/feeds/publisher"}],K=(0,v.Z)("div")((e=>{let{theme:t,dark:o}=e;return{backgroundColor:o?t.palette.footer.background:t.palette.white,width:"100vw",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"-50px 0px 55px",paddingLeft:"40px"}})),U=(0,v.Z)(E.Z)((e=>{let{dark:t,theme:o}=e;return{marginBottom:"12px",fontWeight:600,fontFamily:"Poppins",color:t?o.palette.white:"#171725",fontSize:25,letterSpacing:"0.12px"}}));function ee(){const e=(0,R.Z)(),{colorMode:t}=((0,T.Z)(e.breakpoints.down("sm"),{defaultMatches:!0}),(0,m.I)());return n.createElement(n.Fragment,null,n.createElement(K,{dark:"dark"===t?1:0},n.createElement("div",{style:{maxWidth:"1024px",margin:"auto"}},n.createElement(U,{dark:"dark"===t?1:0},"Welcome to Switchboard Documentation"),n.createElement(E.Z,{variant:"body2",sx:{fontFamily:"Poppins",color:"#92929d",fontSize:16,lineHeight:1.43}},"Switchboard provides a permission-less data layer to bridge the gap between the internet and web3. Click on a card below to learn how you can build with us."))),n.createElement(P.ZP,{container:!0,spacing:3,sx:{maxWidth:1024,alignSelf:"center"}},J.map(((e,t)=>n.createElement(P.ZP,{item:!0,key:e.title,xs:12,sm:6,md:4},n.createElement(Y,e))))))}var te=o(1265);const oe="#4c6fff",re="#ffffff",ne={black:"#000000",blue:oe,white:re,indigo:"#635bff",yellow:"#fab007",orange:"#ff7602",cyan:"#12bcf5",pink:"#D372FC",red:"#fc5a5a",lightGray:"#f3f4f7",transparent:"rgba(0,0,0,0)",footer:{background:"#0a2540",text:"#8998AA"},pageText:{title:"#0a2540",body:"#425466",bodySecondary:"#6B7C93",highlight:oe},pageBackground:{primary:re,secondary:"#f7f9fc"},navbar:{marketplace:"#061024"},background:{},primary:{}};ne.background={default:ne.white},ne.primary={main:ne.black};const ae=ne,ie=(0,te.Z)({typography:{fontFamily:["Source Sans Pro","Poppins"].join(","),fontPrimary:"Source Sans Pro"},components:{MuiTextField:{defaultProps:{autoComplete:"off"}},MuiFilledInput:{defaultProps:{autoComplete:"off"}}},palette:ae}),le={root:{backgroundColor:ie.palette.white,height:52,borderRadius:26,fontFamily:"Source Sans Pro",fontSize:16,fontWeight:600,fontStretch:"normal",fontStyle:"normal",whiteSpace:"nowrap",lineHeight:"normal",letterSpacing:.51,color:ie.palette.black,"&.Mui-disabled":{color:ie.palette.white[1]}},contained:{color:ie.palette.white,textTransform:"none",padding:"0px 72px",backgroundColor:ie.palette.blue,boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21)",[ie.breakpoints.down("sm")]:{padding:"0px 56px"},"&:hover":{boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21)",backgroundColor:ie.palette.footer.background},"@media (hover: none)":{"&:hover":{boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21) !important",backgroundColor:ie.palette.footer.background+" !important"}}},containedSecondary:{color:ie.palette.blue,backgroundColor:ie.palette.white,"&:hover":{color:ie.palette.white,backgroundColor:ie.palette.footer.background},"@media (hover: none)":{"&:hover":{color:ie.palette.white+" !important",backgroundColor:ie.palette.footer.background+" !important"}}},text:{backgroundColor:ie.palette.transparent,color:ie.palette.blue,borderRadius:12,"&:hover":{backgroundColor:ie.palette.transparent,color:ie.palette.cyan},"& .MuiTouchRipple-root span":{backgroundColor:"rgba(0, 0, 0, 0.08)!important"}}},ce={root:{fontFamily:"Source Sans Pro",fontSize:16,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:"normal",letterSpacing:"normal",color:ie.palette.pageText.title,marginRight:12},h1:{fontFamily:"Source Sans Pro",fontSize:56,fontWeight:500,fontStretch:"normal",fontStyle:"normal",lineHeight:1.21,letterSpacing:.08,color:ie.palette.pageText.title,[ie.breakpoints.down("sm")]:{fontSize:42,lineHeight:1.28,letterSpacing:-2.23}},h2:{fontFamily:"Source Sans Pro",fontSize:32,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.03,letterSpacing:2.91,color:ie.palette.pageText.title},h3:{fontFamily:"Source Sans Pro",fontSize:22,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.5,letterSpacing:2,color:ie.palette.pageText.title,[ie.breakpoints.down("sm")]:{fontSize:15.4,letterSpacing:"1.4px"}},subtitle1:{fontFamily:"Source Sans Pro",fontSize:18,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.83,letterSpacing:1.64,color:ie.palette.blue},subtitle2:{},body1:{fontFamily:"Source Sans Pro",fontSize:20,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.6,letterSpacing:.49,color:ie.palette.pageText.body,[ie.breakpoints.down("sm")]:{fontSize:17,lineHeight:1.5,letterSpacing:.7}},body2:{fontFamily:"Source Sans Pro",fontSize:17,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.53,letterSpacing:.5,color:ie.palette.pageText.body},button:{},gutterBottom:{marginBottom:"8px"}};ie.components={MuiTypography:{styleOverrides:ce},MuiButton:{styleOverrides:le},MuiIconButton:{styleOverrides:{root:{backgroundColor:"rgba(0, 0, 0, 0)","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.2)"}}}}};const de=ie,se=(0,v.Z)("main")((e=>{let{theme:t,dark:o}=e;return{backgroundColor:o?"#1f354b":t.palette.pageBackground.secondary,padding:"50px 32px 0px",minHeight:"calc(100vh - 140px)",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",[t.breakpoints.down(966)]:{padding:"50px 32px 0px"}}})),pe=()=>{const{colorMode:e}=(0,m.I)();return n.createElement(se,{dark:"dark"===e?1:0},n.createElement(ee,null),n.createElement(g.Z,{sx:{height:20}}))};function he(){const{siteConfig:e}=(0,f.Z)();return n.createElement(C,{theme:de},n.createElement(u,null,n.createElement(M.Z,{title:"Documentation",description:"Documentation for Switchboard V2"},n.createElement(pe,null))))}}}]);