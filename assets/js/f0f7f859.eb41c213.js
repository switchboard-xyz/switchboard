"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93443],{24008:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(87357),s=t(92949),r=t(44996),o=t(67294);const i=e=>{const{colorMode:a}=(0,s.I)();let t="inherit";e.lightBg&&"dark"!==a&&(t=e.lightBg),e.darkBg&&"dark"===a&&(t=e.darkBg);let i={};return e.sx&&(i={backgroundColor:t,m:"auto",display:"flex",...i,...e.sx}),o.createElement(n.Z,{component:"img",sx:i,src:(0,r.Z)(e.img)})}},40817:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=t(83117),s=(t(67294),t(3905)),r=t(24008),o=t(86886);t(39960);const i={sidebar_position:1,slug:".",title:"What are Data Feeds?"},l="Introduction",m={unversionedId:"feeds/about",id:"feeds/about",title:"What are Data Feeds?",description:"An aggregator or data feed is what on-chain developers use when building smart",source:"@site/docs/feeds/about.mdx",sourceDirName:"feeds",slug:"/feeds/",permalink:"/feeds/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"What are Data Feeds?"},sidebar:"learn",previous:{title:"Crank",permalink:"/crank"},next:{title:"Switchboard Tasks",permalink:"/feeds/tasks"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Job Definitions",id:"job-definitions",level:2},{value:"Job Weights",id:"job-weights",level:3},{value:"Data Feed Composability",id:"data-feed-composability",level:2}],d={toc:c};function u(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"An aggregator or data feed is what on-chain developers use when building smart\ncontracts. A data feed is a collection of jobs that get aggregated to produce a\nsingle, deterministic result. Typically the first task in a job will fetch\nexternal data with subsequent tasks responsible for parsing the response and\ntransforming the value into a single data type, like an integer or decimal."),(0,s.kt)("p",null,"When an oracle is assigned to process a data feed update, the oracle executes\nthe defined jobs, computes the weighted median of the job responses, and\npublishes the result on-chain. If sufficient oracles respond, the on-chain\nprogram computes the final result as the median of the assigned oracle\nresponses."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)(o.ZP,{container:!0,spacing:3,mdxType:"Grid"},(0,s.kt)(o.ZP,{item:!0,md:4,sm:12,order:{xs:2,sm:1},mdxType:"Grid"},(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("b",null,"Aggregator: "),"Contains the data feed configuration, dictating how data feed updates get requested, updated, and resolved on-chain."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Job Account: "),"Stores the blueprints for how data is fetched off-chain for a particular data source."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Permission Account: "),"Permits a data feed to join an oracle queue."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Lease Contract: "),"Pre-funded escrow contract to reward oracles for their work."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Crank: "),"Optional, owned by the queue and allows a data feed to be updated at a regular interval."),(0,s.kt)("li",null,(0,s.kt)("b",null,"History Buffer: "),"Optional, allows a feed to store the last N values."))),(0,s.kt)(o.ZP,{item:!0,md:8,sx:12,order:{xs:1,sm:2},mdxType:"Grid"},(0,s.kt)(r.Z,{img:"/img/feeds/Aggregator_Accounts.png",sx:{display:"flex"},mdxType:"MarkdownImage"}))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"job-definitions"},"Job Definitions"),(0,s.kt)("p",null,"An Aggregator Account stores a collection of Job Account public keys along with\nthe hashes of the job definitions. This is to prevent malicious RPC nodes from\nproviding incorrect task definitions to oracles before fulfillment."),(0,s.kt)("p",null,"A Job Account is a collection of ",(0,s.kt)("a",{parentName:"p",href:"/feeds/tasks"},"Switchboard Tasks")," that get\nexecuted by an oracle sequentially. Each Job Account typically corresponds to a\nsingle data source. A data feed requires at least one job account and at most 16\njob accounts. Switchboard Job Accounts can be used to source data from:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"HTTP endpoints, public or private",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"msup"}),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"^{[1]}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.888em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span"}),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mopen mtight"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose mtight"},"]")))))))))))))),(0,s.kt)("li",{parentName:"ul"},"Websockets"),(0,s.kt)("li",{parentName:"ul"},"On-Chain data from Solana, Ethereum, etc",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Anchor programs"),(0,s.kt)("li",{parentName:"ul"},"JupiterSwap"),(0,s.kt)("li",{parentName:"ul"},"Uniswap"),(0,s.kt)("li",{parentName:"ul"},"SushiSwap"),(0,s.kt)("li",{parentName:"ul"},"Saber"),(0,s.kt)("li",{parentName:"ul"},"... and more")))),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"msup"}),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"^{[1]}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.888em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span"}),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mopen mtight"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose mtight"},"]")))))))))))))," Endpoints requiring an API key require a\n",(0,s.kt)("a",{parentName:"p",href:"/feeds/private-apis"},"Private APIs")," to prevent leaking the API key on-chain"),(0,s.kt)("h3",{id:"job-weights"},"Job Weights"),(0,s.kt)("p",null,"A data feed can assign job weights to a job account which will be used when the\noracle calculates the median across the job responses. This is useful to weight\ndata sources by some metric such as liquidity or a reliability score."),(0,s.kt)("p",null,"It is ",(0,s.kt)("strong",{parentName:"p"},"strongly")," recommended to utilize job weights as ",(0,s.kt)("em",{parentName:"p"},"not all data sources\nare created equally"),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Currently the only way to set a job weight is to remove and re-add the job\naccount to a feed.")),(0,s.kt)("h2",{id:"data-feed-composability"},"Data Feed Composability"),(0,s.kt)("p",null,"Data feeds may reference other data feeds and build upon each other. It is\n",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"strongly"))," recommended that you own any feed that you reference in case of\ndownstream impacts out of your control. While anyone can extend another feeds\nlease, a lease owner can always withdraw any lease funds and prevent future\nupdates."),(0,s.kt)("p",null,"As an example, you could construct the following feed definition:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a Switchboard feed that sources SOL/USD prices from a variety of\nexchanges, each weighted by their 7d volume, along with a history buffer"),(0,s.kt)("li",{parentName:"ul"},"Create a Switchboard feed that uses an OracleTask to fetch the Pyth SOL/USD\nprice every 10 seconds, along with a history buffer"),(0,s.kt)("li",{parentName:"ul"},"Create a Switchboard feed that uses an OracleTask to fetch the Chainlink\nSOL/USD price every 10 seconds, along with a history buffer"),(0,s.kt)("li",{parentName:"ul"},"Finally, create a Switchboard feed that calculates the 1min TWAP of each\nsource above and returns the median of the results")),(0,s.kt)("p",null,"This is just a small window into how Switchboard feeds can build on each other\nand let the downstream consumer configure their feeds to meet their own use\ncases."))}u.isMDXComponent=!0}}]);