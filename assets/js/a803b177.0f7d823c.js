"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4972],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,f=p["".concat(c,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(95907),a=(r(49231),r(54852));const o={title:"Remove Job"},l=void 0,i={unversionedId:"cli/solana/aggregator/remove_job",id:"cli/solana/aggregator/remove_job",title:"Remove Job",description:"remove a switchboard job account from an aggregator",source:"@site/docs/cli/solana/aggregator/remove_job.md",sourceDirName:"cli/solana/aggregator",slug:"/cli/solana/aggregator/remove_job",permalink:"/cli/solana/aggregator/remove_job",draft:!1,tags:[],version:"current",frontMatter:{title:"Remove Job"}},c={},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"remove a switchboard job account from an aggregator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana aggregator remove job [AGGREGATORKEY] [JOBKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster\n    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]\n\nARGUMENTS\n  AGGREGATORKEY  public key of the aggregator account\n  JOBKEY         public key of an existing job account to remove from an aggregator\n\nFLAGS\n  -a, --authority=<value>  alternate keypair that is the authority for the aggregator\n  -h, --help               Show CLI help.\n  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no\n                           alternate authority provided\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --cluster=<option>       the solana cluster to connect to\n                           <options: devnet|mainnet-beta|mainnet|localnet>\n  --commitment=<option>    [default: confirmed] transaction commitment level to use\n                           <options: confirmed|finalized|processed>\n  --ledger                 enable ledger support\n  --ledgerPath=<value>     HID path to the ledger\n  --mainnetBeta            WARNING: use mainnet-beta solana cluster\n  --programId=<value>      alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  remove a switchboard job account from an aggregator\n")))}m.isMDXComponent=!0}}]);