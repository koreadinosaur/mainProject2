import React from "react";

const Button = (props) => {
  return (
    <>
      <button>{(props && props.buttonName) || "제출"}</button>
    </>
  );
};

export default Button;
