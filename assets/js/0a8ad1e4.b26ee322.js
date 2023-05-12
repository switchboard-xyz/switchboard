"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9663],{54852:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>m});var t=a(49231);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),i=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},p=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(a),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return a?t.createElement(m,s(s({ref:r},p),{},{components:a})):t.createElement(m,s({ref:r},p))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27044:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=a(95907),n=(a(49231),a(54852));const o={title:"anchor-feed-parser",slug:"/solana/sdk/anchor/anchor-feed-parser",hide_title:!0,sidebar_class_name:"sidebar__anchor",sidebar_position:2},s=void 0,l={unversionedId:"solana/sdk/examples/anchor-feed-parser",id:"solana/sdk/examples/anchor-feed-parser",title:"anchor-feed-parser",description:"Switchboard Logo",source:"@site/docs/solana/sdk/examples/anchor-feed-parser.mdx",sourceDirName:"solana/sdk/examples",slug:"/solana/sdk/anchor/anchor-feed-parser",permalink:"/solana/sdk/anchor/anchor-feed-parser",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"anchor-feed-parser",slug:"/solana/sdk/anchor/anchor-feed-parser",hide_title:!0,sidebar_class_name:"sidebar__anchor",sidebar_position:2},sidebar:"solanaSidebar",previous:{title:"native-feed-parser",permalink:"/solana/sdk/rust/native-feed-parser"},next:{title:"anchor-history-parser",permalink:"/solana/sdk/anchor/anchor-history-parser"}},c={},i=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}],p={toc:i},d="wrapper";function u(e){let{components:r,...a}=e;return(0,n.kt)(d,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png",alt:"Switchboard Logo"})),(0,n.kt)("h1",{id:"anchor-feed-parser"},"anchor-feed-parser"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"An example program written in Anchor demonstrating how to deserialize and read\na Switchboard data feed on Solana.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-solana/actions/workflows/anchor-test.yml"},(0,n.kt)("img",{parentName:"a",src:"https://github.com/switchboard-xyz/sbv2-solana/actions/workflows/anchor-test.yml/badge.svg",alt:"Anchor Test Status"})))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Clone the sbv2-solana repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/sbv2-solana\ncd sbv2-solana\ncd programs/anchor-feed-parser\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Build the example program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"anchor build\n")),(0,n.kt)("p",null,"Get your program ID and update ",(0,n.kt)("inlineCode",{parentName:"p"},"Anchor.toml")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," with your pubkey"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export ANCHOR_FEED_PARSER_PUBKEY=$(solana-keygen pubkey target/deploy/anchor_feed_parser-keypair.json)\nsed -i '' s/Fstf3oTcBxHMZFaoBzxk5oSkTh5HaAjxjh6zcgdZpNBb/\"$ANCHOR_FEED_PARSER_PUBKEY\"/g Anchor.toml\nsed -i '' s/Fstf3oTcBxHMZFaoBzxk5oSkTh5HaAjxjh6zcgdZpNBb/\"$ANCHOR_FEED_PARSER_PUBKEY\"/g src/lib.rs\n")),(0,n.kt)("p",null,"Then run Anchor test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"anchor test\n")))}u.isMDXComponent=!0}}]);