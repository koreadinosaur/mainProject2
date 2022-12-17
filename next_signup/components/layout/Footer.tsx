import styled from "styled-components";
import { FooterLayoutProps } from "../../types/interface";
const FooterContainer = styled.footer<FooterLayoutProps>`
  width: ${(props) => props.width};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Footer = ({ children, width }: FooterLayoutProps) => {
  return <FooterContainer width={width}>{children}</FooterContainer>;
};

export default Footer;
