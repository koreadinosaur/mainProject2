import React from "react";
import styled from "styled-components";
const Label = styled.label`
  display: inline-block;
  width: 5rem;
`;

const ElementContainer = styled.div`
  display: inline-block;
  margin-left: 0.7rem;
`;
const LayoutContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const InputLayout = ({ children, label }) => {
  /* children이 배열의 경우 어떻게 처리하나? 은수님께 여쭤볼 것. */
  return (
    <LayoutContainer>
      <Label>{label || "라벨"}</Label>
      {Array.isArray(children) ? (
        children.map((item, index) => {
          return <ElementContainer key={index}>{item}</ElementContainer>;
        })
      ) : (
        <ElementContainer>{children}</ElementContainer>
      )}
    </LayoutContainer>
  );
};

export default InputLayout;
