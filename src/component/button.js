import React from "react";
import styled from "styled-components";
const ButtonElement = styled.button`
  display: inline-block;
  border: none;
  border-radius: 0.3rem;
  background-color: ${(props) => props.bgColor};
  height: 3rem;
  color: white;
  width: ${(props) => props.btnWidth};

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ buttonName, bgColor, width, type, onClick, errors }) => {
  return (
    <>
      <ButtonElement
        type={type || null}
        bgColor={bgColor || "skyblue"}
        btnWidth={width}
        {...(onClick ? (onClick = onClick) : {})}
        {...(errors ? { disabled: true } : {})}
      >
        {buttonName || "제출"}
      </ButtonElement>
    </>
  );
};

export default Button;
