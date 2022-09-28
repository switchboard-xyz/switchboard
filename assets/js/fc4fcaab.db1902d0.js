"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,v=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const o={title:"Create"},c=void 0,i={unversionedId:"dev/cli/solana/oracle/create",id:"dev/cli/solana/oracle/create",title:"Create",description:"create a new oracle account for a given queue",source:"@site/docs/dev/cli/solana/oracle/create.md",sourceDirName:"dev/cli/solana/oracle",slug:"/dev/cli/solana/oracle/create",permalink:"/dev/cli/solana/oracle/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Balance",permalink:"/dev/cli/solana/oracle/balance"},next:{title:"Nonce",permalink:"/dev/cli/solana/oracle/nonce"}},l={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new oracle account for a given queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana oracle create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [-n <value>] [-a <value>] [--enable] [--queueAuthority <value>]\n\nARGUMENTS\n  QUEUEKEY  public key of the oracle queue to join\n\nFLAGS\n  -a, --authority=<value>   keypair to delegate authority to for managing the oracle account\n  -h, --help                Show CLI help.\n  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no\n                            alternate authority provided\n  -n, --name=<value>        name of the oracle for easier identification\n  -s, --silent              suppress cli prompts\n  -u, --rpcUrl=<value>      alternate RPC url\n  -v, --verbose             log everything\n  --commitment=<option>     [default: confirmed] transaction commitment level to use\n                            <options: confirmed|finalized|processed>\n  --enable                  enable oracle heartbeat permissions\n  --mainnetBeta             WARNING: use mainnet-beta solana cluster\n  --programId=<value>       alternative Switchboard program ID to interact with\n  --queueAuthority=<value>  alternative keypair to use for queue authority\n\nDESCRIPTION\n  create a new oracle account for a given queue\n\nEXAMPLES\n  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-and-authority-keypair.json\n\n  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --name=oracle-1  --keypair ../payer-and-authority-keypair.json\n\n  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-keypair.json --authority ../oracle-keypair.json\n")))}s.isMDXComponent=!0}}]);