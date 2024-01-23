import React, { useState } from "react";

interface CustomDetailsProps {
  header: string;
  children: React.ReactNode;
}

const CustomDetails: React.FC<CustomDetailsProps> = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`custom-details ${isOpen ? "open" : ""}`}>
      <summary onClick={toggleDetails}>{header}</summary>
      <div className="divider"></div>
      <div className="details-content">{children}</div>
    </div>
  );
};

export default CustomDetails;
