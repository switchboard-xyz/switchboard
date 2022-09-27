"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6337],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return r?t.createElement(d,c(c({ref:n},p),{},{components:r})):t.createElement(d,c({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(83117),o=(r(67294),r(3905));const a={},c=void 0,l={unversionedId:"dev/cli/solana/oracle/nonce",id:"dev/cli/solana/oracle/nonce",title:"nonce",description:"view an oracles nonce accounts",source:"@site/docs/dev/cli/solana/oracle/nonce.md",sourceDirName:"dev/cli/solana/oracle",slug:"/dev/cli/solana/oracle/nonce",permalink:"/sbv2-core/dev/cli/solana/oracle/nonce",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"dev",previous:{title:"create",permalink:"/sbv2-core/dev/cli/solana/oracle/create"},next:{title:"permission_create",permalink:"/sbv2-core/dev/cli/solana/oracle/permission_create"}},i={},s=[],p={toc:s};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"view an oracles nonce accounts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana oracle nonce [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed]\n\nARGUMENTS\n  ORACLEKEY  public key of the oracle to check token balance\n\nFLAGS\n  -h, --help             Show CLI help.\n  -s, --silent           suppress cli prompts\n  -u, --rpcUrl=<value>   alternate RPC url\n  -v, --verbose          log everything\n  --commitment=<option>  [default: confirmed] transaction commitment level to use\n                         <options: confirmed|finalized|processed>\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n  --programId=<value>    alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  view an oracles nonce accounts\n")))}u.isMDXComponent=!0}}]);