import React from "react";

const validation = (props) => {
  let validationMessage = "Text is long enough!";
  if (props.inputLength <= 5) {
    validationMessage = "Text is too short!";
  }

  return <div>{validationMessage}</div>;
};
export default validation;
