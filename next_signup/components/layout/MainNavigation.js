import Link from "next/link";
import { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { loginUser } from "../../src/store/modules/userSlice";
import axios from "axios";
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
  const currentUser = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const userData = session?.user?.userData;
  useEffect(() => {
    if (!currentUser?.username && status === "authenticated") {
      async function getToDoList() {
        try {
          const response = await axios({
            method: "post",
            url: "/api/todolist",
            data: userData,
          });
          const { toDoList, inProgressList, doneList } = response.data;
          const boardLists = { toDoList, inProgressList, doneList };
          dispatch(loginUser({ ...userData, ...boardLists }));
          return response.data;
        } catch (e) {
          console.error(e);
        }
      }
      // getToDoList();
    }
  }, [userData]);

  return (
    <Fragment>
      <NavLink href="/">Home</NavLink>
      {!session ? <NavLink href="/login">login</NavLink> : null}
      {!session ? <NavLink href="/signup">signup</NavLink> : null}
      {session ? <NavLink href="/mypage">mypage</NavLink> : null}
      {session ? <NavLink href="/todolist">ToDoList</NavLink> : null}
      {session ? <Logout onClick={() => signOut()}>logout</Logout> : null}
    </Fragment>
  );
};

export default MainNavigation;
