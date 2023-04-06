"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44636],{54852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(49231);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?a.createElement(v,o(o({ref:n},c),{},{components:t})):a.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(48041),r=(t(49231),t(54852));const s={sidebar_position:40},o="Events",i={unversionedId:"publisher/examples/events",id:"publisher/examples/events",title:"Events",description:"Switchboard oracles can be used to resolve the outcome of events. The following",source:"@site/docs/publisher/examples/events.mdx",sourceDirName:"publisher/examples",slug:"/publisher/examples/events",permalink:"/publisher/examples/events",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"publisher",previous:{title:"TWAP",permalink:"/publisher/examples/twap"}},l={},p=[{value:"European Premier League",id:"european-premier-league",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"Switchboard oracles can be used to resolve the outcome of events. The following\nexamples will resolve to the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"0")," - No Result"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1")," - Home Team Win"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2")," - Away Team Win")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{id:"european-premier-league"},"European Premier League")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ESPN")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="EPL_Man_United_v_Leicester_City_10_16_21.json"',title:'"EPL_Man_United_v_Leicester_City_10_16_21.json"'},'{\n  "name": "EPL MAN v LEI 10/16/2021",\n  "tasks": [\n    {\n      "httpTask": {\n        "url": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard/605965"\n      }\n    },\n    {\n      "conditionalTask": {\n        "attempt": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.competitions[?(@.status.type.completed && @.id == \'605965\')].competitors[?(@.winner && @.homeAway == \'home\')].id"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 1\n                  }\n                }\n              ],\n              "onFailure": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.competitions[?(@.status.type.completed && @.id == \'605965\')].competitors[?(@.winner && @.homeAway == \'away\')].id"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 2\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        "onFailure": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.competitions[?(@.status.type.completed && @.id == \'605965\')].id"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 0\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Yahoo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="EPL_Man_United_v_Leicester_City_10_16_21.json"',title:'"EPL_Man_United_v_Leicester_City_10_16_21.json"'},'{\n  "name": "EPL MAN v LEI 10/16/2021",\n  "tasks": [\n    {\n      "httpTask": {\n        "url": "https://sports.yahoo.com/soccer/premier-league/leicester-city-manchester-united-2247085"\n      }\n    },\n    {\n      "regexExtractTask": {\n        "pattern": "root.App.main\\\\s+=\\\\s+(\\\\{.*\\\\})",\n        "groupNumber": 1\n      }\n    },\n    {\n      "conditionalTask": {\n        "attempt": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.context.dispatcher.stores.GamesStore.games[?(@.gameid == \'soccer.g.2247085\' && @.status_type == \'final\' && @.winning_team_id == @.home_team_id)].attendance"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 1\n                  }\n                }\n              ],\n              "onFailure": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.context.dispatcher.stores.GamesStore.games[?(@.gameid == \'soccer.g.2247085\' && @.status_type == \'final\' && @.winning_team_id == @.away_team_id)].attendance"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 2\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        "onFailure": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.context.dispatcher.stores.GamesStore.games[?(@.gameid == \'soccer.g.2247085\' && @.status_type == \'final\')].attendance"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 0\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'))))}m.isMDXComponent=!0}}]);