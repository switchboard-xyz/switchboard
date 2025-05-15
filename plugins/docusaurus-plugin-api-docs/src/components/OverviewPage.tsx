import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props as DocItemProps } from "@theme/DocItem";
import MDXContent from "@theme/MDXContent";
import React from "react";

import type { ParsedProtobufMessage } from "../modules/protobufs";
import type { ApiOptions, PackageReflectionGroup } from "../types";
import ApiItemLayout from "./ApiItemLayout";

interface OverviewPageProps extends Pick<DocItemProps, "route"> {
  history: {
    location: { pathname: string };
    replace: (path: string) => void;
  };
  options: ApiOptions;
  packages: PackageReflectionGroup[];
  tasks: ParsedProtobufMessage[];
  readme?: React.ComponentType;
}

export default function OverviewPage({
  history,
  options,
  packages,
  tasks,
  readme: Readme,
  route,
}: OverviewPageProps) {
  return (
    <ApiItemLayout
      heading={"API"}
      route={route}
      toc={[
        // Links in the top-right corner of the page.
        { value: "Protobufs", id: "protobufs", level: 2 },
        // { value: "Typescript", id: "typescript", level: 2 },
        // { value: "Rust", id: "rust", level: 2 },
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

          {/* <h2 id="protobufs">Protobufs</h2> */}
          <section id="protobufs" className="tsd-panel">
            <h3 className="tsd-panel-header">
              <Link href="/protos/Task">Task Types</Link>
            </h3>
            <div className="tsd-panel-content">
              <ul className="tsd-index-list">
                {tasks
                  .filter(
                    (task) => task.name !== "OracleJob" && task.name !== "Task"
                  )
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((task) => (
                    <li key={task.id} className="tsd-truncate">
                      {/* <LinkWithDescription
                        label={task.name}
                        href={"/api/" + task.permalink}
                        description={task.description}
                      /> */}
                      <Link href={"protos/" + task.permalink}>{task.name}</Link>
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
