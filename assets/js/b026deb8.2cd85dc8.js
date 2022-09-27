"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const o={},c=void 0,i={unversionedId:"dev/cli/solana/buffer/create",id:"dev/cli/solana/buffer/create",title:"create",description:"create a buffer relayer account",source:"@site/docs/dev/cli/solana/buffer/create.md",sourceDirName:"dev/cli/solana/buffer",slug:"/dev/cli/solana/buffer/create",permalink:"/sbv2-core/dev/cli/solana/buffer/create",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"test",permalink:"/sbv2-core/dev/cli/solana/anchor/test"},next:{title:"print",permalink:"/sbv2-core/dev/cli/solana/buffer/print"}},l={},u=[],s={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a buffer relayer account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana buffer create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [-a <value>] [-n <value>] [--minUpdateDelaySeconds <value>]\n    [--jobDefinition <value> | --jobKey <value>]\n\nARGUMENTS\n  QUEUEKEY  oracle queue to create BufferRelayer account on\n\nFLAGS\n  -a, --authority=<value>          alternate keypair that will be the aggregator authority\n  -h, --help                       Show CLI help.\n  -k, --keypair=<value>            keypair that will pay for onchain transactions. defaults to new account authority if\n                                   no alternate authority provided\n  -n, --name=<value>               name of the buffer account\n  -s, --silent                     suppress cli prompts\n  -u, --rpcUrl=<value>             alternate RPC url\n  -v, --verbose                    log everything\n  --commitment=<option>            [default: confirmed] transaction commitment level to use\n                                   <options: confirmed|finalized|processed>\n  --jobDefinition=<value>          filesystem path to job definition\n  --jobKey=<value>                 public key of existing job account\n  --mainnetBeta                    WARNING: use mainnet-beta solana cluster\n  --minUpdateDelaySeconds=<value>  [default: 30] minimum number of seconds between update calls\n  --programId=<value>              alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  create a buffer relayer account\n")))}f.isMDXComponent=!0}}]);