import CodeBlock from "@theme/CodeBlock";
import type { Props as DocItemProps } from "@theme/DocItem";
import React from "react";

import { useCommand } from "../hooks/useCommand";
import ApiItemLayout from "./ApiItemLayout";

export interface CliCommandProps extends Pick<DocItemProps, "route"> {}

export default function CliCommand({ route }: CliCommandProps) {
  const id = (route as unknown as { id: string }).id;
  const item = useCommand(id)!;

  return (
    <ApiItemLayout heading={item?.command ?? "Unknown"} route={route} toc={[]}>
      <CodeBlock language="markdown">{item?.markdown ?? "N/A"}</CodeBlock>
    </ApiItemLayout>
  );
}
