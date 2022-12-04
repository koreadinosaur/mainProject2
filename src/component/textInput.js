import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height || "3rem"};
`;
const InputContainer = styled.div`
  width: 100%;
`;

const TextInput = ({
  type,
  width,
  placeholder,
  name,
  user,
  register,
  required,
  label,
  disabledInput,
  validation,
  onBlur,
}) => {
  return (
    <InputContainer>
      <Input
        type={type || "text"}
        width={width || "100%"}
        defaultValue={user === "직접입력" ? "" : user}
        placeholder={placeholder}
        className={name}
        {...register(label, validation || required)}
        {...(disabledInput || (name === "emailHost" && user)
          ? { disabled: true }
          : {})}
      />
    </InputContainer>
  );
};

export default TextInput;
