import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Link from "@docusaurus/Link";
import type { PropVersionMetadata } from "@docusaurus/plugin-content-docs";
import type { GlobalVersion } from "@docusaurus/plugin-content-docs/client";
import { useDocsPreferredVersion } from "@docusaurus/theme-common";
import { useDocsVersion } from "@docusaurus/theme-common/internal";
import type { Props as DocItemProps } from "@theme/DocItem";
import type { ApiOptions } from "../types";
import ApiItemLayout from "./ApiItemLayout";
import type { ParsedProtobufMessage } from "../modules/protobufs";
import { Markdown } from "./Markdown";
import ProtoPage from "./ProtoPage";
import useBaseUrl from "@docusaurus/useBaseUrl";

export interface ProtoIndexProps extends Pick<DocItemProps, "route"> {
  history: {
    location: { pathname: string };
    replace: (path: string) => void;
  };
  options: ApiOptions;
  tasks: ParsedProtobufMessage[];
  readme?: React.ComponentType;
}

export default function ProtoIndex({
  history,
  options,
  tasks,
  readme: Readme,
  route,
}: ProtoIndexProps) {
  const latestVersion = useDocsVersion();
  const { preferredVersion } = useDocsPreferredVersion(latestVersion.pluginId);

  const oracleJobProto = tasks.find((t) => t.name === "OracleJob");
  const taskProto = tasks.find((t) => t.name === "Task");

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
      heading={
        <h1>
          {/* <img src={useBaseUrl("/img/icons/protobuf/logo.svg")} /> */}
          Protobufs
        </h1>
      }
      route={route}
      toc={[]}
      disableToc
    >
      <article>
        <div className="markdown">
          {Readme && (
            <section className="tsd-readme">
              <Readme />
            </section>
          )}

          <br />

          <section className="tsd-panel">
            <h3 className="tsd-panel-header">
              <Link href="/api/protos/Task">Task Types</Link>
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
                      <Link href={"/api/" + task.permalink}>{task.name}</Link>
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

function LinkWithDescription({
  label,
  description,
  href,
}: {
  label: string;
  description: string;
  href: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfHovered = (event: MouseEvent) => {
      if (
        linkRef.current?.contains(event.target as Node) ||
        modalRef.current?.contains(event.target as Node)
      ) {
        return;
      }
      setIsModalOpen(false);
    };

    document.addEventListener("mousemove", checkIfHovered);

    return () => {
      document.removeEventListener("mousemove", checkIfHovered);
    };
  }, []);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      if (linkRef.current) {
        const rect = linkRef.current.getBoundingClientRect();
        let left = rect.left;
        const modalWidth = 600; // The maximum width of the modal
        const overflow = left + modalWidth - window.innerWidth;
        if (overflow > 0) {
          left -= overflow;
        }
        setModalPosition({ top: rect.bottom, left });
      }
      setIsModalOpen(true);
    }, 100); // 100ms delay
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
  };

  return (
    <div>
      <a
        ref={linkRef}
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </a>
      {isModalOpen && (
        <div
          ref={modalRef}
          style={{
            position: "fixed",
            top: modalPosition.top,
            left: modalPosition.left,
            width: "auto",
            maxWidth: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "4px",
            }}
          >
            <h2>
              {" > "}
              <a href={href}>{label}</a>
            </h2>
            <Markdown content={description} />
          </div>
        </div>
      )}
    </div>
  );
}
