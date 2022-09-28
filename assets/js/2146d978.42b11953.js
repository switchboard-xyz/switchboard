"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2667],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(a),p=o,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(83117),o=(a(67294),a(3905));const r={sidebar_position:10,title:"Best Practices",slug:"."},s="Data Feed Best Practices",i={unversionedId:"feeds/best-practices/best-practices",id:"feeds/best-practices/best-practices",title:"Best Practices",description:"\x3c!-- TODO",source:"@site/docs/feeds/best-practices/best-practices.mdx",sourceDirName:"feeds/best-practices",slug:"/feeds/best-practices/",permalink:"/feeds/best-practices/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Best Practices",slug:"."},sidebar:"dataFeeds",previous:{title:"Private APIs",permalink:"/feeds/examples/private-apis/"},next:{title:"Integration Checklist",permalink:"/feeds/best-practices/integration-checklist"}},l={},u=[{value:"Oracle Consensus",id:"oracle-consensus",level:2},{value:"Democratizing Data Feeds",id:"democratizing-data-feeds",level:2},{value:"Own Your Data",id:"own-your-data",level:2},{value:"DAO",id:"dao",level:2},{value:"Tuning a Switchboard Feed",id:"tuning-a-switchboard-feed",level:2},{value:"Data Source Diversity",id:"data-source-diversity",level:3},{value:"Queue Selection",id:"queue-selection",level:3},{value:"Data Availability",id:"data-availability",level:3},{value:"Oracle Consensus",id:"oracle-consensus-1",level:3},{value:"Cost",id:"cost",level:3},{value:"Redundancy",id:"redundancy",level:3},{value:"Recommended Feed Configuration",id:"recommended-feed-configuration",level:2},{value:"Feed Maintenance",id:"feed-maintenance",level:2},{value:"Integration Checklist",id:"integration-checklist",level:2},{value:"TWAPs and Historical Data",id:"twaps-and-historical-data",level:2},{value:"Feed Creation Walkthrough",id:"feed-creation-walkthrough",level:2},{value:"Queue Selection",id:"queue-selection-1",level:3},{value:"Data Source Diversity",id:"data-source-diversity-1",level:3},{value:"Data Availability",id:"data-availability-1",level:3},{value:"Oracle Consensus",id:"oracle-consensus-2",level:3},{value:"Cost",id:"cost-1",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-feed-best-practices"},"Data Feed Best Practices"),(0,o.kt)("p",null,"Developers building real world applications for web3 rely on oracles to relay\nand publish data on-chain. Oracles are not a one size fit all solution, in fact\nredundancy should be used depending on your use cases and risk tolerance.\nSwitchboard\u2019s goal is to generalize data feeds and leave it up to the developer\nto configure and tune their data flow. Today\u2019s article looks at how Switchboard\nfeeds differ from other providers, and how you can configure your data feed to\nincrease economic security."),(0,o.kt)("p",null,"A Switchboard feed belongs to a single oracle queue, which is a realm of oracles\nthat get assigned to update requests in a round-robin fashion. The feed\u2019s config\ndictates how update requests are invoked and routed through the network, along\nwith a set of job accounts that define how data is sourced off-chain.\nSwitchboard data feeds can fetch data from http endpoints, websockets, or\non-chain sources. Switchboard feeds are meant to be generic enough to meet any\nuse case and leave it up to the on-chain consumers to configure."),(0,o.kt)("h2",{id:"oracle-consensus"},"Oracle Consensus"),(0,o.kt)("p",null,"Switchboard uses rounds to open and close a batch of oracle responses. A\nSwitchboard feed has a specified minUpdateDelay which determines the minimum\ntime a round is open for in order to give the oracles enough time to respond.\nWhen a new round is opened, the data feed gets assigned to a new batch of\noracles, which is configurable with the parameter oracleRequestBatchSize. After\nminOracleResults responses are received, the on-chain program calculates the\nresult using the median of the oracle responses. The median ensures large\noutliers do not drastically skew the accepted result, unlike averages. Oracles\nwho responded within the queue\u2019s configured parameters are rewarded, while the\noracles who respond outside this threshold are slashed (if the queue has\nslashingEnabled). As you can see, the oracle consensus can be configured by the\ndownstream user to provide the security necessary for their use case. Check out\nthe data feed docs for more information on the lifecycle of Switchboard data\nfeed updates."),(0,o.kt)("p",null,"This differs from other oracle solutions like Pyth where data feeds are sourced\nfrom trusted market participants directly. This results in a faster update rate\nbut makes no guarantees on the number of sources that responded. With\nSwitchboard feeds you can guarantee a set number of sources and oracles have\nresponded before accepting the result on-chain."),(0,o.kt)("h2",{id:"democratizing-data-feeds"},"Democratizing Data Feeds"),(0,o.kt)("p",null,"Switchboard is a decentralized protocol that allows users to publish and request\nupdates from a pool of oracles. Switchboard oracles allocate their resources to\nupdates requested from on-chain consumers. This leaves it up to the consumer to\ndecide what data is brought on-chain."),(0,o.kt)("p",null,"Switchboard feeds are public meaning anyone is free to read the value on-chain\nso sometimes it is ideal to piggy back on an existing feed. This works well for\nsome protocols but leaves you vulnerable to sudden changes in your on-chain data\nflow. This is a risk vector that can be mitigated by owning your own data feed\nand being your feed\u2019s authority."),(0,o.kt)("p",null,"If you\u2019re using a public data feed, consider contributing to the feeds lease to\nextend its lifetime."),(0,o.kt)("p",null,"\ud83d\udca1 NOTE: The feed authority differs from the lease authority. Only the lease\nauthority is permitted to withdraw funds. When contributing to public leases\ncheck the lease authority is set to an empty public key or else the feed\nauthority could withdraw the funds for themselves."),(0,o.kt)("h2",{id:"own-your-data"},"Own Your Data"),(0,o.kt)("p",null,"The feed authority has the power to modify the feed, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"change the job definitions and adapt to market conditions such as if a new\nexchange siphoned volume from the current sources"),(0,o.kt)("li",{parentName:"ul"},"speed up or slow down the feed depending on changing use cases"),(0,o.kt)("li",{parentName:"ul"},"change the reporting parameters to save on cost"),(0,o.kt)("li",{parentName:"ul"},"move the feed to a new queue for increased security or reliability"),(0,o.kt)("li",{parentName:"ul"},"complete ownership over your on-chain data flow")),(0,o.kt)("h2",{id:"dao"},"DAO"),(0,o.kt)("p",null,"A feed authority could even be set to a DAO where the quorum votes on changes to\na feeds configuration. This is true decentralization at play where the settings\nof a feed are optimized for a variety of use cases where voting power could be\ncontrolled by lease contributions or tokens staked."),(0,o.kt)("h2",{id:"tuning-a-switchboard-feed"},"Tuning a Switchboard Feed"),(0,o.kt)("p",null,"Now that we have some background on how switchboard oracles publish data\non-chain, let\u2019s look at how to configure a Switchboard feed."),(0,o.kt)("h3",{id:"data-source-diversity"},"Data Source Diversity"),(0,o.kt)("p",null,"The first step when building a feed is determining where you are sourcing your\ndata from. Each data source should correspond to a job account, which is just a\ncollection of Switchboard tasks, used to instruct the oracles on how to fetch\nand transform data. Checkout the job directory for some example definitions. You\ncan also view a catalog of curated job definitions in the Switchboard publisher."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job Diversity")," \u2014 Ensure you\u2019re sourcing data from multiple, reliable\nsources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job Weights")," \u2014 Add job weights for sources with a higher degree of truth,\nsuch as exchanges where price discovery is likely to happen. Oracles submit\nthe weighted median as their final result so jobs with a higher weight have\nmore influence on the result."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"minJobResults")," \u2014 Ensure the oracles have a reliable set of data before\nresponding on-chain. If only 1 out of 12 sources respond, you will not have a\nreliable result. But if you set this to 12 out of 12 and one of your sources\nis failing, you will encounter a stale feed, so ensure you have some margin\nfor single source failures.")),(0,o.kt)("h3",{id:"queue-selection"},"Queue Selection"),(0,o.kt)("p",null,"You should select a queue that will provide your feed with a sufficient level of\nsecurity."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Oracle Reputation")," \u2014 you should select a queue with a proven track record\nof honest reporting. Oracles store various metrics on-chain that can be used\nto determine their reliability. Oracles are assigned to update request in a\nround robin fashion where assignment is pseudo-random but this gives a fairly\naccurate picture of a queues overall reliability.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Oracle minStake")," \u2014 you should select a queue that requires oracles to stake\na respectable sum of capital before joining the queue. This will be used to\nslash oracles for misreporting feeds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Queue Reward")," \u2014 your selected queue should reward oracles sufficiently\nenough such that they are incentivized to report honestly, yet not too high\nwhere update request are prohibitively expensive. Switchboard DAO queues\ncurrently use 12500 lamports as the oracle reward, per update request.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Queue Permissions")," \u2014 high availability feeds should be on a queue where\nunpermissionedFeedsEnabled is set to false. This prevents data feeds from\nbeing able to join and spam the queue with update requests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Slashing")," \u2014 feeds securing financial applications should be on a queue with\nslashingEnabled to dissuade oracles from malicious behavior."),(0,o.kt)("p",{parentName:"li"},"You may notice Switchboard DAO queues do not have all of these settings\nenabled yet. Switchboard DAO queues currently rely on vetting trusted oracle\noperators to bootstrap the network. As the network grows, the queues will be\nfurther decentralized and rely on these parameters to enforce security. Stay\ntuned for more information on the Switchboard DAO and how new oracles will be\npermitted by the network."))),(0,o.kt)("h3",{id:"data-availability"},"Data Availability"),(0,o.kt)("p",null,"Configure when and how often you need new data on-chain."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Crank / Automatic Updates")," \u2014 any data feed that has sufficient queue\npermissions is able to join a crank. A crank is a scheduling mechanism for\ndata feeds that will invoke a new round after each minUpdateDelay with some\nadded jitter to prevent predictable oracle assignment. Data feeds not on a\ncrank should set the option disableCrank and will need to manually requests\nnew updates or have their own scheduling mechanism."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"minUpdateDelay")," \u2014 determines how often new data can be requested on-chain.\nThis should be set depending on your use case. Decentralized exchanges will\nneed faster updates than a lending protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"varianceThreshold")," \u2014 is the change percentage required between a previous\nround and the current oracle result before a value is published on-chain. This\nis used to conserve lease fees for the feed operator. Highly available feeds\nshould set this to 0 so values are always reported on-chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"forceReportPeriod")," \u2014 is the max staleness for a feed. If the\nvarianceThreshold was not exceeded but a set number of seconds have passed,\nthe oracle will respond on-chain. This should almost always be used with\nvarianceThreshold to ensure your feed is updating as expected and not stale\nfor another reason.")),(0,o.kt)("p",null,"\ud83d\udca1 NOTE: See the check_staleness function in the rust crate when integrating."),(0,o.kt)("h3",{id:"oracle-consensus-1"},"Oracle Consensus"),(0,o.kt)("p",null,"Configure how many oracles are assigned to a request and how many must respond\nto accept a result."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"oracleRequestBatchSize")," \u2014 sets the number of oracles assigned to each\nupdate request. The quickest way to increase feed security is to request more\noracles each update round because it requires a higher degree of oracle\ncollusion in order to affect the on-chain result. In reality, this increases\nthe overall cost of a feed so it\u2019s a careful consideration for feed operators\nwhen configuring a feed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"minOracleResults")," \u2014 set the minimum number of oracles that must respond\nbefore accepting a result on-chain. This ensures you have a sufficient data\nset before the on-chain program takes the median of the oracle responses."),(0,o.kt)("p",{parentName:"li"},"The number of oracles assigned to an update request should always be less than\nthe number of oracles required to respond. There are a variety of reasons that\nmay cause an oracle response to fail, such as Solana network degradation,\nindividual oracle network issues, or transaction spamming. Your feed\u2019s lease\nis only deducted when a round was successfully closed based on the feed\u2019s\nminOracleResults."))),(0,o.kt)("h3",{id:"cost"},"Cost"),(0,o.kt)("p",null,"The two main methods to reduce a feeds cost is to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"increase the minUpdateDelay so updates are requested less often")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"add a varianceTolerance so changes are only reported when a given percentage\nchange threshold is reached. This will greatly reduce the number of updates\non-chain during periods of low volatility so if you are using a staleness\ncheck in your on-chain program, make sure to pair it with forceReportPeriod so\na value is always reported after a given staleness interval."),(0,o.kt)("p",{parentName:"li"},"Another way to reduce cost is to set the feed authority to a DAO and share the\nfeed cost with other on-chain consumers. A DAO can be used to vote on feed\nchanges and can help democratize data on-chain. If you\u2019re using a public data\nfeed, consider contributing to the feeds lease to extend its lifetime."))),(0,o.kt)("h3",{id:"redundancy"},"Redundancy"),(0,o.kt)("p",null,"While Switchboard feeds have a proven track record, no system is fault tolerant\nwithout some level of redundancy. If possible, you should pair a Switchboard\nfeed with another oracle provider or a TWAP feed to ensure you are viewing\nreliable data. Stay tuned for a future article on advanced data feed usages."),(0,o.kt)("h2",{id:"recommended-feed-configuration"},"Recommended Feed Configuration"),(0,o.kt)("p",null,"The following table highlights some recommended settings. This will not\nencompass all use cases \u2014 use at your own discretion. Find us on Discord to\nanswer any configuration questions."),(0,o.kt)("h2",{id:"feed-maintenance"},"Feed Maintenance"),(0,o.kt)("p",null,"The following highlights some basic maintenance you should employ when working\nwith a Switchboard feed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Monitor Lease Funds")," \u2014 you should monitor your feeds lease account for low\nbalances. When a feed\u2019s lease is emptied, it will no longer process new\nupdates until it has enough to reward the oracles processing the update. We\nare working with a few web3 messaging services to enable wallet notifications\nwhen leases are low on funds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Monitor Crank Eviction")," \u2014 if a lease is emptied, it will also be evicted\nfrom its crank. Switchboard feeds act like public utilities where anyone is\nfree to re-push it to a crank, as long as it doesn\u2019t have disableCrank set to\ntrue.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Monitor Data Sources")," \u2014 Sometimes APIs change or move. High availability\nfeeds should have some basic routine health checks to ensure their on-chain\ndata is updating as expected."))),(0,o.kt)("h2",{id:"integration-checklist"},"Integration Checklist"),(0,o.kt)("p",null,"The switchboard-v2 crate is used to integrate Switchboard into your on-chain\nprograms. You can also view some example programs in the switchboard-v2 repo."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check aggregator is owned by the Switchboard program")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the latest round has more oracle responses than the minOracleResults\n(get_result)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Optional, check the feed has not exceeded a given confidence interval\n(check_confidence_interval)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Optional, check the feed has been updated recently (check_staleness)"))),(0,o.kt)("h2",{id:"twaps-and-historical-data"},"TWAPs and Historical Data"),(0,o.kt)("p",null,"Switchboard feed owners can elect to add a history buffer to their feed. This\nwill automatically store the last N accepted results on-chain, where N is\nconfigurable by the user from 1 to 350,000 samples, with the current Solana\naccount size limits. On-chain consumers can also read from the history buffer\nand validate a subset of the history to ensure the current oracle price has not\nskewed too far from the recent samples."),(0,o.kt)("p",null,"Once a feed has a history buffer, anyone can create a separate TWAP feed that\nreads the history buffer and calculates the time weighted average. This is\nuseful for feeds that may have low liquidity and suffer from frequent price\nswings."),(0,o.kt)("p",null,"More advanced usages of TWAP include the ability to source the TWAP price at\nsettlement each week. Let us say we\u2019re an options protocol with contracts\nsettling at 5PM UTC every Friday and we need a way to source the 1hr TWAP\nleading up to settlement. We also need to ensure that value is always calculated\nfor that 1hr window so our liquidators are using the most accurate price\nobserved on-chain. With Switchboard, you can build a feed that will always\nresolve to that 1hr window each week. You can see it in action here on devnet.\n",(0,o.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/2/9wChHmbtuLbjGYt9tdH7guLY9zaqT56veSxTba18k5N3"},"https://switchboard.xyz/explorer/2/9wChHmbtuLbjGYt9tdH7guLY9zaqT56veSxTba18k5N3")),(0,o.kt)("p",null,"Switchboard data feeds aim to be as general as possible to meet all use cases.\nIf you require a more complicated data feed, do not hesitate to reach out\nbecause we may be able to build a custom solution that will benefit not only you\nbut other data feed users."),(0,o.kt)("h2",{id:"feed-creation-walkthrough"},"Feed Creation Walkthrough"),(0,o.kt)("p",null,"I\u2019m a brand new lending protocol and I need a new data feed for XYZ. Let\u2019s walk\nthrough some considerations I might have for how to publish this feed."),(0,o.kt)("h3",{id:"queue-selection-1"},"Queue Selection"),(0,o.kt)("p",null,"This protocol will obviously be successful and have a significant total value\nlocked (TVL) so I should choose a secure queue. I look at a queue that already\nhas an XYZ feed but I notice the queue isn\u2019t as secure as I need; maybe it has a\nlow minimum stake requirement for oracles or doesn\u2019t slash oracles for\nmisreporting. So I check the Switchboard DAO and find a queue that requires\noracles to stake 10 SOL, has slashing enabled, requires feeds to be permitted to\njoin, and has a proven track record of honest reporting \u2026 perfect, we found the\nqueue we\u2019ll create the feed for."),(0,o.kt)("p",null,"\ud83d\udca1 NOTE: Data feed owners can always move their feed to a new queue after\ncreation."),(0,o.kt)("h3",{id:"data-source-diversity-1"},"Data Source Diversity"),(0,o.kt)("p",null,"Next, we\u2019ll need to find where to source the data. I see 4 centralized exchanges\nand 2 decentralized exchanges. Upon further inspection, I notice one of the CEXs\nhas questionable volume and one of the DEXs has no volume \u2014 so we should ignore\nthese sources. So we\u2019ll create the feed with 3 CEXs and 1 DEX. This is good but\nlet\u2019s see if we can do better. We see theres a Saber pool for this asset so we\ncan use the lpExchangeRateTask to fetch the price. We can also use the\njupiterSwapTask to aggregate through various on-chain sources and get us the\nbest price. Awesome, we have 3 CEXs, 1 DEX, a Saber pool source, and a Jupiter\nSwap source."),(0,o.kt)("p",null,"We want the feed result to be calculated with enough sources so we have an\naccurate depiction of the price but if we keep it too strict, a single source\nfailing could halt the feed \u2014 maybe one of the CEX sources had a data center\noutage. Your minJobResults should be at least one less than the total number of\nsources to account for this. To give us enough margin, we\u2019ll set ours to 4, so 4\nout of 6 sources have to respond in order for the oracle to publish a price\nupdate."),(0,o.kt)("p",null,"We notice the majority of the volume for this source is on a single CEX where\nthe majority of price discovery occurs \u2014 we should definitely weigh this source\nhigher than the rest. Here\u2019s what that may look like."),(0,o.kt)("h3",{id:"data-availability-1"},"Data Availability"),(0,o.kt)("p",null,"A lending protocol may not need the most up-to-date prices as compared to a\ntrading platform. So we will set the minUpdateDelaySeconds to 15. This should be\nfast enough for our lending platform \u2014 we can always adjust if needed."),(0,o.kt)("p",null,"We\u2019re a lending protocol on-chain so we need the data to be readily available \u2014\nso we will choose to push the feed onto a crank to enable automatic updates. The\ncrank is an incentivisation mechanism to regularly schedule feed updates. A\nsport betting platform may opt-out of a crank since they will only need the data\nwhen an event is settled."),(0,o.kt)("h3",{id:"oracle-consensus-2"},"Oracle Consensus"),(0,o.kt)("p",null,"We\u2019re planning on securing financial capital with our data feeds so we need to\nensure a malicious oracle cannot skew the price feed in its favor. To do this we\nwill set the oracleRequestBatchSize to at least 8. This means 5+ oracles would\nhave to collude in order to skew a feeds accepted value on-chain; remember we\u2019re\nusing the median and not the average as the final result. We\u2019ll then set\nminOracleResults to 7 to account for any oracle networking issues that may\nprevent them from responding. If only 7 oracles respond, at least 4 will need to\nbe acting in good faith to produce an honest result \u2014 which is a very reasonable\nassumption to make since we selected our queue carefully."),(0,o.kt)("h3",{id:"cost-1"},"Cost"),(0,o.kt)("p",null,"Woohoo, we\u2019re almost done. We\u2019ve built the job definitions, configured and tuned\nthe settings, so we head over to the Switchboard publisher to build the feed. We\nget to checkout and notice the cost may be a bit high for a lending protocol\nthat is just starting out. No worries, let\u2019s look at some ways to conserve cost."),(0,o.kt)("p",null,"Let\u2019s look at minUpdateDelaySeconds. Updating this feed every 15 seconds may be\na bit overkill. We can increase this to 30 to double the length of the feed."),(0,o.kt)("p",null,"The XYZ feed is a relatively low volatility feed, meaning the prices updated\non-chain may be the same or about the same each update round. To account for\nthis we can set the varianceThreshold to 0.1%, which instructs the oracles to\nskip reporting a value if the value hasn\u2019t differed by 0.1% since the last\nreported value on-chain. This will greatly extend the life of your feed but\nmakes it hard to estimate the length of time left on the feed since it will\ndepend on the feeds volatility and market conditions. Our feed will now only\nincur a cost when a feeds value has changed significantly."),(0,o.kt)("p",null,"Great, we\u2019ve found some ways to reduce cost without sacrificing security. But\nwhat if the XYZ asset suffers some loss of interest and reduce volatility? Your\nfeed may fail to update for hours on end if the price hasn\u2019t moved by the set\nvarianceThreshold. This can be mitigated by setting a forceReportPeriod, which\ninstructs the oracles to always report a result on-chain even if the variance\nthreshold wasn\u2019t exceeded, or max staleness. We will set forceReportPeriod to\n900 so the feed will always report a value on-chain every 15minutes. When\nintegrating on-chain, we should always be checking if the feed was updated\nwithin the forceReportPeriod interval to ensure the feed is healthy."))}d.isMDXComponent=!0}}]);