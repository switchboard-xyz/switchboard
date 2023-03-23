import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Dialog, Divider, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: 600,
    height: 600,
    paddingBottom: "32px",
    display: "flex",
    flexDirection: "column",
  },
});

const StyledHeader = styled("div")({
  justifyContent: "space-between",
  flexDirection: "column",
  display: "flex",
  width: "100%",
  padding: "12px 18px 12px 30px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    height: 48,
    border: "solid 1px #6b7c9333",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#425466",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

enum Sender {
  "bot",
  "user",
}

interface Message {
  sender: Sender;
  message: string;
}

const ChatBot = (props: { open: boolean }) => {
  const [questionInput, setQuestionInput] = useState("");
  const [messageHistory, setMessageHistory] = useState<Message[]>([
    {
      sender: Sender.bot,
      message: "Welcome to Switchboard Chat! Ask me a question below.",
    },
  ]);
  const [open, setOpen] = useState(true);

  // need to set up session storage to keep track of message history
  useEffect(() => {
    const messagesFromStorage = sessionStorage.getItem("messageHistory");
    if (messagesFromStorage) setMessageHistory(JSON.parse(messagesFromStorage));
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "messageHistory",
      // clear any error states
      JSON.stringify(messageHistory)
    );
  }, [messageHistory]);

  const onQuestionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionInput(e.target.value);
  };

  const submitQuestion = () => {
    messageHistory.push({ sender: Sender.user, message: questionInput });
    setQuestionInput("");
  };

  const onQuestionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      submitQuestion();
    }
  };

  return (
    <StyledDialog open={open} onClose={() => setOpen(false)}>
      <StyledHeader>
        <span style={{ fontSize: "20px", fontWeight: 600 }}>
          Chat with Switchboard Bot
        </span>
        <span>Ask a question and the Switchboard Bot will try to help!</span>
      </StyledHeader>
      <Divider sx={{ borderBottom: `solid 1px #ebf2fa` }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "16px 32px",
        }}
      >
        {messageHistory.map((message: Message, idx: number) => {
          const userMessage = message.sender === Sender.user;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: userMessage ? "#4c6fff" : "#f3f4f7",
                color: userMessage ? "#fff" : "black",
                borderRadius: "16px",
                padding: "8px 16px",
                marginBottom: "8px",
                width: "60%",
                alignSelf: userMessage ? "flex-end" : "flex-start",
              }}
            >
              <span>{message.message}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "auto" }}>
        <Divider sx={{ borderBottom: `solid 1px #ebf2fa` }} />
        <div
          style={{
            width: "100%",
            padding: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <StyledTextField
            value={questionInput}
            onChange={onQuestionInputChange}
            onKeyDown={onQuestionKeyDown}
            placeholder="Type your question here..."
            sx={{ flexGrow: 1, marginRight: "12px" }}
          />
          <IconButton onClick={submitQuestion}>
            <SendIcon sx={{ color: "#8f95b2" }} />
          </IconButton>
        </div>
      </div>
    </StyledDialog>
  );
};

export default ChatBot;
