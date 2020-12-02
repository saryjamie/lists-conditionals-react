import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    padding: "8px",
    margin: "8px",
    border: "1px solid teal",
    textAlign: "center",
  };
  return;
  <div style={style}>{props.character}</div>;
};
export default char;
