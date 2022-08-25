"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[204],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>b});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),k=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},c=function(t){var e=k(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=k(l),b=r,d=p["".concat(u,".").concat(b)]||p[b]||s[b]||o;return l?n.createElement(d,a(a({ref:e},c),{},{components:l})):n.createElement(d,a({ref:e},c))}));function b(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,a=new Array(o);a[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var k=2;k<o;k++)a[k]=l[k];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},3222:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>k});var n=l(7462),r=(l(7294),l(3905));const o={sidebar_position:1,slug:".",title:"Requirements"},a="Background",i={unversionedId:"oracle/operator/requirements",id:"oracle/operator/requirements",title:"Requirements",description:"A Switchboard oracle is a Node.js container that sits between the Solana blockchain and the internet and waits for update requests from its assigned oracle queue.",source:"@site/docs/oracle/operator/requirements.mdx",sourceDirName:"oracle/operator",slug:"/oracle/operator/",permalink:"/oracle/operator/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Requirements"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/oracle/"},next:{title:"Docker",permalink:"/oracle/operator/docker"}},u={},k=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"RPC Endpoint",id:"rpc-endpoint",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Solana Config",id:"solana-config",level:3},{value:"Oracle Config",id:"oracle-config",level:3},{value:"Keypair Config",id:"keypair-config",level:3},{value:"Monitoring Config",id:"monitoring-config",level:3}],c={toc:k};function s(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"background"},"Background"),(0,r.kt)("p",null,"A Switchboard oracle is a Node.js container that sits between the Solana blockchain and the internet and waits for update requests from its assigned oracle queue."),(0,r.kt)("p",null,"You can find the latest Switchboard oracle image on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/switchboardlabs/node/tags"},"DockerHub"),"."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"A Switchboard oracle should be hosted in a highly available environment with some level of redundancy and fail over to prevent outages, although oracles are not deducted for being offline."),(0,r.kt)("p",null,"At the very minimum a node should have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4gb RAM"),(0,r.kt)("li",{parentName:"ul"},"3.0 Ghz CPU"),(0,r.kt)("li",{parentName:"ul"},"100+ Mbps connection")),(0,r.kt)("h2",{id:"rpc-endpoint"},"RPC Endpoint"),(0,r.kt)("p",null,"A Switchboard oracle should have a reliable RPC endpoint with no rate limiting in order to respond in a timely manner. RPC providers will need to have ",(0,r.kt)("inlineCode",{parentName:"p"},"--full-rpc-api")," enabled in their validator config, along with the ability to support fetching 100 program accounts in a single getProgramAccounts request."),(0,r.kt)("p",null,"Switchboard recommends the following RPC providers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RPC Pool"),(0,r.kt)("li",{parentName:"ul"},"GenesysGo"),(0,r.kt)("li",{parentName:"ul"},"Syndica")),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'env title=".env"',env:!0,title:'".env"'},'# Solana Config\nCLUSTER=""\nRPC_URL=""\nWS_URL=""\nBACKUP_MAINNET_RPC=""\n# Oracle Config\nORACLE_KEY=""\nHEARTBEAT_INTERVAL=15\nGCP_CONFIG_BUCKET=""\nUNWRAP_STAKE_THRESHOLD=""\n# Keypair Config\nPAYER_SECRET_PATH=""\nPAYER_SECRETS=""\nGOOGLE_PAYER_SECRET_PATH=""\n# Monitoring Config\nMETRICS_EXPORTER\nPAGERDUTY_EVENT_KEY=""\nVERBOSE=1\n')),(0,r.kt)("h3",{id:"solana-config"},"Solana Config"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"CLUSTER"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - String (devnet / mainnet-beta)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana cluster you will be running an oracle on (mainnet-beta/devnet)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RPC_URL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana RPC URL that must be capable of supporting websockets. The default RPC pools should be avoided at all cost as you will quickly hit the rate limits and risk being slashed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"WS_URL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - RPC_URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Websocket URL to connect to a Solana RPC server. If not provided, oracle will fallback to RPC_URL")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BACKUP_MAINNET_RPC"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - https://api.mainnet-beta.solana.com",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Backup RPC URL in case of network congestion")))),(0,r.kt)("h3",{id:"oracle-config"},"Oracle Config"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"ORACLE_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Public Key",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Public key of the oracle account that has been granted permissions to use an oracle queue ",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"HEARTBEAT_INTERVAL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Number (seconds)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 30",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Seconds between oracle heartbeats. Queues have different oracle heartbeat requirements. Recommended value is 15")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GCP_CONFIG_BUCKET"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - Looks for configs.json in the current working directory. If not found, no config is loaded.",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Contains API keys for private API endpoints")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"UNWRAP_STAKE_THRESHOLD"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Number (SOL amount, Ex. 1.55)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 0, disabled.",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - The Solana balance amount to trigger an unwrap stake action. When an oracle's Solana balance falls below the set threshold, the node will automatically unwrap funds from the oracle's staking wallet, leaving at least 0.1 wSOL or 10% more than the queue's minimum stake requirement.")))),(0,r.kt)("h3",{id:"keypair-config"},"Keypair Config"),(0,r.kt)("p",null,"You must provide one of the following environment variables, which is the same keypair that is the authority for the given ",(0,r.kt)("inlineCode",{parentName:"p"},"$ORACLE_KEY")," and will pay for any on-chain transactions."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - Filesystem Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Local filesystem path to keypair file that will pay for on-chain transactions and is the authority for the oracle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAYER_SECRETS"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - Docker Secret",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Docker Secret path to keypair file that will pay for on-chain transactions and is the authority for the oracle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GOOGLE_PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Google cloud resource to manage your keypair securely.")))),(0,r.kt)("h3",{id:"monitoring-config"},"Monitoring Config"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"METRICS_EXPORTER"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - prometheus / gcp / opentelemetry-collector*",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - prometheus",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Dictates which metric suite to aggregate resource metrics, as defined in:",(0,r.kt)("br",null),(0,r.kt)("a",{href:"./operator/monitoring"},"Oracle - Monitoring"),(0,r.kt)("br",null),"*opentelemetry-collector only supports the default endpoint localhost:55681/v1/metric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PAGERDUTY_EVENT_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - String",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - Paging disabled",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Token provided by pagerduty for sending pages about various alerts.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"./operator/monitoring#alerts"},"Oracle - Alerts"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VERBOSE"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Flag (0 or 1)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 0, normal logging",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Set to 1 to increase the level of logging")))))}s.isMDXComponent=!0}}]);