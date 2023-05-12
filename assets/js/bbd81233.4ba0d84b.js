"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6357],{54852:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(49231);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),h=n,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(95907),n=(a(49231),a(54852));const o={title:"Switchboard Introduces TWAP Support",description:"",authors:["gallynaut"],tags:[],hide_table_of_contents:!0},i="Switchboard Introduces TWAP Support",s={permalink:"/blog/2022/02/07/Switchboard-Introduces-TWAP-Support",source:"@site/blog/2022/02-07-Switchboard-Introduces-TWAP-Support.mdx",title:"Switchboard Introduces TWAP Support",description:"",date:"2022-02-07T00:00:00.000Z",formattedDate:"February 7, 2022",tags:[],readingTime:2.995,hasTruncateMarker:!0,authors:[{name:"gallynaut",title:"Developer Relations",url:"https://twitter.com/gallynaut",imageURL:"https://pbs.twimg.com/profile_images/1649642820993679365/buRwDkVY_400x400.jpg",key:"gallynaut"}],frontMatter:{title:"Switchboard Introduces TWAP Support",description:"",authors:["gallynaut"],tags:[],hide_table_of_contents:!0},prevItem:{title:"Using Switchboard: Creating Custom Data Feeds",permalink:"/blog/2022/02/23/Using-Switchboard-Creating-Custom-Data-Feeds"},nextItem:{title:"Switchboard V2 is LIVE!",permalink:"/blog/2022/01/27/Switchboard-V2-is-LIVE"}},p={authorsImageUrls:[void 0]},l=[{value:"What is TWAP?",id:"what-is-twap",level:3},{value:"How to Use TwapTask?",id:"how-to-use-twaptask",level:3},{value:"Known Limitations",id:"known-limitations",level:3}],u={toc:l},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"| TWAP! TWAP! TWAP! Switchboard V2 now supports aggregator history"),(0,n.kt)("h3",{id:"what-is-twap"},"What is TWAP?"),(0,n.kt)("p",null,"A time weighted average price (TWAP) is the average price of an asset over a\nspecified time frame. Let\u2019s say you\u2019re a large trader and you want to enter a\nlarge SOL/USD position. If you execute a sudden market order, you could drain\nthe order book and end up paying substantially more for the trade, plus bots\nwill immediately start to arbitrage and your position will be underwater\nimmediately. If you execute the same position using a TWAP, your orders will be\nspread throughout the given timeframe, allowing the market to absorb your\nliquidity, and giving you a more optimal price of the true market value."),(0,n.kt)("p",null,"TWAP use cases extend beyond just trading. Here are just a few examples of how a\nTWAP could be used in DeFi to reduce oracle price manipulations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Funding Premiums:")," Using a TWAP over a random sample to avoid a single\nsample skewing the results")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Futures Expiry:")," Futures expiration are correlated with higher volatility.\nUsing a TWAP reduces the risk of manipulation or\n",(0,n.kt)("a",{parentName:"p",href:"https://www.cftc.gov/LearnAndProtect/EducationCenter/CFTCGlossary/glossary_b.html#:~:text=Banging%20the%20Close%3A%20A%20manipulative,position%20in%20an%20option%2C%20swap"},"banging the close"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Lending Liquidations:")," A TWAP reduces scam wicks causing erroneous lending\nposition liquidations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"On-Chain Trading Algos:")," An on-chain program could use a Switchboard TWAP\noracle to execute positions on Serum based on a given criteria."))),(0,n.kt)("h3",{id:"how-to-use-twaptask"},"How to Use TwapTask?"),(0,n.kt)("p",null,"To start using the new TwapTask with Switchboard V2, you will need to initialize\na history buffer account for your aggregator. You can initialize a history\nbuffer using the\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz/api/switchboardv2-api/classes/AggregatorAccount#sethistorybuffer"},"javascript API method setHistoryBuffer"),".\nA history buffer account stores a set number of accepted results for an\naggregator, and given Solana\u2019s maximum account size of 10MB, the maximum number\nof samples a single history buffer can support is 350,000 samples (Keep in mind\nrent cost, this action is currently irreversible). The screenshot below shows\nthe\n",(0,n.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/3/GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"},"SOL/USD feed"),"\u2019s\nprice history in action on our explorer page."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(96384).Z,width:"1003",height:"346"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(52007).Z,width:"1059",height:"845"})),(0,n.kt)("p",null,"Once a history buffer has been initialized for an aggregator, you can create a\nseparate aggregator to track its TWAP. You can have multiple TwapTask tied to a\nsingle aggregator/history buffer. The\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz/api/tasks#-twaptask"},"TwapTask")," accepts the\nfollowing values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"aggregatorPubkey")),": The public key of the aggregator that has a history\nbuffer initialized")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"period")),": The time period, in seconds, to include in the TWAP calculation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"weightByPropagationTime"))," (Optional): Return the average, weighing each\nsample by the sample\u2019s propagation time (currentTimestamp \u2014\npreviousTimestamp).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"minSamples"))," (Optional): The minimum number of samples that must be\npresent in the history buffer, after filtering by time period, before\naccepting a result"))),(0,n.kt)("p",null,"The TwapTask first filters the history buffer and excludes any samples failing\noutside the set time period. If the minSamples field is set and the number of\nsamples in the filtered list is less than the minSamples, the oracles will not\nreport a result. The oracle will then calculate the final value by taking the\nweighted average between each sample\u2019s interval. You can find an example of the\nTwapTask in our\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz/job-directory#twap"},"Job Directory"),"."),(0,n.kt)("h3",{id:"known-limitations"},"Known Limitations"),(0,n.kt)("p",null,"The TwapTask relies on accepted on-chain results being pushed to the history\nbuffer. During periods of network degradations, aggregators may fail to post\naccepted results due to an insufficient number of oracle responses. This may\ncause TWAP calculations to have insufficient data to make a proper calculation.\nTo mitigate this, you should specify a minSamples field in the job definition to\nonly accept a TWAP result if enough samples are provided."),(0,n.kt)("p",null,"Check out our docs for a full list of tasks Switchboard supports:\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz/api/tasks"},"docs.switchboard.xyz/api/tasks")),(0,n.kt)("p",null,"Or view our currently supported on-chain feeds:\n",(0,n.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer"},"switchboard.xyz/explorer"),"."))}m.isMDXComponent=!0},52007:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2022-02-07-Switchboard-Introduces-TWAP-Support_AggregatorCard-ce323cb719b21a0d82703fa5b5be6257.png"},96384:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2022-02-07-Switchboard-Introduces-TWAP-Support_HistoryGraph-4cb6fae21f9cb5a36bd8c15295c4259c.png"}}]);