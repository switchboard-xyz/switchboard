"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8981],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(95907),a=(n(49231),n(54852));const o={title:"Create"},c=void 0,i={unversionedId:"cli/aptos/crank/create",id:"cli/aptos/crank/create",title:"Create",description:"create a new crank",source:"@site/docs/cli/aptos/crank/create.md",sourceDirName:"cli/aptos/crank",slug:"/cli/aptos/crank/create",permalink:"/cli/aptos/crank/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"}},l={},p=[],u={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create a new crank"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos crank create [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]\n    [--programId <value>] [-u <value>] [--profileName <value>] [--json] [--name <value>] [--metadata <value>] [--maxRows\n    <value>] [--new]\n\nARGUMENTS\n  QUEUEHEXSTRING  HexString of the oracle queue to create a crank for\n\nFLAGS\n  -h, --help             Show CLI help.\n  -s, --silent           suppress cli prompts\n  -u, --rpcUrl=<value>   alternate RPC url\n  -v, --verbose          log everything\n  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file\n  --maxRows=<value>      [default: 100] maximum number of rows on the crank\n  --metadata=<value>     metadata of the queue for easier identification\n  --name=<value>         name of the queue for easier identification\n  --networkId=<option>   [default: testnet] Aptos network to connect to\n                         <options: devnet|testnet|mainnet>\n  --new                  create account at new AptosAccount with authority set to --account\n  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to\n                         load. If none provided, default will be used\n  --programId=<value>    Switchboard programId on the selected Aptos network\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create a new crank\n\nALIASES\n  $ sbv2 aptos create crank\n")))}f.isMDXComponent=!0}}]);