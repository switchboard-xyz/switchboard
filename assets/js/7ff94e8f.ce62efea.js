"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,v=f["".concat(i,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const o={title:"Oracle"},c=void 0,l={unversionedId:"dev/cli/aptos/create/oracle",id:"dev/cli/aptos/create/oracle",title:"Oracle",description:"create a oracle for a given queue",source:"@site/docs/dev/cli/aptos/create/oracle.md",sourceDirName:"dev/cli/aptos/create",slug:"/dev/cli/aptos/create/oracle",permalink:"/dev/cli/aptos/create/oracle",draft:!1,tags:[],version:"current",frontMatter:{title:"Oracle"},sidebar:"dev",previous:{title:"Job",permalink:"/dev/cli/aptos/create/job"},next:{title:"Queue",permalink:"/dev/cli/aptos/create/queue"}},i={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a oracle for a given queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos create oracle [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]\n    [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name <value>] [--metadata\n    <value>] [--new]\n\nARGUMENTS\n  QUEUEHEXSTRING  HexString address of the queue\n\nFLAGS\n  -a, --authority=<value>  alternate named account that will be the authority for the oracle\n  -h, --help               Show CLI help.\n  -s, --silent             suppress cli prompts\n  -u, --rpcUrl=<value>     alternate RPC url\n  -v, --verbose            log everything\n  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file\n  --metadata=<value>       metadata of the oracle for easier identification\n  --name=<value>           name of the oracle for easier identification\n  --networkId=<option>     [default: testnet] Aptos network to connect to\n                           <options: devnet|testnet|mainnet>\n  --new                    create account at new AptosAccount with authority set to --account\n  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                           load. If none provided, default will be used\n  --programId=<value>      Switchboard programId on the selected Aptos network\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a oracle for a given queue\n\nALIASES\n  $ sbv2 aptos create oracle\n")))}s.isMDXComponent=!0}}]);