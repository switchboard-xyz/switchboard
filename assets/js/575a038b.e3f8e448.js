"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8864],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),u=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(a),g=n,s=c["".concat(d,".").concat(g)]||c[g]||m[g]||l;return a?r.createElement(s,o(o({ref:e},p),{},{components:a})):r.createElement(s,o({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60172:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(83117),n=(a(67294),a(3905));const l={hide_table_of_contents:!0},o=void 0,i={unversionedId:"near/idl/accounts/AggregatorAccountData",id:"near/idl/accounts/AggregatorAccountData",title:"AggregatorAccountData",description:"| Field                           | Type                                                               | Description                                                                                                                                |",source:"@site/docs/near/idl/accounts/AggregatorAccountData.md",sourceDirName:"near/idl/accounts",slug:"/near/idl/accounts/AggregatorAccountData",permalink:"/near/idl/accounts/AggregatorAccountData",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"near",previous:{title:"Overview",permalink:"/near/idl/accounts/"},next:{title:"CrankAccountData",permalink:"/near/idl/accounts/CrankAccountData"}},d={},u=[],p={toc:u};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the aggregator stored on-chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the aggregator to store on-chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metadata"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Metadata of the aggregator to store on-chain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queue"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the queue the aggregator belongs to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oracle_request_batch_size"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of oracles assigned to an update request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_oracle_results"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum number of oracle responses required before a round is validated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_job_results"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum number of job results before an oracle accepts a result.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_update_delay_seconds"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum number of seconds required between aggregator rounds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_after"),(0,n.kt)("td",{parentName:"tr",align:null},"i64"),(0,n.kt)("td",{parentName:"tr",align:null},"unix_timestamp for which no feed update will occur before.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variance_threshold"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/near/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"Change percentage required between a previous round and the current round. If variance percentage is not met, reject new oracle responses.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"force_report_period"),(0,n.kt)("td",{parentName:"tr",align:null},"i64"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expiration"),(0,n.kt)("td",{parentName:"tr",align:null},"i64"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp when the feed is no longer needed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"consecutive_failure_count"),(0,n.kt)("td",{parentName:"tr",align:null},"u64"),(0,n.kt)("td",{parentName:"tr",align:null},"Counter for the number of consecutive failures before a feed is removed from a queue. If set to 0, failed feeds will remain on the queue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"next_allowed_update_time"),(0,n.kt)("td",{parentName:"tr",align:null},"i64"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp when the next update request will be available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_locked"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag for whether an aggregators configuration is locked for editing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"crank"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional, address of the crank the aggregator is currently using. Event based feeds do not need a crank.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"crank_row_count"),(0,n.kt)("td",{parentName:"tr",align:null},"u32"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"latest_confirmed_round"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/near/idl/types/AggregatorRound"},"AggregatorRound")),(0,n.kt)("td",{parentName:"tr",align:null},"Latest confirmed update request result that has been accepted as valid.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current_round"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/near/idl/types/AggregatorRound"},"AggregatorRound")),(0,n.kt)("td",{parentName:"tr",align:null},"Oracle results from the current round of update request that has not been accepted as valid yet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobs"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<u8","[32]",">"),(0,n.kt)("td",{parentName:"tr",align:null},"List of public keys containing the job definitions for how data is sourced off-chain by oracles.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobs_checksum"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"authority"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making account changes or withdrawing funds from a lease.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"history"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<",(0,n.kt)("a",{parentName:"td",href:"/near/idl/types/AggregatorHistoryRow"},"AggregatorHistoryRow"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"An array of accepted on-chain results for historical sampling.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"history_limit"),(0,n.kt)("td",{parentName:"tr",align:null},"u64"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"history_write_idx"),(0,n.kt)("td",{parentName:"tr",align:null},"u64"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"previous_confirmed_round_result"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/solana/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,n.kt)("td",{parentName:"tr",align:null},"The previous confirmed round result.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"previous_confirmed_round_slot"),(0,n.kt)("td",{parentName:"tr",align:null},"u64"),(0,n.kt)("td",{parentName:"tr",align:null},"The slot when the previous confirmed round was opened.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"job_weights"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Job weights used for the weighted median of the aggregator's assigned job accounts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"creation_timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"u64"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"read_charge"),(0,n.kt)("td",{parentName:"tr",align:null},"u128"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reward_escrow"),(0,n.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the escrow account used for read charges")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max_gas_cost"),(0,n.kt)("td",{parentName:"tr",align:null},"u128"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"whitelisted_readers"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<u8","[32]",">"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"_","ebuf"),(0,n.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}m.isMDXComponent=!0}}]);