import React from "react";

const InputLayout = ({ children, label }) => {
  return (
    <div>
      <label>{label || "라벨"}</label>
      <input />
      {children}
    </div>
  );
};

export default InputLayout;
