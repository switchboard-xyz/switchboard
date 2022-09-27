"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,v=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(v,c(c({ref:t},s),{},{components:r})):n.createElement(v,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={},c=void 0,i={unversionedId:"dev/cli/aptos/crank/create",id:"dev/cli/aptos/crank/create",title:"create",description:"create a new crank",source:"@site/docs/dev/cli/aptos/crank/create.md",sourceDirName:"dev/cli/aptos/crank",slug:"/dev/cli/aptos/crank/create",permalink:"/sbv2-core/dev/cli/aptos/crank/create",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"index",permalink:"/sbv2-core/dev/cli/aptos/airdrop/"},next:{title:"pop",permalink:"/sbv2-core/dev/cli/aptos/crank/pop"}},l={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos crank create [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet] [--programId\n    <value>] [--stateAddress <value>] [-u <value>] [--profileName <value>] [--name <value>] [--metadata <value>]\n    [--maxRows <value>] [--new]\n\nARGUMENTS\n  QUEUEHEXSTRING  HexString of the oracle queue to create a crank for\n\nFLAGS\n  -h, --help              Show CLI help.\n  -s, --silent            suppress cli prompts\n  -u, --rpcUrl=<value>    alternate RPC url\n  -v, --verbose           log everything\n  --keypair=<value>       (required) Path to AptosAccount keypair or config.yaml file\n  --maxRows=<value>       [default: 100] maximum number of rows on the crank\n  --metadata=<value>      metadata of the queue for easier identification\n  --name=<value>          name of the queue for easier identification\n  --networkId=<option>    [default: devnet] Aptos network to connect to\n                          <options: devnet|testnet>\n  --new                   create account at new AptosAccount with authority set to --account\n  --profileName=<value>   [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                          load. If none provided, default will be used\n  --programId=<value>     [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38] Switchboard\n                          programId on the selected Aptos network\n  --stateAddress=<value>  [default: 0x14611263909398572be034debb2e61b6751cafbeaddd994b9a1250cb76b99d38] Switchboard\n                          state address\n\nDESCRIPTION\n  create a new crank\n\nALIASES\n  $ sbv2 aptos create crank\n")))}u.isMDXComponent=!0}}]);