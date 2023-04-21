"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44701],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(48041),a=(r(49231),r(54852));const o={title:"Create"},c=void 0,l={unversionedId:"dev/cli/near/escrow/create",id:"dev/cli/near/escrow/create",title:"Create",description:"create an escrow token account",source:"@site/docs/dev/cli/near/escrow/create.md",sourceDirName:"dev/cli/near/escrow",slug:"/dev/cli/near/escrow/create",permalink:"/dev/cli/near/escrow/create",draft:!1,tags:[],version:"current",frontMatter:{title:"Create"},sidebar:"dev",previous:{title:"Queue",permalink:"/dev/cli/near/create/queue"},next:{title:"Print",permalink:"/dev/cli/near/escrow/print"}},i={},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"create an escrow token account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 near escrow create --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId\n    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--mint <value>]\n\nFLAGS\n  -a, --authority=<value>       alternate named account that will be the authority for the oracle\n  -h, --help                    Show CLI help.\n  -s, --silent                  suppress cli prompts\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --accountName=<value>         (required) Named account to load from your nearCredentialsDir\n  --mint=<value>                [default: wrap.test] token mint to create escrow account for\n  --nearCredentialsDir=<value>  [default: /home/runner/.near-credentials] Alternative directory for near credentials.\n                                Defaults to ~/.near-credentials\n  --networkId=<option>          [default: testnet] Near network ID to connect to\n                                <options: testnet|mainnet|localnet>\n  --programId=<value>           Switchboard programId on the selected Near networkId\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  create an escrow token account\n\nALIASES\n  $ sbv2 near create escrow\n")))}d.isMDXComponent=!0}}]);