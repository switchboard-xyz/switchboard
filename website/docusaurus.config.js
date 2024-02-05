// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/shadesOfPurple");
const darkCodeTheme = require("prism-react-renderer/themes/shadesOfPurple"); // synthwave84

const getVersions = () => {
  if (require("fs").existsSync("versions.json")) {
    return [
      "current",
      ...JSON.parse(require("fs").readFileSync("versions.json", "utf-8")),
    ];
  }
  return ["current"];
};

// const TwitterSvg =
//   '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Switchboard",
  tagline: "Community curated lightspeed data feeds on-chain",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url:
    process.env.NODE_ENV === "production"
      ? "https://docs.switchboard.xyz"
      : "http://localhost",
  // url: "http://beta.docs.switchboard.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "switchboard-xyz",
  projectName: "switchboard",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: ["https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",],

  plugins: ["docusaurus-plugin-api-docs"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // ignore versioning, only needed for docusaurus-plugin-typedoc-api
          // lastVersion: "current",
          versions: Object.fromEntries(
            getVersions().map((v) => {
              return [
                v,
                {
                  badge: false,
                },
              ];
            })
          ),
          lastVersion: undefined,
          onlyIncludeVersions: ["current"],
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [
            [
              require("@docusaurus/remark-plugin-npm2yarn"),
              {
                sync: true,
                converters: [
                  "yarn",
                  "pnpm",
                  // ["Turbo", (code) => code.replace(/npm/g, "turbo")],
                ],
              },
            ],
            require("remark-math"),
          ],
          rehypePlugins: [
            [
              require("rehype-katex"),
              {
                throwOnError: true,
                globalGroup: true,
              },
            ],
          ],
        },
        blog: {
          showReadingTime: true,
          include: ["**/*.md", "**/*.mdx"], // need double asterik for nested dirs
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/documentation_card.jpg",
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
      algolia: {
        appId: "XO84KDTPTB",
        apiKey: "def6c1d8ee548183d6c709055199e10d",
        indexName: "switchboard",
        contextualSearch: true,
      },
      navbar: {
        title: "Switchboard",
        logo: {
          href: "/",
          alt: "Switchboard Logo",
          src: "img/fulllogo.svg",
          srcDark: "img/white_fulllogo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "sidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "/api",
            label: "API",
            position: "left",
          },
          {
            type: "search",
            position: "left",
          },

          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/switchboard-xyz",
            position: "right",
            className: "navbar_icon__github",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://twitter.com/switchboardxyz",
            position: "right",
            className: "navbar_icon__twitter",
            "aria-label": "Twitter Link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "rust",
          "toml",
          "docker",
          "bash",
          "yaml",
          "asciidoc",
          "diff",
          "solidity",
        ],
      },
    }),
};

module.exports = config;
