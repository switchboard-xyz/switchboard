"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9406],{54852:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(49231);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),g=o,h=c["".concat(s,".").concat(g)]||c[g]||d[g]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(95907),o=(a(49231),a(54852));const n={title:"Building and Managing Data Feeds through Multisig Soltuions",description:"Switchboard protocol provides a permissionless way to customize data feeds to your specific use casesOur approach has always been developer-first, allowing developers to build feeds through our low-code interface, the Publisher app and manage seamlessly all in the same application.",authors:["yy","gallynaut"],tags:[],hide_table_of_contents:!0},i="Building & Managing Data Feeds through Multisig Soltuions",l={permalink:"/blog/2022/12/06/Building-and-Managing-Data-Feeds-through-Multisig-Soltuions",source:"@site/blog/2022/12-06-Building-and-Managing-Data-Feeds-through-Multisig-Soltuions.mdx",title:"Building and Managing Data Feeds through Multisig Soltuions",description:"Switchboard protocol provides a permissionless way to customize data feeds to your specific use casesOur approach has always been developer-first, allowing developers to build feeds through our low-code interface, the Publisher app and manage seamlessly all in the same application.",date:"2022-12-06T00:00:00.000Z",formattedDate:"December 6, 2022",tags:[],readingTime:2.95,hasTruncateMarker:!0,authors:[{name:"YY",title:"Business Development",url:"https://twitter.com/0xYankee",imageURL:"https://pbs.twimg.com/profile_images/1610178005091094528/8eIdMfh6_400x400.jpg",key:"yy"},{name:"gallynaut",title:"Developer Relations",url:"https://twitter.com/gallynaut",imageURL:"https://pbs.twimg.com/profile_images/1649642820993679365/buRwDkVY_400x400.jpg",key:"gallynaut"}],frontMatter:{title:"Building and Managing Data Feeds through Multisig Soltuions",description:"Switchboard protocol provides a permissionless way to customize data feeds to your specific use casesOur approach has always been developer-first, allowing developers to build feeds through our low-code interface, the Publisher app and manage seamlessly all in the same application.",authors:["yy","gallynaut"],tags:[],hide_table_of_contents:!0},prevItem:{title:"Data Feed Priority Fees and Sliding Window on Solana",permalink:"/blog/2022/12/26/Data-Feed-Priority-Fees-and-Sliding-Window-on-Solana"},nextItem:{title:"#PluggedintoSui",permalink:"/blog/2022/11/01/PluggedintoSui"}},s={authorsImageUrls:[void 0,void 0]},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Building & Managing Data Feeds through Multisig Solutions"),(0,o.kt)("p",null,"Switchboard protocol provides a permissionless way to customize data feeds to\nyour specific use cases. Our approach has always been developer-first, allowing\ndevelopers to build feeds through our low-code interface, the\n",(0,o.kt)("a",{parentName:"p",href:"https://app.switchboard.xyz"},"Publisher")," app and manage seamlessly all in the\nsame application."),(0,o.kt)("p",null,"As our ecosystem protocols grow and scale together with Switchboard, there will\nbe protocols that require a similar set of data feeds. Take example of a group\nof DeFi protocol, they are likely integrating with similar crypto assets and\nthus, requiring a similar set of price feeds to plug into their protocols."),(0,o.kt)("p",null,"In order for teams and developers to co-own data feeds in a secure manner, a\nmulti-signature (Multisig) wallet solution will be able to achieve it."))}d.isMDXComponent=!0}}]);