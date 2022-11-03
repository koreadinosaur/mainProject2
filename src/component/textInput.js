import React from "react";
import styled from "styled-components";
const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height || "3rem"};
`;
const InputContainer = styled.div`
  width: 100%;
`;

const TextInput = ({ type, width, placeholder, name, user }) => {
  console.log(user);
  return (
    <InputContainer>
      <Input
        type={type || "text"}
        width={width || "100%"}
        placeholder={placeholder}
        defaultValue={user}
        className={name}
      />
    </InputContainer>
  );
};

export default TextInput;
