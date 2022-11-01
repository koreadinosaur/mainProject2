import React from "react";

const Button = ({ buttonName }) => {
  return (
    <>
      <button>{buttonName || "제출"}</button>
    </>
  );
};

export default Button;
