"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2508],{10686:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(44267),n=a(15861),o=a(21519),r=a(78445),s=a(44073),l=a(67294),c=a(39960),m=a(13264),d=a(92949);const p=(0,m.Z)(s.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,m.Z)(r.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function h(e){let{title:t,image:a,imageDark:r,description:s,to:m,sx:h}=e;const{colorMode:u}=(0,d.I)();return l.createElement(c.Z,{href:m,style:{textDecoration:"none"}},l.createElement(p,{dark:"dark"===u?1:0,sx:h},l.createElement(i.Z,{sx:{height:"100%",width:"100%"}},l.createElement(g,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===u&&r?r:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?l.createElement(l.Fragment,null,l.createElement(o.Z,{sx:{marginBottom:"1rem"}}),l.createElement(n.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):l.createElement(l.Fragment,null))))}},17547:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(86886),n=a(67294),o=a(10686);function r(e){let{items:t,cols:a,sx:r,direction:s,justifyContent:l,alignItems:c}=e;return n.createElement(i.ZP,{container:!0,spacing:3,direction:null!=s?s:"row",justifyContent:l,alignItems:c},t.map((e=>{var t;return n.createElement(i.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/a)?t:2)},n.createElement(o.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:r}))})))}},800:(e,t,a)=>{a.d(t,{ZP:()=>l});var i=a(83117),n=(a(67294),a(3905)),o=a(17547),r=a(44996);const s={toc:[]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{cols:3,justifyContent:"center",items:[{to:"/solana/dev/examples/feed-parser",title:"Feed Parser",description:"Learn how to parse a data feed off-chain",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/javascript/light.svg")})},{to:"/solana/dev/examples/client-walkthrough",title:"Client Walkthrough",description:"Learn how to use the Javascript client to spin up your own Switchboard network",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/javascript/light.svg")})},{to:"/solana/dev/examples/lease-observer",title:"Lease Observer",description:"Learn how to monitor a data feed's lease and send PagerDuty alerts when it reaches a given balance",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/javascript/light.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0},63626:(e,t,a)=>{a.d(t,{ZP:()=>l});var i=a(83117),n=(a(67294),a(3905)),o=a(17547),r=a(44996);const s={toc:[]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{cols:3,justifyContent:"center",items:[{to:"/solana/dev/rust/",title:"Rust",description:"View the switchboard-v2 crate",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/rust/crab.svg")})},{to:"/solana/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/solana.js npm package",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/javascript/light.svg")})},{to:"/solana/dev/python",title:"Python",description:"View the switchboardpy module",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/python/light.svg")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0},19816:(e,t,a)=>{a.d(t,{ZP:()=>l});var i=a(83117),n=(a(67294),a(3905)),o=a(17547),r=a(44996);const s={toc:[]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{cols:2,justifyContent:"center",items:[{to:"/solana/dev/examples/vrf-flip",title:"VRF Flip (Advanced)",description:"View an example program depicting how to simulate a coin toss",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/anchor/light.png")})},{to:"/solana/dev/examples/anchor-feed-parser",title:"Feed Parser",description:"View an example program depicting how to read a Switchboard Data Feed on-chain",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/anchor/light.png")})},{to:"/solana/dev/examples/anchor-history-parser",title:"History Parser",description:"View an example program depicting how to read a Switchboard history buffer on-chain",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/anchor/light.png")})},{to:"/solana/dev/examples/anchor-vrf-walkthrough",title:"VRF Walkthrough",description:"View the example program depicting how to read a Switchboard Verifiable Randomn Function on-chain",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/anchor/light.png")})},{to:"/solana/dev/examples/anchor-buffer-parser",title:"Buffer Parser",description:"View the example program depicting how to read a Switchboard Buffer Relayer on-chain",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/anchor/light.png")})}],mdxType:"RoundedCardGroup"}))}l.isMDXComponent=!0},33755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>f,frontMatter:()=>p,metadata:()=>h,toc:()=>v});var i=a(83117),n=(a(67294),a(3905)),o=a(17547),r=a(44996),s=a(63626),l=a(19816),c=a(800);const m={toc:[]};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/solana/idl/accounts/"},"Accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/solana/idl/instructions"},"Instructions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/solana/idl/events"},"Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/solana/idl/types"},"Types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/solana/idl/errors"},"Errors"))))}d.isMDXComponent=!0;const p={sidebar_position:1,title:"Overview",slug:"."},g=void 0,h={unversionedId:"solana/overview",id:"solana/overview",title:"Overview",description:"Networks",source:"@site/docs/solana/overview.mdx",sourceDirName:"solana",slug:"/solana/",permalink:"/solana/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"solana",next:{title:"Mainnet",permalink:"/solana/program/mainnet"}},u={},v=[{value:"Networks",id:"networks",level:2},{value:"SDK",id:"sdk",level:2},{value:"Clients",id:"clients",level:3},{value:"On-Chain Example Programs",id:"on-chain-example-programs",level:3},{value:"Off-Chain Examples",id:"off-chain-examples",level:3},{value:"Anchor IDL",id:"anchor-idl",level:2}],k={toc:v};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"networks"},"Networks"),(0,n.kt)(o.Z,{items:[{to:"/solana/program/mainnet",title:"Mainnet",description:"View the Mainnet deployment accounts",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/solana/logo.svg")})},{to:"/solana/program/devnet",title:"Devnet",description:"View the Devnet deployment accounts",image:(0,n.kt)("img",{src:(0,r.Z)("/img/icons/solana/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,n.kt)("h2",{id:"sdk"},"SDK"),(0,n.kt)("h3",{id:"clients"},"Clients"),(0,n.kt)(s.ZP,{mdxType:"SolanaSdkClients"}),(0,n.kt)("h3",{id:"on-chain-example-programs"},"On-Chain Example Programs"),(0,n.kt)(l.ZP,{mdxType:"SolanaExamplePrograms"}),(0,n.kt)("h3",{id:"off-chain-examples"},"Off-Chain Examples"),(0,n.kt)(c.ZP,{mdxType:"SolanaClientExamples"}),(0,n.kt)("h2",{id:"anchor-idl"},"Anchor IDL"),(0,n.kt)(d,{mdxType:"TOC"}))}f.isMDXComponent=!0}}]);