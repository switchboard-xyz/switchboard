"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2723,46131,50314],{55106:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(45675),n=a(92897),o=a(49231),s=a(19841),l=a(32301),i=a(3396),c=a(7206),u=a(3170),d=a(1274),m=a(7523);function p(e){return(0,m.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var b=a(20264);const h=["className","raised"],g=(0,i.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),v=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:i=!1}=a,u=(0,n.Z)(a,h),d=(0,r.Z)({},a,{raised:i}),m=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)})(d);return(0,b.jsx)(g,(0,r.Z)({className:(0,s.Z)(m.root,o),elevation:i?8:void 0,ref:t,ownerState:d},u))}))},65218:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(45675),n=a(92897),o=a(49231),s=a(19841),l=a(32301),i=a(3396),c=a(7206),u=a(1274),d=a(7523);function m(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var p=a(20264);const b=["className","component"],h=(0,i.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:i="div"}=a,u=(0,n.Z)(a,b),d=(0,r.Z)({},a,{component:i}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},m,t)})(d);return(0,p.jsx)(h,(0,r.Z)({as:i,className:(0,s.Z)(g.root,o),ownerState:d,ref:t},u))}))},932:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(92897),n=a(45675),o=a(49231),s=a(19841),l=a(32301),i=a(3411),c=a(7206),u=a(3396),d=a(1274),m=a(7523);function p(e){return(0,m.Z)("MuiCardHeader",e)}const b=(0,d.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=a(20264);const g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${b.title}`]:t.title,[`& .${b.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),k=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Z=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:m="div",disableTypography:b=!1,subheader:Z,subheaderTypographyProps:w,title:x,titleTypographyProps:T}=a,C=(0,r.Z)(a,g),E=(0,n.Z)({},a,{component:m,disableTypography:b}),N=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(E);let I=x;null==I||I.type===i.Z||b||(I=(0,h.jsx)(i.Z,(0,n.Z)({variant:u?"body2":"h5",className:N.title,component:"span",display:"block"},T,{children:I})));let S=Z;return null==S||S.type===i.Z||b||(S=(0,h.jsx)(i.Z,(0,n.Z)({variant:u?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:S}))),(0,h.jsxs)(v,(0,n.Z)({className:(0,s.Z)(N.root,d),as:m,ref:t,ownerState:E},C,{children:[u&&(0,h.jsx)(f,{className:N.avatar,ownerState:E,children:u}),(0,h.jsxs)(k,{className:N.content,ownerState:E,children:[I,S]}),o&&(0,h.jsx)(y,{className:N.action,ownerState:E,children:o})]}))}))},79482:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(49231),n=a(19841);const o={tabItem:"tabItem_wqKz"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},80814:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(48041),n=a(49231),o=a(19841),s=a(26469),l=a(19409),i=a(29821),c=a(17070),u=a(52086);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=b({queryString:a,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var g=a(40683);const v={tabList:"tabList_ITex",tabItem:"tabItem_Bpt4"};function f(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function Z(e){const t=(0,g.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},55724:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(66685),n=a(49231),o=a(65218),s=a(3411),l=a(57210),i=a(932),c=a(55106),u=a(86583),d=a(74072),m=a(27567);const p=(0,d.Z)(c.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),b=(0,d.Z)(i.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function h(e){let{title:t,image:a,imageDark:r,description:i,to:c,sx:d}=e;const{colorMode:h}=(0,m.I)();return n.createElement(u.Z,{href:c,style:{textDecoration:"none"}},n.createElement(p,{dark:"dark"===h?1:0,sx:d},n.createElement(o.Z,{sx:{height:"100%",width:"100%"}},n.createElement(b,{avatar:n.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===h&&r?r:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),i?n.createElement(n.Fragment,null,n.createElement(l.Z,{sx:{marginBottom:"1rem"}}),n.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},i)):n.createElement(n.Fragment,null))))}function g(e){let{items:t,cols:a,sx:o,direction:s,justifyContent:l,alignItems:i}=e;return n.createElement(r.ZP,{container:!0,spacing:3,direction:s??"row",justifyContent:l,alignItems:i},t.map((e=>n.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/a??2)},n.createElement(h,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},82645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=a(48041),n=(a(49231),a(54852)),o=a(80814),s=a(79482),l=a(55724),i=a(97530);const c={sidebar_position:20,title:"@switchboard-xyz/common"},u=void 0,d={unversionedId:"dev/common",id:"dev/common",title:"@switchboard-xyz/common",description:"<a",source:"@site/docs/dev/common.mdx",sourceDirName:"dev",slug:"/dev/common",permalink:"/dev/common",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"@switchboard-xyz/common"},sidebar:"dev",previous:{title:"Developer Resources",permalink:"/dev/"},next:{title:"@switchboard-xyz/oracle",permalink:"/dev/oracle"}},m={},p=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Create an OracleJob",id:"create-an-oraclejob",level:3},{value:"Simulate an OracleJob",id:"simulate-an-oraclejob",level:3}],b={toc:p},h="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{style:{padding:"0 5px"},href:"https://www.npmjs.com/package/@switchboard-xyz/common"},(0,n.kt)("img",{alt:"NPM Badge",src:"https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-core?color=red&filename=javascript%2Fcommon%2Fpackage.json&label=%40switchboard-xyz%2Fcommon&logo=npm"})),(0,n.kt)("p",null,"A lightweight library to decode and parse aggregator accounts"),(0,n.kt)("h2",{id:"quick-links"},"Quick Links"),(0,n.kt)(l.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-core/tree/main/javascript/common",title:"Github",description:"View the Github repo",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/light.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/common/",title:"Typedocs",description:"View the Typedocs",image:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,n.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @switchboard-xyz/common\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/common\n")))),(0,n.kt)("h3",{id:"create-an-oraclejob"},"Create an OracleJob"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { OracleJob, serializeOracleJob } from "@switchboard-xyz/common";\n\nconst oracleJob: OracleJob = serializeOracleJob({\n  tasks: [\n    {\n      httpTask: {\n        url: "https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT",\n      },\n    },\n    {\n      jsonParseTask: {\n        path: "$.price",\n      },\n    },\n    {\n      multiplyTask: {\n        /* Mainnet USDT/USD Feed */\n        aggregatorPubkey: "ETAaeeuQBwsh9mC2gCov9WdhJENZuffRMXY2HgjCcSL9",\n      },\n    },\n  ],\n});\n')),(0,n.kt)("h3",{id:"simulate-an-oraclejob"},"Simulate an OracleJob"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { simulateOracleJobs } from "@switchboard-xyz/common";\n\nconst result = await simulateOracleJobs([oracleJob]);\nconsole.log(result);\n')))}g.isMDXComponent=!0}}]);