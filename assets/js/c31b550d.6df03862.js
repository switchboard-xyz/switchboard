"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(k,s(s({ref:n},p),{},{components:t})):a.createElement(k,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(83117),r=(t(67294),t(3905));const o={sidebar_position:50,slug:"."},s="Private APIs",i={unversionedId:"examples/private-apis/index",id:"examples/private-apis/index",title:"Private APIs",description:"A private queue is any Oracle Queue not controlled by the Switchboard DAO.",source:"@site/tasks/examples/private-apis/index.mdx",sourceDirName:"examples/private-apis",slug:"/examples/private-apis/",permalink:"/sbv2-core/tasks/examples/private-apis/",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,slug:"."},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/sbv2-core/tasks/examples/events/"}},l={},c=[{value:"Variable Expansion",id:"variable-expansion",level:2},{value:"Example",id:"example",level:2},{value:"Create a Queue",id:"create-a-queue",level:3},{value:"Start Oracle",id:"start-oracle",level:3},{value:"Create WHEAT Aggregator",id:"create-wheat-aggregator",level:3},{value:"Other Aggregator Definitions",id:"other-aggregator-definitions",level:3},{value:"Crude",id:"crude",level:4},{value:"Gold",id:"gold",level:4},{value:"Silver",id:"silver",level:4},{value:"Nickel",id:"nickel",level:4},{value:"Coffee",id:"coffee",level:4}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"private-apis"},"Private APIs"),(0,r.kt)("p",null,"A private queue is any Oracle Queue not controlled by the Switchboard DAO."),(0,r.kt)("p",null,"Switchboard is architected to route off-chain data to an on-chain account. A\npublisher is responsible for building the job definition, which defines the\ntask(s) the oracles must perform to fetch and transform external data. Sometimes\na publisher may wish to bring private data on-chain using an API key which poses\na set of challenges. In order for the oracle to retrieve the data, they need\naccess to the publisher's API key. Blockchains are public so there is no easy\nway to conceal the API key on-chain."),(0,r.kt)("p",null,"Switchboard provides the ability to create your own queue with your own set of\noracles, allowing the oracles access to your API key so they can resolve the\nprivate endpoints."),(0,r.kt)("h2",{id:"variable-expansion"},"Variable Expansion"),(0,r.kt)("p",null,"Oracles can be provided a ",(0,r.kt)("inlineCode",{parentName:"p"},"configs.json")," file to store various configurations\nneeded to execute job definitions. If an oracle encounters a job definition with\na variable, it will parse the ",(0,r.kt)("inlineCode",{parentName:"p"},"configs.json")," and embed the value in the job\ndefinition. API keys should be specified in the config under the Job Account\npublic key to prevent a malicous feed from leaking an API key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="configs.json"',title:'"configs.json"'},'{\n  "jobVariables": {\n    // Pubkey of the Job account for which this variable expansion applies\n    "HtB62K71H49RJbATYpmB6UCMBXLK6G3Q5JtGveTMR8Mt": {\n      "VARIABLE_NAME": "abc123"\n    },\n    // Global variable expansion that applies to any Job account. SEE CAUTION BELOW\n    "*": {\n      "GLOBAL_VARIABLE_NAME": "abc123"\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Wildcard variables should only be used for testing purposes and never in\nproduction."))),(0,r.kt)("p",{parentName:"admonition"},"Private queue's should ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ALWAYS"))," have ",(0,r.kt)("inlineCode",{parentName:"p"},"unpermissionedFeedsEnabled")," set to\nfalse. Allowing unpermitted feeds could result in a malicious actor creating a\njob definition that leaks your sensitive API keys.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"We'll be using ",(0,r.kt)("a",{parentName:"p",href:"https://www.commodities-api.com"},"commodities-api")," to resolve our\ndata for this example. You will need to signup for an account to get a\n",(0,r.kt)("inlineCode",{parentName:"p"},"COMMODITIES_API_KEY"),"."),(0,r.kt)("h3",{id:"create-a-queue"},"Create a Queue"),(0,r.kt)("p",null,"First, we will need to create our own queue. The following command will create a\nqueue with a single oracle and crank."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 queue:create \\\n    --name "Private Queue" \\\n    --keypair ../payer-keypair.json \\\n    --authority ../payer-keypair.json \\\n    --numOracles 1 \\\n    --reward 0 \\\n    --outputFile "Private_Queue.json"\n')),(0,r.kt)("h3",{id:"start-oracle"},"Start Oracle"),(0,r.kt)("p",null,"Create a docker-compose file, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"ORACLE_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RPC_URL"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"PAYER_KEYPAIR")," with the appropriate values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3.3"\nservices:\n  oracle:\n    image: "switchboardlabs/node:dev-v2-07-18-22"\n    network_mode: host\n    restart: always\n    secrets:\n      - PAYER_SECRETS\n    environment:\n      - LIVE=1\n      - CLUSTER=devnet\n      - HEARTBEAT_INTERVAL=30 # Seconds\n      - ORACLE_KEY=${ORACLE_KEY}\n      - RPC_URL=${RPC_URL}\n    volumes:\n      - ./configs.json:/configs.json\nsecrets:\n  PAYER_SECRETS:\n    file: ${PAYER_KEYPAIR}\n')),(0,r.kt)("p",null,"We need to embed the commodities-api key in our oracle's configs.json file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="configs.json"',title:'"configs.json"'},'{\n  "jobVariables": {\n    // Pubkey of the OracleJob account for which this variable expansion applies or *.\n    "*": {\n      "COMMODITIES_API_KEY": "YOUR_API_KEY_HERE"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Start the oracle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("h3",{id:"create-wheat-aggregator"},"Create WHEAT Aggregator"),(0,r.kt)("p",null,"Looking at their docs, we'll need to fetch data from the following endpoint and\ntake the inverse. The aggregator definition will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Wheat.json"',title:'"Wheat.json"'},'{\n  "name": "WHEAT",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api WHEAT",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=WHEAT"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.WHEAT"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Now we need to create an aggregator and add this job definition to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 aggregator:create:json wheat.json \\\n    --keypair ../payer-keypair.json \\\n    --queueKey QUEUE_KEY_OUTPUTTED_ABOVE \\\n    --outputFile Wheat_Aggregator.json\n")),(0,r.kt)("p",null,"Now we can request an update from our running oracle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 aggregator:update AGGREGATORKEY --keypair PAYERKEYPAIR\n")),(0,r.kt)("p",null,"We should see the oracle respond to the job and update the on-chain value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 aggregator:print AGGREGATORKEY\n")),(0,r.kt)("h3",{id:"other-aggregator-definitions"},"Other Aggregator Definitions"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"crude"},"Crude")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Crude.json"',title:'"Crude.json"'},'{\n  "name": "Crude WTIOIL",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api WTIOIL",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=WTIOIL"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.WTIOIL"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"gold"},"Gold")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Gold.json"',title:'"Gold.json"'},'{\n  "name": "Gold",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api XAU",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=XAU"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.XAU"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"silver"},"Silver")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Silver.json"',title:'"Silver.json"'},'{\n  "name": "Silver",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api XAG",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=XAG"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.XAG"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"nickel"},"Nickel")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Nickel.json"',title:'"Nickel.json"'},'{\n  "name": "Nickel",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api NI",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=NI"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.NI"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"coffee"},"Coffee")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Coffee.json"',title:'"Coffee.json"'},'{\n  "name": "Coffee",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api COFFEE",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=COFFEE"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.COFFEE"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))))}u.isMDXComponent=!0}}]);