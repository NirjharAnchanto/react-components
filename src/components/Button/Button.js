import React from "react";
import "./Button.scss";

const CustomButton = (props) => {
  const { text, type, hasIcon, icon, size, isDisabled } = props;
  return (
    <React.Fragment>
      <button className={`btn-${type} btn-${size}`} disabled={isDisabled}>
        {hasIcon && <i className={`${icon}`}></i>}
        {text}
      </button>
    </React.Fragment>
  );
};

export default CustomButton;
