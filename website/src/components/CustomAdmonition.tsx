import React from "react";
import ReactMarkdown from "react-markdown";

interface CustomAdmonitionProps {
  type: string; // "note", "tip", "info", "caution", "deprecated"
  header?: string;
  children: React.ReactNode;
}

const CustomAdmonition: React.FC<CustomAdmonitionProps> = ({ type, header, children }) => {
  const generatedHeader = header || type.toUpperCase();

  return (
    <div className={`custom-admonition ${type}`}>
      {generatedHeader && <div className="custom-admonition-header">{generatedHeader}</div>}
      <div className="custom-admonition-content">{children}</div>
    </div>
  );
};

export default CustomAdmonition;
