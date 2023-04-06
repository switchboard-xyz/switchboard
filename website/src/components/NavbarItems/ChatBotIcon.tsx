import React, { useState } from "react";
import qaIcon from "../../../static/img/qa.png";
import { IconButton, Tooltip, Box } from "@mui/material";
import ChatModal from "../ChatBot/ChatModal";
import { useLocation } from "@docusaurus/router";

const ChatBotIcon = () => {
  const [openChatModal, setOpenChatModal] = useState<boolean>(false);
  const location = useLocation();

  const onClose = () => {
    setOpenChatModal(false);
  };

  return (
    <Box
      sx={{
        "@media (max-width:640px)": {
          marginRight: "10vw",
        },
      }}
    >
      <Tooltip
        title="Need help? Chat with our Switchboard AI!"
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: {
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              backgroundColor: "white",
              color: "gray",
              border: "solid 1px #8f95b2",
              fontSize: "13px",
            },
          },
        }}
      >
        <IconButton
          disabled={location.pathname === "/chat"}
          onClick={() => setOpenChatModal(true)}
          sx={{
            opacity: location.pathname === "/chat" ? 0.2 : 1,
            ":hover": {
              backgroundColor: "white",
              opacity: 0.6,
            },
          }}
        >
          <img src={qaIcon} height={32} width={32} />
        </IconButton>
      </Tooltip>
      <ChatModal open={openChatModal} onClose={onClose} />
    </Box>
  );
};

export default ChatBotIcon;
