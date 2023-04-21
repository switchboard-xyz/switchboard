"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87082],{54852:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,v=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(v,p(p({ref:t},l),{},{components:n})):r.createElement(v,p({ref:t},l))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(48041),o=(n(49231),n(54852));const a={title:"Index"},p=void 0,i={unversionedId:"dev/cli/aptos/print/index",id:"dev/cli/aptos/print/index",title:"Index",description:"print an aptos account",source:"@site/docs/dev/cli/aptos/print/index.md",sourceDirName:"dev/cli/aptos/print",slug:"/dev/cli/aptos/print/",permalink:"/dev/cli/aptos/print/",draft:!1,tags:[],version:"current",frontMatter:{title:"Index"},sidebar:"dev",previous:{title:"Crank",permalink:"/dev/cli/aptos/pop/crank"},next:{title:"Crank",permalink:"/dev/cli/aptos/push/crank"}},c={},s=[],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"print an aptos account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos print ACCOUNTTYPE ADDRESS [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId\n    <value>] [-u <value>] [--json]\n\nARGUMENTS\n  ACCOUNTTYPE  (queue|aggregator|crank|oracle|permission|lease|job|state) account type to print\n  ADDRESS      HexString address of the account to print\n\nFLAGS\n  -h, --help            Show CLI help.\n  -s, --silent          suppress cli prompts\n  -u, --rpcUrl=<value>  alternate RPC url\n  -v, --verbose         log everything\n  --networkId=<option>  [default: testnet] Aptos network to connect to\n                        <options: devnet|testnet|mainnet>\n  --programId=<value>   Switchboard programId on the selected Aptos network\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  print an aptos account\n\nALIASES\n  $ sbv2 aptos print\n")))}d.isMDXComponent=!0}}]);