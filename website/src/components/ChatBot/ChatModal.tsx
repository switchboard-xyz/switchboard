import React from "react";
import { styled } from "@mui/system";
import { Dialog } from "@mui/material";
import ChatBot from "./ChatBot";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    maxWidth: 1100,
    maxHeight: 900,
    width: "65vw",
    height: "75vh",
    paddingBottom: "16px",
    display: "flex",
    flexDirection: "column",
    [`@media screen and (max-width: 640px)`]: {
      width: "90vw",
      height: "90vh",
      fontSize: "0.75rem",
    },
  },
});

const ChatModal = (props: {
  open: boolean;
  chat?: string;
  onClose: () => void;
}) => {
  return (
    <StyledDialog open={!!props.open} onClose={props.onClose}>
      <ChatBot chat={props.chat} />
    </StyledDialog>
  );
};

export default ChatModal;
