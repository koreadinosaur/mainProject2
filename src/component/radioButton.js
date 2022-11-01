import React from "react";

const RadioButton = ({ value, name }) => {
  return (
    <>
      <label>{value || "라벨"}</label>
      <input type="radio" name={name} value={value}></input>
    </>
  );
};

export default RadioButton;
