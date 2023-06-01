"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7726],{54852:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var a=t(49231);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=n,f=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return t?a.createElement(f,c(c({ref:r},s),{},{components:t})):a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=g;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},41496:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(95907),n=(t(49231),t(54852));const o={title:"Aggregator"},c=void 0,l={unversionedId:"cli/near/create/aggregator",id:"cli/near/create/aggregator",title:"Aggregator",description:"create a near aggregator for a given queue",source:"@site/docs/cli/near/create/aggregator.md",sourceDirName:"cli/near/create",slug:"/cli/near/create/aggregator",permalink:"/cli/near/create/aggregator",draft:!1,tags:[],version:"current",frontMatter:{title:"Aggregator"}},i={},u=[],s={toc:u},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"create a near aggregator for a given queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near create aggregator [QUEUEADDRESS] --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]\n    [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize <value>]\n    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [--rewardEscrow <value>] [--enable]\n\nARGUMENTS\n  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the oracle\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --batchSize=<value>           number of oracles requested for each open round call\n  --crankAddress=<value>        optional, address of the crank to add the aggregator to\n  --enable                      if required and queue authority is provided, enable permissions\n  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new\n                                responses from oracles.\n  --metadata=<value>            metadata of the crank for easier identification\n  --minJobs=<value>             number of jobs that must respond before an oracle responds\n  --minOracles=<value>          number of oracles that must respond before a value is accepted on-chain\n  --name=<value>                name of the crank for easier identification\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --programId=<value>           Switchboard programId on the selected Near networkId\n  --rewardEscrow=<value>        where to send rewards. defaults to user's escrow account\n  --updateInterval=<value>      (required) set an aggregator's minimum update delay\n  --varianceThreshold=<value>   [default: 0] percentage change between a previous accepted result and the next round\n                                before an oracle reports a value on-chain. Used to conserve lease cost during low\n                                volatility\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a near aggregator for a given queue\n\nALIASES\n  $ sbv2 near create aggregator\n")))}p.isMDXComponent=!0}}]);