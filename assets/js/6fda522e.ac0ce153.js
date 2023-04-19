"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22589],{55106:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(45675),a=r(92897),o=r(49231),s=r(19841),i=r(32301),l=r(3396),d=r(7206),c=r(3170),u=r(1274),m=r(7523);function p(e){return(0,m.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var g=r(20264);const v=["className","raised"],b=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),h=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,c=(0,a.Z)(r,v),u=(0,n.Z)({},r,{raised:l}),m=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},p,t)})(u);return(0,g.jsx)(b,(0,n.Z)({className:(0,s.Z)(m.root,o),elevation:l?8:void 0,ref:t,ownerState:u},c))}))},65218:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(45675),a=r(92897),o=r(49231),s=r(19841),i=r(32301),l=r(3396),d=r(7206),c=r(1274),u=r(7523);function m(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var p=r(20264);const g=["className","component"],v=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),b=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=r,c=(0,a.Z)(r,g),u=(0,n.Z)({},r,{component:l}),b=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},m,t)})(u);return(0,p.jsx)(v,(0,n.Z)({as:l,className:(0,s.Z)(b.root,o),ownerState:u,ref:t},c))}))},932:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(92897),a=r(45675),o=r(49231),s=r(19841),i=r(32301),l=r(3411),d=r(7206),c=r(3396),u=r(1274),m=r(7523);function p(e){return(0,m.Z)("MuiCardHeader",e)}const g=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var v=r(20264);const b=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],h=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({[`& .${g.title}`]:t.title,[`& .${g.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),k=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),x=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:c,className:u,component:m="div",disableTypography:g=!1,subheader:x,subheaderTypographyProps:y,title:_,titleTypographyProps:w}=r,C=(0,n.Z)(r,b),R=(0,a.Z)({},r,{component:m,disableTypography:g}),S=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(R);let N=_;null==N||N.type===l.Z||g||(N=(0,v.jsx)(l.Z,(0,a.Z)({variant:c?"body2":"h5",className:S.title,component:"span",display:"block"},w,{children:N})));let M=x;return null==M||M.type===l.Z||g||(M=(0,v.jsx)(l.Z,(0,a.Z)({variant:c?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:M}))),(0,v.jsxs)(h,(0,a.Z)({className:(0,s.Z)(S.root,u),as:m,ref:t,ownerState:R},C,{children:[c&&(0,v.jsx)(f,{className:S.avatar,ownerState:R,children:c}),(0,v.jsxs)(Z,{className:S.content,ownerState:R,children:[N,M]}),o&&(0,v.jsx)(k,{className:S.action,ownerState:R,children:o})]}))}))},55724:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(66685),a=r(49231),o=r(65218),s=r(3411),i=r(57210),l=r(932),d=r(55106),c=r(86583),u=r(74072),m=r(27567);const p=(0,u.Z)(d.Z)((e=>{let{theme:t,dark:r}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:r?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(r?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:r?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),g=(0,u.Z)(l.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function v(e){let{title:t,image:r,imageDark:n,description:l,to:d,sx:u}=e;const{colorMode:v}=(0,m.I)();return a.createElement(c.Z,{href:d,style:{textDecoration:"none"}},a.createElement(p,{dark:"dark"===v?1:0,sx:u},a.createElement(o.Z,{sx:{height:"100%",width:"100%"}},a.createElement(g,{avatar:a.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===v&&n?n:r),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?a.createElement(a.Fragment,null,a.createElement(i.Z,{sx:{marginBottom:"1rem"}}),a.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):a.createElement(a.Fragment,null))))}function b(e){let{items:t,cols:r,sx:o,direction:s,justifyContent:i,alignItems:l}=e;return a.createElement(n.ZP,{container:!0,spacing:3,direction:s??"row",justifyContent:i,alignItems:l},t.map((e=>a.createElement(n.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(12/r??2)},a.createElement(v,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o})))))}},45313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=r(48041),a=(r(49231),r(54852)),o=r(55724),s=r(97530);const i={sidebar_position:10,title:"sbv2-near"},l=void 0,d={unversionedId:"near/dev/rust",id:"near/dev/rust",title:"sbv2-near",description:"<img",source:"@site/docs/near/dev/rust.mdx",sourceDirName:"near/dev",slug:"/near/dev/rust",permalink:"/near/dev/rust",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"sbv2-near"},sidebar:"near",previous:{title:"Sbv2 CLI",permalink:"/near/dev/cli"},next:{title:"@switchboard-xyz/near.js",permalink:"/near/dev/javascript"}},c={},u=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}],m={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"https://crates.io/crates/sbv2-near"},(0,a.kt)("img",{alt:"Crates.io",src:"https://img.shields.io/crates/v/sbv2-near?label=sbv2-near&logo=rust"})),(0,a.kt)("p",null,"A Rust crate to deserialize and read a Switchboard data feed within a NEAR\ncontract."),(0,a.kt)("h2",{id:"quick-links"},"Quick Links"),(0,a.kt)(o.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-near/tree/main/rust/sbv2-near",title:"Github",description:"View the Github repo",image:(0,a.kt)("img",{src:(0,s.Z)("/img/icons/github/light.svg")}),imageDark:(0,a.kt)("img",{src:(0,s.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Add the following to your your Cargo.toml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nnear-sdk = "4.0.0"\nsbv2-near = "0.1.0\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::env::log_str;\nuse near_sdk::log;\nuse near_sdk::near_bindgen;\nuse near_sdk::serde_json::json;\nuse near_sdk::Promise;\nuse near_sdk::PromiseResult::Successful;\nuse serde::{Deserialize, Serialize};\nuse serde_json;\nuse std::convert::TryInto;\n\nuse sbv2_near::{AggregatorRound, Uuid, SWITCHBOARD_PROGRAM_ID};\n\nmacro_rules! json_buf {\n    ($x:tt) => {\n        json!($x).to_string().as_bytes().to_vec()\n    };\n}\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    #[payable]\n    pub fn aggregator_read(&mut self, ix: Ix) -> Promise {\n        Promise::new(SWITCHBOARD_PROGRAM_ID.parse().unwrap())\n            .function_call(\n                "aggregator_read".into(),\n                json_buf!({\n                    "ix": {\n                        "address": ix.address,\n                        "payer": ix.address,\n                    }\n                }),\n                near_sdk::ONE_YOCTO,\n                near_sdk::Gas(30000000000000), // WHAT IF GAS RUNS OUT?? need to make sure enough?\n            )\n            .then(\n                Promise::new(near_sdk::env::current_account_id()).function_call(\n                    "callback".into(),\n                    json_buf!({}),\n                    near_sdk::ONE_YOCTO,\n                    near_sdk::Gas(30000000000000), // WHAT IF GAS RUNS OUT?? need to make sure enough?\n                ),\n            )\n    }\n    #[payable]\n    pub fn callback(&mut self) {\n        let maybe_round = near_sdk::env::promise_result(0);\n        if let Successful(serialized_round) = maybe_round {\n            let round: AggregatorRound = serde_json::from_slice(&serialized_round).unwrap();\n            let val: f64 = round.result.try_into().unwrap();\n            log!("Feed value: {:?}", val);\n        } else {\n            log_str("error");\n        }\n    }\n}\n\n#[derive(Deserialize, Serialize)]\npub struct Ix {\n    pub address: [u8; 32],\n}\n\n')))}g.isMDXComponent=!0}}]);