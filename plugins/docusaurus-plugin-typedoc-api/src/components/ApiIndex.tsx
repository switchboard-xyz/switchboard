import React, { useEffect } from "react";
import Link from "@docusaurus/Link";
import type { PropVersionMetadata } from "@docusaurus/plugin-content-docs";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { GlobalVersion } from "@docusaurus/plugin-content-docs/client";
import { useDocsPreferredVersion } from "@docusaurus/theme-common";
import { useDocsVersion } from "@docusaurus/theme-common/internal";
import type { Props as DocItemProps } from "@theme/DocItem";
import Heading from "@theme/Heading";
import type { ApiOptions, PackageReflectionGroup } from "../types";
import { removeScopes } from "../utils/links";
import { Footer } from "./Footer";
import { VersionBanner } from "./VersionBanner";
import MDXContent from "@theme/MDXContent";
import ApiItemLayout from "./ApiItemLayout";

export interface ApiIndexProps extends Pick<DocItemProps, "route"> {
  history: {
    location: { pathname: string };
    replace: (path: string) => void;
  };
  options: ApiOptions;
  packages: PackageReflectionGroup[];
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

export default function ApiIndex({
  options,
  packages,
  history,
  readme: Readme,
  route,
}: ApiIndexProps) {
  const latestVersion = useDocsVersion();
  const { preferredVersion } = useDocsPreferredVersion(latestVersion.pluginId);

  useEffect(() => {
    // Redirect to package when only 1
    if (packages.length === 1) {
      history.replace(
        addVersionToUrl(
          packages[0].entryPoints[0].reflection.permalink,
          latestVersion,
          preferredVersion
        )
      );

      // Redirect to preferred version
    } else if (preferredVersion) {
      history.replace(
        addVersionToUrl(
          history.location.pathname,
          latestVersion,
          preferredVersion
        )
      );
    }
  }, [packages, history, latestVersion, preferredVersion]);

  return (
    <ApiItemLayout
      heading={<h1>{"API"}</h1>}
      route={route}
      toc={[
        { value: "Setup", id: "setup", level: 2 },
        { value: "Typescript", id: "typescript", level: 2 },
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

          <h2 id="typescript">Typescript</h2>
          <section className="tsd-panel">
            <h3 id="packages" className="tsd-panel-header">
              Packages
            </h3>
            <div className="tsd-panel-content">
              <ul className="tsd-index-list">
                <li key="cli" className="tsd-truncate">
                  <Link className="tsd-kind-icon" to={"/api/cli"}>
                    <span className="tsd-signature-symbol">v{"2"}</span>{" "}
                    <span>
                      {removeScopes("@switchboard-xyz/cli", [
                        ...options.scopes,
                        "switchboard-xyz",
                      ])}
                    </span>
                  </Link>
                </li>
                {packages.map((pkg) => (
                  <li key={pkg.packageName} className="tsd-truncate">
                    <Link
                      className="tsd-kind-icon"
                      to={pkg.entryPoints[0].reflection.permalink}
                    >
                      <span className="tsd-signature-symbol">
                        v{pkg.packageVersion}
                      </span>{" "}
                      <span>
                        {removeScopes(pkg.packageName, [
                          ...options.scopes,
                          "switchboard-xyz",
                        ])}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </article>
    </ApiItemLayout>
  );
}
