"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"solana/idl/types/SwitchboardDecimal",id:"solana/idl/types/SwitchboardDecimal",title:"SwitchboardDecimal",description:"A struct representing a floating point number on-chain.",source:"@site/docs/solana/idl/types/SwitchboardDecimal.md",sourceDirName:"solana/idl/types",slug:"/solana/idl/types/SwitchboardDecimal",permalink:"/solana/idl/types/SwitchboardDecimal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solana",previous:{title:"SlidingWindowElement",permalink:"/solana/idl/types/SlidingWindowElement"},next:{title:"SwitchboardPermission",permalink:"/solana/idl/types/SwitchboardPermission"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A struct representing a floating point number on-chain."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mantissa"),(0,a.kt)("td",{parentName:"tr",align:null},"i128"),(0,a.kt)("td",{parentName:"tr",align:null},"The part of a floating-point number that represents the significant digits of that number,. and that is multiplied by the base, 10, raised to the power of scale to give the actual value of the number. The part of a floating-point number that represents the significant digits of that number, and that is multiplied by the base, 10, raised to the power of scale to give the actual value of the number.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scale"),(0,a.kt)("td",{parentName:"tr",align:null},"u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of decimal places to move to the left to yield the actual value.")))))}u.isMDXComponent=!0}}]);