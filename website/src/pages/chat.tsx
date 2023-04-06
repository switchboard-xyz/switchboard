import React from "react";
import Layout from "@theme/Layout";
import ChatBot from "../components/ChatBot/ChatBot";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  // height: "calc(100vh - 200px)",
  // width: "calc(100vw - 200px)",
  height: "calc(80vh - 200px)",
  width: "calc(100vw - 25px)",
  m: 2,
  p: "2rem",
  // display: "flex",
  // alignContent: "center",
  // justifyContent: "center",
});

export default function Chat() {
  return (
    <Layout title="switch-gpt" description="Chat with the Switchboard bot">
      <div>
        <StyledBox alignContent="center" justifyContent="center">
          <ChatBot />{" "}
        </StyledBox>
      </div>
    </Layout>
  );
}
