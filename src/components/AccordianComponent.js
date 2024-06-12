"use client";
import { useState } from "react";

const AccordianComponent = ({ heading, content }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="wpr-accordion-item-wrap">
      <button className="wpr-acc-button wpr-acc-active">
        <span className="wpr-acc-item-title">
          <div className="wpr-acc-icon-box">
            <span className="wpr-title-icon"> </span>
          </div>
          <span className="wpr-acc-title-text">{heading}</span>
        </span>
        {open ? (
          <span className="wpr-toggle-icon" onClick={handleClick}>
            <i aria-hidden="true" className="fas fa-minus"></i>
          </span>
        ) : (
          <span className="wpr-toggle-icon" onClick={handleClick}>
            <i aria-hidden="true" className="fas fa-plus"></i>
          </span>
        )}
      </button>
      <div
        className={`wpr-acc-panel  ${open ? "wpr-acc-panel-active" : ""}`}
        style={{ display: `${open ? "block" : "none"}` }}
      >
        <div className="wpr-acc-panel-content">
          <div className="collapsible-body">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordianComponent;
