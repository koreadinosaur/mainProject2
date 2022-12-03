import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
const NavLink = styled(Link)`
  margin-right: 1rem;

  &:hover {
    border-bottom: 3px solid red;
    color: gray;
  }
`;
const Logout = styled.button`
  background: none;
  border: none;
  font-size: inherit;
  color: black;
  &:hover {
    border-bottom: 3px solid red;
    color: gray;
    cursor: pointer;
  }
`;

const MainNavigation = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  const currentUser = useSelector((state) => state.user.value);
  return (
    <Fragment>
      <NavLink href="/">Home</NavLink>
      {!session ? <NavLink href="/login">login</NavLink> : null}
      {!session ? <NavLink href="/signup">signup</NavLink> : null}
      {session ? <NavLink href="/mypage">mypage</NavLink> : null}
      <NavLink href="/users">Users</NavLink>
      {session ? <Logout onClick={() => signOut()}>logout</Logout> : null}
    </Fragment>
  );
};

export default MainNavigation;
