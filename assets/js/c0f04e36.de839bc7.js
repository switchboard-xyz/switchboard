"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},i),{},{components:r})):n.createElement(m,s({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:10,slug:".",title:"switchboard-v2"},s=void 0,c={unversionedId:"solana/dev/rust/client",id:"solana/dev/rust/client",title:"switchboard-v2",description:"cargo&nbsp;&nbsp;",source:"@site/docs/solana/dev/rust/client.mdx",sourceDirName:"solana/dev/rust",slug:"/solana/dev/rust/",permalink:"/sbv2-core/solana/dev/rust/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"switchboard-v2"},sidebar:"solana",previous:{title:"switchboardpy",permalink:"/sbv2-core/solana/dev/python/"}},u={},l=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Aggregator",id:"aggregator",level:3},{value:"Read Latest Result",id:"read-latest-result",level:4},{value:"Read Aggregator History",id:"read-aggregator-history",level:4},{value:"VRF Account",id:"vrf-account",level:3},{value:"Read Latest Result",id:"read-latest-result-1",level:4},{value:"RequestRandomness CPI",id:"requestrandomness-cpi",level:4},{value:"Buffer Relayer Account",id:"buffer-relayer-account",level:3},{value:"Read Latest Result",id:"read-latest-result-2",level:4}],i={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/switchboard-v2"},(0,a.kt)("img",{parentName:"a",src:"https://badgen.net/crates/v/switchboard-v2",alt:"cargo"})),"\xa0","\xa0","\n",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,a.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,a.kt)("p",null,"A Rust library to interact with Switchboard V2 accounts."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"By default the crate will default to mainnet. You must explicitly enable the\n",(0,a.kt)("inlineCode",{parentName:"p"},"devnet")," feature to use on devnet."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"aggregator"},"Aggregator"),(0,a.kt)("h4",{id:"read-latest-result"},"Read Latest Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example(s)"),":\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-feed-parser/src/lib.rs"},"anchor-feed-parser"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/native-feed-parser/src/lib.rs"},"native-feed-parser")),(0,a.kt)("h4",{id:"read-aggregator-history"},"Read Aggregator History"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note: The Aggregator must have a history buffer initialized before using"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::AggregatorHistoryBuffer;\nuse std::convert::TryInto;\n\nlet history_buffer = AggregatorHistoryBuffer::new(history_account_info)?;\nlet current_timestamp = Clock::get()?.unix_timestamp;\nlet one_hour_ago: f64 = history_buffer.lower_bound(current_timestamp - 3600).unwrap().try_into()?;\n")),(0,a.kt)("h3",{id:"vrf-account"},"VRF Account"),(0,a.kt)("h4",{id:"read-latest-result-1"},"Read Latest Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use switchboard_v2::VrfAccountData;\n\n// deserialize the account info\nlet vrf = ctx.accounts.vrf.load()?;\n// OR\nlet vrf = VrfAccountData::new(vrf_account_info)?;\n\n// read the result\nlet result_buffer = vrf.get_result()?;\nlet value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);\nlet result = value[0] % 256000 as u128;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-vrf-parser/src/actions/update_result.rs"},"anchor-vrf-parser")),(0,a.kt)("h4",{id:"requestrandomness-cpi"},"RequestRandomness CPI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub use switchboard_v2::{VrfAccountData, VrfRequestRandomness};\n\nlet switchboard_program = ctx.accounts.switchboard_program.to_account_info();\n\nlet vrf_request_randomness = VrfRequestRandomness {\n    authority: ctx.accounts.state.to_account_info(),\n    vrf: ctx.accounts.vrf.to_account_info(),\n    oracle_queue: ctx.accounts.oracle_queue.to_account_info(),\n    queue_authority: ctx.accounts.queue_authority.to_account_info(),\n    data_buffer: ctx.accounts.data_buffer.to_account_info(),\n    permission: ctx.accounts.permission.to_account_info(),\n    escrow: ctx.accounts.escrow.clone(),\n    payer_wallet: ctx.accounts.payer_wallet.clone(),\n    payer_authority: ctx.accounts.payer_authority.to_account_info(),\n    recent_blockhashes: ctx.accounts.recent_blockhashes.to_account_info(),\n    program_state: ctx.accounts.program_state.to_account_info(),\n    token_program: ctx.accounts.token_program.to_account_info(),\n};\n\nlet vrf_key = ctx.accounts.vrf.key.clone();\nlet authority_key = ctx.accounts.authority.key.clone();\n\nlet state_seeds: &[&[&[u8]]] = &[&[\n    &STATE_SEED,\n    vrf_key.as_ref(),\n    authority_key.as_ref(),\n    &[bump],\n]];\nmsg!("requesting randomness");\nvrf_request_randomness.invoke_signed(\n    switchboard_program,\n    params.switchboard_state_bump,\n    params.permission_bump,\n    state_seeds,\n)?;\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-vrf-parser/src/actions/request_result.rs"},"anchor-vrf-parser")),(0,a.kt)("h3",{id:"buffer-relayer-account"},"Buffer Relayer Account"),(0,a.kt)("h4",{id:"read-latest-result-2"},"Read Latest Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{BufferRelayerAccountData, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet buffer = BufferRelayerAccountData::new(feed_account_info)?;\n\n// get result\nlet buffer_result = buffer.get_result();\n\n// check if feed has been updated in the last 5 minutes\nbuffer.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// convert buffer to a string\nlet result_string = String::from_utf8(buffer.result)\n    .map_err(|_| error!(ErrorCode::StringConversionFailed))?;\nmsg!("Buffer string {:?}!", result_string);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/blob/main/examples/programs/anchor-buffer-parser/src/lib.rs"},"anchor-buffer-parser")))}p.isMDXComponent=!0}}]);