import Link from "@docusaurus/Link";
import type { PropVersionMetadata } from "@docusaurus/plugin-content-docs";
import type { GlobalVersion } from "@docusaurus/plugin-content-docs/client";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDocsPreferredVersion } from "@docusaurus/theme-common";
import { useDocsVersion } from "@docusaurus/theme-common/internal";
import type { Props as DocItemProps } from "@theme/DocItem";
import MDXContent from "@theme/MDXContent";
import React, { useEffect } from "react";

import type { ParsedProtobufMessage } from "../modules/protobufs";
import type { ApiOptions, PackageReflectionGroup } from "../types";
import { removeScopes } from "../utils/links";
import ApiItemLayout from "./ApiItemLayout";

export interface ApiIndexProps extends Pick<DocItemProps, "route"> {
  history: {
    location: { pathname: string };
    replace: (path: string) => void;
  };
  options: ApiOptions;
  packages: PackageReflectionGroup[];
  tasks: ParsedProtobufMessage[];
  readme?: React.ComponentType;
}

function addVersionToUrl(
  url: string,
  latestVersion: PropVersionMetadata,
  preferredVersion: GlobalVersion | null | undefined
) {
  if (
    !url.match(/api\/([\d.]+)/) &&
    !url.includes("api/next") &&
    preferredVersion &&
    preferredVersion.name !== latestVersion.version
  ) {
    const version = preferredVersion.name === "current" ? "next" : preferredVersion.name;

    if (url.endsWith("/api")) {
      return `${url}/${version}`;
    }

    return url.replace("/api/", `/api/${version}/`);
  }

  return url;
}

