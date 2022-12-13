import styled from "styled-components";
import { useEffect } from "react";
import DoneList from "../../components/boardlists/DoneList";
import InProgressList from "../../components/boardlists/InProgressList";
import TodoList from "../../components/boardlists/TodoList";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toDoCardLists } from "../../src/store/modules/cardSlice";
import { loginUser } from "../../src/store/modules/userSlice";
import { useSession } from "next-auth/react";
import { isUpdated } from "../../src/store/modules/isCardUpdated";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
const HomeLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ToDoBoard = ({ user }) => {
  const currentUser = useSelector((state) => state.user.value);
  const isCardUpdated = useSelector((state) => state.isCardUpdated.value);
  // console.log(isCardUpdated);
  const dispatch = useDispatch();
  // console.log("todolist user : ", user);
  // console.log("todolist parsed : ", JSON.parse(user));
  useEffect(() => {
    if (!currentUser.username) {
      dispatch(loginUser(JSON.parse(user)));
    }
  }, []);
  useEffect(() => {
    const updateAllChangedLists = async () => {
      try {
        // console.log("todopage currentUser : ", currentUser);
        const updated = await axios({
          method: "put",
          url: "/api/todolist/update",
          data: currentUser,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (currentUser.username) {
      console.log("updated");
      if (isCardUpdated) {
        updateAllChangedLists();
        dispatch(isUpdated(false));
      }
    }
  }, [currentUser.toDoList, currentUser.inProgressList, currentUser.doneList]);

  return (
    <HomeLayout>
      <TodoList
        listItems={currentUser && currentUser.toDoList}
        currentUser={currentUser}
        boardName="To Do"
      />
      <InProgressList currentUser={currentUser} boardName="In Progress" />
      <DoneList currentUser={currentUser} boardName="Done" />
    </HomeLayout>
  );
};
export default ToDoBoard;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const userData = await axios({
    method: "post",
    url: "http://localhost:3000/api/user",
    data: session.user.userData,
  });
  console.log("userData clientSide : ", userData.data);
  return {
    props: {
      user: JSON.stringify(userData.data),
    },
  };
}
