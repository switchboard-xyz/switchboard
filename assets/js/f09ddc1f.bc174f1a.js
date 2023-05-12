"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1164,5810,9514],{29365:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(49231),o=n(19841),r=n(66791),l=n(54456),c=n(56485),i=n(31808),s=n(11550),d=n(98242),m=n(7491),u=n(81684),b=n(92783);const p={backToTopButton:"backToTopButton_Z6E2",backToTopButtonShow:"backToTopButtonShow_fZna"};function f(){const{shown:e,scrollToTop:t}=(0,b.a)({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",l.k.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var h=n(19409),E=n(93661),g=n(37681),k=n(77573),v=n(95907);function _(e){return a.createElement("svg",(0,v.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const C={collapseSidebarButton:"collapseSidebarButton_gB3M",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_Pw3M"};function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",C.collapseSidebarButton),onClick:t},a.createElement(_,{className:C.collapseSidebarButtonIcon}))}var I=n(99246),y=n(74274),N=n(71258),x=n(76067),T=n(24260),Z=n(22797),B=n(28784),w=n(8253);function A(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function L(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,g.L)(),E=function(e){const t=(0,w.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),k=(0,i._F)(t,r),_=(0,Z.Mg)(f,r),{collapsed:C,setCollapsed:S}=(0,T.u)({initialState:()=>!!b&&(!k&&t.collapsed)}),{expandedItem:I,setExpandedItem:y}=(0,N.f)(),L=function(e){void 0===e&&(e=!C),y(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const r=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&o(!1)}),[t,r,n,o])}({isActive:k,collapsed:C,updateCollapsed:L}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&h&&S(!0)}),[b,I,s,S,h]),a.createElement("li",{className:(0,o.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(B.default,(0,v.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":k}),onClick:b?e=>{n?.(t),f?L(!1):(e.preventDefault(),L())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!C:void 0,href:b?E??"#":E},d),u),f&&b&&a.createElement(A,{categoryLabel:u,onClick:e=>{e.preventDefault(),L()}})),a.createElement(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(j,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:r,level:c+1})))}var M=n(86153),P=n(89740);const H={menuExternalLink:"menuExternalLink_AtkJ"};function F(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,f=(0,i._F)(t,r),h=(0,M.Z)(m);return a.createElement("li",{className:(0,o.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(B.default,(0,v.Z)({className:(0,o.Z)("menu__link",!h&&H.menuExternalLink,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(P.Z,null)))}const D={menuHtmlItem:"menuHtmlItem_MY37"};function W(e){let{item:t,level:n,index:r}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),i&&[D.menuHtmlItem,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:c}})}function O(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(L,(0,v.Z)({item:t},n));case"html":return a.createElement(W,(0,v.Z)({item:t},n));default:return a.createElement(F,(0,v.Z)({item:t},n))}}function R(e){let{items:t,...n}=e;return a.createElement(N.D,null,t.map(((e,t)=>a.createElement(O,(0,v.Z)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(R),V={menu:"menu_ygLS",menuWithAnnouncementBar:"menuWithAnnouncementBar_r_E7"};function Y(e){let{path:t,sidebar:n,className:r}=e;const c=function(){const{isActive:e}=(0,I.nT)(),[t,n]=(0,a.useState)(e);return(0,y.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",V.menu,c&&V.menuWithAnnouncementBar,r)},a.createElement("ul",{className:(0,o.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const z="sidebar_COxX",U="sidebarWithHideableNavbar_jQc4",K="sidebarHidden_aH0k",q="sidebarLogo_rNUk";function X(e){let{path:t,sidebar:n,onCollapse:r,isHidden:l}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,g.L)();return a.createElement("div",{className:(0,o.Z)(z,c&&U,l&&K)},c&&a.createElement(k.Z,{tabIndex:-1,className:q}),a.createElement(Y,{path:t,sidebar:n}),i&&a.createElement(S,{onClick:r}))}const G=a.memo(X);var J=n(37751),Q=n(87701);const $=e=>{let{sidebar:t,path:n}=e;const r=(0,Q.e)();return a.createElement("ul",{className:(0,o.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ee(e){return a.createElement(J.Zo,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,E.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(G,e),o&&a.createElement(te,e))}const ae={expandButton:"expandButton_KkmE",expandButtonIcon:"expandButtonIcon_iqhy"};function oe(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ae.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(_,{className:ae.expandButtonIcon}))}const re={docSidebarContainer:"docSidebarContainer_y1pl",docSidebarContainerHidden:"docSidebarContainerHidden_b85C",sidebarViewport:"sidebarViewport_XEoT"};function le(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:c}=(0,h.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,o.Z)(l.k.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&s(!0)}},a.createElement(le,null,a.createElement("div",{className:(0,o.Z)(re.sidebarViewport,i&&re.sidebarViewportHidden)},a.createElement(ne,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(oe,{toggleSidebar:d}))))}const ie={docMainContainer:"docMainContainer_jYv2",docMainContainerEnhanced:"docMainContainerEnhanced_tLnD",docItemWrapperEnhanced:"docItemWrapperEnhanced_OKsc"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(ie.docMainContainer,(t||!r)&&ie.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},n))}const de={docPage:"docPage_eopn",docsWrapper:"docsWrapper_MPL9"};function me(e){let{children:t}=e;const n=(0,d.V)(),[o,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:de.docsWrapper},a.createElement(f,null),a.createElement("div",{className:de.docPage},n&&a.createElement(ce,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),a.createElement(se,{hiddenSidebarContainer:o},t)))}var ue=n(65810),be=n(55598);function pe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(be.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function fe(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(ue.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(pe,e),a.createElement(r.FG,{className:(0,o.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(me,null,c)))))}},65810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(49231),o=n(81684),r=n(66791),l=n(7491);function c(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},71258:(e,t,n)=>{n.d(t,{D:()=>c,f:()=>i});var a=n(49231),o=n(76067);const r=Symbol("EmptyContext"),l=a.createContext(r);function c(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(l.Provider,{value:r},t)}function i(){const e=(0,a.useContext)(l);if(e===r)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},92783:(e,t,n)=>{n.d(t,{a:()=>l});var a=n(49231),o=n(74274),r=n(27817);function l(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,o.Ct)();return(0,o.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(c.current?c.current=!1:a>=o?(s(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,r.S)((e=>{e.location.hash&&(c.current=!0,l(!1))})),{shown:n,scrollToTop:()=>i(0)}}},52296:(e,t,n)=>{const a=n(49231).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"main",minimal:!1,pluginId:"default",scopes:[]},reflections:{},commands:{},protobufs:{}});t.ApiDataContext=a},86930:(e,t,n)=>{const a=["options","packages","commands","protobufMessages"];function o(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n(91488),n(79098);const r=n(49231),l=n(29365),c=n(52296),i=e=>e&&e.__esModule?e:{default:e},s=i(r),d=i(l);function m(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function u(e,t,n){return Object.entries(e).forEach((a=>{let[o,r]=a;if("id"===o){const a="type"in e;(!a||a&&"reference"!==e.type)&&(t[Number(r)]=e,n&&(e.parentId=n.id))}else Array.isArray(r)?r.forEach((n=>{m(n)&&u(n,t,e)})):m(r)&&u(r,t,e)})),t}function b(e){const t={};return e.forEach((e=>{e.entryPoints.forEach((e=>{u(e.reflection,t)}))})),t}function p(e){const t={};return e.filter(Boolean).forEach((e=>{t[e.id]=e})),t}function f(e){const t={};return(e??[]).filter(Boolean).forEach((e=>{t[e.id]=e})),t}e.exports=function(e){let t=e.options,n=e.packages,l=e.commands,i=e.protobufMessages,m=o(e,a);const u=r.useMemo((()=>({options:t,reflections:b(n),commands:p(l),protobufs:f(i)})),[t,n,l,i]);return s.default.createElement(c.ApiDataContext.Provider,{value:u},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,m)))}},91488:(e,t,n)=>{n.r(t)},79098:(e,t,n)=>{n.r(t)}}]);