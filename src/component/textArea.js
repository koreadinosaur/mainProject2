import React from "react";
import styled from "styled-components";
const TextAreaBox = styled.textarea`
  width: 34rem;
  height: 10rem;
  &:focus {
    height: 15rem;
    transition: all 0.5s ease;
  }
  transition: all 0.5s ease;
`;

const TextArea = ({ user }) => {
  return (
    <>
      <TextAreaBox defaultValue={user}></TextAreaBox>
    </>
  );
};

export default TextArea;
