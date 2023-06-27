import { styled, Button, TextField, IconButton } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import { ChatModal } from "./ChatBot";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: "24px",
  "& .MuiOutlinedInput-input": {
    padding: "0px 16px",
  },
  "& .MuiOutlinedInput-root": {
    height: 48,
    fontFamily: "Source Sans Pro",
    backgroundColor: "white",
    border: "1px solid #DCE1E9",
    borderRadius: "16px",
    fontSize: "20px",
    "&.Mui-error fieldset": {
      borderColor: "transparent",
    },
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "transparent",
    },
  },
});

const DocsSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showChatModal, setShowChatModal] = useState(false);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearchSubmit = () => setShowChatModal(true);

  return (
    <>
      <StyledTextField
        placeholder="Let's chat! Ask me a question."
        onChange={onSearchChange}
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: (
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={onSearchSubmit}>
                <SendIcon sx={{ color: "blue" }} />
              </IconButton>
            </div>
          ),
        }}
      />
      <ChatModal
        open={showChatModal}
        onClose={() => setShowChatModal(false)}
        chat={searchValue}
      />
    </>
  );
};

export default DocsSearch;
