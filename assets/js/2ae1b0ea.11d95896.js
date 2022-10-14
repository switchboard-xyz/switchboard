"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={title:"Queue"},u=void 0,l={unversionedId:"dev/cli/aptos/create/queue",id:"dev/cli/aptos/create/queue",title:"Queue",description:"create a new oracle queue",source:"@site/docs/dev/cli/aptos/create/queue.md",sourceDirName:"dev/cli/aptos/create",slug:"/dev/cli/aptos/create/queue",permalink:"/dev/cli/aptos/create/queue",draft:!1,tags:[],version:"current",frontMatter:{title:"Queue"},sidebar:"dev",previous:{title:"Oracle",permalink:"/dev/cli/aptos/create/oracle"},next:{title:"Create",permalink:"/dev/cli/aptos/job/create"}},i={},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new oracle queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos create queue --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId <value>]\n    [--stateAddress <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--minStake <value>] [-r\n    <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled] [--unpermissionedFeeds]\n    [--unpermissionedVrf] [--enableBufferRelayers] [--lockLeaseFunding] [--new]\n\nFLAGS\n  -a, --authority=<value>  alternate account HexString that will be the authority for the queue\n  -h, --help               Show CLI help.\n  -r, --reward=<value>     oracle rewards for successfully responding to an update request\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --enableBufferRelayers   enable oracles to fulfill buffer relayer requests\n  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file\n  --lockLeaseFunding       lock lease funding\n  --minStake=<value>       minimum stake required by an oracle to join the queue\n  --networkId=<option>     [default: devnet] Aptos network to connect to\n                           <options: devnet|testnet>\n  --new                    create account at new AptosAccount with authority set to --account\n  --oracleTimeout=<value>  [default: 180] number of oracles to add to the queue\n  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                           load. If none provided, default will be used\n  --programId=<value>      [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard\n                           programId on the selected Aptos network\n  --queueSize=<value>      [default: 100] maximum number of oracles the queue can support\n  --slashingEnabled        permit slashing malicous oracles\n  --stateAddress=<value>   [default: 0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd] Switchboard\n                           state address\n  --unpermissionedFeeds    permit unpermissioned feeds\n  --unpermissionedVrf      permit unpermissioned VRF accounts\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new oracle queue\n\nALIASES\n  $ sbv2 aptos create queue\n")))}p.isMDXComponent=!0}}]);