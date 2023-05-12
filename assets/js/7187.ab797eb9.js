"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7187],{23780:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(95907),l=n(49231),r=n(19841),c=n(54456),o=n(31808),i=n(22797),s=n(28784),m=n(81684),d=n(5485);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_tm71"};function f(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(s.default,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}const p={breadcrumbsContainer:"breadcrumbsContainer_Uhpu"};function v(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(s.default,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:n,index:c,addMicrodata:o}=e;return l.createElement("li",(0,a.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(c+1)}))}function g(){const e=(0,o.s1)(),t=(0,i.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(f,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(v,{href:t.href,isLast:a},t.label))})))):null}},67211:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(95907),l=n(49231),r=n(81684),c=n(84882);function o(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c.Z,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c.Z,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},42457:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(95907),l=n(49231),r=n(19841),c=n(30501);const o={tableOfContents:"tableOfContents__upx",docItemContainer:"docItemContainer_AaJE"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(o.tableOfContents,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:i,linkActiveClassName:s})))}},25105:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(49231),l=n(19841),r=n(24260),c=n(30501),o=n(95907),i=n(81684);const s={tocCollapsibleButton:"tocCollapsibleButton_hxSC",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Di8Q"};function m(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,o.Z)({type:"button"},n,{className:(0,l.Z)("clean-btn",s.tocCollapsibleButton,!t&&s.tocCollapsibleButtonExpanded,n.className)}),a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const d={tocCollapsible:"tocCollapsible_nZki",tocCollapsibleContent:"tocCollapsibleContent_q5KS",tocCollapsibleExpanded:"tocCollapsibleExpanded_cw1r"};function u(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:i}=e;const{collapsed:s,toggleCollapsed:u}=(0,r.u)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(d.tocCollapsible,!s&&d.tocCollapsibleExpanded,n)},a.createElement(m,{collapsed:s,onClick:u}),a.createElement(r.z,{lazy:!0,className:d.tocCollapsibleContent,collapsed:s},a.createElement(c.Z,{toc:t,minHeadingLevel:o,maxHeadingLevel:i})))}},30501:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(95907),l=n(49231),r=n(37681),c=n(10422),o=n(62428);function i(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const s=l.memo(i);function m(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const f=(0,r.L)(),p=d??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,h=(0,c.b)({toc:t,minHeadingLevel:p,maxHeadingLevel:v}),g=(0,l.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:v}}),[i,m,p,v]);return(0,o.S)(g),l.createElement(s,(0,a.Z)({toc:h,className:n,linkClassName:i},b))}},24558:(e,t,n)=>{n.d(t,{b:()=>c,k:()=>o});var a=n(49231),l=n(76067);const r=a.createContext(null);function c(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}},62428:(e,t,n)=>{n.d(t,{S:()=>i});var a=n(49231),l=n(37681);function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>r(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,a.useRef)(void 0),n=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}},10422:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>o});var a=n(49231);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function r(e){return(0,a.useMemo)((()=>l(e)),[e])}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}}}]);