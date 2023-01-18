"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8658],{85162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86010);const o="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(83117),r=t(67294),o=t(86010),l=t(72389),s=t(67392),i=t(7094),c=t(12466);const u="tabList__CuJ",d="tabItem_LNqP";function g(e){var a,t;const{lazy:l,block:g,defaultValue:m,values:p,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),k=(0,s.l)(v,((e,a)=>e.value===a.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(a=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?a:f[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:x}=(0,i.U)(),[A,N]=(0,r.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==A&&v.some((a=>a.value===e))&&N(e)}const E=e=>{const a=e.currentTarget,t=j.indexOf(a),n=v[t].value;n!==A&&(Z(a),N(n),null!=h&&x(h,String(n)))},S=e=>{var a;let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{var n;const a=j.indexOf(e.currentTarget)+1;t=null!=(n=j[a])?n:j[0];break}case"ArrowLeft":{var r;const a=j.indexOf(e.currentTarget)-1;t=null!=(r=j[a])?r:j[j.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":g},b)},v.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,key:a,ref:e=>j.push(e),onKeyDown:S,onClick:E},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":A===a})}),null!=t?t:a)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==A})))))}function m(e){const a=(0,l.Z)();return r.createElement(g,(0,n.Z)({key:String(a)},e))}},10686:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(44267),r=t(15861),o=t(21519),l=t(78445),s=t(44073),i=t(67294),c=t(39960),u=t(13264),d=t(92949);const g=(0,u.Z)(s.Z)((e=>{let{theme:a,dark:t}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:t?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(t?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[a.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:t?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),m=(0,u.Z)(l.Z)((e=>{let{theme:a}=e;return{display:"flex",maxHeight:"96px"}}));function p(e){let{title:a,image:t,imageDark:l,description:s,to:u,sx:p}=e;const{colorMode:h}=(0,d.I)();return i.createElement(c.Z,{href:u,style:{textDecoration:"none"}},i.createElement(g,{dark:"dark"===h?1:0,sx:p},i.createElement(n.Z,{sx:{height:"100%",width:"100%"}},i.createElement(m,{avatar:i.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===h&&l?l:t),title:a,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),s?i.createElement(i.Fragment,null,i.createElement(o.Z,{sx:{marginBottom:"1rem"}}),i.createElement(r.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},s)):i.createElement(i.Fragment,null))))}},17547:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(86886),r=t(67294),o=t(10686);function l(e){let{items:a,cols:t,sx:l}=e;return r.createElement(n.ZP,{container:!0,spacing:3},a.map((e=>{var a;return r.createElement(n.ZP,{item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(a=12/t)?a:2)},r.createElement(o.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:l}))})))}},97157:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=t(83117),r=(t(67294),t(3905)),o=t(65488),l=t(85162),s=t(17547),i=t(44996);const c={sidebar_position:20,title:"Javascript",slug:"."},u=void 0,d={unversionedId:"solana/dev/javascript/index",id:"solana/dev/javascript/index",title:"Javascript",description:"GitHub&nbsp;&nbsp;",source:"@site/docs/solana/dev/javascript/index.mdx",sourceDirName:"solana/dev/javascript",slug:"/solana/dev/javascript/",permalink:"/solana/dev/javascript/",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Javascript",slug:"."},sidebar:"solana",previous:{title:"Rust",permalink:"/solana/dev/rust"},next:{title:"Python",permalink:"/solana/dev/python"}},g={},m=[{value:"Quick Links",id:"quick-links",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Load the Switchboard Program",id:"load-the-switchboard-program",level:3},{value:"Create a queue",id:"create-a-queue",level:3},{value:"Add an oracle",id:"add-an-oracle",level:3},{value:"Add a data feed",id:"add-a-data-feed",level:3},{value:"Update a Data Feed",id:"update-a-data-feed",level:3},{value:"Read a Data Feed",id:"read-a-data-feed",level:3},{value:"History Buffer",id:"history-buffer",level:3},{value:"Watch Switchboard",id:"watch-switchboard",level:3}],p={toc:m};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/solana.js/tree/main/libraries/ts"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\xa0","\xa0","\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@switchboard-xyz/solana.js"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@switchboard-xyz/solana.js",alt:"npm"})),"\xa0","\xa0","\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/switchboardxyz"},(0,r.kt)("img",{parentName:"a",src:"https://badgen.net/twitter/follow/switchboardxyz",alt:"twitter"})),"\xa0","\xa0"),(0,r.kt)("p",null,"A library of utility functions to interact with the Switchboardv2 program"),(0,r.kt)("h2",{id:"quick-links"},"Quick Links"),(0,r.kt)(s.Z,{cols:2,items:[{to:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/javascript/solana.js",title:"Github",description:"View the Github repo",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/github/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/github/dark.svg")})},{to:"https://docs.switchboard.xyz/api/@switchboard-xyz/solana.js/",title:"Typedocs",description:"View the Typedocs",image:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")}),imageDark:(0,r.kt)("img",{src:(0,i.Z)("/img/icons/typedoc/logo.svg")})}],mdxType:"RoundedCardGroup"}),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @switchboard-xyz/solana.js\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @switchboard-xyz/solana.js\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Check out the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/sbv2-solana/tree/main/javascript/solana.js/test"},"@switchboard-xyz/solana.js test directory"),"\nfor more examples."),(0,r.kt)("h3",{id:"load-the-switchboard-program"},"Load the Switchboard Program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Connection } from "@solana/web3.js";\nimport {\n  SwitchboardProgram,\n  TransactionObject,\n} from "@switchboard-xyz/solana.js";\n\nconst program = await SwitchboardProgram.load(\n  "mainnet-beta",\n  new Connection("https://api.mainnet-beta.solana.com"),\n  payerKeypair /** Optional, READ-ONLY if not provided */\n);\n')),(0,r.kt)("h3",{id:"create-a-queue"},"Create a queue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst [queueAccount, txnSignature] = await QueueAccount.create(program, {\n  name: "My Queue",\n  metadata: "Top Secret",\n  queueSize: 100,\n  reward: 0.00001337,\n  minStake: 10,\n  oracleTimeout: 60,\n  slashingEnabled: false,\n  unpermissionedFeeds: true,\n  unpermissionedVrf: true,\n  enableBufferRelayers: false,\n});\nconst queue = await queueAccount.loadData();\n')),(0,r.kt)("h3",{id:"add-an-oracle"},"Add an oracle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [oracleAccount, oracleInitSignature] = await queueAccount.createOracle({\n  name: "My Oracle",\n  metadata: "Oracle #1",\n  stakeAmount: 10,\n});\nconst oracle = await oracleAccount.loadData();\n\nawait oracleAccount.heartbeat();\n')),(0,r.kt)("h3",{id:"add-a-data-feed"},"Add a data feed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/solana.js";\n\nconst queueAccount = new QueueAccount(program, queuePubkey);\n\nconst [aggregatorAccount, aggregatorInitSignatures] =\n  await queueAccount.createFeed({\n    batchSize: 1,\n    minRequiredOracleResults: 1,\n    minRequiredJobResults: 1,\n    minUpdateDelaySeconds: 60,\n    fundAmount: 2.5, // deposit 2.5 wSOL into the leaseAccount escrow\n    jobs: [\n      { pubkey: jobAccount.publicKey },\n      {\n        weight: 2,\n        data: OracleJob.encodeDelimited(\n          OracleJob.fromObject({\n            tasks: [\n              {\n                valueTask: {\n                  value: 1,\n                },\n              },\n            ],\n          })\n        ).finish(),\n      },\n    ],\n  });\nconst aggregator = await aggregatorAccount.loadData();\n')),(0,r.kt)("h3",{id:"update-a-data-feed"},"Update a Data Feed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nawait aggregatorAccount.openRound();\n')),(0,r.kt)("h3",{id:"read-a-data-feed"},"Read a Data Feed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Big from "big.js";\nimport { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nconst result: Big | null = await aggregatorAccount.fetchLatestValue();\nif (result === null) {\n  throw new Error("Aggregator holds no value");\n}\nconsole.log(result.toString());\n')),(0,r.kt)("h3",{id:"history-buffer"},"History Buffer"),(0,r.kt)("p",null,"Optionally, add a history buffer to your feed to store the last N historical\nsamples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  AggregatorAccount,\n  AggregatorHistoryBuffer,\n} from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\nconst aggregator = await aggregatorAccount.loadData();\n\nconst [historyBuffer, addHistorySignature] =\n  await AggregatorHistoryBuffer.create(program, {\n    aggregatorAccount,\n    maxSamples: 10000,\n  });\nconst history = await historyBuffer.loadData();\n')),(0,r.kt)("h3",{id:"watch-switchboard"},"Watch Switchboard"),(0,r.kt)("p",null,"Setup a websocket listener to invoke a callback whenever an aggregator is\nupdated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Big from "big.js";\nimport { AggregatorAccount } from "@switchboard-xyz/solana.js";\n\nconst aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);\n\nconst ws = aggregatorAccount.onChange((aggregator) => {\n  const result = AggregatorAccount.decodeLatestValue(aggregator);\n  if (result !== null) {\n    console.log(result.toString());\n  }\n});\n')))}h.isMDXComponent=!0}}]);