"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"dev/cli/solana/aggregator/add_job",id:"dev/cli/solana/aggregator/add_job",title:"add_job",description:"add a job to an aggregator",source:"@site/docs/dev/cli/solana/aggregator/add_job.md",sourceDirName:"dev/cli/solana/aggregator",slug:"/dev/cli/solana/aggregator/add_job",permalink:"/sbv2-core/dev/cli/solana/aggregator/add_job",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"add_crank",permalink:"/sbv2-core/dev/cli/solana/aggregator/add_crank"},next:{title:"create",permalink:"/sbv2-core/dev/cli/solana/aggregator/create"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"add a job to an aggregator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana aggregator add job [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]\n    [--commitment confirmed|finalized|processed] [-k <value>] [--jobDefinition <value> | --jobKey <value>] [-a <value>]\n\nARGUMENTS\n  AGGREGATORKEY  public key of the aggregator account\n\nFLAGS\n  -a, --authority=<value>  alternate keypair that is the authority for the aggregator\n  -h, --help               Show CLI help.\n  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no\n                           alternate authority provided\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --commitment=<option>    [default: confirmed] transaction commitment level to use\n                           <options: confirmed|finalized|processed>\n  --jobDefinition=<value>  filesystem path of job json definition file\n  --jobKey=<value>         public key of an existing job account to add to an aggregator\n  --mainnetBeta            WARNING: use mainnet-beta solana cluster\n  --programId=<value>      alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  add a job to an aggregator\n\nEXAMPLES\n  $ sbv2 aggregator:add:job\n")))}p.isMDXComponent=!0}}]);