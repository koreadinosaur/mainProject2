import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import HeaderOptions from "./HeaderOptions";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import { loginUser } from "../../src/store/modules/userSlice";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../src/store/hook";
const NavBar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
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
  const currentUser = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  return (
    <NavBar>
      <HeaderOptions href="/" Icon={HomeIcon} title="Home" />

      {!session ? (
        <HeaderOptions href="/login" Icon={LoginIcon} title="login" />
      ) : null}

      {!session ? (
        <HeaderOptions href="/signup" Icon={PeopleIcon} title="signup" />
      ) : null}
      {session ? (
        <HeaderOptions href="/todolist" Icon={ListAltIcon} title="ToDoList" />
      ) : null}
      {session ? (
        <HeaderOptions
          href="/mypage"
          Icon={AccountCircleIcon}
          title="profile"
        />
      ) : null}
      {session ? (
        <Logout onClick={() => signOut()}>
          <LogoutIcon style={{ fontSize: 40 }} />
          <br></br>
          logout
        </Logout>
      ) : null}
    </NavBar>
  );
};

export default MainNavigation;
