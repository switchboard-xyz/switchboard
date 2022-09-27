"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>C,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},C=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,C=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},C),{},{components:n})):r.createElement(f,l({ref:t},C))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53219:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(83117),o=n(80102),a=n(67294),l=n(86010),s=n(94780),i=n(98216),c=n(33616),C=n(90948),p=n(34867);function m(e){return(0,p.Z)("MuiSvgIcon",e)}(0,n(1588).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var d=n(85893);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],u=(0,C.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,i.Z)(n.color)}`],t[`fontSize${(0,i.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var n,r,o,a,l,s,i,c,C,p,m,d,f,u,E,h,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(o=e.transitions)||null==(a=o.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(l=e.typography)||null==(s=l.pxToRem)?void 0:s.call(l,20))||"1.25rem",medium:(null==(i=e.typography)||null==(c=i.pxToRem)?void 0:c.call(i,24))||"1.5rem",large:(null==(C=e.typography)||null==(p=C.pxToRem)?void 0:p.call(C,35))||"2.1875"}[t.fontSize],color:null!=(m=null==(d=(e.vars||e).palette)||null==(f=d[t.color])?void 0:f.main)?m:{action:null==(u=(e.vars||e).palette)||null==(E=u.action)?void 0:E.active,disabled:null==(h=(e.vars||e).palette)||null==(v=h.action)?void 0:v.disabled,inherit:void 0}[t.color]}})),E=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:C,color:p="inherit",component:E="svg",fontSize:h="medium",htmlColor:v,inheritViewBox:y=!1,titleAccess:g,viewBox:x="0 0 24 24"}=n,_=(0,o.Z)(n,f),Z=(0,r.Z)({},n,{color:p,component:E,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:x}),k={};y||(k.viewBox=x);const F=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,i.Z)(t)}`,`fontSize${(0,i.Z)(n)}`]};return(0,s.Z)(o,m,r)})(Z);return(0,d.jsxs)(u,(0,r.Z)({as:E,className:(0,l.Z)(F.root,C),ownerState:Z,focusable:"false",color:v,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},k,_,{children:[a,g?(0,d.jsx)("title",{children:g}):null]}))}));E.muiName="SvgIcon";const h=E},90948:(e,t,n)=>{n.d(t,{FO:()=>a,ZP:()=>l});var r=n(70182),o=n(90247);const a=e=>(0,r.x9)(e)&&"classes"!==e,l=(0,r.ZP)({defaultTheme:o.Z,rootShouldForwardProp:a})},33616:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(20539),o=n(96682);var a=n(90247);function l({props:e,name:t}){return function({props:e,name:t,defaultTheme:n}){const a=(0,o.Z)(n);return(0,r.Z)({theme:a,name:t,props:e})}({props:e,name:t,defaultTheme:a.Z})}},98216:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(28320).Z},94780:(e,t,n)=>{function r(e,t,n){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>(r&&(e.push(t(r)),n&&n[r]&&e.push(n[r])),e)),[]).join(" ")})),r}n.d(t,{Z:()=>r})},34867:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(37078);const o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function a(e,t,n="Mui"){const a=o[t];return a?`${n}-${a}`:`${r.Z.generate(e)}-${t}`}},1588:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(34867);function o(e,t,n="Mui"){const o={};return t.forEach((t=>{o[t]=(0,r.Z)(e,t,n)})),o}},46590:(e,t,n)=>{n.d(t,{I:()=>l});var r=n(53219),o=n(83117),a=n(67294);function l(e){return a.createElement(r.Z,(0,o.Z)({},e,{viewBox:"0 0 64 64"}),a.createElement("g",{transform:"translate(0.000000,64.000000) scale(0.100000,-0.100000)",fill:"#0054ff",stroke:"none"},a.createElement("path",{d:"M225 624 c-27 -9 -65 -27 -83 -41 -32 -24 -32 -26 -16 -44 9 -10 14\n-25 11 -34 -8 -20 -44 -19 -55 2 -9 15 -13 12 -31 -18 -37 -61 -54 -127 -48\n-190 10 -116 82 -218 185 -266 100 -47 206 -40 301 18 30 18 33 22 18 31 -23\n12 -23 58 0 58 9 0 24 -7 34 -16 16 -14 19 -13 42 18 36 48 61 140 54 205 -21\n199 -224 336 -412 277z m143 -39 c4 -27 -70 -100 -92 -92 -26 10 -18 39 21 79\n40 41 66 46 71 13z m-140 -127 c15 -15 15 -51 0 -66 -7 -7 -21 -12 -33 -12\n-12 0 -26 5 -33 12 -28 28 -7 78 33 78 12 0 26 -5 33 -12z m100 -120 c48 -47\n55 -78 18 -78 -15 0 -37 15 -60 40 -30 34 -35 44 -26 60 15 28 20 26 68 -22z\nm135 -119 c5 -9 7 -28 3 -42 -5 -21 -12 -27 -34 -27 -49 0 -67 37 -35 72 19\n22 51 20 66 -3z m-93 -97 c0 -10 -20 -38 -45 -62 -37 -37 -46 -41 -60 -30 -22\n18 -19 25 23 69 40 43 82 55 82 23z"})))}},26295:(e,t,n)=>{n.d(t,{V:()=>l});var r=n(53219),o=n(83117),a=n(67294);function l(e){return a.createElement(r.Z,(0,o.Z)({},e,{viewBox:"0 0 100 100"}),a.createElement("path",{d:"M9.57323 77.9508C13.7607 83.7753 19.1321 88.6489 25.3351 92.252C31.5381 95.8551 38.4327 98.1062 45.5668 98.8579C41.8964 93.3346 36.5613 88.2532 29.9008 84.3845C23.2403 80.5159 16.1867 78.4027 9.57323 77.9508Z",fill:"url(#paint0_linear)"}),a.createElement("path",{d:"M38.8507 68.9805C26.0185 61.5254 12.1297 59.6255 2.19191 62.9818C3.15128 66.1526 4.41654 69.2226 5.96983 72.1486C14.6041 71.9487 24.0313 74.2937 32.8033 79.3886C41.5754 84.4835 48.2846 91.5153 52.3901 99.1165C55.7032 99.0148 58.9986 98.5928 62.2305 97.8566C60.2214 87.5627 51.6795 76.4372 38.8507 68.9805Z",fill:"url(#paint1_linear)"}),a.createElement("path",{d:"M100 38.7201C98.3685 32.084 95.4165 25.8447 91.3202 20.3748C87.2239 14.9048 82.0673 10.3164 76.1584 6.88349C70.2495 3.45059 63.7094 1.24361 56.9287 0.394327C50.1479 -0.454959 43.2655 0.0708667 36.6925 1.94041C47.6735 3.28427 59.8623 7.40655 71.8159 14.3509C83.7695 21.2953 93.3966 29.8406 100 38.7201Z",fill:"url(#paint2_linear)"}),a.createElement("path",{d:"M84.0232 63.0577C78.4025 53.7229 68.7738 44.7846 56.9125 37.8939C45.0513 31.0033 32.5198 27.0675 21.6362 26.8071C12.0612 26.5803 4.87495 29.3638 1.92518 34.4419C1.90838 34.4721 1.88486 34.5007 1.86638 34.5309C1.60097 35.4834 1.37251 36.4375 1.16422 37.395C5.28314 35.769 10.0555 34.8635 15.3621 34.7627C27.1628 34.541 40.3696 38.3156 52.5567 45.396C64.7439 52.4765 74.5725 62.0834 80.2234 72.4412C82.7566 77.1077 84.3373 81.702 84.9639 86.0914C85.6929 85.4397 86.4085 84.766 87.1023 84.0656C87.1208 84.0336 87.1325 84 87.151 83.9664C90.1008 78.8833 88.9602 71.2636 84.0232 63.0577Z",fill:"url(#paint3_linear)"}),a.createElement("path",{d:"M47.8884 53.4254C29.7245 42.8728 9.65227 41.2198 0 48.5842C0.0189591 50.8892 0.195187 53.1903 0.527462 55.4714C3.36682 54.6107 6.29318 54.0687 9.25247 53.8554C20.0386 53.0441 31.9301 56.0493 42.7213 62.3218C53.5125 68.5942 62.0191 77.4402 66.6588 87.205C67.9412 89.8801 68.9193 92.6907 69.5749 95.5839C71.7216 94.7424 73.8088 93.7563 75.8222 92.6325C77.4382 80.5982 66.0574 63.9797 47.8884 53.4254Z",fill:"url(#paint4_linear)"}),a.createElement("path",{d:"M93.3659 47.4337C87.6814 38.109 77.9687 29.1455 66.0235 22.2095C54.0782 15.2735 41.4981 11.2755 30.5792 10.9547C22.2557 10.7145 15.8085 12.7319 12.4657 16.5434C26.346 14.1917 44.6544 18.1443 62.4001 28.4534C80.1457 38.7625 92.6537 52.7117 97.4815 65.9336C99.1361 61.1444 97.6965 54.5444 93.3659 47.4337Z",fill:"url(#paint5_linear)"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"paint0_linear",x1:"81",y1:"13",x2:"15",y2:"99",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#F9A43A"}),a.createElement("stop",{offset:"0.25","stop-color":"#FFC45E"}),a.createElement("stop",{offset:"0.53125","stop-color":"#93EEEF"}),a.createElement("stop",{offset:"0.760417","stop-color":"#81F4FE"}),a.createElement("stop",{offset:"1","stop-color":"#3BDBFB"})),a.createElement("linearGradient",{id:"paint1_linear",x1:"81",y1:"13",x2:"15",y2:"99",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#F9A43A"}),a.createElement("stop",{offset:"0.25","stop-color":"#FFC45E"}),a.createElement("stop",{offset:"0.53125","stop-color":"#93EEEF"}),a.createElement("stop",{offset:"0.760417","stop-color":"#81F4FE"}),a.createElement("stop",{offset:"1","stop-color":"#3BDBFB"})),a.createElement("linearGradient",{id:"paint2_linear",x1:"81",y1:"13",x2:"15",y2:"99",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#F9A43A"}),a.createElement("stop",{offset:"0.25","stop-color":"#FFC45E"}),a.createElement("stop",{offset:"0.53125","stop-color":"#93EEEF"}),a.createElement("stop",{offset:"0.760417","stop-color":"#81F4FE"}),a.createElement("stop",{offset:"1","stop-color":"#3BDBFB"})),a.createElement("linearGradient",{id:"paint3_linear",x1:"81",y1:"13",x2:"15",y2:"99",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#F9A43A"}),a.createElement("stop",{offset:"0.25","stop-color":"#FFC45E"}),a.createElement("stop",{offset:"0.53125","stop-color":"#93EEEF"}),a.createElement("stop",{offset:"0.760417","stop-color":"#81F4FE"}),a.createElement("stop",{offset:"1","stop-color":"#3BDBFB"})),a.createElement("linearGradient",{id:"paint4_linear",x1:"81",y1:"13",x2:"15",y2:"99",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#F9A43A"}),a.createElement("stop",{offset:"0.25","stop-color":"#FFC45E"}),a.createElement("stop",{offset:"0.53125","stop-color":"#93EEEF"}),a.createElement("stop",{offset:"0.760417","stop-color":"#81F4FE"}),a.createElement("stop",{offset:"1","stop-color":"#3BDBFB"})),a.createElement("linearGradient",{id:"paint5_linear",x1:"81",y1:"13",x2:"15",y2:"99",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#F9A43A"}),a.createElement("stop",{offset:"0.25","stop-color":"#FFC45E"}),a.createElement("stop",{offset:"0.53125","stop-color":"#93EEEF"}),a.createElement("stop",{offset:"0.760417","stop-color":"#81F4FE"}),a.createElement("stop",{offset:"1","stop-color":"#3BDBFB"}))))}},63648:(e,t,n)=>{n.d(t,{l:()=>l});var r=n(53219),o=n(83117),a=n(67294);function l(e){return a.createElement(r.Z,(0,o.Z)({},e,{viewBox:"0 0 864 864"}),a.createElement("path",{d:"M1274.13 488.608C1277.75 495.431 1281.05 502.575 1284.04 510.039C1287.24 517.289 1290.33 524.646 1293.31 532.11C1296.29 524.433 1299.39 516.863 1302.58 509.399C1305.78 501.935 1309.19 494.792 1312.81 487.968L1449.66 231.754C1451.37 228.556 1453.07 225.997 1454.78 224.077C1456.69 222.158 1458.72 220.772 1460.85 219.919C1463.2 219.066 1465.75 218.533 1468.52 218.32C1471.3 218.107 1474.6 218 1478.44 218H1543.34V680.528H1467.57V381.772C1467.57 376.228 1467.67 370.15 1467.89 363.54C1468.31 356.929 1468.84 350.212 1469.48 343.388L1329.76 605.679C1326.56 611.65 1322.41 616.341 1317.29 619.753C1312.17 622.952 1306.21 624.551 1299.39 624.551H1287.56C1280.73 624.551 1274.77 622.952 1269.65 619.753C1264.53 616.341 1260.38 611.65 1257.18 605.679L1115.54 342.428C1116.39 349.465 1116.92 356.396 1117.14 363.22C1117.56 369.83 1117.78 376.014 1117.78 381.772V680.528H1042V218H1106.91C1110.74 218 1114.05 218.107 1116.82 218.32C1119.59 218.533 1122.04 219.066 1124.17 219.919C1126.52 220.772 1128.65 222.158 1130.57 224.077C1132.48 225.997 1134.3 228.556 1136 231.754L1274.13 488.608Z",fill:"white"}),a.createElement("path",{d:"M1889.09 680.528H1853.6C1846.14 680.528 1840.28 679.462 1836.02 677.329C1831.76 674.984 1828.56 670.399 1826.43 663.575L1819.39 640.225C1811.08 647.688 1802.87 654.299 1794.77 660.056C1786.89 665.601 1778.68 670.292 1770.15 674.131C1761.63 677.969 1752.57 680.848 1742.98 682.767C1733.38 684.686 1722.73 685.646 1711 685.646C1697.15 685.646 1684.36 683.833 1672.63 680.208C1660.91 676.37 1650.79 670.719 1642.26 663.255C1633.95 655.792 1627.45 646.515 1622.76 635.427C1618.07 624.338 1615.72 611.437 1615.72 596.723C1615.72 584.355 1618.92 572.2 1625.31 560.258C1631.92 548.103 1642.79 537.227 1657.93 527.631C1673.06 517.822 1693.2 509.719 1718.36 503.322C1743.51 496.924 1774.74 493.299 1812.04 492.446V473.254C1812.04 451.29 1807.35 435.083 1797.97 424.634C1788.8 413.972 1775.38 408.641 1757.68 408.641C1744.89 408.641 1734.24 410.134 1725.71 413.119C1717.18 416.104 1709.72 419.516 1703.33 423.355C1697.15 426.98 1691.39 430.285 1686.06 433.271C1680.73 436.256 1674.87 437.749 1668.48 437.749C1663.15 437.749 1658.57 436.363 1654.73 433.59C1650.89 430.818 1647.8 427.406 1645.46 423.355L1631.07 398.085C1668.8 363.54 1714.31 346.267 1767.6 346.267C1786.78 346.267 1803.83 349.465 1818.75 355.863C1833.89 362.047 1846.68 370.79 1857.12 382.092C1867.57 393.181 1875.45 406.508 1880.78 422.075C1886.32 437.642 1889.09 454.702 1889.09 473.254V680.528ZM1735.62 631.268C1743.72 631.268 1751.18 630.522 1758 629.029C1764.82 627.537 1771.22 625.298 1777.19 622.312C1783.37 619.327 1789.23 615.702 1794.77 611.437C1800.53 606.958 1806.28 601.734 1812.04 595.763V540.426C1789.02 541.492 1769.73 543.518 1754.17 546.504C1738.82 549.276 1726.46 552.901 1717.08 557.379C1707.7 561.857 1700.98 567.082 1696.93 573.053C1693.1 579.023 1691.18 585.527 1691.18 592.564C1691.18 606.425 1695.23 616.341 1703.33 622.312C1711.64 628.283 1722.41 631.268 1735.62 631.268Z",fill:"white"}),a.createElement("path",{d:"M1966.75 680.528V352.344H2015.03C2025.26 352.344 2031.98 357.142 2035.17 366.738L2040.61 392.648C2047.22 385.824 2054.14 379.64 2061.39 374.095C2068.85 368.551 2076.63 363.753 2084.73 359.701C2093.04 355.65 2101.89 352.557 2111.27 350.425C2120.65 348.293 2130.88 347.226 2141.96 347.226C2159.87 347.226 2175.75 350.318 2189.6 356.503C2203.46 362.473 2214.97 371.003 2224.14 382.092C2233.51 392.967 2240.55 406.082 2245.24 421.436C2250.14 436.576 2252.59 453.316 2252.59 471.655V680.528H2173.62V471.655C2173.62 451.61 2168.93 436.149 2159.55 425.274C2150.38 414.185 2136.53 408.641 2117.98 408.641C2104.34 408.641 2091.55 411.733 2079.62 417.917C2067.68 424.101 2056.38 432.524 2045.72 443.187V680.528H1966.75Z",fill:"white"}),a.createElement("path",{d:"M2443.7 346.587C2457.77 346.587 2470.99 348.079 2483.35 351.065C2495.71 353.837 2507.01 357.995 2517.24 363.54H2611.56V392.967C2611.56 397.872 2610.28 401.71 2607.73 404.483C2605.17 407.255 2600.8 409.174 2594.62 410.24L2565.2 415.678C2567.33 421.222 2568.93 427.087 2570 433.271C2571.28 439.455 2571.92 445.959 2571.92 452.783C2571.92 468.989 2568.61 483.703 2562 496.924C2555.61 509.932 2546.66 521.021 2535.15 530.19C2523.85 539.36 2510.31 546.504 2494.54 551.621C2478.98 556.526 2462.03 558.978 2443.7 558.978C2431.34 558.978 2419.3 557.806 2407.57 555.46C2397.34 561.644 2392.23 568.574 2392.23 576.251C2392.23 582.862 2395.21 587.766 2401.18 590.965C2407.36 593.951 2415.35 596.083 2425.16 597.362C2435.18 598.642 2446.47 599.495 2459.05 599.921C2471.63 600.135 2484.52 600.774 2497.74 601.841C2510.95 602.907 2523.85 604.826 2536.43 607.598C2549 610.157 2560.19 614.315 2570 620.073C2580.02 625.831 2588.01 633.721 2593.98 643.743C2600.16 653.552 2603.25 666.241 2603.25 681.807C2603.25 696.308 2599.63 710.382 2592.38 724.03C2585.34 737.678 2575.01 749.833 2561.36 760.495C2547.94 771.157 2531.42 779.687 2511.81 786.084C2492.2 792.695 2469.81 796 2444.66 796C2419.72 796 2398.09 793.548 2379.76 788.643C2361.42 783.952 2346.18 777.554 2334.03 769.451C2322.1 761.561 2313.14 752.391 2307.18 741.942C2301.21 731.493 2298.22 720.618 2298.22 709.316C2298.22 693.962 2302.91 681.061 2312.29 670.612C2321.67 660.163 2334.67 651.847 2351.3 645.662C2343.2 641.184 2336.7 635.213 2331.8 627.75C2326.89 620.286 2324.44 610.584 2324.44 598.642C2324.44 593.737 2325.29 588.726 2327 583.608C2328.71 578.277 2331.26 573.053 2334.67 567.935C2338.3 562.817 2342.77 558.019 2348.1 553.541C2353.43 548.849 2359.72 544.691 2366.97 541.066C2350.34 532.11 2337.23 520.168 2327.64 505.241C2318.26 490.314 2313.57 472.828 2313.57 452.783C2313.57 436.576 2316.77 421.969 2323.16 408.961C2329.77 395.74 2338.83 384.544 2350.34 375.375C2362.06 365.992 2375.81 358.848 2391.59 353.944C2407.57 349.039 2424.94 346.587 2443.7 346.587ZM2530.35 695.242C2530.35 688.845 2528.43 683.62 2524.6 679.568C2520.76 675.517 2515.54 672.425 2508.93 670.292C2502.32 667.947 2494.54 666.241 2485.59 665.174C2476.85 664.108 2467.47 663.362 2457.45 662.935C2447.65 662.296 2437.41 661.762 2426.76 661.336C2416.31 660.696 2406.19 659.737 2396.38 658.457C2387.43 663.362 2380.18 669.226 2374.64 676.05C2369.31 682.66 2366.65 690.337 2366.65 699.08C2366.65 704.838 2368.03 710.169 2370.8 715.074C2373.79 720.191 2378.37 724.563 2384.55 728.188C2390.95 731.813 2399.15 734.586 2409.17 736.505C2419.19 738.637 2431.45 739.703 2445.94 739.703C2460.65 739.703 2473.33 738.531 2483.99 736.185C2494.65 734.052 2503.39 730.96 2510.21 726.909C2517.24 723.07 2522.36 718.379 2525.55 712.834C2528.75 707.503 2530.35 701.639 2530.35 695.242ZM2443.7 508.439C2453.51 508.439 2462.03 507.16 2469.28 504.601C2476.53 501.829 2482.5 498.097 2487.19 493.406C2492.09 488.714 2495.71 483.063 2498.06 476.453C2500.62 469.842 2501.89 462.592 2501.89 454.702C2501.89 438.495 2496.99 425.7 2487.19 416.318C2477.59 406.722 2463.1 401.924 2443.7 401.924C2424.31 401.924 2409.7 406.722 2399.9 416.318C2390.31 425.7 2385.51 438.495 2385.51 454.702C2385.51 462.379 2386.68 469.522 2389.03 476.133C2391.59 482.743 2395.21 488.501 2399.9 493.406C2404.8 498.097 2410.88 501.829 2418.12 504.601C2425.58 507.16 2434.11 508.439 2443.7 508.439Z",fill:"white"}),a.createElement("path",{d:"M2801.21 347.226C2825.73 347.226 2847.9 351.171 2867.72 359.061C2887.76 366.952 2904.81 378.147 2918.88 392.648C2932.95 407.148 2943.82 424.847 2951.49 445.745C2959.16 466.643 2963 489.994 2963 515.796C2963 541.812 2959.16 565.269 2951.49 586.167C2943.82 607.065 2932.95 624.871 2918.88 639.585C2904.81 654.299 2887.76 665.601 2867.72 673.491C2847.9 681.381 2825.73 685.326 2801.21 685.326C2776.7 685.326 2754.43 681.381 2734.39 673.491C2714.35 665.601 2697.19 654.299 2682.91 639.585C2668.85 624.871 2657.87 607.065 2649.98 586.167C2642.31 565.269 2638.47 541.812 2638.47 515.796C2638.47 489.994 2642.31 466.643 2649.98 445.745C2657.87 424.847 2668.85 407.148 2682.91 392.648C2697.19 378.147 2714.35 366.952 2734.39 359.061C2754.43 351.171 2776.7 347.226 2801.21 347.226ZM2801.21 624.551C2828.5 624.551 2848.64 615.382 2861.64 597.043C2874.86 578.704 2881.47 551.835 2881.47 516.436C2881.47 481.037 2874.86 454.062 2861.64 435.51C2848.64 416.957 2828.5 407.681 2801.21 407.681C2773.5 407.681 2753.04 417.064 2739.83 435.83C2726.61 454.382 2720 481.251 2720 516.436C2720 551.621 2726.61 578.49 2739.83 597.043C2753.04 615.382 2773.5 624.551 2801.21 624.551Z",fill:"white"}),a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M337.746 201.289C337.751 201.283 337.755 201.277 337.76 201.27C374.05 219.89 413.76 226.27 451.76 226.16C473.84 246.44 492.21 270.26 509.47 294.72C516.627 304.937 523.082 315.628 528.79 326.72C541.989 352.136 551.696 379.028 561.518 406.237C564.398 414.217 567.289 422.225 570.28 430.23C571.217 433.656 572.196 437.084 573.217 440.514L573.27 440.5C588.44 492.53 610.59 548.11 640.27 594L640.241 594.012C650.058 609.087 661.055 623.361 673.13 636.7C675.506 639.27 677.936 641.816 680.369 644.365L680.37 644.366L680.371 644.367L680.374 644.37C691.742 656.28 703.19 668.274 709.68 683.28C717.76 701.98 717.14 723.49 712.28 743.28C689.35 836.56 599.52 861.07 513.67 863.33L513.711 863.223C481.522 863.864 449.556 861.465 421.21 858.56C421.21 858.56 284.5 844.41 168.62 759.69L164.88 756.91C164.88 756.91 164.88 756.91 164.881 756.909C151.355 746.83 138.451 735.941 126.24 724.3C93.76 693.3 64.86 658.14 42.76 619.54C42.9078 619.392 43.0553 619.243 43.2026 619.095C40.587 614.388 38.0795 609.634 35.68 604.83C14.3 562.04 1.27 515.46 0.679999 465.95C-0.325631 382.873 28.0953 297.795 82.1176 236.113C82.0984 236.062 82.0792 236.011 82.06 235.96C111.31 203.92 147.87 178.75 191.15 164.42C218.283 155.354 246.768 151.001 275.37 151.55C292.775 171.987 313.954 188.874 337.746 201.289ZM271.153 744.85C290.711 737.711 309.24 728.11 326.518 716.279C309.131 728.03 290.575 737.637 271.153 744.85Z",fill:"url(#paint0_linear)"}),a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M621.498 133.628C621.512 133.628 621.526 133.628 621.54 133.627L622.72 132.867C470.3 -127.133 271 77.5671 271 77.5671L271.285 78.0685C271.273 78.0714 271.262 78.0742 271.25 78.0771C385.856 279.01 603.664 145.087 621.498 133.628Z",fill:"url(#paint1_linear)"}),a.createElement("path",{d:"M432.56 581.44C390.56 681.84 309.92 748.32 212.22 758.39C210.12 758.67 183.38 760.78 168.62 759.69C284.5 844.41 421.21 858.56 421.21 858.56C450.48 861.56 483.61 864.02 516.86 863.15C528.57 832.58 535.16 797.58 533.27 757.87C528.88 665.64 582.36 618.29 640.27 594C610.59 548.11 588.44 492.53 573.27 440.5C528.05 452.53 470.62 490.36 432.56 581.44Z",fill:"url(#paint2_linear)"}),a.createElement("path",{d:"M531.44 757.22C533.34 796.93 525.38 832.76 513.67 863.33C599.52 861.07 689.35 836.56 712.28 743.28C717.14 723.49 717.76 701.98 709.68 683.28C701.8 665.06 686.61 651.28 673.13 636.7C660.519 622.769 649.084 607.818 638.94 592C581.08 616.3 527.05 665 531.44 757.22Z",fill:"url(#paint3_linear)"}),a.createElement("path",{d:"M570.28 430.23C557.09 394.93 545.86 359.59 528.79 326.72C523.082 315.628 516.627 304.937 509.47 294.72C492.21 270.26 473.84 246.44 451.76 226.16C413.76 226.27 374.05 219.89 337.76 201.27C301 253.41 258.94 341.86 297.44 442.82C354.29 591.92 238.92 693.82 164.88 756.91L168.62 759.69C182.502 760.773 196.455 760.573 210.3 759.09C307.99 749.01 393.3 680.93 435.3 580.54C473.37 489.46 528.75 454.86 573.91 442.82C572.637 438.62 571.427 434.423 570.28 430.23Z",fill:"url(#paint4_linear)"}),a.createElement("path",{d:"M86.09 231.67C29.49 293.67 -0.350001 380.86 0.679999 465.95C1.27 515.46 14.3 562.04 35.68 604.83C38.887 611.25 42.287 617.583 45.88 623.83C164.87 504.39 121.88 326.42 86.09 231.67Z",fill:"url(#paint5_linear)"}),a.createElement("path",{d:"M299.44 442.82C260.94 341.82 302.06 253.95 338.77 201.82C314.561 189.357 293.024 172.28 275.37 151.55C246.768 151.001 218.283 155.354 191.15 164.42C147.87 178.75 111.31 203.92 82.06 235.96C117.06 328.63 159.12 502.72 42.76 619.54C64.86 658.14 93.76 693.3 126.24 724.3C139.051 736.513 152.625 747.899 166.88 758.39C240.92 695.33 356.29 591.92 299.44 442.82Z",fill:"url(#paint6_linear)"}),a.createElement("path",{d:"M443 94.13C523.57 125.92 580 134.53 620.91 133.3L622.09 132.54C469.67 -127.46 270.37 77.24 270.37 77.24L270.66 77.75C313.65 70.13 376.13 67.76 443 94.13Z",fill:"url(#paint7_linear)"}),a.createElement("path",{d:"M444 92.33C377.17 66 314.33 67 270.62 77.75C385.23 278.69 603.05 144.75 620.87 133.3C579.93 134.53 524.57 124.12 444 92.33Z",fill:"url(#paint8_linear)"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"paint0_linear",x1:"-88.5",y1:"273.5",x2:"843.5",y2:"832",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#E54033"}),a.createElement("stop",{offset:"0.489583","stop-color":"#FECA1A"}),a.createElement("stop",{offset:"1","stop-color":"#AFD803"})),a.createElement("linearGradient",{id:"paint1_linear",x1:"263632",y1:"31154.5",x2:"205286",y2:"-28862.6",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0.15","stop-color":"#6CBF00"}),a.createElement("stop",{offset:"1","stop-color":"#AFD803"})),a.createElement("linearGradient",{id:"paint2_linear",x1:"72.43",y1:"766.73",x2:"656.43",y2:"624.73",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0.21","stop-color":"#E54033"}),a.createElement("stop",{offset:"0.84","stop-color":"#FECA1A"})),a.createElement("linearGradient",{id:"paint3_linear",x1:"532.54",y1:"727.34",x2:"712.74",y2:"728.69",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#FECA1A"}),a.createElement("stop",{offset:"0.4","stop-color":"#FECA1A"}),a.createElement("stop",{offset:"1","stop-color":"#AFD803"})),a.createElement("linearGradient",{id:"paint4_linear",x1:"124.65",y1:"770.37",x2:"494.1",y2:"270.2",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0.16","stop-color":"#E54033"}),a.createElement("stop",{offset:"0.84","stop-color":"#FECA1A"})),a.createElement("linearGradient",{id:"paint5_linear",x1:"70.85",y1:"273.39",x2:"54.49",y2:"596.45",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-color":"#FECA1A"}),a.createElement("stop",{offset:"0.76","stop-color":"#E54033"})),a.createElement("linearGradient",{id:"paint6_linear",x1:"251.58",y1:"189.5",x2:"152.91",y2:"564.17",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0.16","stop-color":"#FECA1A"}),a.createElement("stop",{offset:"1","stop-color":"#E54033"})),a.createElement("linearGradient",{id:"paint7_linear",x1:"289.8",y1:"10.1199",x2:"655.13",y2:"144.78",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0.15","stop-color":"#6CBF00"}),a.createElement("stop",{offset:"1","stop-color":"#AFD803"})),a.createElement("linearGradient",{id:"paint8_linear",x1:"263631",y1:"31154.2",x2:"205285",y2:"-28862.9",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:"0.15","stop-color":"#6CBF00"}),a.createElement("stop",{offset:"1","stop-color":"#AFD803"}))))}},146:(e,t,n)=>{n.d(t,{K:()=>l});var r=n(53219),o=n(83117),a=n(67294);function l(e){return a.createElement(r.Z,(0,o.Z)({},e,{viewBox:"0 0 439 439"}),a.createElement("path",{d:"M439 219.5C439 340.727 340.727 439 219.5 439C98.2735 439 0 340.727 0 219.5C0 98.2735 98.2735 0 219.5 0C340.727 0 439 98.2735 439 219.5Z",fill:"#F2C45B"}),a.createElement("path",{d:"M115.89 314.105C117.797 312.81 119.577 310.869 120.463 308.115C121.449 305.053 120.868 302.359 120.406 300.868C120.391 300.818 120.375 300.768 120.359 300.719L120.727 298.573C121.741 299.144 122.91 299.911 124.243 300.848C124.563 301.074 125.012 301.394 125.479 301.727C126.093 302.165 126.739 302.626 127.171 302.927C127.91 303.441 128.962 304.159 130.076 304.75C159.553 323.071 183.93 330.624 203.293 329.688C223.311 328.721 237.35 318.651 244.591 303.954C251.59 289.749 251.834 272.147 246.929 255.841C241.992 239.429 231.61 223.48 216.135 212.442C190.058 193.843 166.164 165.564 154.082 141.517C147.946 129.305 145.505 119.456 146.149 113.025C146.449 110.032 147.366 108.222 148.463 107.056C149.561 105.89 151.56 104.604 155.413 103.969C163.574 102.625 173.014 99.6859 182.592 96.7033C186.311 95.5452 190.051 94.3806 193.745 93.3003C207.552 89.263 222.168 85.8713 237.532 85.9002C267.33 85.9561 302.301 98.8936 339.121 152.713C386.421 221.849 360.453 299.106 305.963 339.692C278.788 359.932 244.883 370.676 210.042 366.591C178.671 362.913 145.814 347.126 115.89 314.105ZM121.376 296.212C121.376 296.213 121.366 296.233 121.342 296.269C121.363 296.228 121.375 296.21 121.376 296.212ZM118.415 297.562C118.413 297.56 118.444 297.563 118.509 297.579C118.449 297.572 118.416 297.564 118.415 297.562Z",fill:"white",stroke:"black","stroke-width":"17.8"}),a.createElement("path",{d:"M142.967 107.5C142.967 107.5 227.467 84.9999 245.967 84.9999C264.467 84.9999 338.393 120.898 359.967 186.5C390.552 279.5 307.362 340.478 297.967 334.5C387.467 260.5 240.967 123.716 168.967 134C159.967 135.286 164.967 143 164.967 143L162.967 163L147.967 138L142.967 107.5Z",fill:"black"}),a.createElement("path",{d:"M347.656 158.526C374.34 205.498 368.794 178.605 362.871 232.302C373.833 214.569 390.973 227.847 398.052 234.628C399.321 235.843 401.414 235.089 401.355 233.334C401.085 225.369 398.803 208.158 385.618 189.693C367.538 164.373 347.656 158.526 347.656 158.526Z",fill:"black"}),a.createElement("path",{d:"M362.871 232.302C368.794 178.605 374.34 205.498 347.656 158.526C347.656 158.526 367.538 164.373 385.618 189.693C398.803 208.158 401.085 225.369 401.355 233.334C401.414 235.089 399.321 235.843 398.052 234.628C390.973 227.847 373.833 214.569 362.871 232.302ZM362.871 232.302C363.891 229.781 365.484 225.847 365.484 225.847",stroke:"black"}),a.createElement("path",{d:"M132.971 225.139C121.713 244.201 98.6131 242.771 99.0553 265.505C119.687 311.345 119.81 308.057 119.81 308.057C158.027 286.587 142.322 239.181 136.651 225.238C136.01 223.662 133.836 223.675 132.971 225.139Z",fill:"black"}),a.createElement("path",{d:"M46.3388 267.283C68.2902 270.147 81.385 251.064 99.0273 265.409C122.448 309.889 119.781 307.961 119.781 307.961C79.3339 324.859 51.6467 283.297 44.1509 270.244C43.3037 268.769 44.6517 267.063 46.3388 267.283Z",fill:"black"}),a.createElement("path",{d:"M230.467 239.002C230.467 239.002 252.467 261.505 240.967 265.002C226.627 256.176 200.93 263.035 188.335 267.283C185.234 268.329 182.194 265.577 183.312 262.501C187.595 250.716 198.171 228.9 218.467 226.002C230.467 223 230.467 239.002 230.467 239.002Z",fill:"black"}),a.createElement("path",{d:"M243.967 129C241.467 125.5 236.467 116 251.967 116C267.467 116 291.151 133.551 295.967 140.043C294.467 144 284.467 144.885 279.467 144.5C274.467 144.115 265.967 143.293 259.467 140.043C252.967 136.793 246.467 132.5 243.967 129Z",fill:"white"}))}},63471:(e,t,n)=>{n.d(t,{N:()=>l});var r=n(53219),o=n(83117),a=n(67294);function l(e){return a.createElement(r.Z,(0,o.Z)({},e,{viewBox:"0 0 251 283.9"}),a.createElement("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"125.5",y1:"52.0877",x2:"125.5",y2:"253.0878",gradientTransform:"matrix(1 0 0 -1 0 285.9755)"},a.createElement("stop",{offset:"0"}),a.createElement("stop",{offset:"1"})),a.createElement("path",{d:"M125.5,233.9c-43.1,0-78.1-35-78.1-78.1c0-41.9,70.7-115.9,73.7-119l3.7-3.9l3.8,3.8c3.1,3.1,75,77.1,75,119 C203.6,198.9,168.6,233.9,125.5,233.9L125.5,233.9z M124.9,48c-6.2,6.7-19.2,21.2-32.1,38.2c-22.9,30.2-35,54.2-35,69.5 c0,37.3,30.4,67.7,67.7,67.7s67.7-30.4,67.7-67.7c0-15.3-12.3-39.3-35.6-69.5C144.5,69.3,131.2,54.7,124.9,48z"}),a.createElement("linearGradient",{id:"SVGID_2_",gradientUnits:"userSpaceOnUse",x1:"125.6",y1:"27.0877",x2:"125.6",y2:"269.3627",gradientTransform:"matrix(1 0 0 -1 0 285.9755)"},a.createElement("stop",{offset:"0"}),a.createElement("stop",{offset:"1"})),a.createElement("path",{d:"M125.5,258.9c-56.9,0-103.1-46.3-103.1-103.1c0-55.6,77.6-133.2,80.9-136.4c2-2,5.4-2,7.4,0s2,5.4,0,7.4 c-0.8,0.8-77.8,77.8-77.8,129c0,51.1,41.6,92.7,92.7,92.7s92.7-41.6,92.7-92.7c0-21-13.6-50-39.4-84.1 c-19.8-26.1-39.7-45.9-39.9-46.1c-2.1-2-2.1-5.3,0-7.4c2-2.1,5.3-2.1,7.4,0c3.4,3.3,82.4,81.9,82.4,137.6 C228.6,212.6,182.4,258.9,125.5,258.9L125.5,258.9z"}),a.createElement("linearGradient",{id:"SVGID_3_",gradientUnits:"userSpaceOnUse",x1:"125.5",y1:"2.0877",x2:"125.5",y2:"285.9755",gradientTransform:"matrix(1 0 0 -1 0 285.9755)"},a.createElement("stop",{offset:"0"}),a.createElement("stop",{offset:"1"})),a.createElement("path",{d:"M125.5,283.9C56.3,283.9,0,227.6,0,158.4c0-28.6,14.4-63.8,42.7-104.5C63.6,23.9,84.1,2.5,85,1.6 c2-2.1,5.3-2.1,7.4-0.1s2.1,5.3,0.1,7.4C92.3,9.1,71.6,30.7,51.2,60c-26.7,38.3-40.8,72.3-40.8,98.4c0,63.4,51.6,115.1,115.1,115.1 s115.1-51.6,115.1-115.1c0-26.1-14.2-60.1-41.1-98.4C178.9,30.7,158,9.1,157.8,8.9c-2-2.1-2-5.4,0.1-7.4s5.4-2,7.4,0.1 c3.5,3.6,85.7,89,85.7,156.8C251,227.6,194.7,283.9,125.5,283.9z"}))}},66769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(83117),o=(n(67294),n(3905));n(63471),n(63648),n(26295),n(46590),n(146);const a={sidebar_position:40,slug:"."},l="Events",s={unversionedId:"feeds/examples/events/index",id:"feeds/examples/events/index",title:"Events",description:"Switchboard oracles can be used to resolve the outcome of events. The following",source:"@site/docs/feeds/examples/events/index.mdx",sourceDirName:"feeds/examples/events",slug:"/feeds/examples/events/",permalink:"/sbv2-core/feeds/examples/events/",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,slug:"."},sidebar:"dataFeeds",previous:{title:"TWAP",permalink:"/sbv2-core/feeds/examples/twap/"},next:{title:"Private APIs",permalink:"/sbv2-core/feeds/examples/private-apis/"}},i={},c=[{value:"European Premier League",id:"european-premier-league",level:3}],C={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,"Switchboard oracles can be used to resolve the outcome of events. The following\nexamples will resolve to the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"0")," - No Result"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"1")," - Home Team Win"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2")," - Away Team Win")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h3",{id:"european-premier-league"},"European Premier League")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ESPN")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="EPL_Man_United_v_Leicester_City_10_16_21.json"',title:'"EPL_Man_United_v_Leicester_City_10_16_21.json"'},'{\n  "name": "EPL MAN v LEI 10/16/2021",\n  "tasks": [\n    {\n      "httpTask": {\n        "url": "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard/605965"\n      }\n    },\n    {\n      "conditionalTask": {\n        "attempt": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.competitions[?(@.status.type.completed && @.id == \'605965\')].competitors[?(@.winner && @.homeAway == \'home\')].id"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 1\n                  }\n                }\n              ],\n              "onFailure": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.competitions[?(@.status.type.completed && @.id == \'605965\')].competitors[?(@.winner && @.homeAway == \'away\')].id"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 2\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        "onFailure": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.competitions[?(@.status.type.completed && @.id == \'605965\')].id"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 0\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Yahoo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="EPL_Man_United_v_Leicester_City_10_16_21.json"',title:'"EPL_Man_United_v_Leicester_City_10_16_21.json"'},'{\n  "name": "EPL MAN v LEI 10/16/2021",\n  "tasks": [\n    {\n      "httpTask": {\n        "url": "https://sports.yahoo.com/soccer/premier-league/leicester-city-manchester-united-2247085"\n      }\n    },\n    {\n      "regexExtractTask": {\n        "pattern": "root.App.main\\\\s+=\\\\s+(\\\\{.*\\\\})",\n        "groupNumber": 1\n      }\n    },\n    {\n      "conditionalTask": {\n        "attempt": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.context.dispatcher.stores.GamesStore.games[?(@.gameid == \'soccer.g.2247085\' && @.status_type == \'final\' && @.winning_team_id == @.home_team_id)].attendance"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 1\n                  }\n                }\n              ],\n              "onFailure": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.context.dispatcher.stores.GamesStore.games[?(@.gameid == \'soccer.g.2247085\' && @.status_type == \'final\' && @.winning_team_id == @.away_team_id)].attendance"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 2\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        "onFailure": [\n          {\n            "conditionalTask": {\n              "attempt": [\n                {\n                  "jsonParseTask": {\n                    "path": "$.context.dispatcher.stores.GamesStore.games[?(@.gameid == \'soccer.g.2247085\' && @.status_type == \'final\')].attendance"\n                  }\n                },\n                {\n                  "valueTask": {\n                    "value": 0\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'))))}p.isMDXComponent=!0}}]);