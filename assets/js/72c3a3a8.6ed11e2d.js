"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=u(r),d=n,g=v["".concat(i,".").concat(d)]||v[d]||p[d]||o;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=v;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},30413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(83117),n=(r(67294),r(3905));const o={title:"Create"},l=void 0,c={unversionedId:"dev/cli/solana/aggregator/create",id:"dev/cli/solana/aggregator/create",title:"Create",description:"create an aggregator account",source:"@site/docs/dev/cli/solana/aggregator/create.md",sourceDirName:"dev/cli/solana/aggregator",slug:"/dev/cli/solana/aggregator/create",permalink:"/dev/cli/solana/aggregator/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Add Job",permalink:"/dev/cli/solana/aggregator/add_job"},next:{title:"Create Copy",permalink:"/dev/cli/solana/aggregator/create_copy"}},i={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"create an aggregator account"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana aggregator create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [-a <value>] [--crankKey <value>] [--enable] [--queueAuthority <value>]\n    [-n <value>] [--forceReportPeriod <value>] [--batchSize <value>] [--minJobs <value>] [--minOracles <value>]\n    [--updateInterval <value>] [--varianceThreshold <value>] [-j <value>]\n\nARGUMENTS\n  QUEUEKEY  public key of the oracle queue account to create aggregator for\n\nFLAGS\n  -a, --authority=<value>      alternate keypair that is the authority for the aggregator\n  -h, --help                   Show CLI help.\n  -j, --job=<value>...         filesystem path to job definition file\n  -k, --keypair=<value>        keypair that will pay for onchain transactions. defaults to new account authority if no\n                               alternate authority provided\n  -n, --name=<value>           name of the aggregator\n  -s, --silent                 suppress cli prompts\n  -u, --rpcUrl=<value>         alternate RPC url\n  -v, --verbose                log everything\n  --batchSize=<value>          number of oracles requested for each open round call\n  --commitment=<option>        [default: confirmed] transaction commitment level to use\n                               <options: confirmed|finalized|processed>\n  --crankKey=<value>           public key of the crank to join\n  --enable                     set permissions to PERMIT_ORACLE_QUEUE_USAGE\n  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new\n                               responses from oracles.\n  --mainnetBeta                WARNING: use mainnet-beta solana cluster\n  --minJobs=<value>            number of jobs that must respond before an oracle responds\n  --minOracles=<value>         number of oracles that must respond before a value is accepted on-chain\n  --programId=<value>          alternative Switchboard program ID to interact with\n  --queueAuthority=<value>     alternative keypair to use for queue authority\n  --updateInterval=<value>     set an aggregator's minimum update delay\n  --varianceThreshold=<value>  percentage change between a previous accepted result and the next round before an oracle\n                               reports a value on-chain. Used to conserve lease cost during low volatility\n\nDESCRIPTION\n  create an aggregator account\n")))}p.isMDXComponent=!0}}]);