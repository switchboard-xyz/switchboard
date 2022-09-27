"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(83117),o=(r(67294),r(3905));const a={sidebar_position:30,title:"Monitoring"},l=void 0,i={unversionedId:"oracles/monitoring",id:"oracles/monitoring",title:"Monitoring",description:"Metrics",source:"@site/docs/oracles/monitoring.mdx",sourceDirName:"oracles",slug:"/oracles/monitoring",permalink:"/sbv2-core/oracles/monitoring",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Monitoring"},sidebar:"operator",previous:{title:"Google Cloud Platform",permalink:"/sbv2-core/oracles/gcp"},next:{title:"Crank",permalink:"/sbv2-core/crank/"}},s={},c=[{value:"Metrics",id:"metrics",level:2},{value:"Alerts",id:"alerts",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"The oracle uses open telemetry for emitting metrics.\nAs such, at the time of this writing, the oracle supports prometheus (as well as any wire-compatible solution like cortex, thanos or victoria metrics) and GCP monitoring.\nThis can be configured via the ",(0,o.kt)("inlineCode",{parentName:"p"},"$METRICS_EXPORTER")," environmental variable ('prometheus' and 'gcp')"),(0,o.kt)("p",null,"If GCP monitoring is used, all data collection and visualization is handled by the platform although users are advised to closely watch billing."),(0,o.kt)("p",null,"For users that are either not running on GCP or want a more cost effective solution, grafana and victoria metrics (prometheus compatible scraping+storage) manifests are provided in the kubernetes-manifests repo."),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,"List of metrics"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Metric Name"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_aggregator_variance"),(0,o.kt)("td",null,"the ratio between the largest and smallest value from all aggregated responses for a given job")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_heartbeat_failure_total"),(0,o.kt)("td",null,"a counter for every time there is a heartbeat failure")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_job_failure_total"),(0,o.kt)("td",null,"a counter for every time there is a job failure")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_job_success_total"),(0,o.kt)("td",null,"a counter for every time there is a successful completion of a job")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_job_posting_total"),(0,o.kt)("td",null,"a counter for every time there is a job posting")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_log_age"),(0,o.kt)("td",null,"a value recorder for the age of the job logs when processed")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_node_aggregation_insufficient_responses_total"),(0,o.kt)("td",null,"a counter for every time there is an insufficient number of aggregated responses for a job")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_node_balance"),(0,o.kt)("td",null,"each oracle will report its balance with a label indicating the public key")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"switchboard_save_result_failure_total"),(0,o.kt)("td",null,"a counter for the number of times an oracle is unable to commit a transaction to the blockchain")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scheduler_node_balance"),(0,o.kt)("td",null,"most recent balance of the scheduler wallet")))),(0,o.kt)("h2",{id:"alerts"},"Alerts"),(0,o.kt)("p",null,"Pagerduty allows you to get real time alerts on your oracle. You will need to sign up for an account and get an API key for access."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$PAGERDUTY_EVENT_KEY")," is an optional environment variable to help you manage your cluster. You may wish to ignore this variable if you are comfortable with your own monitoring solutions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.pagerduty.com/docs/generating-api-keys#section-events-api-keys"},"Pagerduty - Generating API Keys"))))}p.isMDXComponent=!0}}]);