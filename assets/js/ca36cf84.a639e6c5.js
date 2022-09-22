"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3805],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(a),s=r,k=c["".concat(u,".").concat(s)]||c[s]||p[s]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6782:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(3117),r=(a(7294),a(3905));const l={hide_table_of_contents:!0},i=void 0,o={unversionedId:"near/idl/accounts/OracleQueueAccountData",id:"near/idl/accounts/OracleQueueAccountData",title:"OracleQueueAccountData",description:"| Field                            | Type                                                     | Description                                                                                                                                                                    |",source:"@site/docs/near/idl/accounts/OracleQueueAccountData.md",sourceDirName:"near/idl/accounts",slug:"/near/idl/accounts/OracleQueueAccountData",permalink:"/sbv2-core/near/idl/accounts/OracleQueueAccountData",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"near",previous:{title:"OracleAccountData",permalink:"/sbv2-core/near/idl/accounts/OracleAccountData"},next:{title:"PermissionAccountData",permalink:"/sbv2-core/near/idl/accounts/PermissionAccountData"}},u={},d=[],m={toc:d};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the queue stored on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the queue to store on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata of the queue to store on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making account changes or assigning permissions targeted at the queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oracle_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period we should remove an oracle after if no response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reward"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Rewards to provide oracles and round openers on this queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_stake"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum amount of stake oracles must present to remain on the queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slashing_enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether slashing is enabled on this queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variance_tolerance_multiplier"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/near/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"The tolerated variance amount oracle results can have from the accepted round result before being slashed. slashBound = varianceToleranceMultiplier ","*"," stdDeviation Default: 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feed_probation_period"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"After a feed lease is funded or re-funded, it must consecutively succeed N amount of times or its authorization to use the queue is auto-revoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"curr_idx"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Current index of the oracle rotation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Current number of oracles on a queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gc_idx"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Garbage collection index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutive_feed_failure_limit"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Consecutive failure limit for a feed before feed permission is revoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consecutive_oracle_failure_limit"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Consecutive failure limit for an oracle before oracle permission is revoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unpermissioned_feeds_enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling this setting means data feeds do not need explicit permission to join the queue and request new values from its oracles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unpermissioned_vrf_enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabling this setting means VRF accounts do not need explicit permission to join the queue and request new values from its oracles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"curator_reward_cut"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/near/idl/types/SwitchboardDecimal"},"SwitchboardDecimal")),(0,r.kt)("td",{parentName:"tr",align:null},"Not implemented yet. Revenue percentage rewarded to job curators overall.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lock_lease_funding"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevent new leases from being funded n this queue. Useful to turn down a queue for migrations, since authority is always immutable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mint"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Token mint used for the oracle queue rewards and slashing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_buffer_relayers"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether oracles are permitted to fulfill buffer relayer update request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_size"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of oracles a queue can support.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<\\u8","[32]",">"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_gas_cost"),(0,r.kt)("td",{parentName:"tr",align:null},"u128"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creation_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp when the queue was created on-chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","ebuf"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"features"),(0,r.kt)("td",{parentName:"tr",align:null},"Vec<u8",">"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);