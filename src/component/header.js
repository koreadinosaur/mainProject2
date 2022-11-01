import React from "react";
import styled from "styled-components";
const HeaderBar = styled.h1`
  text-align: start;
  margin-bottom: 5rem;
`;

const Header = ({ title }) => {
  return (
    <>
      <HeaderBar>{title || "제목"}</HeaderBar>
    </>
  );
};

export default Header;
