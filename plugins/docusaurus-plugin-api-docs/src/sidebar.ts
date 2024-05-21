import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";
import { normalizeUrl } from "@docusaurus/utils";

/** Map of category label to sort priority */
export const SIDEBAR_PRIORITY: Map<string, number> = new Map([
  // ["Overview", 1],
  // ["@switchboard-xyz/cli", 5],
  // ["@switchboard-xyz/common", 10],
  // ["@switchboard-xyz/oracle", 11],
  // ["@switchboard-xyz/aptos.js", 21],
  // ["@switchboard-xyz/evm.js", 31],
  // // skip 10, evm might be popular
  // ["@switchboard-xyz/near.js", 51],
  // ["@switchboard-xyz/solana.js", 61],
  // ["@switchboard-xyz/starknet.js", 71],
  // ["@switchboard-xyz/sui.js", 81],
]);

export const sortPackages = (a: PropSidebarItem, b: PropSidebarItem) => {
  const aName =
    "label" in a && typeof a.label === "string"
      ? a.label
      : "value" in a
      ? a.value
      : a.type;
  const bName =
    "label" in b && typeof b.label === "string"
      ? b.label
      : "value" in b
      ? b.value
      : b.type;
  const aPri = SIDEBAR_PRIORITY.get(aName) ?? 999;
  const bPri = SIDEBAR_PRIORITY.get(bName) ?? 999;
  if (aPri === bPri) {
    return aName.localeCompare(bName);
  }
  return aPri - bPri;
};

export const preSidebarItems: PropSidebarItem[] = [
  {
    type: "link",
    label: "Overview",
    href: normalizeUrl(["/api"]),
  },
  {
    type: "html",
    value: '<div class="sidebar-buffer" />',
  },
  {
    type: "html",
    className: "heading_icon__typescript",
    value: " <b>Typescript</b>",
  },
  {
    type: "html",
    value: '<hr class="dropdown-separator">',
  },
];

export const postSidebarItems: PropSidebarItem[] = [
  {
    type: "html",
    value: '<div class="sidebar-buffer" />',
  },
  {
    type: "html",
    className: "heading_icon__rust",
    value: " <b>Rust</b>",
  },
  {
    type: "html",
    value: '<hr class="dropdown-separator">',
  },
  {
    type: "link",
    label: "switchboard-v2",
    href: "https://docs.rs/crate/switchboard-v2",
  },
  {
    type: "html",
    value: '<div class="sidebar-buffer" />',
  },
  {
    type: "html",
    className: "heading_icon__move",
    value: " <b>Move</b>",
  },
  {
    type: "html",
    value: '<hr class="dropdown-separator">',
  },
  {
    type: "link",
    label: "placeholder",
    href: "#",
  },
  {
    type: "html",
    value: '<div class="sidebar-buffer" />',
  },
  {
    type: "html",
    className: "heading_icon__solidity",
    value: " <b>Solidity</b>",
  },
  {
    type: "html",
    value: '<hr class="dropdown-separator">',
  },
  {
    type: "link",
    label: "placeholder",
    href: "#",
  },
  {
    type: "link",
    label: "placeholder",
    href: "#",
  },
];
