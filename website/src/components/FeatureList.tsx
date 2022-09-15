export type FeatureItem = {
  title: string;
  image: string;
  description: string;
  linkTo: string;
};

export const FeatureList: FeatureItem[] = [
  {
    title: "Introduction",
    image: "/img/icons/info.png",
    description:
      "Learn about Switchboard and how it enables the community to dictate what data lives on-chain.",
    linkTo: "/learn",
  },
  {
    title: "Architecture",
    image: "/img/icons/arc.png",
    description:
      "Learn about Switchboard Oracle Queues and how they allocate oracle resources on-chain.",

    linkTo: "/learn/queues",
  },
  {
    title: "Oracle",
    image: "/img/icons/oracle.png",
    description:
      "Learn how to contribute to the network and process data feed updates.",
    linkTo: "/oracles",
  },
  {
    title: "Data Feeds",
    image: "/img/icons/sol.png",
    description: "Learn how Switchboard data feeds work.",

    linkTo: "/tasks",
  },
  {
    title: "Develop",
    image: "/img/icons/developers.png",
    description: "Learn how to develop with Switchboard and use the APIs.",
    linkTo: "/api",
  },
  {
    title: "Publish",
    image: "/img/icons/publish.svg",
    description: "Publish your own data feeds on-chain through Switchboard.",
    linkTo: "/feeds/publisher",
  },
];
