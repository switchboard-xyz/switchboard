"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(r),f=a,d=g["".concat(i,".").concat(f)]||g[f]||p[f]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const o={title:"Fetch"},c=void 0,l={unversionedId:"dev/cli/near/aggregator/fetch",id:"dev/cli/near/aggregator/fetch",title:"Fetch",description:"fetch all aggregators for a given near account",source:"@site/docs/dev/cli/near/aggregator/fetch.md",sourceDirName:"dev/cli/near/aggregator",slug:"/dev/cli/near/aggregator/fetch",permalink:"/dev/cli/near/aggregator/fetch",draft:!1,tags:[],version:"current",frontMatter:{title:"Fetch"},sidebar:"dev",previous:{title:"Escrow",permalink:"/dev/cli/near/aggregator/escrow"},next:{title:"Fund",permalink:"/dev/cli/near/aggregator/fund"}},i={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"fetch all aggregators for a given near account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near aggregator fetch --accountId <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId\n    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]\n\nFLAGS\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountId=<value>           (required) optional, authority to fetch aggregators for\n  --nearCredentialsDir=<value>  [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --programId=<value>           Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  fetch all aggregators for a given near account\n\nALIASES\n  $ sbv2 near fetch aggregators\n")))}p.isMDXComponent=!0}}]);