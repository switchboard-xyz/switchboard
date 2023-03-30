import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import {
  Dialog,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import HistoryIcon from "@mui/icons-material/History";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
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
  alignItems: "center",
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
    fontFamily: "Source Sans Pro",
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

const StyledSelect = styled(Select)({
  height: 40,
  borderRadius: "8px",
  border: "solid 1px #6b7c9333",
  padding: "0px 0px",
  fontSize: "14px",
  color: "#425466",
  fontFamily: "Source Sans Pro",
  "& .MuiOutlinedInput-notchedOutline": {
    display: "none",
    "&:focus": {
      display: "none",
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

const fetchChat = async (input: string, type: string, sessionId: string) => {
  return fetch(`${CHAT_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
      sessionId,
      type,
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

const WELCOME_MESSAGE = {
  sender: Sender.bot,
  message: "Welcome to Switchboard Chat! Ask me a question below.",
};

const ChatBot = (props: { open: boolean; onClose: () => void }) => {
  const [sessionId, setSessionId] = useState("");
  const [sessionType, setSessionType] = useState("default");
  const [questionInput, setQuestionInput] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([
    WELCOME_MESSAGE,
  ]);
  const [feedbackSelected, setFeedBackSelected] = useState();

  const messagesRef = useRef();
  const endOfMessagesRef = useRef();

  useEffect(() => {}, [sessionId, messageHistory]);

  // need to set up session storage to keep track of message history and session id
  useEffect(() => {
    const messagesFromStorage = sessionStorage.getItem("messageHistory");
    if (messagesFromStorage) setMessageHistory(JSON.parse(messagesFromStorage));

    const sessionIdFromStorage = sessionStorage.getItem("chatSessionId");
    setSessionId(sessionIdFromStorage ?? uuid());
  }, []);

  // save to sessionStorage & use a ref to scroll down to most recent message
  useEffect(() => {
    sessionStorage.setItem("messageHistory", JSON.stringify(messageHistory));
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageHistory]);

  useEffect(() => {
    // session storage
    sessionId && sessionStorage.setItem("chatSessionId", sessionId);
  }, [sessionId]);

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

    if (messageHistory.length === 1) {
      // want to save the chat session id to local storage after user sends first message
      const sessionIds =
        JSON.parse(localStorage.getItem("chatSessionIds")) ?? [];
      sessionIds.push(sessionId);
      localStorage.setItem("chatSessionIds", JSON.stringify(sessionIds));
    }

    setMessageHistory((prevState: Message[]) => [
      ...prevState,
      { sender: Sender.user, message },
    ]);
    setQuestionInput("");

    // fetch response
    setIsTyping(true);
    const response = await fetchChat(message, sessionType, sessionId);
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

  const onMoreClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const onClearChatClick = () => {
    setMessageHistory([WELCOME_MESSAGE]);
    setAnchorEl(null);
    setSessionId(uuid());
  };

  return (
    <StyledDialog open={!!props.open} onClose={props.onClose}>
      <StyledHeader>
        <div>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              fontFamily: "Source Sans Pro",
            }}
          >
            Chat with Switchboard Bot
          </Typography>
          <Typography sx={{ fontFamily: "Source Sans Pro" }}>
            Ask a question and the Switchboard Bot will try to help!
          </Typography>
        </div>
        <IconButton onClick={onMoreClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
        >
          <MenuItem
            onClick={onClearChatClick}
            sx={{ fontFamily: "Source Sans Pro", fontWeight: 600 }}
          >
            Clear Chat History
            <HistoryIcon sx={{ marginLeft: "8px" }} />
          </MenuItem>
        </Menu>
      </StyledHeader>
      <Divider sx={{ borderBottom: `solid 1px #ebf2fa` }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "8px 32px 16px",
          maxHeight: 500,
          overflowY: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
            justifyContent: "flex-end",
          }}
        >
          <span style={{ fontSize: "14px" }}>Mode:</span>
          <StyledSelect
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
          >
            <MenuItem
              value="default"
              sx={{ fontFamily: "Source Sans Pro", fontSize: "14px" }}
            >
              Default
            </MenuItem>
            <MenuItem
              value="oracle-job"
              sx={{ fontFamily: "Source Sans Pro", fontSize: "14px" }}
            >
              Job Builder
            </MenuItem>
          </StyledSelect>
        </div>
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
                maxWidth: "60%",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "4px 16px",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#8f95b2",
            }}
          >
            Powered by ChatGPT
          </span>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#636363" }}>
            Has this been helpful?
            <IconButton
              sx={{ marginRight: "-8px" }}
              onClick={() => setFeedBackSelected("up")}
            >
              <ThumbUpIcon
                fontSize="small"
                sx={{
                  color: feedbackSelected === "up" ? "#4C6FFF" : '"#636363"',
                }}
              />
            </IconButton>
            <IconButton onClick={() => setFeedBackSelected("down")}>
              <ThumbDownIcon
                fontSize="small"
                sx={{
                  color: feedbackSelected === "down" ? "#4C6FFF" : '"#636363"',
                }}
              />
            </IconButton>
          </span>
        </div>
      </div>
    </StyledDialog>
  );
};

export default ChatBot;
