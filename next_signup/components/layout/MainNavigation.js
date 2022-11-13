import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";
const NavLink = styled(Link)`
  margin-right: 1rem;

  &:hover {
    border-bottom: 3px solid red;
    color: gray;
  }
`;

const MainNavigation = () => {
  return (
    <Fragment>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/login">login</NavLink>
      <NavLink href="/signup">signup</NavLink>
      <NavLink href="/mypage">mypage</NavLink>
    </Fragment>
  );
};

export default MainNavigation;
