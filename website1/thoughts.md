# Thoughts

## Content Funnel

**How should the content be funneled to the users?**

The natural approach here is to split the content by chain but this results in
alot of duplicated work and will require a large effort to support a new chain.
But this might be the right choice because each chain will have its own set of
guides and nuances that naturally warrant their own sections. It is also
convienent to have a landing page for each chain that will let us manage a
changelog or announcements.

The other approach would be to split the content by product. So a user would see
feeds, vrf, or functions and pick the one they are interested in, then from
there funnel to the different chains. This makes somewhat sense but not every
chain has the entire set of products (yet). And its probably the wrong approach
because we are then asuming the user knows what they want. In reality they know
what chain theyre building on but they dont know how to use Switchboard yet.
They might think they want VRF but maybe some custom function is a better
solution.

In conclusion, funneling by chain is the right approach and maybe we can
abstract the similar EVM chains as best we can but each will still have its own
programId, queue, and maybe a slightly different UX due to gas or rollup
settlement.

- `funnel users by chain`
- `provide a way to educate users on the chain homepage to select the right product`
- `find a way to abstract EVM guides where possible`

## Data Overload

**How do you strike the balance between enough data and too much data? Lite mode
vs advanced mode. Do users really care to view an IDL in markdown format? Or do
they just want to see code snippets and configuration options?**

The users integrating Switchboard are busy developers who want to find
information quick and move on. In this vein we should keep the documentation
concise and navigatable.

We may also see users who want to know more about the interworkings of
Switchboard (protocol level). This information should reside in a whitepaper but
since we have not published one yet we should leave room for users to answer
these questions.

Skip displaying any kind of IDL. This information is nice but alot of it is
filler. Instead document the accounts and point to the JSON IDL on github for
more information.

It would be nice to have some kind of advanced mode. We could use docusaurus
versions to manage this content. Each version/mode would have their own
subdirectory of markdown files and sidebars that can be manually edited when
needed. This could be a future feature, for now we'll keep it on the simpler
side and expand to more advanced usage.

- `use architecture section to hold whitepaper content, most users dont care`
- `make code snippets readily available, maybe have some quicklinks on the chain homepage`
- `keep guides quick but relevant`
- `add an advanced mode in the future with a dropdown selection for IDLs and extra information`

## Stakeholders

**Data feed consumers, feed creators, VRF consumers, oracle operators, private
queues, and now function users, and probably more. How do we funnel content to
stakeholders early on?**

First we can partition these stakeholders into:

- Protocols (Learn/Architecture): Protocols looking for a new oracle provider.
  want to see how the network operates
- Developers (Guides/API): Developers looking to integrate or automate their
  Switchboard usage. Mainly focused on dev resources but may need to read the
  architecture to understand it more.
- Oracles (IDK, Network?): Typically infrastructure providers specializing in
  RPC. But now that we have functions this could expand drastically.

I like the idea of keeping many guides for running oracles, for example we could
have a solana-docker-oracle, solana-gcp-oracle, solana-nodejs-oracle,
aptos-docker-oracle, aptos-gcp-oracle, etc guides. This may seem bloated but
typically oracle operators arent running them on multiple chains and having them
more granular will let us reuse alot of the information while also having CLI
specific commands or environment variables for both. Also we use the same
codebase for all chains so it will be alot of re-use.

- `have chain specific guides where possible, most users dont need all the extra context and only care about their chain`

## Partial Feature Sets

**How should we handle chains with only a subset of features?**

Its hard to talk about the different Switchboard products and communicate which
chains have which feature set. A matrix would be the best display tool but might
not look the best for some chains. Chainlink does a good job of displaying icons
overlayed ontop of each other to show which chains a product supports.

Alot of the product background will be generic so we can share those across each
chain.

- `display product cards on home page with logos of each chain that supports the product`

## Guides

This is a first pass at the different guides we might support:

- Data Feeds
  - Publisher: Build a feed
  - OracleJob task types and examples
  - [Chain] Read a feed
  - [Chain] Create a feed
  - [Chain] Private Queue
  - [Chain] Anchor full walkthrough
  - [Chain?] Data feed management and monitoring
- Randomness
  - VRF background and approach
  - [Chain] VRF Integration
- Test
  - [Chain] Test Integration (framework specific, anchor vs hardhat)
- Oracle Operator
  - [Chain] GCP Oracle
  - [Chain] Docker Oracle
- CLI
  - General CLI approach
  - [Chain] CLI Guide
    - Read an aggregator
    - Create an oracle
    - Create a queue
- Functions
  - [Chain] Create a custom function (basic)
  - [Chain] Create a custom function (advanced)

## Homepage

**How to make a homepage navigatable and useable?**

We know users only care about their given chain so we should try to provide a
way to quickly navigate to the chain homepage where they will see guides. But
should we also have product specific information? Maybe we need a general chain
specific guide like "how to get data on-chain".

It seems backwards to start talking about chains without talking about the
product. But you dont want to talk about the product if the users chain doesnt
support it.

We should first display a "big" card for Learn with links to about switchboard,
terminology, network overview, then the different products.

Developers will want to quickly find reference docs.

- `first big card is information/products`
- `next big card will be links to the different chain homepages`
- `next big card will be developer links to CLI, API docs, etc`
- `bottom footer should be more information and social media links`

## Outline

- Learn
- Guides
- API
- Networks