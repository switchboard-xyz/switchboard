"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92508],{70916:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(86543),i=a(39528),n=a(3411),o=a(96148),l=a(49231);const s=e=>{let t={textTransform:"none",color:"var(--ifm-color-primary-light)",fontWeight:800,margin:0};e.sx&&(t={...t,...e.sx});return l.createElement(r.Z,{title:"copy to clipboard","aria-label":"copy to clipboard",arrow:!0},l.createElement(i.Z,{variant:"text",size:"small",startIcon:l.createElement(o.Z,{sx:{fill:"var(--ifm-color-primary-darkest)"},fontSize:"small"}),onClick:()=>{const t=document.createElement("textarea");t.value=e.publicKey,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},l.createElement(n.Z,{sx:t,color:"textSecondary"},e.publicKey)))}},55724:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(66685),i=a(49231),n=a(65218),o=a(3411),l=a(57210),s=a(932),d=a(55106),m=a(86583),c=a(74072),g=a(27567);const p=(0,c.Z)(d.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),u=(0,c.Z)(s.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function k(e){let{title:t,image:a,imageDark:r,description:s,to:d,sx:c}=e;const{colorMode:k}=(0,g.I)();return i.createElement(m.Z,{href:d,style:{textDecoration:"none"}},i.createElement(p,{dark:"dark"===k?1:0,sx:c},i.createElement(n.Z,{sx:{height:"100%",width:"100%"}},i.createElement(u,{avatar:i.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===k&&r?r:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?i.createElement(i.Fragment,null,i.createElement(l.Z,{sx:{marginBottom:"1rem"}}),i.createElement(o.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):i.createElement(i.Fragment,null))))}function b(e){let{items:t,cols:a,sx:n,direction:o,justifyContent:l,alignItems:s}=e;return i.createElement(r.ZP,{container:!0,spacing:3,direction:o??"row",justifyContent:l,alignItems:s},t.map((e=>i.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/a??2)},i.createElement(k,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n})))))}},93227:(e,t,a)=>{a.d(t,{ZP:()=>d});var r=a(48041),i=(a(49231),a(54852)),n=a(55724),o=a(97530);const l={toc:[]},s="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(n.Z,{cols:2,justifyContent:"center",items:[{to:"/solana/dev/rust/",title:"Rust",description:"View the switchboard-v2 crate",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/rust/crab.svg")})},{to:"/solana/dev/javascript/",title:"Javascript",description:"View the @switchboard-xyz/solana.js npm package",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/javascript/light.svg")})},{to:"/solana/dev/cli",title:"CLI",description:"View the @switchboard-xyz/cli npm package",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/terminal/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/terminal/dark.svg")})},{to:"/solana/dev/python",title:"Python",description:"View the switchboardpy module",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/python/light.svg")})}],mdxType:"RoundedCardGroup"}))}d.isMDXComponent=!0},23564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>k});var r=a(48041),i=(a(49231),a(54852)),n=a(55724),o=a(97530),l=a(70916),s=a(11094),d=a(37761),m=a(93227);const c={sidebar_position:1,title:"Overview",slug:"."},g=void 0,p={unversionedId:"solana/overview",id:"solana/overview",title:"Overview",description:"The Switchboard devnet program was migrated on March 17 to a new program ID.",source:"@site/docs/solana/overview.mdx",sourceDirName:"solana",slug:"/solana/",permalink:"/solana/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",slug:"."},sidebar:"solana",next:{title:"Mainnet",permalink:"/solana/program/mainnet"}},u={},k=[{value:"Getting Started",id:"getting-started",level:2},{value:"Program IDs",id:"program-ids",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Data Feeds",id:"data-feeds",level:2},{value:"Randomness",id:"randomness",level:2}],b={toc:k},h="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{severity:"info",mdxType:"Alert"},"The Switchboard devnet program was migrated on March 17 to a new program ID. Make sure to upgrade your Switchboard dependencies to include this change."," ",(0,i.kt)("br",null),(0,i.kt)("br",null),"Old Program ID: ",(0,i.kt)("b",null,"2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG"),(0,i.kt)("br",null),"New Program ID: ",(0,i.kt)("b",null,"SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("i",null,"*Also make sure to use the new oracle queue addresses here: "),(0,i.kt)(d.Z,{href:(0,o.Z)("/solana/program/devnet"),mdxType:"Link"},(0,i.kt)("b",null,"program/devnet"))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"To get started, clone the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-solana"},"sbv2-solana")," repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-solana\n")),(0,i.kt)("h2",{id:"program-ids"},"Program IDs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Network")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Program ID")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mainnet-Beta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{publicKey:"SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",mdxType:"PublicKeyButton"})," ",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"solana/program/mainnet"},"program/mainnet")," for a full list of public keys.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Devnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.Z,{publicKey:"SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f",mdxType:"PublicKeyButton"})," ",(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"solana/program/devnet"},"program/devnet")," for a full list of public keys.")))),(0,i.kt)("h2",{id:"libraries"},"Libraries"),(0,i.kt)(m.ZP,{mdxType:"SolanaLibraries"}),(0,i.kt)("h2",{id:"data-feeds"},"Data Feeds"),(0,i.kt)(n.Z,{cols:3,items:[{to:"/solana/feed-integration",title:"Integration",description:"Integrate Switchboard data feeds",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/develop/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/develop/teal.svg")})},{to:"/solana/priority-fees",title:"Priority Fees",description:"Learn how to set custom priority fees",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/priority/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/priority/teal.svg")})}],mdxType:"RoundedCardGroup"}),(0,i.kt)("h2",{id:"randomness"},"Randomness"),(0,i.kt)(n.Z,{cols:3,items:[{to:"/solana/vrf-integration",title:"Integration",description:"Integrate Switchboard VRF",image:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/randomness/light.svg")}),imageDark:(0,i.kt)("img",{src:(0,o.Z)("/img/icons/randomness/dark.svg")})}],mdxType:"RoundedCardGroup"}))}v.isMDXComponent=!0}}]);