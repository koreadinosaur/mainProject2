import styled from "styled-components";
import MainNavigation from "./MainNavigation";
const LayoutContainer = styled.div`
  height: 60rem;
  margin: auto;
  margin-top: 20rem;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;
const NavContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;
const PageLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavContainer>
        <MainNavigation />
      </NavContainer>
      {children}
    </LayoutContainer>
  );
};

export default PageLayout;
