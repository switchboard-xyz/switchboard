"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/cli",title:"Overview"},o="sbv2",l={unversionedId:"api/cli/overview",id:"api/cli/overview",title:"Overview",description:"GitHub",source:"@site/docs/api/cli/overview.mdx",sourceDirName:"api/cli",slug:"/cli",permalink:"/sbv2-core/cli",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/cli",title:"Overview"},sidebar:"api",previous:{title:"Developer Resources",permalink:"/sbv2-core/api/"},next:{title:"Aptos Developer Resources",permalink:"/sbv2-core/api/aptos"}},s={},p=[{value:"Install",id:"install",level:2},{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2},{value:"Print",id:"print",level:3},{value:"Create a Queue",id:"create-a-queue",level:3},{value:"Create Aggregator",id:"create-aggregator",level:3},{value:"Create Oracle",id:"create-oracle",level:3},{value:"Create Crank",id:"create-crank",level:3},{value:"Push to Crank",id:"push-to-crank",level:3},{value:"Create Job",id:"create-job",level:3},{value:"Add Job to Aggregator",id:"add-job-to-aggregator",level:3}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sbv2"},"sbv2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@switchboard-xyz/switchboardv2-cli"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@switchboard-xyz/switchboardv2-cli",alt:"npm"})),"\n",(0,r.kt)("img",{alt:"Page Last Updated",src:a(8370).Z,width:"190",height:"20"})),(0,r.kt)("p",null,"The Switchboard V2 CLI provides an easy to use interface to setup and manage\nSwitchboard onchain accounts."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install -g @switchboard-xyz/switchboardv2-cli\n")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logging")," Most commands will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"--silent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," flag that will suppress\nconsole output and only output a new account public key to assist in scripting.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"--verbose"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flag will do the opposite and log any debug or configuration\ninformation to help debug."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Help")," All commands can be run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag to print the available\narguments and flags for a given command."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keypairs")," The Switchboard V2 CLI lets you specify a keypair from an absolute\nor relative filesystem path as well as a Google Secret Manager secret. The\nfollowing flags are common among most commands, with the exception of the print\ncommands that require no keypairs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--keypair")," is required for any command that submits an onchain transaction\nsuch as creating accounts, turning the crank, or updating an account config.\nThis keypair will default as the authority if the authority flag is not\nprovided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--authority")," is the keypair that is or will be the authority for a given\naccount. The authority is responsible for authorizing new permissions,\nchanging an account, or withdrawing from a token account.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Token Amounts")," Any commands that specify a token amount will be converted to\nthe raw token amount if it contains a decimal. For example, wSOL has 9 decimal\nplaces so a CLI arguement of 1.5 would be interpretted as 1_500_000_000 tokens\nwhereas 1 would be interpretted as 1 token."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cluster")," By default the CLI will target devnet unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"--mainnetBeta"),"\nflag is provided."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RPC URL")," The CLI will connect to the default solana endpoints unless\n",(0,r.kt)("inlineCode",{parentName:"p"},"--rpcUrl")," is provided."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"print"},"Print"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# check account discriminator and print account information if found\nsbv2 print PUBLICKEY\n# print an oracle account by its public key\nsbv2 print oracle ORACLEKEY\n# print an aggregator account\nsbv2 print aggregator AGGREGATORKEY\n")),(0,r.kt)("h3",{id:"create-a-queue"},"Create a Queue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 queue create \\\n    --name "My Queue" \\\n    --keypair "path/to/payer/keypair.json" \\\n    --authority "path/to/authority/keypair.json"  \\\n    --minStake 0 \\\n    --reward 0 \\\n    --crankSize 0 \\\n    --oracleTimeout 300 \\\n    --numOracles 0 \\\n    --queueSize 25 \\\n    --outputFile "My_Switchboard_Queue.json" \\\n    --verbose\n')),(0,r.kt)("h3",{id:"create-aggregator"},"Create Aggregator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 aggregator create AGGREGATORKEY \\\n    --name "My Buffer" \\\n    --keypair "path/to/payer/keypair.json" \\\n    --batchSize 1 \\\n    --minOracles 1 \\\n    --minJobs 1 \\\n    --updateInterval 45 \\\n    --job "path/to/job-definition-1.json" \\\n    --job "path/to/job-definition-2.json" \\\n    --verbose\n')),(0,r.kt)("h3",{id:"create-oracle"},"Create Oracle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 oracle create QUEUEKEY \\\n    --name "My Oracle" \\\n    --keypair "path/to/payer/keypair.json" \\\n    --authority "path/to/authority/keypair.json"  \\\n    --enable \\\n    --verbose\n')),(0,r.kt)("h3",{id:"create-crank"},"Create Crank"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 crank create QUEUEKEY \\\n  --name "My Crank" \\\n  --keypair "path/to/payer/keypair.json"  \\\n  --authority "queue-authority.json" \\\n  --maxRows 1000 \\\n  --verbose\n')),(0,r.kt)("h3",{id:"push-to-crank"},"Push to Crank"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 crank push CRANKKEY AGGREGATORKEY \\\n    --keypair "path/to/payer/keypair.json"\n')),(0,r.kt)("h3",{id:"create-job"},"Create Job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 job create "job-directory/sysclockOffsetTask/sysclock.json" \\\n    --name "SysClock Drift" \\\n    --keypair "path/to/payer/keypair.json"\n')),(0,r.kt)("h3",{id:"add-job-to-aggregator"},"Add Job to Aggregator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 aggregator add job AGGREGATORKEY \\\n    --jobDefinition "job-directory/sysclockOffsetTask/sysclock.json" \\\n    --keypair "path/to/payer/keypair.json" \\\n    --verbose\n# OR\nsbv2 aggregator add job AGGREGATORKEY \\\n    --jobKey "6jXKur6RaBMewKyEE8YVGLwWXM15ZDygeoqgAZUW9y3r" \\\n    --keypair "path/to/payer/keypair.json" \\\n    --verbose\n')))}u.isMDXComponent=!0},8370:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlBhZ2UgTGFzdFVwZGF0ZWQ6IE1heS0yMC0yMDIyIj48dGl0bGU+UGFnZSBMYXN0VXBkYXRlZDogTWF5LTIwLTIwMjI8L3RpdGxlPjxsaW5lYXJHcmFkaWVudCBpZD0icyIgeDI9IjAiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiYmIiIHN0b3Atb3BhY2l0eT0iLjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iLjEiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iciI+PHJlY3Qgd2lkdGg9IjE5MCIgaGVpZ2h0PSIyMCIgcng9IjMiIGZpbGw9IiNmZmYiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNyKSI+PHJlY3Qgd2lkdGg9IjEwOSIgaGVpZ2h0PSIyMCIgZmlsbD0iIzU1NSIvPjxyZWN0IHg9IjEwOSIgd2lkdGg9IjgxIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDA3ZWM2Ii8+PHJlY3Qgd2lkdGg9IjE5MCIgaGVpZ2h0PSIyMCIgZmlsbD0idXJsKCNzKSIvPjwvZz48ZyBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iVmVyZGFuYSxHZW5ldmEsRGVqYVZ1IFNhbnMsc2Fucy1zZXJpZiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgZm9udC1zaXplPSIxMTAiPjx0ZXh0IGFyaWEtaGlkZGVuPSJ0cnVlIiB4PSI1NTUiIHk9IjE1MCIgZmlsbD0iIzAxMDEwMSIgZmlsbC1vcGFjaXR5PSIuMyIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIHRleHRMZW5ndGg9Ijk5MCI+UGFnZSBMYXN0VXBkYXRlZDwvdGV4dD48dGV4dCB4PSI1NTUiIHk9IjE0MCIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIGZpbGw9IiNmZmYiIHRleHRMZW5ndGg9Ijk5MCI+UGFnZSBMYXN0VXBkYXRlZDwvdGV4dD48dGV4dCBhcmlhLWhpZGRlbj0idHJ1ZSIgeD0iMTQ4NSIgeT0iMTUwIiBmaWxsPSIjMDEwMTAxIiBmaWxsLW9wYWNpdHk9Ii4zIiB0cmFuc2Zvcm09InNjYWxlKC4xKSIgdGV4dExlbmd0aD0iNzEwIj5NYXktMjAtMjAyMjwvdGV4dD48dGV4dCB4PSIxNDg1IiB5PSIxNDAiIHRyYW5zZm9ybT0ic2NhbGUoLjEpIiBmaWxsPSIjZmZmIiB0ZXh0TGVuZ3RoPSI3MTAiPk1heS0yMC0yMDIyPC90ZXh0PjwvZz48L3N2Zz4="}}]);