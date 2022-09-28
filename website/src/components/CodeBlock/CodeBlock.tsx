import { useColorMode } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React, { ReactNode } from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import CodeBlock from "@theme/CodeBlock";

// const StyledBox = styled(Box)<{ dark: number }>(({ theme, dark }) => ({
//   minWidth: "160px",
//   fontSize: "inherit",
//   color: "var(--ifm-navbar-link-color)",
//   fontWeight: "var(--ifm-font-weight-semibold)",
//   textAlign: "center",
//   display: "block",
//   [theme.breakpoints.down(996)]: {
//     marginRight: "2.5rem",
//   },
// }));

export interface Props {
  readonly children: ReactNode;
  readonly className?: string;
  readonly metastring?: string;
  readonly title?: string;
  readonly language?: string;
  readonly showLineNumbers?: boolean;
}

const CustomCodeBlock = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const { colorMode } = useColorMode();

  return (
    <CodeBlock
      className={props.className}
      metastring={props.metastring}
      title={props.title}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
    >
      {props.children}
    </CodeBlock>
  );
};

export default CustomCodeBlock;
