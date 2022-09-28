"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,u(u({ref:t},s),{},{components:r})):n.createElement(d,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={title:"Create"},u=void 0,i={unversionedId:"dev/cli/solana/queue/create",id:"dev/cli/solana/queue/create",title:"Create",description:"create a personal oracle queue",source:"@site/docs/dev/cli/solana/queue/create.md",sourceDirName:"dev/cli/solana/queue",slug:"/dev/cli/solana/queue/create",permalink:"/dev/cli/solana/queue/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Print",permalink:"/dev/cli/solana/program/print"},next:{title:"Print",permalink:"/dev/cli/solana/queue/print"}},l={},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a personal oracle queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana queue create [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [--force] [-a <value>] [-n <value>] [--minStake <value>] [-r <value>]\n    [-c <value>] [--oracleTimeout <value>] [-o <value>] [--queueSize <value>] [--unpermissionedFeeds]\n    [--unpermissionedVrf] [--enableBufferRelayers] [-f <value>]\n\nFLAGS\n  -a, --authority=<value>   keypair to delegate authority to for creating permissions targeted at the queue\n  -c, --crankSize=<value>   [default: 100] size of the crank\n  -f, --outputFile=<value>  output queue schema to a json file\n  -h, --help                Show CLI help.\n  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no\n                            alternate authority provided\n  -n, --name=<value>        [default: Custom Queue] name of the queue for easier identification\n  -o, --numOracles=<value>  number of oracles to add to the queue\n  -r, --reward=<value>      [default: 0] oracle rewards for successfully responding to an update request\n  -s, --silent              suppress cli prompts\n  -u, --rpcUrl=<value>      alternate RPC url\n  -v, --verbose             log everything\n  --commitment=<option>     [default: confirmed] transaction commitment level to use\n                            <options: confirmed|finalized|processed>\n  --enableBufferRelayers    enable oracles to fulfill buffer relayer requests\n  --force                   overwrite output file if existing\n  --mainnetBeta             WARNING: use mainnet-beta solana cluster\n  --minStake=<value>        [default: 0] minimum stake required by an oracle to join the queue\n  --oracleTimeout=<value>   [default: 180] number of oracles to add to the queue\n  --programId=<value>       alternative Switchboard program ID to interact with\n  --queueSize=<value>       [default: 100] maximum number of oracles the queue can support\n  --unpermissionedFeeds     permit unpermissioned feeds\n  --unpermissionedVrf       permit unpermissioned VRF accounts\n\nDESCRIPTION\n  create a personal oracle queue\n")))}p.isMDXComponent=!0}}]);