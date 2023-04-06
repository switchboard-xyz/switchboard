"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98228],{54852:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>k});var a=t(49231);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),u=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=u(n.components);return a.createElement(l.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,l=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),p=u(t),b=i,k=p["".concat(l,".").concat(b)]||p[b]||d[b]||r;return t?a.createElement(k,s(s({ref:e},c),{},{components:t})):a.createElement(k,s({ref:e},c))}));function k(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,s=new Array(r);s[0]=b;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o[p]="string"==typeof n?n:i,s[1]=o;for(var u=2;u<r;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92116:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(48041),i=(t(49231),t(54852));const r={sidebar_position:5},s="Liquidity",o={unversionedId:"publisher/examples/liquidity",id:"publisher/examples/liquidity",title:"Liquidity",description:"Switchboard oracles can be used to fetch order book depth and AMM liquidity.",source:"@site/docs/publisher/examples/liquidity.mdx",sourceDirName:"publisher/examples",slug:"/publisher/examples/liquidity",permalink:"/publisher/examples/liquidity",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"publisher",previous:{title:"Exchanges",permalink:"/publisher/examples/exchanges"},next:{title:"On-Chain",permalink:"/publisher/examples/on-chain"}},l={},u=[{value:"Binance Liquidity",id:"binance-liquidity",level:2},{value:"JupiterSwap Liquidity",id:"jupiterswap-liquidity",level:2}],c={toc:u},p="wrapper";function d(n){let{components:e,...t}=n;return(0,i.kt)(p,(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"liquidity"},"Liquidity"),(0,i.kt)("p",null,"Switchboard oracles can be used to fetch order book depth and AMM liquidity."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h2",{id:"binance-liquidity"},"Binance Liquidity")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"This is not a full job definition.")," You should pair it with some conditional\nlogic.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="sol_binance_orderbook.json"',title:'"sol_binance_orderbook.json"'},'{\n  "tasks": [\n    {\n      "httpTask": {\n        "url": "https://www.binance.com/api/v3/ticker/bookTicker?symbol=SOLUSDT",\n        "method": "METHOD_GET"\n      }\n    },\n    {\n      "cacheTask": {\n        "cacheItems": [\n          {\n            "variableName": "BINANCE_BID_QTY",\n            "job": {\n              "tasks": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.bidQty",\n                    "aggregationMethod": "NONE"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            "variableName": "BINANCE_ASK_QTY",\n            "job": {\n              "tasks": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.askQty",\n                    "aggregationMethod": "NONE"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    },\n    {\n      "valueTask": {\n        "big": "${BINANCE_ASK_QTY}"\n      }\n    }\n  ]\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h2",{id:"jupiterswap-liquidity"},"JupiterSwap Liquidity")),(0,i.kt)("p",null,"The following show how to get the swap price for a given input and output token\nwith a given input order size. This is useful to see how the price impact\naffects the oracle result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="jupiter_liquidity.json"',title:'"jupiter_liquidity.json"'},'{\n  "tasks": [\n    {\n      "cacheTask": {\n        "cacheItems": [\n          {\n            "variableName": "BASE_1",\n            "job": {\n              "tasks": [\n                {\n                  "jupiterSwapTask": {\n                    "inTokenAddress": "So11111111111111111111111111111111111111112",\n                    "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n                    "baseAmount": "1"\n                  }\n                },\n                {\n                  "divideTask": {\n                    "scalar": "1"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    },\n    {\n      "cacheTask": {\n        "cacheItems": [\n          {\n            "variableName": "BASE_10",\n            "job": {\n              "tasks": [\n                {\n                  "jupiterSwapTask": {\n                    "inTokenAddress": "So11111111111111111111111111111111111111112",\n                    "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n                    "baseAmount": "10"\n                  }\n                },\n                {\n                  "divideTask": {\n                    "scalar": "10"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    },\n    {\n      "cacheTask": {\n        "cacheItems": [\n          {\n            "variableName": "BASE_100",\n            "job": {\n              "tasks": [\n                {\n                  "jupiterSwapTask": {\n                    "inTokenAddress": "So11111111111111111111111111111111111111112",\n                    "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n                    "baseAmount": "100"\n                  }\n                },\n                {\n                  "divideTask": {\n                    "scalar": "100"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    },\n    {\n      "cacheTask": {\n        "cacheItems": [\n          {\n            "variableName": "BASE_1000",\n            "job": {\n              "tasks": [\n                {\n                  "jupiterSwapTask": {\n                    "inTokenAddress": "So11111111111111111111111111111111111111112",\n                    "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n                    "baseAmount": "1000"\n                  }\n                },\n                {\n                  "divideTask": {\n                    "scalar": "1000"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    },\n    {\n      "cacheTask": {\n        "cacheItems": [\n          {\n            "variableName": "BASE_10000",\n            "job": {\n              "tasks": [\n                {\n                  "jupiterSwapTask": {\n                    "inTokenAddress": "So11111111111111111111111111111111111111112",\n                    "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n                    "baseAmount": "10000"\n                  }\n                },\n                {\n                  "divideTask": {\n                    "scalar": "10000"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    },\n    {\n      "cacheTask": {\n        "cacheItems": [\n          {\n            "variableName": "BASE_100000",\n            "job": {\n              "tasks": [\n                {\n                  "jupiterSwapTask": {\n                    "inTokenAddress": "So11111111111111111111111111111111111111112",\n                    "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n                    "baseAmount": "100000"\n                  }\n                },\n                {\n                  "divideTask": {\n                    "scalar": "100000"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    },\n    {\n      "valueTask": {\n        "big": "${BASE_1}"\n      }\n    }\n  ]\n}\n'))))}d.isMDXComponent=!0}}]);