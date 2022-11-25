import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const NavLink = styled(Link)`
  margin-right: 1rem;

  &:hover {
    border-bottom: 3px solid red;
    color: gray;
  }
`;

const MainNavigation = () => {
  const currentUser = useSelector((state) => state.user.value);
  return (
    <Fragment>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/login">login</NavLink>
      <NavLink href="/signup">signup</NavLink>
      {currentUser.username ? <NavLink href="/mypage">mypage</NavLink> : null}
      <NavLink href="/users">Users</NavLink>
    </Fragment>
  );
};

export default MainNavigation;
