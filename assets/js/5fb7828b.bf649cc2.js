"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9646],{54852:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(49231);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(t),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return t?a.createElement(m,s(s({ref:r},p),{},{components:t})):a.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46293:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(95907),n=(t(49231),t(54852));const o={title:"anchor-history-parser",slug:"/solana/sdk/anchor/anchor-history-parser",hide_title:!0,sidebar_class_name:"sidebar__anchor",sidebar_position:3},s=void 0,i={unversionedId:"solana/sdk/examples/anchor-history-parser",id:"solana/sdk/examples/anchor-history-parser",title:"anchor-history-parser",description:"Switchboard Logo",source:"@site/docs/solana/sdk/examples/anchor-history-parser.mdx",sourceDirName:"solana/sdk/examples",slug:"/solana/sdk/anchor/anchor-history-parser",permalink:"/solana/sdk/anchor/anchor-history-parser",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"anchor-history-parser",slug:"/solana/sdk/anchor/anchor-history-parser",hide_title:!0,sidebar_class_name:"sidebar__anchor",sidebar_position:3},sidebar:"solanaSidebar",previous:{title:"anchor-feed-parser",permalink:"/solana/sdk/anchor/anchor-feed-parser"},next:{title:"anchor-vrf-parser",permalink:"/solana/sdk/anchor/anchor-vrf-parser"}},l={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c},h="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(h,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png",alt:"Switchboard Logo"})),(0,n.kt)("h1",{id:"anchor-history-parser"},"anchor-history-parser"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"An example program written in Anchor demonstrating how to deserialize and read\na Switchboard data feed's history buffer on Solana.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-solana/actions/workflows/anchor-test.yml"},(0,n.kt)("img",{parentName:"a",src:"https://github.com/switchboard-xyz/sbv2-solana/actions/workflows/anchor-test.yml/badge.svg",alt:"Anchor Test Status"})))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Clone the sbv2-solana repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-solana\ncd sbv2-solana\ncd programs/anchor-history-parser\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Build the example program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"anchor build\n")),(0,n.kt)("p",null,"Get your program ID and update ",(0,n.kt)("inlineCode",{parentName:"p"},"Anchor.toml")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," with your pubkey"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export ANCHOR_HISTORY_PARSER_PUBKEY=$(solana-keygen pubkey target/deploy/anchor_history_parser-keypair.json)\nsed -i '' s/C7rn1qJkq9FjTwV86RrY5Uih91NgymRVLdJ81rqLNXRS/\"$ANCHOR_HISTORY_PARSER_PUBKEY\"/g Anchor.toml\nsed -i '' s/C7rn1qJkq9FjTwV86RrY5Uih91NgymRVLdJ81rqLNXRS/\"$ANCHOR_HISTORY_PARSER_PUBKEY\"/g src/lib.rs\n")),(0,n.kt)("p",null,"Then run Anchor test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"anchor test\n")))}u.isMDXComponent=!0}}]);