"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const o={title:"Test"},l=void 0,i={unversionedId:"dev/cli/solana/anchor/test",id:"dev/cli/solana/anchor/test",title:"Test",description:"run anchor test and a switchboard oracle in parallel",source:"@site/docs/dev/cli/solana/anchor/test.md",sourceDirName:"dev/cli/solana/anchor",slug:"/dev/cli/solana/anchor/test",permalink:"/dev/cli/solana/anchor/test",draft:!1,tags:[],version:"current",frontMatter:{title:"Test"},sidebar:"dev",previous:{title:"Watch",permalink:"/dev/cli/solana/aggregator/watch"},next:{title:"Create",permalink:"/dev/cli/solana/buffer/create"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"run anchor test and a switchboard oracle in parallel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-asciidoc"},"USAGE\n  $ sbv2 solana anchor test [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment\n    confirmed|finalized|processed] [-k <value>] [-d <value>] [--oracleKey <value>] [--nodeImage <value>] [--arm] [-t\n    <value>]\n\nFLAGS\n  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment\n  -h, --help                    Show CLI help.\n  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no\n                                alternate authority provided\n  -s, --silent                  suppress docker logging\n  -t, --timeout=<value>         [default: 120] number of seconds before timing out\n  -u, --rpcUrl=<value>          alternate RPC url\n  -v, --verbose                 log everything\n  --arm                         apple silicon needs to use a docker image for linux/arm64\n  --commitment=<option>         [default: confirmed] transaction commitment level to use\n                                <options: confirmed|finalized|processed>\n  --mainnetBeta                 WARNING: use mainnet-beta solana cluster\n  --nodeImage=<value>           [default: dev-v2-08-14-22a-mc-beta] public key of the oracle to start-up\n  --oracleKey=<value>           public key of the oracle to start-up\n  --programId=<value>           alternative Switchboard program ID to interact with\n\nDESCRIPTION\n  run anchor test and a switchboard oracle in parallel\n")))}p.isMDXComponent=!0}}]);