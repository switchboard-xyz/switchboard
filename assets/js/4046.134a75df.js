"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4046],{38763:(e,t,n)=>{n.d(t,{Z:()=>U});var r=n(95907),o=n(76178),i=n(49231),a=n(19841),l=n(32301),s=n(51634),u=n(41534),c=n(82110),p=n(42382),d=n(61304);var h=n(95438),m=n(62399);function f(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function b(e,t,n){var r=f(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var l={};for(var s in t){if(o[s])for(r=0;r<o[s].length;r++){var u=o[s][r];l[o[s][r]]=n(u)}l[s]=n(s)}for(r=0;r<i.length;r++)l[i[r]]=n(i[r]);return l}(t,r);return Object.keys(o).forEach((function(a){var l=o[a];if((0,i.isValidElement)(l)){var s=a in t,u=a in r,c=t[a],p=(0,i.isValidElement)(c)&&!c.props.in;!u||s&&!p?u||!s||p?u&&s&&(0,i.isValidElement)(c)&&(o[a]=(0,i.cloneElement)(l,{onExited:n.bind(null,l),in:c.props.in,exit:g(l,"exit",e),enter:g(l,"enter",e)})):o[a]=(0,i.cloneElement)(l,{in:!1}):o[a]=(0,i.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:g(l,"exit",e),enter:g(l,"enter",e)})}})),o}var v=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,h.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,f(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})}))):b(e,o,a),firstRender:!1}},n.handleExited=function(e,t){var n=f(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.Z)(e,["component","childFactory"]),a=this.state.contextValue,l=v(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(m.Z.Provider,{value:a},l):i.createElement(m.Z.Provider,{value:a},i.createElement(t,r,l))},t}(i.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const Z=y;n(86671),n(26095);var x=n(19433);n(21014);function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,x.O)(t)}var M=function(){var e=R.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var E=n(20264);const T=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:l,rippleSize:s,in:u,onExited:c,timeout:p}=e,[d,h]=i.useState(!1),m=(0,a.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),f={width:s,height:s,top:-s/2+l,left:-s/2+o},g=(0,a.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||h(!0),i.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,E.jsx)("span",{className:m,style:f,children:(0,E.jsx)("span",{className:g})})};var w=n(1274);const k=(0,w.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),P=["center","classes","className"];let S,B,C,V,$=e=>e;const N=M(S||(S=$`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),j=M(B||(B=$`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),D=M(C||(C=$`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),L=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),O=(0,s.ZP)(T,{name:"MuiTouchRipple",slot:"Ripple"})(V||(V=$`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),k.rippleVisible,N,550,(({theme:e})=>e.transitions.easing.easeInOut),k.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),k.child,k.childLeaving,j,550,(({theme:e})=>e.transitions.easing.easeInOut),k.childPulsate,D,(({theme:e})=>e.transitions.easing.easeInOut)),W=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:l=!1,classes:s={},className:c}=n,p=(0,o.Z)(n,P),[d,h]=i.useState([]),m=i.useRef(0),f=i.useRef(null);i.useEffect((()=>{f.current&&(f.current(),f.current=null)}),[d]);const g=i.useRef(!1),b=i.useRef(null),v=i.useRef(null),y=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(b.current)}),[]);const x=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,E.jsx)(O,{classes:{ripple:(0,a.Z)(s.ripple,k.ripple),rippleVisible:(0,a.Z)(s.rippleVisible,k.rippleVisible),ripplePulsate:(0,a.Z)(s.ripplePulsate,k.ripplePulsate),child:(0,a.Z)(s.child,k.child),childLeaving:(0,a.Z)(s.childLeaving,k.childLeaving),childPulsate:(0,a.Z)(s.childPulsate,k.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},m.current)])),m.current+=1,f.current=i}),[s]),R=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=l||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&g.current)return void(g.current=!1);"touchstart"===(null==e?void 0:e.type)&&(g.current=!0);const a=i?null:y.current,s=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(s.width/2),c=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-s.left),c=Math.round(n-s.top)}if(o)p=Math.sqrt((2*s.width**2+s.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((a?a.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===v.current&&(v.current=()=>{x({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},b.current=setTimeout((()=>{v.current&&(v.current(),v.current=null)}),80)):x({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[l,x]),M=i.useCallback((()=>{R({},{pulsate:!0})}),[R]),T=i.useCallback(((e,t)=>{if(clearTimeout(b.current),"touchend"===(null==e?void 0:e.type)&&v.current)return v.current(),v.current=null,void(b.current=setTimeout((()=>{T(e,t)})));v.current=null,h((e=>e.length>0?e.slice(1):e)),f.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:M,start:R,stop:T})),[M,R,T]),(0,E.jsx)(L,(0,r.Z)({className:(0,a.Z)(k.root,s.root,c),ref:y},p,{children:(0,E.jsx)(Z,{component:null,exit:!0,children:d})}))}));var F=n(7523);function I(e){return(0,F.Z)("MuiButtonBase",e)}const z=(0,w.Z)("MuiButtonBase",["root","disabled","focusVisible"]),X=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],A=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${z.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),U=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:h=!1,children:m,className:f,component:g="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:y=!1,focusRipple:Z=!1,LinkComponent:x="a",onBlur:R,onClick:M,onContextMenu:T,onDragLeave:w,onFocus:k,onFocusVisible:P,onKeyDown:S,onKeyUp:B,onMouseDown:C,onMouseLeave:V,onMouseUp:$,onTouchEnd:N,onTouchMove:j,onTouchStart:D,tabIndex:L=0,TouchRippleProps:O,touchRippleRef:F,type:z}=n,U=(0,o.Z)(n,X),Y=i.useRef(null),K=i.useRef(null),_=(0,c.Z)(K,F),{isFocusVisibleRef:H,onFocus:q,onBlur:J,ref:G}=(0,d.Z)(),[Q,ee]=i.useState(!1);b&&Q&&ee(!1),i.useImperativeHandle(s,(()=>({focusVisible:()=>{ee(!0),Y.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!v&&!b;function oe(e,t,n=y){return(0,p.Z)((r=>{t&&t(r);return!n&&K.current&&K.current[e](r),!0}))}i.useEffect((()=>{Q&&Z&&!v&&te&&K.current.pulsate()}),[v,Z,Q,te]);const ie=oe("start",C),ae=oe("stop",T),le=oe("stop",w),se=oe("stop",$),ue=oe("stop",(e=>{Q&&e.preventDefault(),V&&V(e)})),ce=oe("start",D),pe=oe("stop",N),de=oe("stop",j),he=oe("stop",(e=>{J(e),!1===H.current&&ee(!1),R&&R(e)}),!1),me=(0,p.Z)((e=>{Y.current||(Y.current=e.currentTarget),q(e),!0===H.current&&(ee(!0),P&&P(e)),k&&k(e)})),fe=()=>{const e=Y.current;return g&&"button"!==g&&!("A"===e.tagName&&e.href)},ge=i.useRef(!1),be=(0,p.Z)((e=>{Z&&!ge.current&&Q&&K.current&&" "===e.key&&(ge.current=!0,K.current.stop(e,(()=>{K.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),S&&S(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!b&&(e.preventDefault(),M&&M(e))})),ve=(0,p.Z)((e=>{Z&&" "===e.key&&K.current&&Q&&!e.defaultPrevented&&(ge.current=!1,K.current.stop(e,(()=>{K.current.pulsate(e)}))),B&&B(e),M&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ye=g;"button"===ye&&(U.href||U.to)&&(ye=x);const Ze={};"button"===ye?(Ze.type=void 0===z?"button":z,Ze.disabled=b):(U.href||U.to||(Ze.role="button"),b&&(Ze["aria-disabled"]=b));const xe=(0,c.Z)(t,G,Y);const Re=(0,r.Z)({},n,{centerRipple:h,component:g,disabled:b,disableRipple:v,disableTouchRipple:y,focusRipple:Z,tabIndex:L,focusVisible:Q}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,l.Z)(i,I,o);return n&&r&&(a.root+=` ${r}`),a})(Re);return(0,E.jsxs)(A,(0,r.Z)({as:ye,className:(0,a.Z)(Me.root,f),ownerState:Re,onBlur:he,onClick:M,onContextMenu:ae,onFocus:me,onKeyDown:be,onKeyUp:ve,onMouseDown:ie,onMouseLeave:ue,onMouseUp:se,onDragLeave:le,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:xe,tabIndex:b?-1:L,type:z},Ze,U,{children:[m,re?(0,E.jsx)(W,(0,r.Z)({ref:_,center:h},O)):null]}))}))},50645:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(76178),o=n(95907),i=n(49231),a=n(19841),l=n(97514),s=n(32301),u=n(51634),c=n(41534),p=n(43005),d=n(1274),h=n(7523);function m(e){return(0,h.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(20264);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,p.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTypography"}),i=(e=>y[e]||e)(n.color),u=(0,l.Z)((0,o.Z)({},n,{color:i})),{align:d="inherit",className:h,component:Z,gutterBottom:x=!1,noWrap:R=!1,paragraph:M=!1,variant:E="body1",variantMapping:T=v}=u,w=(0,r.Z)(u,g),k=(0,o.Z)({},u,{align:d,color:i,className:h,component:Z,gutterBottom:x,noWrap:R,paragraph:M,variant:E,variantMapping:T}),P=Z||(M?"p":T[E]||v[E])||"span",S=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,m,a)})(k);return(0,f.jsx)(b,(0,o.Z)({as:P,ref:t,ownerState:k,className:(0,a.Z)(S.root,h)},w))}))},81244:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(49231);const o=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}}}]);