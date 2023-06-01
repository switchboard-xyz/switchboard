"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2699],{54852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,u(u({ref:n},c),{},{components:t})):r.createElement(m,u({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(95907),a=(t(49231),t(54852));const o={title:"Set"},u=void 0,l={unversionedId:"cli/near/queue/set",id:"cli/near/queue/set",title:"Set",description:"create a new oracle queue",source:"@site/docs/cli/near/queue/set.md",sourceDirName:"cli/near/queue",slug:"/cli/near/queue/set",permalink:"/cli/near/queue/set",draft:!1,tags:[],version:"current",frontMatter:{title:"Set"}},i={},s=[],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new oracle queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near queue set [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]\n    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata\n    <value>] [--minStake <value>] [-r <value>] [--oracleTimeout <value>] [--slashingEnabled] [--unpermissionedFeeds]\n    [--unpermissionedVrf] [--enableBufferRelayers]\n\nARGUMENTS\n  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the queue\n  -h, --help                    Show CLI help.\n  -r, --reward=<value>          oracle rewards for successfully responding to an update request\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --enableBufferRelayers        enable oracles to fulfill buffer relayer requests\n  --metadata=<value>            metadata of the queue for easier identification\n  --minStake=<value>            minimum stake required by an oracle to join the queue\n  --name=<value>                name of the queue for easier identification\n  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --oracleTimeout=<value>       number of oracles to add to the queue\n  --programId=<value>           Switchboard programId on the selected Near networkId\n  --slashingEnabled             permit slashing malicous oracles\n  --unpermissionedFeeds         permit unpermissioned feeds\n  --unpermissionedVrf           permit unpermissioned VRF accounts\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new oracle queue\n\nALIASES\n  $ sbv2 near create queue\n")))}d.isMDXComponent=!0}}]);