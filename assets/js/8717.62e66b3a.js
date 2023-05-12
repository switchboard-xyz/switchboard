"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8717],{90622:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(95907),i=n(76178),o=n(49231),l=n(19841),s=n(32301),a=n(155),u=n(14427),c=n(92572),p=n(10509),d=n(31418);var h=n(95438),f=n(62399);function m(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function b(e,t,n){return null!=n[t]?n[t]:e.props[t]}function v(e,t,n){var r=m(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var s={};for(var a in t){if(i[a])for(r=0;r<i[a].length;r++){var u=i[a][r];s[i[a][r]]=n(u)}s[a]=n(a)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(l){var s=i[l];if((0,o.isValidElement)(s)){var a=l in t,u=l in r,c=t[l],p=(0,o.isValidElement)(c)&&!c.props.in;!u||a&&!p?u||!a||p?u&&a&&(0,o.isValidElement)(c)&&(i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:c.props.in,exit:b(s,"exit",e),enter:b(s,"enter",e)})):i[l]=(0,o.cloneElement)(s,{in:!1}):i[l]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:b(s,"exit",e),enter:b(s,"enter",e)})}})),i}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,h.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,m(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:b(e,"appear",n),enter:b(e,"enter",n),exit:b(e,"exit",n)})}))):v(e,i,l),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,i.Z)(e,["component","childFactory"]),l=this.state.contextValue,s=g(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(f.Z.Provider,{value:l},s):o.createElement(f.Z.Provider,{value:l},o.createElement(t,r,s))},t}(o.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const x=y;n(86671),n(26095);var R=n(19433);n(21014);function E(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,R.O)(t)}var M=function(){var e=E.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var Z=n(20264);const k=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:a,in:u,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,l.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:a,height:a,top:-a/2+s,left:-a/2+i},b=(0,l.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||h(!0),o.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,Z.jsx)("span",{className:f,style:m,children:(0,Z.jsx)("span",{className:b})})};var T=n(1274);const V=(0,T.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),w=["center","classes","className"];let C,P,S,$,D=e=>e;const j=M(C||(C=D`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),L=M(P||(P=D`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),B=M(S||(S=D`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),N=(0,a.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),O=(0,a.ZP)(k,{name:"MuiTouchRipple",slot:"Ripple"})($||($=D`
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
`),V.rippleVisible,j,550,(({theme:e})=>e.transitions.easing.easeInOut),V.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),V.child,V.childLeaving,L,550,(({theme:e})=>e.transitions.easing.easeInOut),V.childPulsate,B,(({theme:e})=>e.transitions.easing.easeInOut)),F=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:a={},className:c}=n,p=(0,i.Z)(n,w),[d,h]=o.useState([]),f=o.useRef(0),m=o.useRef(null);o.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=o.useRef(!1),v=o.useRef(null),g=o.useRef(null),y=o.useRef(null);o.useEffect((()=>()=>{clearTimeout(v.current)}),[]);const R=o.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;h((e=>[...e,(0,Z.jsx)(O,{classes:{ripple:(0,l.Z)(a.ripple,V.ripple),rippleVisible:(0,l.Z)(a.rippleVisible,V.rippleVisible),ripplePulsate:(0,l.Z)(a.ripplePulsate,V.ripplePulsate),child:(0,l.Z)(a.child,V.child),childLeaving:(0,l.Z)(a.childLeaving,V.childLeaving),childPulsate:(0,l.Z)(a.childPulsate,V.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},f.current)])),f.current+=1,m.current=o}),[a]),E=o.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=s||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const l=o?null:y.current,a=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-a.left),c=Math.round(n-a.top)}if(i)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{R({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},v.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):R({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[s,R]),M=o.useCallback((()=>{E({},{pulsate:!0})}),[E]),k=o.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void(v.current=setTimeout((()=>{k(e,t)})));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return o.useImperativeHandle(t,(()=>({pulsate:M,start:E,stop:k})),[M,E,k]),(0,Z.jsx)(N,(0,r.Z)({className:(0,l.Z)(V.root,a.root,c),ref:y},p,{children:(0,Z.jsx)(x,{component:null,exit:!0,children:d})}))}));var I=n(7523);function z(e){return(0,I.Z)("MuiButtonBase",e)}const X=(0,T.Z)("MuiButtonBase",["root","disabled","focusVisible"]),U=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Y=(0,a.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),A=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:h=!1,children:f,className:m,component:b="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:y=!1,focusRipple:x=!1,LinkComponent:R="a",onBlur:E,onClick:M,onContextMenu:k,onDragLeave:T,onFocus:V,onFocusVisible:w,onKeyDown:C,onKeyUp:P,onMouseDown:S,onMouseLeave:$,onMouseUp:D,onTouchEnd:j,onTouchMove:L,onTouchStart:B,tabIndex:N=0,TouchRippleProps:O,touchRippleRef:I,type:X}=n,A=(0,i.Z)(n,U),K=o.useRef(null),_=o.useRef(null),H=(0,c.Z)(_,I),{isFocusVisibleRef:W,onFocus:q,onBlur:G,ref:J}=(0,d.Z)(),[Q,ee]=o.useState(!1);v&&Q&&ee(!1),o.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),K.current.focus()}})),[]);const[te,ne]=o.useState(!1);o.useEffect((()=>{ne(!0)}),[]);const re=te&&!g&&!v;function ie(e,t,n=y){return(0,p.Z)((r=>{t&&t(r);return!n&&_.current&&_.current[e](r),!0}))}o.useEffect((()=>{Q&&x&&!g&&te&&_.current.pulsate()}),[g,x,Q,te]);const oe=ie("start",S),le=ie("stop",k),se=ie("stop",T),ae=ie("stop",D),ue=ie("stop",(e=>{Q&&e.preventDefault(),$&&$(e)})),ce=ie("start",B),pe=ie("stop",j),de=ie("stop",L),he=ie("stop",(e=>{G(e),!1===W.current&&ee(!1),E&&E(e)}),!1),fe=(0,p.Z)((e=>{K.current||(K.current=e.currentTarget),q(e),!0===W.current&&(ee(!0),w&&w(e)),V&&V(e)})),me=()=>{const e=K.current;return b&&"button"!==b&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),ve=(0,p.Z)((e=>{x&&!be.current&&Q&&_.current&&" "===e.key&&(be.current=!0,_.current.stop(e,(()=>{_.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ge=(0,p.Z)((e=>{x&&" "===e.key&&_.current&&Q&&!e.defaultPrevented&&(be.current=!1,_.current.stop(e,(()=>{_.current.pulsate(e)}))),P&&P(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ye=b;"button"===ye&&(A.href||A.to)&&(ye=R);const xe={};"button"===ye?(xe.type=void 0===X?"button":X,xe.disabled=v):(A.href||A.to||(xe.role="button"),v&&(xe["aria-disabled"]=v));const Re=(0,c.Z)(t,J,K);const Ee=(0,r.Z)({},n,{centerRipple:h,component:b,disabled:v,disableRipple:g,disableTouchRipple:y,focusRipple:x,tabIndex:N,focusVisible:Q}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,s.Z)(o,z,i);return n&&r&&(l.root+=` ${r}`),l})(Ee);return(0,Z.jsxs)(Y,(0,r.Z)({as:ye,className:(0,l.Z)(Me.root,m),ownerState:Ee,onBlur:he,onClick:M,onContextMenu:le,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:oe,onMouseLeave:ue,onMouseUp:ae,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:v?-1:N,type:X},xe,A,{children:[f,re?(0,Z.jsx)(F,(0,r.Z)({ref:H,center:h},O)):null]}))}))},52635:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(49231);const i=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}}}]);