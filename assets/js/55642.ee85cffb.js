(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55642],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64938:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(609)},53219:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(83117),o=r(80102),a=r(67294),i=r(86010),l=r(94780),c=r(98216),u=r(33616),s=r(90948),p=r(34867);function m(e){return(0,p.Z)("MuiSvgIcon",e)}(0,r(1588).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=r(85893);const d=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,c.Z)(r.color)}`],t[`fontSize${(0,c.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var r,n,o,a,i,l,c,u,s,p,m,f,d,h,g,v,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(n=r.create)?void 0:n.call(r,"fill",{duration:null==(o=e.transitions)||null==(a=o.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(l=i.pxToRem)?void 0:l.call(i,20))||"1.25rem",medium:(null==(c=e.typography)||null==(u=c.pxToRem)?void 0:u.call(c,24))||"1.5rem",large:(null==(s=e.typography)||null==(p=s.pxToRem)?void 0:p.call(s,35))||"2.1875"}[t.fontSize],color:null!=(m=null==(f=(e.vars||e).palette)||null==(d=f[t.color])?void 0:d.main)?m:{action:null==(h=(e.vars||e).palette)||null==(g=h.action)?void 0:g.active,disabled:null==(v=(e.vars||e).palette)||null==(y=v.action)?void 0:y.disabled,inherit:void 0}[t.color]}})),g=a.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:s,color:p="inherit",component:g="svg",fontSize:v="medium",htmlColor:y,inheritViewBox:b=!1,titleAccess:Z,viewBox:w="0 0 24 24"}=r,S=(0,o.Z)(r,d),x=(0,n.Z)({},r,{color:p,component:g,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:w}),O={};b||(O.viewBox=w);const j=(e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root","inherit"!==t&&`color${(0,c.Z)(t)}`,`fontSize${(0,c.Z)(r)}`]};return(0,l.Z)(o,m,n)})(x);return(0,f.jsxs)(h,(0,n.Z)({as:g,className:(0,i.Z)(j.root,s),ownerState:x,focusable:"false",color:y,"aria-hidden":!Z||void 0,role:Z?"img":void 0,ref:t},O,S,{children:[a,Z?(0,f.jsx)("title",{children:Z}):null]}))}));g.muiName="SvgIcon";const v=g},15861:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(80102),o=r(83117),a=r(67294),i=r(86010),l=r(39707),c=r(94780),u=r(90948),s=r(33616),p=r(98216),m=r(34867);function f(e){return(0,m.Z)("MuiTypography",e)}(0,r(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var d=r(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiTypography"}),a=(e=>y[e]||e)(r.color),u=(0,l.Z)((0,o.Z)({},r,{color:a})),{align:m="inherit",className:b,component:Z,gutterBottom:w=!1,noWrap:S=!1,paragraph:x=!1,variant:O="body1",variantMapping:j=v}=u,P=(0,n.Z)(u,h),T=(0,o.Z)({},u,{align:m,color:a,className:b,component:Z,gutterBottom:w,noWrap:S,paragraph:x,variant:O,variantMapping:j}),B=Z||(x?"p":j[O]||v[O])||"span",M=(e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,c.Z)(l,f,i)})(T);return(0,d.jsx)(g,(0,o.Z)({as:B,ref:t,ownerState:T,className:(0,i.Z)(M.root,b)},P))}))},82066:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(83117),o=r(67294),a=r(53219),i=r(85893);function l(e,t){const r=(r,o)=>(0,i.jsx)(a.Z,(0,n.Z)({"data-testid":`${t}Icon`,ref:o},r,{children:e}));return r.muiName=a.Z.muiName,o.memo(o.forwardRef(r))}},609:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>o.Z,createChainedFunction:()=>a,createSvgIcon:()=>i.Z,debounce:()=>l,deprecatedPropType:()=>c,isMuiElement:()=>s,ownerDocument:()=>m,ownerWindow:()=>f,requirePropFactory:()=>d,setRef:()=>h,unstable_ClassNameGenerator:()=>x,unstable_useEnhancedEffect:()=>g.Z,unstable_useId:()=>v.Z,unsupportedProp:()=>y,useControlled:()=>b.Z,useEventCallback:()=>Z.Z,useForkRef:()=>w.Z,useIsFocusVisible:()=>S.Z});var n=r(37078),o=r(98216);const a=function(...e){return e.reduce(((e,t)=>null==t?e:function(...r){e.apply(this,r),t.apply(this,r)}),(()=>{}))};var i=r(82066);const l=function(e,t=166){let r;function n(...n){clearTimeout(r),r=setTimeout((()=>{e.apply(this,n)}),t)}return n.clear=()=>{clearTimeout(r)},n};const c=function(e,t){return()=>null};var u=r(67294);const s=function(e,t){return u.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)};var p=r(57094);const m=p.Z;const f=function(e){return(0,p.Z)(e).defaultView||window};r(83117);const d=function(e,t){return()=>null};const h=r(7960).Z;var g=r(58974),v=r(58785);const y=function(e,t,r,n,o){return null};var b=r(22627),Z=r(9327),w=r(51705),S=r(18791);const x={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.Z.configure(e)}}},66344:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);