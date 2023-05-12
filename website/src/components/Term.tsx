import React from "react";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import termsData from "terms.json";

const popupStyle = {
  fontSize: "14px",
};
const textStyle = {
  fontWeight: "bold",
};

export default function Term(props) {
  const innerText = React.Children.toArray(props.children)
    .filter((child) => typeof child === "string")
    .join("");
  const definition = Object.keys(termsData).includes(innerText)
    ? termsData[innerText]
    : "";

  return definition ? (
    <Tooltip title={definition} arrow>
      <span style={textStyle}>{props.children}</span>
    </Tooltip>
  ) : (
    <span style={textStyle}>{props.children}</span>
  );
}
