"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const o={title:"Index"},c=void 0,p={unversionedId:"dev/cli/aptos/print/index",id:"dev/cli/aptos/print/index",title:"Index",description:"print an aptos account",source:"@site/docs/dev/cli/aptos/print/index.md",sourceDirName:"dev/cli/aptos/print",slug:"/dev/cli/aptos/print/",permalink:"/dev/cli/aptos/print/",draft:!1,tags:[],version:"current",frontMatter:{title:"Index"},sidebar:"dev",previous:{title:"Crank",permalink:"/dev/cli/aptos/pop/crank"},next:{title:"Crank",permalink:"/dev/cli/aptos/push/crank"}},i={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"print an aptos account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 aptos print [ACCOUNTTYPE] [ADDRESS] [-h] [-v] [-s] [--networkId devnet|testnet] [--programId <value>]\n    [--stateAddress <value>] [-u <value>] [--json]\n\nARGUMENTS\n  ACCOUNTTYPE  (queue|aggregator|crank|oracle|permission|lease|job|state) account type to print\n  ADDRESS      HexString address of the account to print\n\nFLAGS\n  -h, --help              Show CLI help.\n  -s, --silent            suppress cli prompts\n  -u, --rpcUrl=<value>    alternate RPC url\n  -v, --verbose           log everything\n  --networkId=<option>    [default: devnet] Aptos network to connect to\n                          <options: devnet|testnet>\n  --programId=<value>     [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard\n                          programId on the selected Aptos network\n  --stateAddress=<value>  [default: 0xb27f7bbf7caf2368b08032d005e8beab151a885054cdca55c4cc644f0a308d2b] Switchboard\n                          state address\n\nGLOBAL FLAGS\n  --json  Format output as json.\n\nDESCRIPTION\n  print an aptos account\n\nALIASES\n  $ sbv2 aptos print\n")))}u.isMDXComponent=!0}}]);