import React from "react";
import styled from "styled-components";
const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default Footer;
