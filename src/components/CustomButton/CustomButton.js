import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSign, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
