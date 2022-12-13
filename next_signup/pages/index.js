import styled from "styled-components";
import { useEffect } from "react";
import DoneList from "../components/boardlists/DoneList";
import InProgressList from "../components/boardlists/InProgressList";
import TodoList from "../components/boardlists/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { isCardUpdated } from "../src/store/modules/cardSlice";
import axios from "axios";
const HomeLayout = styled.div`
  height: 100vh;
`;
const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  animation: slideIntroduction 0.5s ease;
  @keyframes slideIntroduction {
    0% {
      transform: translateX(1.5rem);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 100%;
    }
  }
`;
export default function Home({}) {
  /*   const currentUser = useSelector((state) => state.user.value);

  useEffect(() => {
    const updateAllChangedLists = async () => {
      try {
        const updated = await axios({
          method: "put",
          url: "/api/todolist/update",
          data: currentUser,
        });
        console.log(updated);
      } catch (error) {
        console.error(error);
      }
    };
    updateAllChangedLists();
  }, [currentUser.DoneList, currentUser.toDoList, currentUser.inProgressList]); */
  useEffect(() => {
    const getLoginUser = async () => {
      try {
        console.log(loginUser);
      } catch (error) {
        console.log(error);
      }
    };
    // getLoginUser();
  }, []);
  return (
    <HomeLayout>
      {/* <TodoList
        listItems={currentUser && currentUser.toDoList}
        currentUser={currentUser}
        boardName="To Do"
      />
      <InProgressList currentUser={currentUser} boardName="In Progress" />
      <DoneList currentUser={currentUser} boardName="Done" /> */}
      <Introduction>
        <h1>나만의 To Do List에 오신 것을 환영합니다</h1>
        <h2>일정을 관리하세요</h2>
        <h3>해야 할 일, 진행중인 일, 완료한 일을 따로 관리할 수 있습니다</h3>
      </Introduction>
    </HomeLayout>
  );
}
