"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4917],{54852:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(49231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},A="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),A=s(a),m=r,u=A["".concat(p,".").concat(m)]||A[m]||h[m]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[A]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(95907),r=(a(49231),a(54852));const o={title:"Fair LP Token Oracles",description:"",authors:["gallynaut"],tags:[],hide_table_of_contents:!0},i="Fair LP Token Oracles",l={permalink:"/blog/2022/01/20/Fair-LP-Token-Oracles",source:"@site/blog/2022/01-20-Fair-LP-Token-Oracles.mdx",title:"Fair LP Token Oracles",description:"",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[],readingTime:2.01,hasTruncateMarker:!0,authors:[{name:"gallynaut",title:"Developer Relations",url:"https://twitter.com/gallynaut",imageURL:"https://pbs.twimg.com/profile_images/1649642820993679365/buRwDkVY_400x400.jpg",key:"gallynaut"}],frontMatter:{title:"Fair LP Token Oracles",description:"",authors:["gallynaut"],tags:[],hide_table_of_contents:!0},prevItem:{title:"Switchboard V2 is LIVE!",permalink:"/blog/2022/01/27/Switchboard-V2-is-LIVE"},nextItem:{title:"Switchboard V2 (pt.3) \u2014 Incentives",permalink:"/blog/2021/11/03/Switchboard-V2-Incentives"}},p={authorsImageUrls:[void 0]},s=[{value:"The Concern",id:"the-concern",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"References",id:"references",level:2}],c={toc:s},A="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(A,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Switchboard now offers fair LP token pricing oracles based on the work of Alpha\nFinance Lab!"),(0,r.kt)("h2",{id:"the-concern"},"The Concern"),(0,r.kt)("p",null,"A liquidity pool is a collection of funds locked in a smart contract, used to\nfacilitate decentralized trading, lending, and many more functions ","[1]",". With\nDeFi we are able to deposit assets into an LP pool, receive yield bearing LP\ntokens, and then borrow against our LP tokens. The price of these LP tokens is\ntypically calculated by summing the total liquidity in the pool and dividing by\nthe number of LP tokens issued. This basic calculation works well when the total\nliquidity in the pool is balanced between each asset but starts to fall apart\nwhen the pool liquidity is imbalanced."),(0,r.kt)("p",null,"Consider the WarpFinance incident where an attacker was able to use a flash loan\nto manipulate the price of an LP token by taking advantage of the imbalance, for\nwhich they used as collateral to borrow a greater amount of capital than was\nsufficiently allowed ","[2]",". This type of hack takes advantage of the LP token\nprice oracle in order to over-borrow from a lending provider."),(0,r.kt)("h2",{id:"the-solution"},"The Solution"),(0,r.kt)("p",null,"Thanks to Alpha Finance Lab we have a solution: Fair LP Token Pricing ","[3]","."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16533).Z,width:"353",height:"82"})),(0,r.kt)("p",null,"Where, r is the amount of reserves, and p is the given price, for each pool\nmember."),(0,r.kt)("p",null,"The fair LP formula takes into account the weight of each pool member\u2019s\nliquidity to determine a fair price. What that means is as a pool imbalance\ngrows, the price of the LP token decreases in order to lower the risk of flash\nloan attacks being able to over-borrow against them."),(0,r.kt)("p",null,"Switchboard oracles now give you the option to calculate the fair price of an LP\ntoken using the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.switchboard.xyz/architecture/task#lptokenpricetask"},"LpTokenPriceTask"),".\nSwitchboard\u2019s solution requires an existing aggregator for each pool member so\nthat the formula is always using the previous aggregator result for each pool\nmember\u2019s price to prevent additional manipulation."),(0,r.kt)("p",null,"These feeds are live now so check out our feed explorer for an example of what\nthese on-chain jobs look like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/DhfLLj2NeBHBN2t7ksjwiZjpigzzTPSX9fwEiXyV9zDc"},"LP MERCURIAL USDC USDT PAI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/2WUiZrSqyyfz65o36hmYw8XDXzTtGjt8qK7Co67E8km9"},"LP MERCURIAL USDC USDT wUST"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/GnTHvhe4opQXHL4JGgDpfQKk2JY1ugmVLWvJocTH639q"},"LP SABER USDT USDC"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/AgChoQ3C9Zj68p6qrEs9ffp1dHcBsgFnw5jA3oWcq1c"},"LP SABER wUST USDC"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/6ZuSuX14mxyZQ8JgjAC9PoDcbAU9sr1umUoyYVseVaNF"},"LP SABER mSOL SOL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/EX8SxM4XcJyYBf6JWZArQkemXHNf88Z4CpDqDC8VdnKr"},"LP ORCA SOL USDC"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/DSPkZDVs4d5qMqThBCNUzemnUjgSPBjbGxL9otDfcjyB"},"LP ORCA USDC USDT"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/DrKZHV8aRb9RNtjwGwJe3LBzemVqzJB1X7Z52dm4m7w"},"LP ORCA mSOL SOL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://switchboard.xyz/explorer/0/WppSmFsZqKGzJcUL9vcU3VJTYpa2BXF6QEiRUVZjRDz"},"LP RAYDIUM SOL USDC")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[1][https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi]","(",(0,r.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi"},"https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[2][https://peckshield.medium.com/warpfinance-incident-root-cause-analysis-581a4869ee00]","(",(0,r.kt)("a",{parentName:"p",href:"https://peckshield.medium.com/warpfinance-incident-root-cause-analysis-581a4869ee00"},"https://peckshield.medium.com/warpfinance-incident-root-cause-analysis-581a4869ee00"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[3][https://blog.alphafinance.io/fair-lp-token-pricing/]","(",(0,r.kt)("a",{parentName:"p",href:"https://blog.alphafinance.io/fair-lp-token-pricing/"},"https://blog.alphafinance.io/fair-lp-token-pricing/"),")"))))}h.isMDXComponent=!0},16533:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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jz76yM0000wV2VFR7LHHHlEafYQpo56AQf/zzz96jhrru+++i/K152STTTZxV111VakqeP6nnXaau+eeezT/jz/+6AYMGKDS+99//12qjrxM9JcVw7vvvpuXLbo2dOhQvT/PCHrvvfd0AgvtizJ24Ikx4Q4Ec3RVBaNCz8vy84UXXlAG1rNnz4rbM5jIF1QWX331lRrnRowY4ZZaaim3xRZbOHTLDNI111zT/fvvvxXly/54//33NetPP/3keIGgv/76y3GfLLrvvvvckCFDtN0wEf4wqNCePn36ZBXLTYeZskKAYCa//PKLnn/77bc6SemPlH8wH/SpMKoNN9zQrbfeem6OOeZwWLOvueaalBKjnjQqWGXdjb7OMMMMitvee++tE1paXmwFJ554YnQJBsezPvjgg90222yjtoKuXbsq85533nndq6++GuWt5oTxxRiAwPzXX3/Vc7wy8pgpRmNsGeuuu64KFTyHZZZZRgUFxml4jlpZFf8++OAD7SfPlrHIZAPBVLMIYYb3hb6gU993333dhRde6NZee22dKHbbbbesou1L55P3Rs2FgLxYUYOFWfgFF1ww+h1OhJl4kQjDT3/QQQf5p556yl9xxRVeRozv27evXptqqqm86JO9vJhR3rInMqC9ME8vTMCL5OAXWmghLxKHX2KJJfwiiyySWY0McP/bb7/57bffXtsizNfLpKHnW265ZWa5vAsi3XlRx/hLLrnEDxw40O+3337+/vvv99NOO60XnXhqUZHCvLz8em3mmWfWvMLc/Pnnn69tEQk5KicTmn/sscf0jzyBqANcn332Wf/MM8+E5DbHUcWqTUX/JcjKwXNvSJiftl0mjf+u/v+BfshqKUqTSdKLMVd/86ymn356H++LSIx+//33j/JXcyIM3c8yyyxeJle/+eab+1tuucXLisKLOsyLzjq1qkcffdQffvjhXiZNxZu2iVCgeUWq17Tbb789tWxRokxQfqWVVtL+TTPNNF4Ysd9uu+38WGONpfdLKy96c//AAw/42267Te/NuxXo6quv1rIywYQkLwKQpw/iAhqlcfLiiy/qWGA8fPzxxxXX0n6wFDRqEgR++OEHv9NOO/lll13Wf/7559pqjnvttVdFD3g5ZVlakSZqCC/SgJfZXF8MWXbr9YceesiL1KDnMGJeij333NOLpKQvUkUlKT9ExaEv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"}}]);