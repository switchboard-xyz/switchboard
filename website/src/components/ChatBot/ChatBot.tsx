import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Dialog, Divider, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const TypingDiv = styled("div")({
  width: "5em",
  height: "2em",
  position: "relative",
  padding: "10px",
  background: "#e6e6e6",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@keyframes loadingFade": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.8,
    },
    "100%": {
      opacity: 0,
    },
  },
});

const TypingDot = styled("div")({
  float: "left",
  width: "8px",
  height: "8px",
  margin: "0 4px",
  background: "#8d8c91",
  borderRadius: "50%",
  opacity: "0",
  animation: "loadingFade 1s infinite",
  ":nth-of-type(1)": {
    animationDelay: "0s",
  },
  ":nth-of-type(2)": {
    animationDelay: "0.2s",
  },
  ":nth-of-type(3)": {
    animationDelay: "0.4s",
    marginRight: "0px",
  },
});

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: 650,
    height: 600,
    paddingBottom: "16px",
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

const CHAT_URL = "https://chat.switchboard.xyz";

const fetchChat = async (input: string) => {
  return fetch(`${CHAT_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((json) => json.completion);
      } else {
        return "That isn't a valid question. Please try again.";
      }
    })
    .catch(() => "Sorry, something went wrong. Please try again.");
};

const ChatBot = (props: { open: boolean; onClose: () => void }) => {
  const [questionInput, setQuestionInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([
    {
      sender: Sender.bot,
      message: "Welcome to Switchboard Chat! Ask me a question below.",
    },
  ]);

  const messagesRef = useRef();
  const endOfMessagesRef = useRef();

  // need to set up session storage to keep track of message history
  useEffect(() => {
    const messagesFromStorage = sessionStorage.getItem("messageHistory");
    if (messagesFromStorage) setMessageHistory(JSON.parse(messagesFromStorage));
  }, []);

  // save to sessionStorage & use a ref to scroll down to most recent message
  useEffect(() => {
    sessionStorage.setItem("messageHistory", JSON.stringify(messageHistory));
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageHistory]);

  // need a timeout so that the ref exists when trying to
  // scroll down when you first open the modal
  useEffect(() => {
    setTimeout(() => {
      endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [props.open]);

  const onQuestionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionInput(e.target.value);
  };

  const submitQuestion = async () => {
    const message = questionInput; // temp to keep track of current message
    setMessageHistory((prevState: Message[]) => [
      ...prevState,
      { sender: Sender.user, message },
    ]);
    setQuestionInput("");

    // fetch response
    setIsTyping(true);
    const response = await fetchChat(message);
    setIsTyping(false);
    setMessageHistory((prevState: Message[]) => [
      ...prevState,
      { sender: Sender.bot, message: response },
    ]);
  };

  const onQuestionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      submitQuestion();
    }
  };

  return (
    <StyledDialog open={!!props.open} onClose={props.onClose}>
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
          maxHeight: 500,
          overflowY: "scroll",
        }}
      >
        {messageHistory.map((message: Message, idx: number) => {
          const userMessage = message.sender === Sender.user;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: userMessage ? "#4c6fff" : "#e6e6e6",
                color: userMessage ? "#fff" : "black",
                borderRadius: "16px",
                padding: "8px 16px",
                marginBottom: "8px",
                width: "60%",
                alignSelf: userMessage ? "flex-end" : "flex-start",
              }}
              ref={messagesRef}
            >
              <span>{message.message}</span>
            </div>
          );
        })}
        {isTyping && (
          <TypingDiv>
            <TypingDot />
            <TypingDot />
            <TypingDot />
          </TypingDiv>
        )}
        <div ref={endOfMessagesRef} />
      </div>
      <div style={{ marginTop: "auto" }}>
        <Divider sx={{ borderBottom: `solid 1px #ebf2fa` }} />
        <div
          style={{
            width: "100%",
            padding: "16px 16px 0px",
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
            autoComplete="off"
          />
          <IconButton onClick={submitQuestion}>
            <SendIcon sx={{ color: "#8f95b2" }} />
          </IconButton>
        </div>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            marginLeft: "16px",
            color: "#8f95b2",
          }}
        >
          Powered by ChatGPT
        </span>
      </div>
    </StyledDialog>
  );
};

export default ChatBot;
