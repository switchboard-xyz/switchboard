"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7919],{26900:(e,t,n)=>{function a(e){return"string"==typeof e}n.d(t,{Z:()=>a})},34082:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(76178),r=n(95907),o=n(49231),i=n(19841),s=n(91250),l=n(32301),d=n(155),c=n(14427),u=n(32082),m=n(1274),p=n(7523);function g(e){return(0,p.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=n(20264);const b=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTypography"}),o=(e=>y[e]||e)(n.color),d=(0,s.Z)((0,r.Z)({},n,{color:o})),{align:m="inherit",className:p,component:Z,gutterBottom:x=!1,noWrap:w=!1,paragraph:S=!1,variant:k="body1",variantMapping:C=f}=d,P=(0,a.Z)(d,b),E=(0,r.Z)({},d,{align:m,color:o,className:p,component:Z,gutterBottom:x,noWrap:w,paragraph:S,variant:k,variantMapping:C}),N=Z||(S?"p":C[k]||f[k])||"span",I=(e=>{const{align:t,gutterBottom:n,noWrap:a,paragraph:r,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,n&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,l.Z)(s,g,i)})(E);return(0,h.jsx)(v,(0,r.Z)({as:N,ref:t,ownerState:E,className:(0,i.Z)(I.root,p)},P))}))},32082:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(77152).Z},10509:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(49231),r=n(2596);const o=function(e){const t=a.useRef(e);return(0,r.Z)((()=>{t.current=e})),a.useCallback(((...e)=>(0,t.current)(...e)),[])}},92572:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(74365).Z},31418:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(49231);let r,o=!0,i=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function d(){o=!1}function c(){"hidden"===this.visibilityState&&i&&(o=!0)}function u(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return o||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const m=function(){const e=a.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",d,!0),t.addEventListener("pointerdown",d,!0),t.addEventListener("touchstart",d,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=a.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!u(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,window.clearTimeout(r),r=window.setTimeout((()=>{i=!1}),100),t.current=!1,!0)},ref:e}}},74662:(e,t,n)=>{function a(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>a})},74365:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(49231),r=n(74662);function o(...e){return a.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,r.Z)(e,t)}))}),e)}},55607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(95907),r=n(49231),o=n(19841),i=n(81684),s=n(37681),l=n(28784);const d={anchorWithStickyNavbar:"anchorWithStickyNavbar_gzYQ",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_NLxX"};function c(e){let{as:t,id:n,...c}=e;const{navbar:{hideOnScroll:u}}=(0,s.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},c,{id:void 0}));const m=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof c.children?c.children:n});return r.createElement(t,(0,a.Z)({},c,{className:(0,o.Z)("anchor",u?d.anchorWithHideOnScrollNavbar:d.anchorWithStickyNavbar,c.className),id:n}),c.children,r.createElement(l.default,{className:"hash-link",to:`#${n}`,"aria-label":m,title:m},"\u200b"))}},91791:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});var a=n(49231),r=n(28784),o=n(11951),i=n(7491);n(55607);var s=n(68079),l=n(76178),d=n(95907),c=n(19841),u=n(32301),m=n(26900),p=n(60487),g=n(155),h=n(14427),b=n(90622),v=n(52635),f=n(96102),y=n(92572);const Z=a.createContext({});var x=n(1274),w=n(7523);function S(e){return(0,w.Z)("MuiListItem",e)}const k=(0,x.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const C=(0,x.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function P(e){return(0,w.Z)("MuiListItemSecondaryAction",e)}(0,x.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var E=n(20264);const N=["className"],I=(0,g.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,d.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),L=a.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:r}=n,o=(0,l.Z)(n,N),i=a.useContext(Z),s=(0,d.Z)({},n,{disableGutters:i.disableGutters}),m=(e=>{const{disableGutters:t,classes:n}=e,a={root:["root",t&&"disableGutters"]};return(0,u.Z)(a,P,n)})(s);return(0,E.jsx)(I,(0,d.Z)({className:(0,c.Z)(m.root,r),ownerState:s,ref:t},o))}));L.muiName="ListItemSecondaryAction";const R=L,M=["className"],A=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],$=(0,g.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,d.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,d.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${C.root}`]:{paddingRight:48}},{[`&.${k.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${k.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,p.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${k.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,p.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${k.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,p.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,p.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),O=(0,g.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),B=a.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiListItem"}),{alignItems:r="center",autoFocus:o=!1,button:i=!1,children:s,className:p,component:g,components:x={},componentsProps:w={},ContainerComponent:C="li",ContainerProps:{className:P}={},dense:N=!1,disabled:I=!1,disableGutters:L=!1,disablePadding:B=!1,divider:W=!1,focusVisibleClassName:G,secondaryAction:T,selected:j=!1,slotProps:F={},slots:D={}}=n,V=(0,l.Z)(n.ContainerProps,M),z=(0,l.Z)(n,A),H=a.useContext(Z),q=a.useMemo((()=>({dense:N||H.dense||!1,alignItems:r,disableGutters:L})),[r,H.dense,N,L]),K=a.useRef(null);(0,f.Z)((()=>{o&&K.current&&K.current.focus()}),[o]);const X=a.Children.toArray(s),Y=X.length&&(0,v.Z)(X[X.length-1],["ListItemSecondaryAction"]),_=(0,d.Z)({},n,{alignItems:r,autoFocus:o,button:i,dense:q.dense,disabled:I,disableGutters:L,disablePadding:B,divider:W,hasSecondaryAction:Y,selected:j}),J=(e=>{const{alignItems:t,button:n,classes:a,dense:r,disabled:o,disableGutters:i,disablePadding:s,divider:l,hasSecondaryAction:d,selected:c}=e,m={root:["root",r&&"dense",!i&&"gutters",!s&&"padding",l&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",c&&"selected"],container:["container"]};return(0,u.Z)(m,S,a)})(_),Q=(0,y.Z)(K,t),U=D.root||x.Root||$,ee=F.root||w.root||{},te=(0,d.Z)({className:(0,c.Z)(J.root,ee.className,p),disabled:I},z);let ne=g||"li";return i&&(te.component=g||"div",te.focusVisibleClassName=(0,c.Z)(k.focusVisible,G),ne=b.Z),Y?(ne=te.component||g?ne:"div","li"===C&&("li"===ne?ne="div":"li"===te.component&&(te.component="div")),(0,E.jsx)(Z.Provider,{value:q,children:(0,E.jsxs)(O,(0,d.Z)({as:C,className:(0,c.Z)(J.container,P),ref:Q,ownerState:_},V,{children:[(0,E.jsx)(U,(0,d.Z)({},ee,!(0,m.Z)(U)&&{as:ne,ownerState:(0,d.Z)({},_,ee.ownerState)},te,{children:X})),X.pop()]}))})):(0,E.jsx)(Z.Provider,{value:q,children:(0,E.jsxs)(U,(0,d.Z)({},ee,{as:ne,ref:Q},!(0,m.Z)(U)&&{ownerState:(0,d.Z)({},_,ee.ownerState)},te,{children:[X,T&&(0,E.jsx)(R,{children:T})]}))})}));var W=n(62122),G=n(22073),T=n(30575),j=n(34082);function F(e){return(0,w.Z)("MuiList",e)}(0,x.Z)("MuiList",["root","padding","dense","subheader"]);const D=["children","className","component","dense","disablePadding","subheader"],V=(0,g.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((({ownerState:e})=>(0,d.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),z=a.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiList"}),{children:r,className:o,component:i="ul",dense:s=!1,disablePadding:m=!1,subheader:p}=n,g=(0,l.Z)(n,D),b=a.useMemo((()=>({dense:s})),[s]),v=(0,d.Z)({},n,{component:i,dense:s,disablePadding:m}),f=(e=>{const{classes:t,disablePadding:n,dense:a,subheader:r}=e,o={root:["root",!n&&"padding",a&&"dense",r&&"subheader"]};return(0,u.Z)(o,F,t)})(v);return(0,E.jsx)(Z.Provider,{value:b,children:(0,E.jsxs)(V,(0,d.Z)({as:i,className:(0,c.Z)(f.root,o),ref:t,ownerState:v},g,{children:[p,r]}))})}));var H=n(83191),q=n(92407);const K=(0,H.Z)(s.Z)((e=>{let{theme:t,dark:n}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:n?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(n?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",m:4,p:4,width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:n?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),X=(0,H.Z)(B)((e=>{let{theme:t}=e;return{fontWeight:900,textDecoration:"none","&::before":{content:'"\\00BB"',paddingRight:t.spacing(1)}}})),Y=(0,H.Z)(W.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function _(e){let{title:t,description:n,links:o,image:i,imageDark:s,sx:l}=e;const{colorMode:d}=(0,q.I)();return a.createElement(K,{dark:"dark"===d?1:0,sx:l},a.createElement(G.Z,{sx:{height:"100%",width:"100%"}},a.createElement(T.ZP,{container:!0,justifyContent:"space-between"},a.createElement(T.ZP,{item:!0,md:4,xs:12},a.createElement(Y,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===d&&s?s:i),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),n?a.createElement(a.Fragment,null,a.createElement(j.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem",paddingLeft:2}},n)):a.createElement(a.Fragment,null)),a.createElement(T.ZP,{item:!0,md:4,xs:12},a.createElement(z,null,o.map(((e,t)=>a.createElement(X,{key:t,disableGutters:!0},a.createElement(r.default,{to:e.href},e.text)))))))))}var J=n(5485),Q=n(81128);const U=[{href:"#",text:"Link 1"},{href:"#",text:"Link 2"},{href:"#",text:"Link 3"}];function ee(){const{siteConfig:e}=(0,o.default)();return a.createElement(i.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},a.createElement("main",null,a.createElement(Q.Z,{sx:{height:"100px",margin:"auto",background:"none"}}),a.createElement(T.ZP,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"center",spacing:4},Array.from({length:3},((e,t)=>t)).map((e=>a.createElement(T.ZP,{item:!0,xs:12,key:e,sx:{width:"80vw"}},a.createElement(_,{title:"learn",description:"nope",links:U,image:a.createElement("img",{src:(0,J.Z)("/img/icons/rust/crab.svg")}),imageDark:a.createElement("img",{src:(0,J.Z)("/img/icons/rust/crab.svg")})})))))))}},62399:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(49231).createContext(null)}}]);