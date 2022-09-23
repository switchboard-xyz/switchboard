"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8401],{5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(3117),r=t(7294),o=t(6010),l=t(2389),s=t(7392),u=t(7094),c=t(2466);const i="tabList__CuJ",d="tabItem_LNqP";function p(e){var a,t;const{lazy:l,block:p,defaultValue:m,values:b,groupId:g,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,s.l)(v,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(a=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?a:f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:A}=(0,u.U)(),[T,S]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&v.some((a=>a.value===e))&&S(e)}const E=e=>{const a=e.currentTarget,t=N.indexOf(a),n=v[t].value;n!==T&&(O(a),S(n),null!=g&&A(g,String(n)))},C=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=N.indexOf(e.currentTarget)+1;t=null!=(n=N[a])?n:N[0];break}case"ArrowLeft":{var r;const a=N.indexOf(e.currentTarget)-1;t=null!=(r=N[a])?r:N[N.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},v.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>N.push(e),onKeyDown:C,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function m(e){const a=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},8109:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var n=t(3117),r=(t(7294),t(3905)),o=t(814);var l=t(5488),s=t(5162);const u={sidebar_position:10},c="Create a Feed",i={unversionedId:"solana/feeds/create",id:"solana/feeds/create",title:"Create a Feed",description:"Switchboard allows you to create permissionless data feeds using",source:"@site/docs/solana/feeds/create.mdx",sourceDirName:"solana/feeds",slug:"/solana/feeds/create",permalink:"/sbv2-core/solana/feeds/create",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"solana",previous:{title:"Overview",permalink:"/sbv2-core/solana/feeds/"},next:{title:"Read a Feed",permalink:"/sbv2-core/solana/feeds/read"}},d={},p=[{value:"Javascript",id:"javascript",level:2},{value:"Command Line",id:"command-line",level:2}],m={toc:p};function b(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-feed"},"Create a Feed"),(0,r.kt)("p",null,"Switchboard allows you to create permissionless data feeds using"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/feeds/publisher"},"The Publisher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#javascript"},"Javascript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#command-line"},"Command Line"))),(0,r.kt)("h2",{id:"javascript"},"Javascript"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"ts",mdxType:"CodeBlock"},'const queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\n\nconst aggregatorAccount = await AggregatorAccount.create(program, {\n  name: Buffer.from("MY SOL/USD Feed"),\n  batchSize: 1,\n  minRequiredOracleResults: 1,\n  minRequiredJobResults: 1,\n  minUpdateDelaySeconds: 10,\n  queueAccount,\n  authority: authority.publicKey,\n});\nconsole.log(aggregatorAccount.publicKey.toString());')),(0,r.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"ts",mdxType:"CodeBlock"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  AggregatorAccount,\n  loadSwitchboardProgram,\n  LeaseAccount,\n  OracleQueueAccount,\n  SwitchboardPermission,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nlet authority: Keypair; // queue authority\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\n\n// aggregator\nconst aggregatorAccount = await AggregatorAccount.create(program, {\n  name: Buffer.from("MY SOL/USD Feed"),\n  batchSize: 1,\n  minRequiredOracleResults: 1,\n  minRequiredJobResults: 1,\n  minUpdateDelaySeconds: 10,\n  queueAccount,\n  authority: authority.publicKey,\n});\n\n// permission\nconst permissionAccount = await PermissionAccount.create(program, {\n  authority: authority.publicKey,\n  granter: queueAccount.publicKey,\n  grantee: aggregatorAccount.publicKey,\n});\nawait aggregatorPermission.set({\n  authority,\n  permission: SwitchboardPermission.PERMIT_ORACLE_QUEUE_USAGE,\n  enable: true,\n});\n\n// lease\nconst leaseContract = await LeaseAccount.create(program, {\n  loadAmount: new anchor.BN(0),\n  funder: tokenAccount,\n  funderAuthority: authority,\n  oracleQueueAccount: queueAccount,\n  aggregatorAccount,\n});\n\n// job\nconst tasks: OracleJob.Task[] = [\n  OracleJob.Task.create({\n    httpTask: OracleJob.HttpTask.create({\n      url: `https://ftx.us/api/markets/SOL_USD`,\n    }),\n  }),\n  OracleJob.Task.create({\n    jsonParseTask: OracleJob.JsonParseTask.create({ path: "$.result.price" }),\n  }),\n];\nconst jobData = Buffer.from(\n  OracleJob.encodeDelimited(\n    OracleJob.create({\n      tasks,\n    })\n  ).finish()\n);\nconst jobKeypair = anchor.web3.Keypair.generate();\nconst jobAccount = await JobAccount.create(program, {\n  data: jobData,\n  keypair: jobKeypair,\n  authority: authority.publicKey,\n});\n\n// add job to aggregator\nawait aggregatorAccount.addJob(jobAccount, authority);\n'))),(0,r.kt)("h2",{id:"command-line"},"Command Line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 solana aggregator create\n")))}b.isMDXComponent=!0}}]);