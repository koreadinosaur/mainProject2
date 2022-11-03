import React from "react";
import styled from "styled-components";
const FooterContainer = styled.footer`
  width: ${(props) => props.width};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Footer = ({ children, width }) => {
  return <FooterContainer width={width}>{children}</FooterContainer>;
};

export default Footer;