export default function ApiIndex({ history, options, packages, tasks, readme: Readme, route }: ApiIndexProps) {
  const latestVersion = useDocsVersion();
  const { preferredVersion } = useDocsPreferredVersion(latestVersion.pluginId);

  useEffect(() => {
    // Redirect to package when only 1
    if (packages.length === 1) {
      history.replace(
        addVersionToUrl(packages[0].entryPoints[0].reflection.permalink, latestVersion, preferredVersion)
      );

      // Redirect to preferred version
    } else if (preferredVersion) {
      history.replace(addVersionToUrl(history.location.pathname, latestVersion, preferredVersion));
    }
  }, [packages, history, latestVersion, preferredVersion]);

  return (
    <ApiItemLayout
      heading={<h1>{"API"}</h1>}
      route={route}
      toc={[
        { value: "Typescript", id: "typescript", level: 2 },
        { value: "Protobufs", id: "protobufs", level: 2 },
        { value: "Rust", id: "rust", level: 2 },
      ]}
    >
      <article>
        <div className={`${ThemeClassNames.docs.docMarkdown ?? ""} markdown`}>
          {Readme && (
            <section className="tsd-readme">
              <MDXContent>
                <Readme />
              </MDXContent>
            </section>
          )}

          {/* <p>The following Github repos contain the Switchboard SDKs:</p>
          <section className="tsd-panel">
            <h3 id="repositories" className="tsd-panel-header">
              SDKs
            </h3>
            <div className="tsd-panel-content">
              <ul className="tsd-index-list tsd-index-list__one_col">
                <li key="sbv2-aptos" className="tsd-truncate">
                  <Link
                    className="tsd-kind-icon"
                    to={"https://github.com/switchboard-xyz/sbv2-aptos"}
                    style={{ fontSize: "1.10rem" }}
                  >
                    <i
                      className={`codicon codicon-symbol-method`}
                      style={{ color: "inherit" }}
                    />
                    <span>sbv2-aptos</span>
                  </Link>
                </li>
                <li key="sbv2-evm" className="tsd-truncate">
                  <Link
                    className="tsd-kind-icon"
                    to={"https://github.com/switchboard-xyz/sbv2-evm"}
                    style={{ fontSize: "1.10rem" }}
                  >
                    <i
                      className={`codicon codicon-symbol-method`}
                      style={{ color: "inherit" }}
                    />
                    <span>sbv2-evm</span>
                  </Link>
                </li>
                <li key="sbv2-near" className="tsd-truncate">
                  <Link
                    className="tsd-kind-icon"
                    to={"https://github.com/switchboard-xyz/sbv2-near"}
                    style={{ fontSize: "1.10rem" }}
                  >
                    <i
                      className={`codicon codicon-symbol-method`}
                      style={{ color: "inherit" }}
                    />
                    <span>sbv2-near</span>
                  </Link>
                </li>
                <li key="sbv2-solana" className="tsd-truncate">
                  <Link
                    className="tsd-kind-icon"
                    to={"https://github.com/switchboard-xyz/sbv2-solana"}
                    style={{ fontSize: "1.10rem" }}
                  >
                    <i
                      className={`codicon codicon-symbol-method`}
                      style={{ color: "inherit" }}
                    />
                    <span>sbv2-solana</span>
                  </Link>
                </li>
                <li key="sbv2-sui" className="tsd-truncate">
                  <Link
                    className="tsd-kind-icon"
                    to={"https://github.com/switchboard-xyz/sbv2-sui"}
                    style={{ fontSize: "1.10rem" }}
                  >
                    <i
                      className={`codicon codicon-symbol-method`}
                      style={{ color: "inherit" }}
                    />
                    <span>sbv2-sui</span>
                  </Link>
                </li>
              </ul>
            </div>
          </section> */}

          {/* <h2 id="typescript">Typescript</h2> */}
          <section id="typescript" className="tsd-panel">
            <h3 id="packages" className="tsd-panel-header">
              NPM Packages
            </h3>
            <div className="tsd-panel-content">
              <ul className="tsd-index-list  tsd-index-list__two_col">
                <li key="cli" className="tsd-truncate">
                  <Link className="tsd-kind-icon" to={"/api/cli"}>
                    <span
                      className="tsd-signature-symbol"
                      style={{
                        whiteSpace: "break-spaces",
                      }}
                    >
                      v{"2.4.1".padEnd(9, " ")}
                    </span>
                    <span>
                      {removeScopes("@switchboard-xyz/cli", [
                        // "switchboard-xyz",
                        ...options.scopes,
                      ])}
                    </span>
                  </Link>
                </li>
                {packages.map((pkg) => (
                  <li key={pkg.packageName} className="tsd-truncate">
                    <Link className="tsd-kind-icon" to={pkg.entryPoints[0].reflection.permalink}>
                      <span
                        className="tsd-signature-symbol"
                        style={{
                          whiteSpace: "break-spaces",
                        }}
                      >
                        v{pkg.packageVersion.padEnd(9, " ")}
                      </span>
                      <span>
                        {removeScopes(pkg.packageName, [
                          // "switchboard-xyz",
                          ...options.scopes,
                        ])}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* <h2 id="protobufs">Protobufs</h2> */}
          <section id="protobufs" className="tsd-panel">
            <h3 className="tsd-panel-header">
              <Link href="/api/protos/Task">Task Types</Link>
            </h3>
            <div className="tsd-panel-content">
              <ul className="tsd-index-list">
                {tasks
                  .filter((task) => task.name !== "OracleJob" && task.name !== "Task")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((task) => (
                    <li key={task.id} className="tsd-truncate">
                      {/* <LinkWithDescription
                        label={task.name}
                        href={"/api/" + task.permalink}
                        description={task.description}
                      /> */}
                      <Link href={"/api/" + task.permalink}>{task.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </section>

          <section id="rust" className="tsd-panel">
            <h3 className="tsd-panel-header">Rust Crates</h3>
            <div className="tsd-panel-content">
              <ul className="tsd-index-list">
                <li className="tsd-truncate">
                  <Link href={"https://docs.rs/switchboard-common/latest/switchboard_common/"}>switchboard-common</Link>
                </li>
                <li className="tsd-truncate">
                  <Link href={"https://docs.rs/switchboard-utils/latest/switchboard_utils/"}>switchboard-utils</Link>
                </li>
                <li className="tsd-truncate">
                  <Link href={"https://docs.rs/switchboard-solana/latest/switchboard_solana/"}>switchboard-solana</Link>
                </li>
                <li className="tsd-truncate">
                  <Link href={"https://docs.rs/switchboard-v2/latest/switchboard_v2/"}>switchboard-v2</Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </ApiItemLayout>
  );
}
