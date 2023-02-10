"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77631],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),v=n,f=p["".concat(i,".").concat(v)]||p[v]||d[v]||o;return t?a.createElement(f,l(l({ref:r},s),{},{components:t})):a.createElement(f,l({ref:r},s))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=p;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},13666:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(83117),n=(t(67294),t(3905));const o={title:"Create"},l=void 0,c={unversionedId:"dev/cli/near/aggregator/create",id:"dev/cli/near/aggregator/create",title:"Create",description:"create a near aggregator for a given queue",source:"@site/docs/dev/cli/near/aggregator/create.md",sourceDirName:"dev/cli/near/aggregator",slug:"/dev/cli/near/aggregator/create",permalink:"/dev/cli/near/aggregator/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Add Job",permalink:"/dev/cli/near/aggregator/add_job"},next:{title:"Escrow",permalink:"/dev/cli/near/aggregator/escrow"}},i={},u=[],s={toc:u};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"create a near aggregator for a given queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near aggregator create [QUEUEADDRESS] --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]\n    [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize <value>]\n    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [--rewardEscrow <value>] [--enable]\n\nARGUMENTS\n  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the oracle\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --batchSize=<value>           number of oracles requested for each open round call\n  --crankAddress=<value>        optional, address of the crank to add the aggregator to\n  --enable                      if required and queue authority is provided, enable permissions\n  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new\n                                responses from oracles.\n  --metadata=<value>            metadata of the crank for easier identification\n  --minJobs=<value>             number of jobs that must respond before an oracle responds\n  --minOracles=<value>          number of oracles that must respond before a value is accepted on-chain\n  --name=<value>                name of the crank for easier identification\n  --nearCredentialsDir=<value>  [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --programId=<value>           Switchboard programId on the selected Near networkId\n  --rewardEscrow=<value>        where to send rewards. defaults to user's escrow account\n  --updateInterval=<value>      (required) set an aggregator's minimum update delay\n  --varianceThreshold=<value>   [default: 0] percentage change between a previous accepted result and the next round\n                                before an oracle reports a value on-chain. Used to conserve lease cost during low\n                                volatility\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a near aggregator for a given queue\n\nALIASES\n  $ sbv2 near create aggregator\n")))}d.isMDXComponent=!0}}]);