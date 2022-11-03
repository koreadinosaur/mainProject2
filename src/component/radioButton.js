import React from "react";
import styled from "styled-components";
const Input = styled.input`
  margin-left: 1rem;
`;

const RadioButton = ({ value, name, user }) => {
  return (
    <>
      <label>{value || "라벨"}</label>
      {user === value ? (
        <Input type="radio" name={name} value={value} checked></Input>
      ) : (
        <Input type="radio" name={name} value={value}></Input>
      )}
    </>
  );
};

export default RadioButton;
