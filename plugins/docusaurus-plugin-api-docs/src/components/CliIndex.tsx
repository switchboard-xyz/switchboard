import React from "react";
import "./styles.css";
import Link from "@docusaurus/Link";
import type { PropVersionMetadata } from "@docusaurus/plugin-content-docs";
import type { GlobalVersion } from "@docusaurus/plugin-content-docs/client";
import { useDocsPreferredVersion } from "@docusaurus/theme-common";
import { useDocsVersion } from "@docusaurus/theme-common/internal";
import type { Props as DocItemProps } from "@theme/DocItem";
import type { ApiOptions } from "../types";
import type { ParsedCommand } from "../modules/oclif/types";
import ApiItemLayout from "./ApiItemLayout";

export interface CliIndexProps extends Pick<DocItemProps, "route"> {
  history: {
    location: { pathname: string };
    replace: (path: string) => void;
  };
  options: ApiOptions;
  commands: ParsedCommand[];
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
    const version =
      preferredVersion.name === "current" ? "next" : preferredVersion.name;

    if (url.endsWith("/api")) {
      return `${url}/${version}`;
    }

    return url.replace("/api/", `/api/${version}/`);
  }

  return url;
}

export default function CliIndex({
  options,
  commands,
  history,
  readme: Readme,
  route,
}: CliIndexProps) {
  const latestVersion = useDocsVersion();
  const { preferredVersion } = useDocsPreferredVersion(latestVersion.pluginId);

  // useEffect(() => {
  //   // Redirect to package when only 1
  //   if (commands.length === 1) {
  //     // history.replace(
  //     //   addVersionToUrl(
  //     //     packages[0].entryPoints[0].reflection.permalink,
  //     //     latestVersion,
  //     //     preferredVersion
  //     //   )
  //     // );
  //     // Redirect to preferred version
  //   } else if (preferredVersion) {
  //     // history.replace(
  //     //   addVersionToUrl(
  //     //     history.location.pathname,
  //     //     latestVersion,
  //     //     preferredVersion
  //     //   )
  //     // );
  //   }
  // }, [commands, history, latestVersion, preferredVersion]);

  return (
    <ApiItemLayout
      heading={<h1>{"@switchboard-xyz/cli"}</h1>}
      route={route}
      toc={[
        { value: "Install", id: "install", level: 2 },
        { value: "Setup", id: "setup", level: 2 },
        { value: "Commands", id: "commands", level: 2 },
        { value: "Config", id: "config-commands", level: 3 },
        { value: "Apots", id: "aptos-commands", level: 3 },
        { value: "EVM", id: "evm-commands", level: 3 },
        { value: "NEAR", id: "near-commands", level: 3 },
        { value: "Solana", id: "solana-commands", level: 3 },
      ]}
    >
      <article>
        <div className="markdown">
          {Readme && (
            <section className="tsd-readme">
              <Readme />
            </section>
          )}

          <h2 id="commands">Commands</h2>

          {["config", "aptos", "evm", "near", "solana"].map((topic) => {
            const myCommands = commands.filter((c) => c.topic === topic);
            return (
              <>
                <section className="tsd-panel" key={topic}>
                  <h3 id={topic + "-commands"} className="tsd-panel-header">
                    {topic[0].toUpperCase() + topic.slice(1)} Commands
                  </h3>
                  <div className="tsd-panel-content">
                    <ul className="tsd-index-list">
                      {myCommands
                        .sort((a, b) => a.id.localeCompare(b.id))
                        .map((cmd) => (
                          <li key={cmd.id} className="tsd-truncate">
                            <Link
                              className="tsd-kind-icon"
                              to={"/api" + cmd.permalink}
                            >
                              <span>{cmd.command}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </section>
                <br />
              </>
            );
          })}
        </div>
      </article>
    </ApiItemLayout>
  );
}
