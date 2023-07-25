import HistoryIcon from "@mui/icons-material/History";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Divider,
  IconButton,
  Select,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CodeBlock from "@theme/CodeBlock";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { v4 as uuid } from "uuid";

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

const StyledHeader = styled("div")({
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  width: "100%",
  padding: "12px 18px 12px 30px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    minHeight: "100%",
    maxHeight: 96,
    border: "solid 1px #6b7c9333",
    borderRadius: "8px",
    fontSize: "16px",
    fontFamily: "Source Sans Pro",
    color: "#425466",
    overflowY: "scroll",
    m: 1,
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

type Sender = "user" | "support";

interface Message {
  sender: Sender;
  message: string;
}

const CHAT_URL = "https://chat.switchboard.xyz";

const fetchChat = async (
  input: string,
  sessionId: string,
  history: Message[]
) => {
  return fetch(`${CHAT_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
      sessionId,
      type: "default",
      history: history.map((h): { user: string; input: string } => {
        const his = {
          user: h.sender.toString(),
          input: h.message,
        };
        return his;
      }),
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

const WELCOME_MESSAGE: Message = {
  sender: "support",
  message: "Welcome to Switchboard Chat! Ask me a question below.",
};

const ChatBot = (props: { chat?: string }) => {
  const [sessionId, setSessionId] = useState("");
  const [sessionType, setSessionType] = useState<"default" | "oracle-job">(
    "default"
  );
  const [questionInput, setQuestionInput] = useState(props.chat || "");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([
    WELCOME_MESSAGE,
  ]);
  const [feedbackSelected, setFeedBackSelected] = useState<string>();

  const messagesRef = useRef();
  const endOfMessagesRef = useRef<HTMLDivElement>();

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
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageHistory]);

  useEffect(() => {
    // session storage
    sessionId && sessionStorage.setItem("chatSessionId", sessionId);
  }, [sessionId]);

  // need a timeout so that the ref exists when trying to
  // scroll down when you first open the modal
  // useEffect(() => {
  //   setTimeout(() => {
  //     endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, 100);
  // }, [props.open]);

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
      { sender: "user", message },
    ]);
    setTimeout(() => {
      setQuestionInput("");
    }, 100);

    // fetch response
    setIsTyping(true);
    const response = await fetchChat(message, sessionId, messageHistory);
    setIsTyping(false);
    setMessageHistory((prevState: Message[]) => [
      ...prevState,
      { sender: "support", message: response },
    ]);
  };

  const onQuestionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
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
    <>
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
        <Tooltip
          title="Clear Chat History"
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
            onClick={onClearChatClick}
            sx={{
              ":hover": {
                backgroundColor: "white",
                opacity: 0.6,
              },
            }}
          >
            <HistoryIcon sx={{ marginLeft: "8px" }} />
          </IconButton>
        </Tooltip>
      </StyledHeader>
      <Divider sx={{ borderBottom: `solid 1px #ebf2fa` }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "8px 32px 16px",
          overflowY: "scroll",
        }}
      >
        {/* <div
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
            onChange={(e) =>
              setSessionType(e.target.value as "default" | "oracle-job")
            }
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
        </div> */}
        {messageHistory.map((message: Message, idx: number) => {
          const userMessage = message.sender === "user";
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
                whiteSpace: userMessage ? "break-spaces" : undefined,
              }}
              ref={messagesRef}
            >
              {userMessage ? (
                message.message.trim()
              ) : (
                <ReactMarkdown
                  children={message.message}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      const codeString =
                        (match && match.length > 1 && match[1] === "json") ||
                        /^\s*\{(?:[\s\S]*\})?$/.test(String(children[0]).trim()) // test if string starts with and ends with { }
                          ? JSON.stringify(
                              JSON.parse(String(children[0])),
                              undefined,
                              2
                            )
                          : String(children[0]);
                      return !inline && match ? (
                        <CodeBlock
                          children={codeString}
                          language={match[1]}
                          {...props}
                        />
                      ) : (
                        <CodeBlock children={codeString} {...props} />
                      );
                    },
                  }}
                />
              )}
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
            multiline
            margin="dense"
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
    </>
  );
};

export default ChatBot;

/**
 * Remove leading and trailing whitespace and new lines
 * Replace triple backticks with <pre> tags
 * Replace any new line characters with <br > elements
 */
function formatRawString(input: string): Array<React.ReactElement> {
  const text = input.replace(/^\n+|\n+$/g, "").trim(); // remove leading/trailing new lines
  const elements: Array<React.ReactElement> = [];
  const lines = text.split("\n");
  let currentText = "";
  let inCodeBlock = false;
  let codeLang = "";
  const longHtmlString = "";
  let id = 1;
  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <CodeBlock key={id} language={codeLang ?? "json"}>
            {currentText.trim()}
          </CodeBlock>
        );
        id += 1;
        // longHtmlString += `<CodeBlock language="${
        //   codeLang ?? "json"
        // }">${currentText.trim()}</CodeBlock>`;
        currentText = "";
        inCodeBlock = false;
        codeLang = "";
      } else {
        elements.push(
          <span key={id}>
            {currentText
              .trim()
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replaceAll("\n", " <br> ")}
          </span>
        );
        id += 1;
        // longHtmlString += `<span>${currentText
        //   .trim()
        //   .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        //   .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        //   .replaceAll("\n", " <br> ")}</span>`;
        currentText = "";
        inCodeBlock = true;
        codeLang = line.slice(0, 3) ?? "";
      }
    } else {
      currentText += line + "\n";
    }
  }
  if (inCodeBlock) {
    elements.push(
      <CodeBlock key={id} language={codeLang ?? "json"}>
        {currentText.trim()}
      </CodeBlock>
    );
    id += 1;
    // longHtmlString += `<CodeBlock language="${
    //   codeLang ?? "json"
    // }">${currentText.trim()}</CodeBlock>`;
    currentText = "";
  } else {
    elements.push(
      <span key={id}>
        {currentText
          .trim()
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replaceAll(/\n{1,}/g, " <br> ")}
      </span>
    );
    id += 1;
    // longHtmlString += `<span>${currentText
    //   .trim()
    //   .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    //   .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    //   .replaceAll(/\n{1,}/g, " <br> ")}</span>`;
    currentText = "";
  }
  return elements;
  // return longHtmlString;
}
