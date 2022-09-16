"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{4229:(e,t,o)=>{o.d(t,{T:()=>b});var n=o(21519),r=o(44267),a=o(15861),i=o(44073),l=o(39960),c=o(92949),d=o(44996),p=o(2734),s=o(13264),g=o(67294);const m=(0,s.Z)(i.Z)((e=>{let{theme:t,dark:o}=e;return{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",textAlign:"left",backgroundColor:o?t.palette.footer.background:t.palette.white,position:"relative",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba("+(o?"107 107 107":"86, 86, 86")+", 0.03)",[t.breakpoints.down(300)]:{paddingLeft:""}}})),h=(0,s.Z)(a.Z)((e=>{let{theme:t}=e;return{whiteSpace:"nowrap",fontSize:22,marginLeft:"22px",fontWeight:600,letterSpacing:"0.16px",[t.breakpoints.down(300)]:{marginLeft:"10px"}}})),f=(0,s.Z)(a.Z)((e=>{let{theme:t}=e;return{fontSize:18.5,margin:"20px 0px 0px",height:"110px",lineHeight:1.29,letterSpacing:"0.44px",[t.breakpoints.down(400)]:{fontSize:"17px"},[t.breakpoints.down(300)]:{fontSize:13}}})),u=(0,s.Z)(r.Z)((e=>{let{theme:t}=e;return{padding:"21px",[t.breakpoints.down(300)]:{paddingLeft:"10px",paddingRight:"10px"}}}));function b(e){let{title:t,image:o,description:r,linkTo:a}=e;const{colorMode:i}=(0,c.I)();(0,p.Z)();return g.createElement(m,{dark:"dark"===i?1:0},g.createElement(u,null,g.createElement("div",{style:{display:"flex",alignItems:"center"}},g.createElement("div",{style:{backgroundColor:"#4c6fff",borderRadius:"8px",height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},g.createElement("img",{src:(0,d.Z)(o),alt:"feature card",height:26,width:26})),g.createElement(h,{sx:{color:"dark"===i?"#dbdbdb":"#0b3863"}},t)),g.createElement(f,{variant:"body2",sx:{color:"dark"===i?"#dbdbdb":"#313e79"}},r),g.createElement("div",{style:{width:"100%",height:"31px",display:"flex",flexDirection:"column"}},g.createElement(n.Z,{sx:{margin:"0px -21px 15px",borderColor:"dark"===i?"gray":"Active Border"}}),g.createElement(l.Z,{to:a,style:{fontWeight:"bold",alignSelf:"flex-end",fontSize:14,marginRight:"21px"}},"View More"))))}},55299:(e,t,o)=>{o.d(t,{ZP:()=>s});var n=o(21265);const r="#4c6fff",a="#ffffff",i={black:"#000000",blue:r,white:a,indigo:"#635bff",yellow:"#fab007",orange:"#ff7602",cyan:"#12bcf5",pink:"#D372FC",red:"#fc5a5a",lightGray:"#f3f4f7",transparent:"rgba(0,0,0,0)",footer:{background:"#0a2540",text:"#8998AA"},pageText:{title:"#0a2540",body:"#425466",bodySecondary:"#6B7C93",highlight:r},pageBackground:{primary:a,secondary:"#f7f9fc"},navbar:{marketplace:"#061024"},background:{},primary:{}};i.background={default:i.white},i.primary={main:i.black};const l=i,c=(0,n.Z)({typography:{fontFamily:["Source Sans Pro","Poppins"].join(","),fontPrimary:"Source Sans Pro"},components:{MuiTextField:{defaultProps:{autoComplete:"off"}},MuiFilledInput:{defaultProps:{autoComplete:"off"}}},palette:l}),d={root:{backgroundColor:c.palette.white,height:52,borderRadius:26,fontFamily:"Source Sans Pro",fontSize:16,fontWeight:600,fontStretch:"normal",fontStyle:"normal",whiteSpace:"nowrap",lineHeight:"normal",letterSpacing:.51,color:c.palette.black,"&.Mui-disabled":{color:c.palette.white[1]}},contained:{color:c.palette.white,textTransform:"none",padding:"0px 72px",backgroundColor:c.palette.blue,boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21)",[c.breakpoints.down("sm")]:{padding:"0px 56px"},"&:hover":{boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21)",backgroundColor:c.palette.footer.background},"@media (hover: none)":{"&:hover":{boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21) !important",backgroundColor:c.palette.footer.background+" !important"}}},containedSecondary:{color:c.palette.blue,backgroundColor:c.palette.white,"&:hover":{color:c.palette.white,backgroundColor:c.palette.footer.background},"@media (hover: none)":{"&:hover":{color:c.palette.white+" !important",backgroundColor:c.palette.footer.background+" !important"}}},text:{backgroundColor:c.palette.transparent,color:c.palette.blue,borderRadius:12,"&:hover":{backgroundColor:c.palette.transparent,color:c.palette.cyan},"& .MuiTouchRipple-root span":{backgroundColor:"rgba(0, 0, 0, 0.08)!important"}}},p={root:{fontFamily:"Source Sans Pro",fontSize:16,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:"normal",letterSpacing:"normal",color:c.palette.pageText.title,marginRight:12},h1:{fontFamily:"Source Sans Pro",fontSize:56,fontWeight:500,fontStretch:"normal",fontStyle:"normal",lineHeight:1.21,letterSpacing:.08,color:c.palette.pageText.title,[c.breakpoints.down("sm")]:{fontSize:42,lineHeight:1.28,letterSpacing:-2.23}},h2:{fontFamily:"Source Sans Pro",fontSize:32,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.03,letterSpacing:2.91,color:c.palette.pageText.title},h3:{fontFamily:"Source Sans Pro",fontSize:22,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.5,letterSpacing:2,color:c.palette.pageText.title,[c.breakpoints.down("sm")]:{fontSize:15.4,letterSpacing:"1.4px"}},subtitle1:{fontFamily:"Source Sans Pro",fontSize:18,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.83,letterSpacing:1.64,color:c.palette.blue},subtitle2:{},body1:{fontFamily:"Source Sans Pro",fontSize:20,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.6,letterSpacing:.49,color:c.palette.pageText.body,[c.breakpoints.down("sm")]:{fontSize:17,lineHeight:1.5,letterSpacing:.7}},body2:{fontFamily:"Source Sans Pro",fontSize:17,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.53,letterSpacing:.5,color:c.palette.pageText.body},button:{},gutterBottom:{marginBottom:"8px"}};c.components={MuiTypography:{styleOverrides:p},MuiButton:{styleOverrides:d},MuiIconButton:{styleOverrides:{root:{backgroundColor:"rgba(0, 0, 0, 0)","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.2)"}}}}};const s=c},79273:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var n=o(83117),r=o(67294),a=o(33616),i=o(70917),l=o(85893);function c(e){const{styles:t,defaultTheme:o={}}=e,n="function"==typeof t?e=>{return t(null==(n=e)||0===Object.keys(n).length?o:e);var n}:t;return(0,l.jsx)(i.xB,{styles:n})}var d=o(90247);const p=function(e){return(0,l.jsx)(c,(0,n.Z)({},e,{defaultTheme:d.Z}))},s=(e,t)=>(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode}),g=e=>(0,n.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}});const m=function(e){const t=(0,a.Z)({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:i=!1}=t;return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(p,{styles:e=>((e,t=!1)=>{var o,r;let a={html:s(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,n.Z)({margin:0},g(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})};const i=null==(o=e.components)||null==(r=o.MuiCssBaseline)?void 0:r.styleOverrides;return i&&(a=[a,i]),a})(e,i)}),o]})};var h=o(87357),f=o(92949),u=o(52263),b=o(13264),x=o(71927),S=o(57753),k=o(86886),y=o(15861),w=o(2734),v=o(98396),C=o(4229);const Z=[{title:"Introduction",image:"/img/icons/info.png",description:"Learn about Switchboard and how it enables the community to dictate what data lives on-chain.",linkTo:"/learn"},{title:"Architecture",image:"/img/icons/arc.png",description:"Learn about Switchboard Oracle Queues and how they allocate oracle resources on-chain.",linkTo:"/learn/queues"},{title:"Oracle",image:"/img/icons/oracle.png",description:"Learn how to contribute to the network and process data feed updates.",linkTo:"/oracles"},{title:"Data Feeds",image:"/img/icons/sol.png",description:"Learn how Switchboard data feeds work.",linkTo:"/tasks"},{title:"Develop",image:"/img/icons/developers.png",description:"Learn how to develop with Switchboard and use the APIs.",linkTo:"/api"},{title:"Publish",image:"/img/icons/publish.svg",description:"Publish your own data feeds on-chain through Switchboard.",linkTo:"/feeds/publisher"}],E=(0,b.Z)("div")((e=>{let{theme:t,dark:o}=e;return{backgroundColor:o?t.palette.footer.background:t.palette.white,width:"100vw",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"-50px 0px 55px",paddingLeft:"40px"}})),P=(0,b.Z)(y.Z)((e=>{let{dark:t,theme:o}=e;return{marginBottom:"12px",fontWeight:600,fontFamily:"Poppins",color:t?o.palette.white:"#171725",fontSize:25,letterSpacing:"0.12px"}}));function T(){const e=(0,w.Z)(),{colorMode:t}=((0,v.Z)(e.breakpoints.down("sm"),{defaultMatches:!0}),(0,f.I)());return r.createElement(r.Fragment,null,r.createElement(E,{dark:"dark"===t?1:0},r.createElement("div",{style:{maxWidth:"1024px",margin:"auto"}},r.createElement(P,{dark:"dark"===t?1:0},"Welcome to Switchboard Documentation"),r.createElement(y.Z,{variant:"body2",sx:{fontFamily:"Poppins",color:"#92929d",fontSize:16,lineHeight:1.43}},"Switchboard provides a permission-less data layer to bridge the gap between the internet and web3. Click on a card below to learn how you can build with us."))),r.createElement(k.ZP,{container:!0,spacing:3,sx:{maxWidth:1024,alignSelf:"center"}},Z.map(((e,t)=>r.createElement(k.ZP,{item:!0,key:e.title,xs:12,sm:6,md:4},r.createElement(C.T,e))))))}var z=o(55299);const F=(0,b.Z)("main")((e=>{let{theme:t,dark:o}=e;return{backgroundColor:o?"#1f354b":t.palette.pageBackground.secondary,padding:"50px 32px 90px",minHeight:"calc(100vh - 324px)",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",[t.breakpoints.down(966)]:{padding:"50px 32px 90px"}}})),W=()=>{const{colorMode:e}=(0,f.I)();return r.createElement(F,{dark:"dark"===e?1:0},r.createElement(T,null),r.createElement(h.Z,{sx:{height:20}}))};function M(){const{siteConfig:e}=(0,u.Z)();return r.createElement(x.Z,{theme:z.ZP},r.createElement(m,null,r.createElement(S.Z,{title:"Documentation",description:"Documentation for Switchboard V2"},r.createElement(W,null))))}}}]);