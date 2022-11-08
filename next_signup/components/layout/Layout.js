import styled from "styled-components";
const LayoutContainer = styled.div`
  height: 60rem;
  width: 30rem;
  margin: auto;
  margin-top: 15rem;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
