"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9333],{4073:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(7462),o=r(3366),i=r(7294),a=r(6010),l=r(4780),s=r(948),d=r(3616),c=r(1796),v=r(4867),u=r(1588);function h(e){return(0,v.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=r(5893);const m=["className","component","elevation","square","variant"],f=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},g=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})((({theme:e,ownerState:t})=>{var r;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,c.Fq)("#fff",f(t.elevation))}, ${(0,c.Fq)("#fff",f(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))})),w=i.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:c=1,square:v=!1,variant:u="elevation"}=r,f=(0,o.Z)(r,m),w=(0,n.Z)({},r,{component:s,elevation:c,square:v,variant:u}),Z=(e=>{const{square:t,elevation:r,variant:n,classes:o}=e,i={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${r}`]};return(0,l.Z)(i,h,o)})(w);return(0,p.jsx)(g,(0,n.Z)({as:s,ownerState:w,className:(0,a.Z)(Z.root,i),ref:t},f))}));function Z(e){return(0,v.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);const b=["className","raised"],x=(0,s.ZP)(w,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),M=i.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=r,c=(0,o.Z)(r,b),v=(0,n.Z)({},r,{raised:s}),u=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},Z,t)})(v);return(0,p.jsx)(x,(0,n.Z)({className:(0,a.Z)(u.root,i),elevation:s?8:void 0,ref:t,ownerState:v},c))}))},4267:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),o=r(3366),i=r(7294),a=r(6010),l=r(4780),s=r(948),d=r(3616),c=r(4867);function v(e){return(0,c.Z)("MuiCardContent",e)}(0,r(1588).Z)("MuiCardContent",["root"]);var u=r(5893);const h=["className","component"],p=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),m=i.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=r,c=(0,o.Z)(r,h),m=(0,n.Z)({},r,{component:s}),f=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},v,t)})(m);return(0,u.jsx)(p,(0,n.Z)({as:s,className:(0,a.Z)(f.root,i),ownerState:m,ref:t},c))}))},1519:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(3366),o=r(7462),i=r(7294),a=r(6010),l=r(4780),s=r(1796),d=r(948),c=r(3616),v=r(4867);function u(e){return(0,v.Z)("MuiDivider",e)}(0,r(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=r(5893);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),g=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:d,component:v=(s?"div":"hr"),flexItem:g=!1,light:w=!1,orientation:Z="horizontal",role:b=("hr"!==v?"separator":void 0),textAlign:x="center",variant:M="fullWidth"}=r,S=(0,n.Z)(r,p),C=(0,o.Z)({},r,{absolute:i,component:v,flexItem:g,light:w,orientation:Z,role:b,textAlign:x,variant:M}),R=(e=>{const{absolute:t,children:r,classes:n,flexItem:o,light:i,orientation:a,textAlign:s,variant:d}=e,c={root:["root",t&&"absolute",d,i&&"light","vertical"===a&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(c,u,n)})(C);return(0,h.jsx)(m,(0,o.Z)({as:v,className:(0,a.Z)(R.root,d),role:b,ref:t,ownerState:C},S,{children:s?(0,h.jsx)(f,{className:R.wrapper,ownerState:C,children:s}):null}))}))},8396:(e,t,r)=>{var n;r.d(t,{Z:()=>v});var o=r(7294),i=r(4168),a=r(539),l=r(8974);function s(e,t,r,n,i){const a="undefined"!=typeof window&&void 0!==window.matchMedia,[s,d]=o.useState((()=>i&&a?r(e).matches:n?n(e).matches:t));return(0,l.Z)((()=>{let t=!0;if(!a)return;const n=r(e),o=()=>{t&&d(n.matches)};return o(),n.addListener(o),()=>{t=!1,n.removeListener(o)}}),[e,r,a]),s}const d=(n||(n=r.t(o,2))).useSyncExternalStore;function c(e,t,r,n){const i=o.useCallback((()=>t),[t]),a=o.useMemo((()=>{if(null!==n){const{matches:t}=n(e);return()=>t}return i}),[i,e,n]),[l,s]=o.useMemo((()=>{if(null===r)return[i,()=>()=>{}];const t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[i,r,e]);return d(s,l,a)}function v(e,t={}){const r=(0,i.Z)(),n="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:l=(n?window.matchMedia:null),ssrMatchMedia:v=null,noSsr:u}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:r});let h="function"==typeof e?e(r):e;h=h.replace(/^@media( ?)/m,"");return(void 0!==d?c:s)(h,o,l,v,u)}},1927:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(7462),i=r(4819),a=r(6760);const l="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var s=r(5893);const d=function(e){const{children:t,theme:r}=e,d=(0,a.Z)(),c=n.useMemo((()=>{const e=null===d?r:function(e,t){if("function"==typeof t)return t(e);return(0,o.Z)({},e,t)}(d,r);return null!=e&&(e[l]=null!==d),e}),[r,d]);return(0,s.jsx)(i.Z.Provider,{value:c,children:t})};var c=r(4880),v=r(6682);function u(e){const t=(0,v.Z)();return(0,s.jsx)(c.T.Provider,{value:"object"==typeof t?t:{},children:e.children})}const h=function(e){const{children:t,theme:r}=e;return(0,s.jsx)(d,{theme:r,children:(0,s.jsx)(u,{children:t})})}},3264:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(182).ZP)()}}]);