"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6346],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),d=a,v=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return t?n.createElement(v,i(i({ref:r},u),{},{components:t})):n.createElement(v,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},51039:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(83117),a=(t(67294),t(3905));const o={},i=void 0,l={unversionedId:"dev/cli/near/aggregator/job_remove",id:"dev/cli/near/aggregator/job_remove",title:"job_remove",description:"remove a job to an aggregator",source:"@site/docs/dev/cli/near/aggregator/job_remove.md",sourceDirName:"dev/cli/near/aggregator",slug:"/dev/cli/near/aggregator/job_remove",permalink:"/sbv2-core/dev/cli/near/aggregator/job_remove",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"job_add",permalink:"/sbv2-core/dev/cli/near/aggregator/job_add"},next:{title:"permission_create",permalink:"/sbv2-core/dev/cli/near/aggregator/permission_create"}},c={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"remove a job to an aggregator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near aggregator job remove [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId\n    testnet|mainnet|betanet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a\n    <value>] [-j <value>]\n\nARGUMENTS\n  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate keypair that is the authority for the aggregator\n  -h, --help                    Show CLI help.\n  -j, --jobAddress=<value>...   public key of an existing job account to remove from an aggregator\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|betanet|localnet>\n  --programId=<value>           [default: switchboard-v2.testnet] Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  remove a job to an aggregator\n\nALIASES\n  $ sbv2 near aggregator job remove\n")))}p.isMDXComponent=!0}}]);