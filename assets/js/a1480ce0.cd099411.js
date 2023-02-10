"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70780],{10686:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(44267),r=n(15861),i=n(21519),o=n(78445),l=n(44073),s=n(67294),p=n(39960),d=n(13264),u=n(92949);const m=(0,d.Z)(l.Z)((e=>{let{theme:t,dark:n}=e;return{display:"flex",flexDirection:"row",justifyItems:"baseline",background:n?"rgba(42, 56, 68, 1)":"rgba(255, 255, 255, 0.6)",border:(n?.15:.1)+"rem solid var(--ifm-navbar-link-color)",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba(107 107 107, 0.03)",boxSizing:"border-box",width:"100%",height:"100%",verticalAlign:"middle",textDecoration:"none",[t.breakpoints.down(300)]:{paddingLeft:""},transition:"transform 0.15s ease-in-out","&&&:hover":{background:n?"rgba(42, 56, 68, 1)":"white",transform:"scale3d(1.05, 1.05, 1)"}}})),c=(0,d.Z)(o.Z)((e=>{let{theme:t}=e;return{display:"flex",maxHeight:"96px"}}));function k(e){let{title:t,image:n,imageDark:o,description:l,to:d,sx:k}=e;const{colorMode:f}=(0,u.I)();return s.createElement(p.Z,{href:d,style:{textDecoration:"none"}},s.createElement(m,{dark:"dark"===f?1:0,sx:k},s.createElement(a.Z,{sx:{height:"100%",width:"100%"}},s.createElement(c,{avatar:s.createElement("div",{style:{height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},"dark"===f&&o?o:n),title:t,titleTypographyProps:{fontSize:"1.25rem",color:"var(--ifm-navbar-link-color)",fontWeight:"var(--ifm-font-weight-bold)"}}),l?s.createElement(s.Fragment,null,s.createElement(i.Z,{sx:{marginBottom:"1rem"}}),s.createElement(r.Z,{variant:"body2",color:"textSecondary",component:"p",sx:{color:"var(--ifm-navbar-link-color)",fontSize:"1.1rem"}},l)):s.createElement(s.Fragment,null))))}},17547:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(86886),r=n(67294),i=n(10686);function o(e){let{items:t,cols:n,sx:o,direction:l,justifyContent:s,alignItems:p}=e;return r.createElement(a.ZP,{container:!0,spacing:3,direction:null!=l?l:"row",justifyContent:s,alignItems:p},t.map((e=>{var t;return r.createElement(a.ZP,{key:e.title,item:!0,style:{flexGrow:1},xs:12,md:6,lg:Math.floor(null!=(t=12/n)?t:2)},r.createElement(i.Z,{title:e.title,image:e.image,imageDark:e.imageDark,to:e.to,description:e.description,sx:o}))})))}},32309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),i=n(17547),o=(n(10686),n(44996));const l={sidebar_position:1,title:"vrf-flip"},s=void 0,p={unversionedId:"solana/dev/examples/vrf-flip",id:"solana/dev/examples/vrf-flip",title:"vrf-flip",description:"Quick Links",source:"@site/docs/solana/dev/examples/vrf-flip.mdx",sourceDirName:"solana/dev/examples",slug:"/solana/dev/examples/vrf-flip",permalink:"/solana/dev/examples/vrf-flip",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"vrf-flip"},sidebar:"solana",previous:{title:"Python",permalink:"/solana/dev/python"},next:{title:"anchor-feed-parser",permalink:"/solana/dev/examples/anchor-feed-parser"}},d={},u=[{value:"Quick Links",id:"quick-links",level:2},{value:"Setup",id:"setup",level:2},{value:"Run",id:"run",level:2},{value:"CLI",id:"cli",level:2},{value:"Speed Run",id:"speed-run",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quick-links"},"Quick Links"),(0,r.kt)(i.Z,{cols:2,items:[{to:"https://vrf-demo.switchboard.xyz/",title:"Demo",description:"View the devnet demo",image:(0,r.kt)("img",{src:(0,o.Z)("/img/icons/play/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,o.Z)("/img/icons/play/dark.svg")})},{to:"https://github.com/switchboard-xyz/vrf-flip",title:"Github",description:"View the repo",image:(0,r.kt)("img",{src:(0,o.Z)("/img/icons/github/light.svg")}),imageDark:(0,r.kt)("img",{src:(0,o.Z)("/img/icons/github/dark.svg")})}],mdxType:"RoundedCardGroup"}),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/vrf-flip\ncd vrf-flip\nyarn install\nyarn link\nyarn client:gen\nanchor build && anchor deploy\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"anchor build")," and update the program ID in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib.rs"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Checkout ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/solana/dev/integration"},"Test Integration"))," to learn how to create\nyour own switchboard environment and run your own oracles for integration\ntesting.")),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"anchor test\n")),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," If using localnet, make sure to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"-c localnet")," to the commands\nbelow."),(0,r.kt)("p",null,"Create a keypair for the house authority"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," solana-keygen new --no-bip39-passphrase --outfile house-authority-keypair.json\n")),(0,r.kt)("p",null,"Create the House account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbv2-vrf-flip init house-authority-keypair.json F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy\n# sbv2-vrf-flip init KEYPAIR QUEUEKEY\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," The House must be initialized with a queue that has\n",(0,r.kt)("inlineCode",{parentName:"p"},"unpermissioned_vrf_enabled")," enabled."),(0,r.kt)("p",null,"Create a keypair for the user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," solana-keygen new --no-bip39-passphrase --outfile user-keypair.json\n")),(0,r.kt)("p",null,"Create the User account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbv2-vrf-flip create user-keypair.json\n")),(0,r.kt)("p",null,"Request some FLIP tokens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbv2-vrf-flip airdrop user-keypair.json\n")),(0,r.kt)("p",null,"PLAY!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbv2-vrf-flip play user-keypair.json --gameType coin-flip --guess 2\n")),(0,r.kt)("p",null,"where,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gameType")," can be ",(0,r.kt)("inlineCode",{parentName:"li"},"coin-flip"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"roll-dice"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"roll-20-sided-dice"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guess")," can be 1 through 2 for a ",(0,r.kt)("inlineCode",{parentName:"li"},"coin-flip"),", 1 through 6 for ",(0,r.kt)("inlineCode",{parentName:"li"},"dice-roll"),", and\n1 through 20 for a ",(0,r.kt)("inlineCode",{parentName:"li"},"roll-20-sided-dice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"betAmount")," is the number of tokens to wager")),(0,r.kt)("h2",{id:"speed-run"},"Speed Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"solana-keygen new --no-bip39-passphrase --outfile house-authority-keypair.json\nsbv2-vrf-flip init house-authority-keypair.json F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy\nsolana-keygen new --no-bip39-passphrase --outfile user-keypair.json\nsbv2-vrf-flip create user-keypair.json\nsbv2-vrf-flip airdrop user-keypair.json\nsbv2-vrf-flip play user-keypair.json --gameType coin-flip --guess 2\n")))}c.isMDXComponent=!0}}]);