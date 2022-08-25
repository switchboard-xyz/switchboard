"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=c(r),b=a,v=s["".concat(l,".").concat(b)]||s[b]||p[b]||i;return r?n.createElement(v,o(o({ref:t},f),{},{components:r})):n.createElement(v,o({ref:t},f))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={toc:[{value:"<code>sbv2 buffer create [QUEUEKEY]</code>",id:"sbv2-buffer-create-queuekey",level:2},{value:"<code>sbv2 buffer print [BUFFERRELAYERKEY]</code>",id:"sbv2-buffer-print-bufferrelayerkey",level:2}]};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a buffer relayer account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sbv2-buffer-create-queuekey"},(0,a.kt)("inlineCode",{parentName:"a"},"sbv2 buffer create [QUEUEKEY]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sbv2-buffer-print-bufferrelayerkey"},(0,a.kt)("inlineCode",{parentName:"a"},"sbv2 buffer print [BUFFERRELAYERKEY]")))),(0,a.kt)("h2",{id:"sbv2-buffer-create-queuekey"},(0,a.kt)("inlineCode",{parentName:"h2"},"sbv2 buffer create [QUEUEKEY]")),(0,a.kt)("p",null,"create a buffer relayer account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 buffer create [QUEUEKEY] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [-k <value>] [-a\n    <value>] [-n <value>] [--minUpdateDelaySeconds <value>] [--jobDefinition <value> | --jobKey <value>]\n\nARGUMENTS\n  QUEUEKEY  oracle queue to create BufferRelayer account on\n\nFLAGS\n  -a, --authority=<value>          alternate keypair that will be the aggregator authority\n  -k, --keypair=<value>            keypair that will pay for onchain transactions. defaults to new account authority if\n                                   no alternate authority provided\n  -n, --name=<value>               name of the buffer account\n  -s, --silent                     suppress cli prompts\n  -u, --rpcUrl=<value>             alternate RPC url\n  -v, --verbose                    log everything\n  --jobDefinition=<value>          filesystem path to job definition\n  --jobKey=<value>                 public key of existing job account\n  --mainnetBeta                    WARNING: use mainnet-beta solana cluster\n  --minUpdateDelaySeconds=<value>  [default: 30] minimum number of seconds between update calls\n  --programId=<value>              alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  create a buffer relayer account\n")),(0,a.kt)("h2",{id:"sbv2-buffer-print-bufferrelayerkey"},(0,a.kt)("inlineCode",{parentName:"h2"},"sbv2 buffer print [BUFFERRELAYERKEY]")),(0,a.kt)("p",null,"Print the deserialized Switchboard buffer relayer account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 buffer print [BUFFERRELAYERKEY] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [-k <value>]\n    [--job]\n\nARGUMENTS\n  BUFFERRELAYERKEY  public key of the buffer relayer account to deserialize\n\nFLAGS\n  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no\n                         alternate authority provided\n  -s, --silent           suppress cli prompts\n  -u, --rpcUrl=<value>   alternate RPC url\n  -v, --verbose          log everything\n  --job                  output job definitions\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n  --programId=<value>    alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  Print the deserialized Switchboard buffer relayer account\n\nALIASES\n  $ sbv2 buffer print\n\nEXAMPLES\n  $ sbv2 buffer:print 23GvzENjwgqqaLejsAtAWgTkSzWjSMo2LUYTAETT8URp\n")))}o.isMDXComponent=!0;const u={sidebar_position:85,title:"sbv2 buffer"},l=void 0,c={unversionedId:"cli/buffer",id:"cli/buffer",title:"sbv2 buffer",description:"",source:"@site/api/cli/buffer.mdx",sourceDirName:"cli",slug:"/cli/buffer",permalink:"/api/cli/buffer",tags:[],version:"current",sidebarPosition:85,frontMatter:{sidebar_position:85,title:"sbv2 buffer"},sidebar:"tutorialSidebar",previous:{title:"sbv2 vrf",permalink:"/api/cli/vrf"},next:{title:"sbv2 update",permalink:"/api/cli/update"}},f={},p=[],s={toc:p};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"Sbv2Buffer"}))}b.isMDXComponent=!0}}]);