"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[667],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),d=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=d(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(g,c(c({ref:r},l),{},{components:t})):a.createElement(g,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var d=2;d<o;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5255:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(3117),n=(t(7294),t(3905));const o={sidebar_position:10,title:"@switchboard-xyz/near.js"},c=void 0,s={unversionedId:"near/dev/javascript",id:"near/dev/javascript",title:"@switchboard-xyz/near.js",description:"Javascript SDK for interacting with Switchboard V2 on Near.",source:"@site/docs/near/dev/javascript.mdx",sourceDirName:"near/dev",slug:"/near/dev/javascript",permalink:"/sbv2-core/near/dev/javascript",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"@switchboard-xyz/near.js"},sidebar:"near",previous:{title:"Developer Resources",permalink:"/sbv2-core/near/dev/"},next:{title:"Sbv2 CLI",permalink:"/sbv2-core/near/dev/cli"}},i={},d=[{value:"Install",id:"install",level:2},{value:"Load the Switchboard Program",id:"load-the-switchboard-program",level:2},{value:"Create a Queue",id:"create-a-queue",level:2},{value:"Create a Feed",id:"create-a-feed",level:2},{value:"Create a Job",id:"create-a-job",level:2},{value:"Add Job to Feed",id:"add-job-to-feed",level:2},{value:"Create Feed Permissions",id:"create-feed-permissions",level:2},{value:"Set Feed Permissions",id:"set-feed-permissions",level:2},{value:"Add Feed to Crank",id:"add-feed-to-crank",level:2},{value:"Request a Feed Update",id:"request-a-feed-update",level:2}],l={toc:d};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Javascript SDK for interacting with Switchboard V2 on Near."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @switchboard-xyz/near.js\n")),(0,n.kt)("h2",{id:"load-the-switchboard-program"},"Load the Switchboard Program"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { SwitchboardProgram } from "@switchboard-xyz/near.js";\n\n// from filesystem keypair\nconst program = await SwitchboardProgram.loadFromFs(\n  "testnet", // Network ID\n  "https://rpc.testnet.near.org", // RPC URL\n  accountId // Near Account name\n);\n// from browser\nconst program = await SwitchboardProgram.loadFromBrowser(\n  "testnet", // Network ID\n  "https://rpc.testnet.near.org", // RPC URL\n  accountId // Near Account name\n);\n')),(0,n.kt)("h2",{id:"create-a-queue"},"Create a Queue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { QueueAccount } from "@switchboard-xyz/near.js";\n\nconst queue = await QueueAccount.create(program, {\n  authority: program.account.accountId,\n  mint: "wrap.test",\n  reward: 0,\n  minStake: 100,\n  queueSize: 100,\n  oracleTimeout: 180,\n  unpermissionedFeeds: true,\n});\nconsole.log(await queue.loadData());\n')),(0,n.kt)("h2",{id:"create-a-feed"},"Create a Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AggregatorAccount } from "@switchboard-xyz/near.js";\n\nconst aggregator = await AggregatorAccount.create(program, {\n  authority: program.account.accountId,\n  queue: queue.address,\n  name: Buffer.from(""),\n  metadata: Buffer.from(""),\n  batchSize: 1,\n  minOracleResults: 1,\n  minJobResults: 1,\n  minUpdateDelaySeconds: 5,\n  startAfter: 0,\n  varianceThreshold: sbv2.SwitchboardDecimal.fromBig(new Big(0)),\n  forceReportPeriod: 0,\n  crank: crank.address,\n  rewardEscrow: escrow.address,\n  historyLimit: 1000,\n});\nconsole.log(await aggregator.loadData());\n')),(0,n.kt)("h2",{id:"create-a-job"},"Create a Job"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { JobAccount } from "@switchboard-xyz/near.js";\n\nconst job = await JobAccount.create(program, {\n  data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),\n  name: Buffer.from("Job1"),\n  metadata: Buffer.from("Job1 - FtxUS BTC/USD"),\n});\nconsole.log(await job.loadData());\n')),(0,n.kt)("h2",{id:"add-job-to-feed"},"Add Job to Feed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await aggregator.addJob({\n  job: job.address,\n  weight: 1,\n});\n")),(0,n.kt)("h2",{id:"create-feed-permissions"},"Create Feed Permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { PermissionAccount } from "@switchboard-xyz/near.js";\n\nconst permission = await PermissionAccount.create(program, {\n  authority: program.account.accountId,\n  granter: queue.address,\n  grantee: aggregator.address,\n});\n')),(0,n.kt)("h2",{id:"set-feed-permissions"},"Set Feed Permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await permission.set({\n  permission: SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE,\n  enable: true,\n});\n")),(0,n.kt)("h2",{id:"add-feed-to-crank"},"Add Feed to Crank"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { CrankAccount } from "@switchboard-xyz/near.js";\n\nconst crank = new CrankAccount({ program, address: crankAddress });\nawait crank.push({\n  aggregator: aggregatorAccount.address,\n});\n')),(0,n.kt)("h2",{id:"request-a-feed-update"},"Request a Feed Update"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { EscrowAccount } from "@switchboard-xyz/near.js";\n\nconst escrowAccount = await EscrowAccount.getOrCreateStaticAccount(program);\nawait aggregatorAccount.openRound({\n  rewardRecipient: escrowAccount.address,\n});\n')))}u.isMDXComponent=!0}}]);