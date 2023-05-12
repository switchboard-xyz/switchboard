"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3994],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(49231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(95907),n=(r(49231),r(54852));const o={title:"switchboard-v2",slug:"/solana/sdk/rust/",hide_title:!0,sidebar_class_name:"sidebar__rust",sidebar_position:1},s=void 0,l={unversionedId:"solana/sdk/clients/switchboard-v2",id:"solana/sdk/clients/switchboard-v2",title:"switchboard-v2",description:"Switchboard Logo",source:"@site/docs/solana/sdk/clients/switchboard-v2.mdx",sourceDirName:"solana/sdk/clients",slug:"/solana/sdk/rust/",permalink:"/solana/sdk/rust/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"switchboard-v2",slug:"/solana/sdk/rust/",hide_title:!0,sidebar_class_name:"sidebar__rust",sidebar_position:1},sidebar:"solanaSidebar",previous:{title:"Switchboard x Solana",permalink:"/solana/"},next:{title:"@switchboard-xyz/solana.js",permalink:"/solana/sdk/javascript/"}},c={},i=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Read Latest Result",id:"read-latest-result",level:3},{value:"Read History Buffer",id:"read-history-buffer",level:3},{value:"Read VRF",id:"read-vrf",level:3},{value:"Request Randomness CPI",id:"request-randomness-cpi",level:3},{value:"Read Buffer Relayer",id:"read-buffer-relayer",level:3}],u={toc:i},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png",alt:"Switchboard Logo"})),(0,n.kt)("h1",{id:"switchboard-v2"},"switchboard-v2"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A Rust library to interact with Switchboard accounts on Solana.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/switchboard-v2"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/switchboard-v2?label=switchboard-v2&logo=rust",alt:"Crates.io"})))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Run the following Cargo command in your project directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add switchboard-v2\n")),(0,n.kt)("p",null,"Or add the following line to your Cargo.toml:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nswitchboard-v2 = "0.1.23"\n')),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Directory")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#read-latest-result"},"Read Latest Result")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#read-history-buffer"},"Read History Buffer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#read-vrf"},"Read VRF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#request-randomness-cpi"},"Request Randomness CPI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#read-buffer-relayer"},"Read Buffer Relayer"))),(0,n.kt)("h3",{id:"read-latest-result"},"Read Latest Result"),(0,n.kt)("p",null,"Read an aggregator result on-chain"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n  return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example Program(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-feed-parser/src/lib.rs"},"anchor-feed-parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/native-feed-parser/src/lib.rs"},"native-feed-parser"))),(0,n.kt)("h3",{id:"read-history-buffer"},"Read History Buffer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note: The Aggregator must have a history buffer initialized before using"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::AggregatorHistoryBuffer;\nuse std::convert::TryInto;\n\nlet history_buffer = AggregatorHistoryBuffer::new(history_account_info)?;\nlet current_timestamp = Clock::get()?.unix_timestamp;\nlet one_hour_ago: f64 = history_buffer.lower_bound(current_timestamp - 3600).unwrap().try_into()?;\n")),(0,n.kt)("h3",{id:"read-vrf"},"Read VRF"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::VrfAccountData;\n\n// deserialize the account info\nlet vrf = ctx.accounts.vrf.load()?;\n// OR\nlet vrf = VrfAccountData::new(vrf_account_info)?;\n\n// read the result\nlet result_buffer = vrf.get_result()?;\nlet value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);\nlet result = value[0] % 256000 as u128;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example Program(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-vrf-parser/src/actions/update_result.rs"},"anchor-vrf-parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/vrf-flip"},"vrf-flip"))),(0,n.kt)("h3",{id:"request-randomness-cpi"},"Request Randomness CPI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'pub use switchboard_v2::{VrfAccountData, VrfRequestRandomness};\n\nlet switchboard_program = ctx.accounts.switchboard_program.to_account_info();\n\nlet vrf_request_randomness = VrfRequestRandomness {\n  authority: ctx.accounts.state.to_account_info(),\n  vrf: ctx.accounts.vrf.to_account_info(),\n  oracle_queue: ctx.accounts.oracle_queue.to_account_info(),\n  queue_authority: ctx.accounts.queue_authority.to_account_info(),\n  data_buffer: ctx.accounts.data_buffer.to_account_info(),\n  permission: ctx.accounts.permission.to_account_info(),\n  escrow: ctx.accounts.escrow.clone(),\n  payer_wallet: ctx.accounts.payer_wallet.clone(),\n  payer_authority: ctx.accounts.payer_authority.to_account_info(),\n  recent_blockhashes: ctx.accounts.recent_blockhashes.to_account_info(),\n  program_state: ctx.accounts.program_state.to_account_info(),\n  token_program: ctx.accounts.token_program.to_account_info(),\n};\n\nlet vrf_key = ctx.accounts.vrf.key.clone();\nlet authority_key = ctx.accounts.authority.key.clone();\n\nlet state_seeds: &[&[&[u8]]] = &[&[\n  &STATE_SEED,\n  vrf_key.as_ref(),\n  authority_key.as_ref(),\n  &[bump],\n]];\nmsg!("requesting randomness");\nvrf_request_randomness.invoke_signed(\n  switchboard_program,\n  params.switchboard_state_bump,\n  params.permission_bump,\n  state_seeds,\n)?;\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example Program(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-vrf-parser/src/actions/request_result.rs"},"anchor-vrf-parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/vrf-flip"},"vrf-flip"))),(0,n.kt)("h3",{id:"read-buffer-relayer"},"Read Buffer Relayer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{BufferRelayerAccountData, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n  return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet buffer = BufferRelayerAccountData::new(feed_account_info)?;\n\n// get result\nlet buffer_result = buffer.get_result();\n\n// check if feed has been updated in the last 5 minutes\nbuffer.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// convert buffer to a string\nlet result_string = String::from_utf8(buffer.result)\n  .map_err(|_| error!(ErrorCode::StringConversionFailed))?;\nmsg!("Buffer string {:?}!", result_string);\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example Program(s)"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/sbv2-solana/blob/main/programs/anchor-buffer-parser/src/lib.rs"},"anchor-buffer-parser"))))}f.isMDXComponent=!0}}]);