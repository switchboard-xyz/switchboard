"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1290],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?t.createElement(b,l(l({ref:n},s),{},{components:r})):t.createElement(b,l({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(7294);function a(e){let{children:n,hidden:r,className:a}=e;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},9877:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(7462),a=r(7294),o=r(2389),l=r(1548),u=r(6010);const i="tabItem_LplD";function c(e){var n,r,o;const{lazy:c,block:s,defaultValue:p,values:m,groupId:d,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((e=>{let{props:{value:n,label:r,attributes:t}}=e;return{value:n,label:r,attributes:t}})),f=(0,l.lx)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===p?p:null!=(n=null!=p?p:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?n:null==(o=y[0])?void 0:o.props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:g}=(0,l.UB)(),[w,T]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=d){const e=k[d];null!=e&&e!==w&&v.some((n=>n.value===e))&&T(e)}const E=e=>{const n=e.currentTarget,r=O.indexOf(n),t=v[r].value;t!==w&&(N(n),T(t),null!=d&&g(d,t))},C=e=>{var n;let r=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;r=O[n]||O[O.length-1];break}}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},b)},v.map((e=>{let{value:n,label:r,attributes:o}=e;return a.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>O.push(e),onKeyDown:C,onFocus:E,onClick:E},o,{className:(0,u.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=r?r:n)}))),c?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function s(e){const n=(0,o.Z)();return a.createElement(c,(0,t.Z)({key:String(n)},e))}},4386:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var t=r(7462),a=(r(7294),r(3905)),o=r(9877),l=r(8215);const u={sidebar_position:10,title:"Oracle Queue"},i=void 0,c={unversionedId:"developers/queue",id:"developers/queue",title:"Oracle Queue",description:"Create an Oracle Queue",source:"@site/docs/developers/queue.mdx",sourceDirName:"developers",slug:"/developers/queue",permalink:"/developers/queue",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Oracle Queue"},sidebar:"tutorialSidebar",previous:{title:"Localnet Integration",permalink:"/developers/localnet"},next:{title:"Oracles",permalink:"/developers/oracle"}},s={},p=[{value:"Create an Oracle Queue",id:"create-an-oracle-queue",level:2},{value:"Assign Queue Permissions",id:"assign-queue-permissions",level:2},{value:"Create a Crank",id:"create-a-crank",level:2}],m={toc:p};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-an-oracle-queue"},"Create an Oracle Queue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"oracleQueueInit"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport * as spl from "@solana/spl-token";\nimport { OracleQueueAccount } from "@switchboard-xyz/switchboard-v2";\n\nconst queueAccount = await OracleQueueAccount.create(program, {\n  name: Buffer.from("Queue-1"),\n  mint: spl.NATIVE_MINT,\n  slashingEnabled: false,\n  reward: new anchor.BN(0), // no token account needed\n  minStake: new anchor.BN(0),\n  authority: authority.publicKey,\n});\n'))),(0,a.kt)(l.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 queue create \\\n    --name "My Queue" \\\n    --keypair "path/to/payer/keypair.json" \\\n    --authority "path/to/authority/keypair.json"  \\\n    --minStake 0 \\\n    --reward 0 \\\n    --crankSize 0 \\\n    --oracleTimeout 300 \\\n    --numOracles 0 \\\n    --queueSize 25 \\\n    --outputFile "My_Switchboard_Queue.json" \\\n    --verbose\n')))),(0,a.kt)("h2",{id:"assign-queue-permissions"},"Assign Queue Permissions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"permissionSet"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  loadSwitchboardProgram,\n  OracleAccount,\n  OracleQueueAccount\n  PermissionAccount,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair;\nlet authority: Keypair;\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\nconst oracleAccount = new OracleAccount({\n  program,\n  publicKey: oraclePubkey,\n});\n\n// Create permission\nconst permissionAccount = await PermissionAccount.create(program, {\n  authority: authority.publicKey,\n  granter: queueAccount.publicKey,\n  grantee: oracleAccount.publicKey,\n});\n\n// Set permission\nawait oraclePermission.set({\n  authority,\n  permission: SwitchboardPermission.PERMIT_ORACLE_HEARTBEAT,\n  enable: true,\n});\n'))),(0,a.kt)(l.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 permission set PERMISSIONKEY \\\n    --keypair "payer-keypair.json" \\\n    --authority "queue-authority.json"\n')))),(0,a.kt)("h2",{id:"create-a-crank"},"Create a Crank"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"crankInit"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@project-serum/anchor";\nimport { Keypair } from "@solana/web3.js";\nimport {\n  CrankAccount,\n  loadSwitchboardProgram,\n  OracleQueueAccount,\n} from "@switchboard-xyz/switchboard-v2";\n\nlet payer: Keypair; // also the authority\nconst program = await loadSwitchboardProgram("devnet", undefined, payer);\nconst queueAccount = new OracleQueueAccount({\n  program,\n  publicKey: queuePubkey,\n});\n\nconst crankAccount = await CrankAccount.create(program, {\n  name: Buffer.from("My Crank"),\n  maxRows: 1000,\n  queueAccount,\n});\n'))),(0,a.kt)(l.Z,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 crank create QUEUEKEY \\\n  --name "My Crank" \\\n  --keypair "payer-keypair.json" \\\n  --authority "queue-authority.json" \\\n  --maxRows 1000 \\\n  --verbose\n')))))}d.isMDXComponent=!0}}]);