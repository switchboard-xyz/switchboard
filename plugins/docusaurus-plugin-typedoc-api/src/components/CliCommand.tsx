import React from "react";
import type { Props as DocItemProps } from "@theme/DocItem";
import ApiItemLayout from "./ApiItemLayout";
import CodeBlock from "@theme/CodeBlock";
import { useCommand } from "../hooks/useCommand";

export interface CliCommandProps extends Pick<DocItemProps, "route"> {}

export default function CliCommand({ route }: CliCommandProps) {
  const id = (route as unknown as { id: string }).id;
  const item = useCommand(id)!;

  return (
    <ApiItemLayout
      heading={<h1>{item?.command ?? "Unknown"}</h1>}
      route={route}
      toc={[]}
    >
      <CodeBlock language="markdown">{item?.markdown ?? "N/A"}</CodeBlock>
    </ApiItemLayout>
  );
}
