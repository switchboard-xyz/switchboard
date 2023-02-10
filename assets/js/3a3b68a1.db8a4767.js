"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38172],{10686:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(44267),o=a(15861),s=a(21519),n=a(78445),i=a(44073),l=a(67294),d=a(39960),c=a(13264),g=a(92949);const u=(0,c.Z)(i.Z)((e=>{let{theme:t,dark:a}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:a?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(a?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:a?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),m=(0,c.Z)(n.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function p(e){let{title:t,image:a,imageDark:n,description:i,to:c,sx:p}=e;const{colorMode:v}=(0,g.I)();return l.createElement(d.Z,{href:c,style:{textDecoration:"none"}},l.createElement(u,{dark:"dark"===v?1:0,sx:p},l.createElement(r.Z,{sx:{height:"100%",width:"100%"}},l.createElement(m,{avatar:l.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===v&&n?n:a),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),i?l.createElement(l.Fragment,null,l.createElement(s.Z,{sx:{marginBottom:"1rem"}}),l.createElement(o.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},i)):l.createElement(l.Fragment,null))))}},17547:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(86886),o=a(67294),s=a(10686);function n(e){let{items:t,cols:a,sx:n,direction:i,justifyContent:l,alignItems:d}=e;return o.createElement(r.ZP,{container:!0,spacing:3,direction:null!=i?i:"row",justifyContent:l,alignItems:d},t.map((e=>{var t;return o.createElement(r.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/a)?t:2)},o.createElement(s.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:n}))})))}},96239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var r=a(83117),o=(a(67294),a(3905)),s=a(17547),n=a(44996);const i={sidebar_position:10,slug:".",title:"sbv2-aptos"},l=void 0,d={unversionedId:"aptos/dev/move/client",id:"aptos/dev/move/client",title:"sbv2-aptos",description:"A Move module to interact with Switchboard V2 on Aptos.",source:"@site/docs/aptos/dev/move/client.mdx",sourceDirName:"aptos/dev/move",slug:"/aptos/dev/move/",permalink:"/aptos/dev/move/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"sbv2-aptos"},sidebar:"aptos",previous:{title:"@switchboard-xyz/aptos.js",permalink:"/aptos/dev/javascript/"},next:{title:"Feed Parser",permalink:"/aptos/dev/examples/feed-parser"}},c={},g=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Reading Feeds",id:"reading-feeds",level:2},{value:"Tests",id:"tests",level:2}],u={toc:g};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Move module to interact with Switchboard V2 on Aptos."),(0,o.kt)("h2",{id:"quick-links"},"Quick Links"),(0,o.kt)(s.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-aptos/tree/main/move/switchboard",title:"Github",description:"View the Github repo",image:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/github/light.svg")}),imageDark:(0,o.kt)("img",{src:(0,n.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Move.toml")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[addresses]\nswitchboard = "0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd"\n\n[dependencies]\nMoveStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/move-stdlib/", rev = "devnet" }\nAptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-framework/", rev = "devnet" }\nAptosStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-stdlib/", rev = "devnet" }\nSwitchboard = { git = "https://github.com/switchboard-xyz/sbv2-aptos.git", subdir = "switchboard-move/switchboard/", rev = "main" }\n')),(0,o.kt)("h2",{id:"reading-feeds"},"Reading Feeds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard::aggregator;\nuse switchboard::math;\n\n// store latest value\nstruct AggregatorInfo has copy, drop, store, key {\n    aggregator_addr: address,\n    latest_result: u128,\n    latest_result_scaling_factor: u8,\n    latest_result_neg: bool,\n}\n\n// get latest value\npublic fun save_latest_value(aggregator_addr: address) {\n    // get latest value\n    let latest_value = aggregator::latest_value(aggregator_addr);\n    let (value, scaling_factor, neg) = math::unpack(latest_value);\n    move_to(account, AggregatorInfo {\n        aggregator_addr: aggregator_addr,\n        latest_result: value,\n        latest_result_scaling_factor: scaling_factor,\n        latest_result_neg: neg,\n    });\n}\n")),(0,o.kt)("h2",{id:"tests"},"Tests"),(0,o.kt)("p",null,"Some testing that uses aggregator test utility functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[test(account = @0x1)]\npublic entry fun test_aggregator(account: &signer) {\n\n    // creates test aggregator with data\n    aggregator::new_test(account, 100, 0, false);\n\n    // print out value\n    std::debug::print(&aggregator::latest_value(signer::address_of(account)));\n}\n")))}m.isMDXComponent=!0}}]);