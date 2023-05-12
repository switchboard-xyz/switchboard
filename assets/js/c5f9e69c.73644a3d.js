"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5021],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,p=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(p,o(o({ref:t},u),{},{components:n})):a.createElement(p,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(95907),i=(n(49231),n(54852));const r={sidebar_position:1,slug:"/v3",title:"What is Switchboard V3?"},o=void 0,s={unversionedId:"arch/v3/v3",id:"arch/v3/v3",title:"What is Switchboard V3?",description:"- Switchboard Attestation Program: A Comprehensive Guide",source:"@site/docs/arch/v3/v3.mdx",sourceDirName:"arch/v3",slug:"/v3",permalink:"/v3",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/v3",title:"What is Switchboard V3?"},sidebar:"gettingStartedSidebar",previous:{title:"Randomness",permalink:"/arch/randomness"},next:{title:"What are Secure Enclaves?",permalink:"/tee"}},c={},l=[{value:"Introduction to the Switchboard Attestation Program",id:"introduction-to-the-switchboard-attestation-program",level:2},{value:"Exploring SGX Attestation",id:"exploring-sgx-attestation",level:2},{value:"Crucial Components in the Attestation Process",id:"crucial-components-in-the-attestation-process",level:2},{value:"Attestation Lifecycle",id:"attestation-lifecycle",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions-1",level:2},{value:"Role of VerifierQueue in the attestation process",id:"role-of-verifierqueue-in-the-attestation-process",level:3},{value:"Adding, updating, and removing MRENCLAVE measurements",id:"adding-updating-and-removing-mrenclave-measurements",level:3},{value:"Understanding PermissionAccount and its role in access control",id:"understanding-permissionaccount-and-its-role-in-access-control",level:3},{value:"How SGX enclaves generate attestation data (quote) for QuoteAccount",id:"how-sgx-enclaves-generate-attestation-data-quote-for-quoteaccount",level:3},{value:"Switchboard Attestation Program as a special oracle",id:"switchboard-attestation-program-as-a-special-oracle",level:3},{value:"Heartbeat mechanism and maintaining an active SGX enclave",id:"heartbeat-mechanism-and-maintaining-an-active-sgx-enclave",level:3}],u={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},"Switchboard Attestation Program: A Comprehensive Guide"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction-to-the-switchboard-attestation-program"},"Introduction to the Switchboard Attestation Program")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exploring-sgx-attestation"},"Exploring SGX Attestation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sgx-runtime-environment"},"SGX Runtime Environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#crucial-components-in-the-attestation-process"},"Crucial Components in the Attestation Process")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attestation-lifecycle"},"Attestation Lifecycle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#verifierqueues-role-in-the-attestation-process"},"VerifierQueue's role in the attestation process")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#managing-mrenclave-measurements"},"Managing MRENCLAVE measurements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#permissionaccount-and-its-role-in-access-control"},"PermissionAccount and its role in access control")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attestation-data-quote-generation-for-quoteaccount"},"Attestation data (quote) generation for QuoteAccount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#switchboard-attestation-program-as-a-unique-oracle"},"Switchboard Attestation Program as a unique oracle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#maintaining-an-active-sgx-enclave-with-the-heartbeat-mechanism"},"Maintaining an active SGX enclave with the heartbeat mechanism"))))))),(0,i.kt)("h2",{id:"introduction-to-the-switchboard-attestation-program"},"Introduction to the Switchboard Attestation Program"),(0,i.kt)("p",null,"Previously, Switchboard's security model depended on economic incentives where\ndata reporters were rewarded or penalized based on the proximity of their\nreported data to the median. Oracle operators had to lock up a portion of\neconomic stake and receive explicit approval from the oracle queue's authority.\nAlthough this model provided a degree of decentralization and security, it faced\nchallenges in aligning the incentives of oracles with DeFi protocols."),(0,i.kt)("p",null,"The Switchboard Attestation Program builds upon Switchboard V2s enconomic\nincentives by leveraging TEEs. TEEs allow for unique digital signatures to be\ncreated for software running within its enclave, along with the data generated\nby that software. This ensures the secure and verifiable confirmation of the\noracles' integrity and authenticity."),(0,i.kt)("p",null,"The Switchboard Attestation Program is a sibling program to the Switchboard\noracle program, and is responsible for verifying attestation quotes on-chain,\nwhich grants or revokes an oracle's permissions based on the contents within the\nsecure enclave. By verifying the code's integrity inside the enclave, we can\nensure the code hasn't been tampered with and that our application will behave\nas expected."),(0,i.kt)("p",null,"A ServiceQueueAccount manages a set of valid\n",(0,i.kt)("a",{parentName:"p",href:"/tee/#term-mrenclave"},"MRENCLAVE")," measurements, representing the permitted\nsoftware versions an application can run. Any code changes will alter the\nenclave's state, necessitating the addition of a new measurement by the\nServiceQueueAccount ",(0,i.kt)("inlineCode",{parentName:"p"},"authority")," before oracles can upgrade. If a version is\nfound to have a bug, it can be revoked, and oracles will automatically be\nremoved."),(0,i.kt)("p",null,"An oracle account represents a specific SGX enclave. When an oracle is\nprovisioned, it creates a QuoteAccount on-chain with the MRENCLAVE measurement\ndetailing the software version it runs. Quote verification oracles constantly\nmonitor the chain for oracles requesting verification of their enclave. Upon\ndetecting such an event, it calls the program and updates or revokes the\nassociated PermissionAccount based on whether the measurement is allowed on the\noracle's ServiceQueueAccount."),(0,i.kt)("p",null,"ServiceQueueAccounts dictate how often oracles must verify their enclave,\nensuring that enclaves consistently update and maintain software patches."),(0,i.kt)("p",null,"With the Attestation Program, Switchboard V3 enables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Oracle Verification"),": Oracles are encapsulated within TEEs, generating a\nunique digital signature that can be posted on-chain for public verification.\nThis ensures that the oracles can be trusted while maintaining a decentralized\nand verifiable system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execution Verification"),": As oracles participate in a queue and handle user\nrequests, the executions of data feeds, functions, and other tasks can be\nverifiably carried out. This allows users to confirm that transactions are\nstrictly dictated by the code that created them, ensuring system integrity and\nsecurity.")),(0,i.kt)("h2",{id:"exploring-sgx-attestation"},"Exploring SGX Attestation"),(0,i.kt)("p",null,"Intel Software Guard Extensions (SGX) offer a secure execution environment\ncalled an enclave, where sensitive code and data are protected from unauthorized\naccess or tampering. The attestation process verifies the enclave's identity and\nvalidates its code and data, ensuring authenticity and integrity."),(0,i.kt)("p",null,"The Switchboard Attestation Program uses SGX attestation to establish trust in\noracle applications, providing a robust mechanism for verifying secure code\nexecution within the Trusted Execution Environment (TEE)."),(0,i.kt)("p",null,"Switchboard services utilize Gramine for the runtime environment. Gramine allows\nSGX enclaves to operate as if they were running on a standard operating system,\nmanaging system calls and other essential interactions."),(0,i.kt)("h2",{id:"crucial-components-in-the-attestation-process"},"Crucial Components in the Attestation Process"),(0,i.kt)("p",null,"The Switchboard attestation process involves several components that work\ntogether to facilitate attestation and verification of SGX enclaves:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ServiceQueueAccount"),": Manages the list of allowed enclave measurements\n(MRENCLAVEs) and maintains a dedicated VerifierQueue to verify attestations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NodeAccount"),": Represents an individual SGX enclave, connects to the\nServiceQueueAccount, and has a 1:N relationship with QuoteAccount."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PermissionAccount"),": An account between the ",(0,i.kt)("em",{parentName:"li"},"ServiceQueueAccount")," and the\n",(0,i.kt)("em",{parentName:"li"},"NodeAccount")," dictating whether the ",(0,i.kt)("em",{parentName:"li"},"NodeAccount")," is permitted to perform\non-chain actions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"QuoteAccount"),": Stores the attestation data (quote) generated by the SGX\nenclave for a given NodeAccount.")),(0,i.kt)("h2",{id:"attestation-lifecycle"},"Attestation Lifecycle"),(0,i.kt)("p",null,"The Switchboard Attestation Program follows a structured lifecycle to ensure the\nsecure and trustworthy execution of code within the TEE:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Initialize the ServiceQueueAccount"),(0,i.kt)("li",{parentName:"ol"},"Register permitted MRENCLAVE measurements"),(0,i.kt)("li",{parentName:"ol"},"Create NodeAccount and PermissionAccount"),(0,i.kt)("li",{parentName:"ol"},"Run an SGX Switchboard function, creates QuoteAccount from compiled binary"),(0,i.kt)("li",{parentName:"ol"},"QuoteAccount emits a request to the VerifierQueue associated with the\nServiceQueue to verify its MRENCLAVE measurement"),(0,i.kt)("li",{parentName:"ol"},"The VerifierQueue verifies the MRENCLAVE measurement on-chain (attestation)"),(0,i.kt)("li",{parentName:"ol"},"The PermissionAccount associated with the NodeAccount has the permissions\nenabled"),(0,i.kt)("li",{parentName:"ol"},"Maintain an active and trustworthy SGX enclave through heartbeats")),(0,i.kt)("p",null,"By adhering to this lifecycle, the Switchboard Attestation Program ensures the\nsecurity, authenticity, and trustworthiness of SGX enclaves operating within the\nTEE."),(0,i.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("p",null,"Here, we address some common questions and provide in-depth explanations to help\nyou better understand the Switchboard Attestation Program and its role in\ndecentralized applications."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#faq-1"},"VerifierQueue's role in the attestation process")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#faq-2"},"Managing MRENCLAVE measurements")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#faq-3"},"PermissionAccount and its role in access control")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#faq-4"},"Attestation data (quote) generation for QuoteAccount")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#faq-5"},"Switchboard Attestation Program as a special oracle")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#faq-6"},"Heartbeat mechanism and maintaining an active SGX enclave"))),(0,i.kt)("p",null,"Please refer to the provided questions and answers to gain a deeper\nunderstanding of the Switchboard Attestation Program and its inner workings.\nThis comprehensive guide aims to help you build secure and reliable\ndecentralized applications by leveraging the SGX technology and attestation\nprocess."),(0,i.kt)("h2",{id:"frequently-asked-questions-1"},"Frequently Asked Questions"),(0,i.kt)("a",{name:"faq-1"}),(0,i.kt)("h3",{id:"role-of-verifierqueue-in-the-attestation-process"},"Role of VerifierQueue in the attestation process"),(0,i.kt)("p",null,"The VerifierQueue is a set of on-chain oracles that watch the chain for events\nfrom QuoteAccounts to verify their MRENCLAVE measurements. When verified\non-chain, the associated PermissionAccounts' permission flags are enabled,\nindicating they have permission to operate on the queue and be delegated work or\ncompute requests."),(0,i.kt)("a",{name:"faq-2"}),(0,i.kt)("h3",{id:"adding-updating-and-removing-mrenclave-measurements"},"Adding, updating, and removing MRENCLAVE measurements"),(0,i.kt)("p",null,"The ServiceQueueAccount's ",(0,i.kt)("inlineCode",{parentName:"p"},"authority")," field is allowed to make changes to the\npermitted enclave measurements. This could be a DAO-controlled account where\nparticipants vote on new trusted code to operate on their program or dApp."),(0,i.kt)("a",{name:"faq-3"}),(0,i.kt)("h3",{id:"understanding-permissionaccount-and-its-role-in-access-control"},"Understanding PermissionAccount and its role in access control"),(0,i.kt)("p",null,"The PermissionAccount is a program-derived address between a ServiceQueueAccount\nand NodeAccount. When a NodeAccount attempts to operate on a\nServiceQueueAccount, the PermissionAccount is loaded and its settings are\nverified against the ServiceQueueAccount settings."),(0,i.kt)("a",{name:"faq-4"}),(0,i.kt)("h3",{id:"how-sgx-enclaves-generate-attestation-data-quote-for-quoteaccount"},"How SGX enclaves generate attestation data (quote) for QuoteAccount"),(0,i.kt)("p",null,"The QuoteAccount keypair is generated during the initial execution of the code\nusing entropy derived from within the SGX enclave. The quote is generated from\nthe a fingerprint of the application binary running within the enclave to verify\nit hasn't been tampered with. The oracles use the Gramine runtime, which\nprovides the abstraction to run the application."),(0,i.kt)("a",{name:"faq-5"}),(0,i.kt)("h3",{id:"switchboard-attestation-program-as-a-special-oracle"},"Switchboard Attestation Program as a special oracle"),(0,i.kt)("p",null,"The attestation oracles verify the signed measurement against the queue's\naccepted MRENCLAVEs and invoke an on-chain transaction, which performs the\naccount checks. If the measurement is invalid, the NodeAccount's associated\nPermissionAccount's permissions are revoked, and the Node is blocked from\nperforming any access-controlled actions like heartbeating or being delegated\nwork."),(0,i.kt)("a",{name:"faq-6"}),(0,i.kt)("h3",{id:"heartbeat-mechanism-and-maintaining-an-active-sgx-enclave"},"Heartbeat mechanism and maintaining an active SGX enclave"),(0,i.kt)("p",null,"A NodeAccount is required to heartbeat before the\n",(0,i.kt)("inlineCode",{parentName:"p"},"service_queue.last_heartbeat"),". If they do not, they are removed from the queue,\nand their permissions are revoked, meaning they will not be assigned any future\nwork until they heartbeat again. A NodeAccount is also required to re-verify its\nMRENCLAVE measurement before the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_queue.max_quote_verification_age"),"."))}h.isMDXComponent=!0}}]);