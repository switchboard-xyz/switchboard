import { useColorMode } from "@docusaurus/theme-common";
import React, { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CodeBlock from "@theme/CodeBlock";

interface Props {
  readonly children?: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tasks: Array<Record<string, any>>;
  input: string;
  inputSample?: string;
  output: string;
  outputSample?: string;
}

export const ProtoExample = (props: Props) => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
  //   defaultMatches: true,
  // });
  // const { colorMode } = useColorMode();

  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        <strong>Input: </strong>
        {props.input || "N/A"}
        {props.inputSample ? (
          <>
            <br />
            {props.inputSample}
          </>
        ) : (
          <></>
        )}
      </p>
      <CodeBlock metastring="" title={props.subtitle} language="json">
        {JSON.stringify(
          { name: props.title, tasks: props.tasks },
          undefined,
          2
        )}
      </CodeBlock>
      <p>
        <strong>Output: </strong>
        {props.output || "N/A"}
        {props.outputSample ? (
          <>
            <br />
            {props.outputSample}
          </>
        ) : (
          <></>
        )}
      </p>
    </>
  );
};
