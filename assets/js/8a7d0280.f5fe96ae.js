"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=i(t),p=a,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(83117),a=t(67294),o=t(86010),l=t(12466),c=t(76775),u=t(91980),i=t(67392),s=t(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:d(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=f(e),[l,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,i]=m({queryString:t,groupId:r}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,o]=(0,s.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),h=(()=>{const e=null!=u?u:d;return p({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var h=t(72389);const v="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:c,selectValue:u,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),f=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==c&&(d(n),u(r))},p=e=>{var n;let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{var r;const n=s.indexOf(e.currentTarget)+1;t=null!=(r=s[n])?r:s[0];break}case"ArrowLeft":{var a;const n=s.indexOf(e.currentTarget)-1;t=null!=(a=s[n])?a:s[s.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,key:n,ref:e=>s.push(e),onKeyDown:p,onClick:f},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":c===n})}),null!=t?t:n)})))}function w(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function _(e){const n=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(w,(0,r.Z)({},e,n)))}function k(e){const n=(0,h.Z)();return a.createElement(_,(0,r.Z)({key:String(n)},e))}},85930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>f,toc:()=>m});var r=t(83117),a=(t(67294),t(3905)),o=t(90814),l=t(85383),c=t(78134),u=t(74866),i=t(85162);const s={sidebar_position:1,title:"On-Chain"},d=void 0,f={unversionedId:"solana/feeds/on-chain",id:"solana/feeds/on-chain",title:"On-Chain",description:"",source:"@site/docs/solana/feeds/on-chain.mdx",sourceDirName:"solana/feeds",slug:"/solana/feeds/on-chain",permalink:"/solana/feeds/on-chain",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"On-Chain"}},p={},m=[],b={toc:m};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"preview",label:"Preview",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},c.Z)),(0,a.kt)(i.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,a.kt)(o.Z,{language:"rust",mdxType:"CodeBlock"},l.Z))))}h.isMDXComponent=!0},78134:(e,n,t)=>{t.d(n,{Z:()=>r});const r="use anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\nuse switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\n// check feed owner\nlet owner = *aggregator.owner;\nif owner != SWITCHBOARD_PROGRAM_ID {\n    return Err(error!(ErrorCode::InvalidSwitchboardAccount));\n}\n\n// deserialize account info\nlet feed = ctx.accounts.aggregator.load()?;\n// OR\nlet feed = AggregatorAccountData::new(feed_account_info)?;\n\n// get result\nlet decimal: f64 = feed.get_result()?.try_into()?;\n\n// check if feed has been updated in the last 5 minutes\nfeed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)?;\n\n// check if feed exceeds a confidence interval of +/i $0.80\nfeed.check_confidence_interval(SwitchboardDecimal::from_f64(0.80))?;"},85383:(e,n,t)=>{t.d(n,{Z:()=>r});const r='use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::clock;\nuse std::convert::TryInto;\npub use switchboard_v2::{AggregatorAccountData, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID};\n\ndeclare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");\n\n#[derive(Accounts)]\n#[instruction(params: ReadResultParams)]\npub struct ReadResult<\'info> {\n    pub aggregator: AccountLoader<\'info, AggregatorAccountData>,\n}\n\n#[derive(Clone, AnchorSerialize, AnchorDeserialize)]\npub struct ReadResultParams {\n    pub max_confidence_interval: Option<f64>,\n}\n\n#[program]\npub mod anchor_feed_parser {\n    use super::*;\n\n    pub fn read_result(\n        ctx: Context<ReadResult>,\n        params: ReadResultParams,\n    ) -> anchor_lang::Result<()> {\n        let feed = &ctx.accounts.aggregator.load()?;\n\n        // get result\n        let val: f64 = feed.get_result()?.try_into()?;\n\n        // check whether the feed has been updated in the last 300 seconds\n        feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)\n            .map_err(|_| error!(FeedErrorCode::StaleFeed))?;\n\n        // check feed does not exceed max_confidence_interval\n        if let Some(max_confidence_interval) = params.max_confidence_interval {\n            feed.check_confidence_interval(SwitchboardDecimal::from_f64(max_confidence_interval))\n                .map_err(|_| error!(FeedErrorCode::ConfidenceIntervalExceeded))?;\n        }\n\n        msg!("Current feed result is {}!", val);\n\n        Ok(())\n    }\n}\n\n#[error_code]\n#[derive(Eq, PartialEq)]\npub enum FeedErrorCode {\n    #[msg("Not a valid Switchboard account")]\n    InvalidSwitchboardAccount,\n    #[msg("Switchboard feed has not been updated in 5 minutes")]\n    StaleFeed,\n    #[msg("Switchboard feed exceeded provided confidence interval")]\n    ConfidenceIntervalExceeded,\n}\n'}}]);