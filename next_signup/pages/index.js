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
  display: flex;
  justify-content: center;
`;

const toDoList = [
  {
    userId: 1,
    cardId: 1,
    todo: "todolist만들기1",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
  {
    userId: 1,
    cardId: 2,
    todo: "todolist만들기2",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
  {
    userId: 1,
    cardId: 3,
    todo: "todolist만들기3",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
];
const inProgressList = [
  {
    userId: 1,
    cardId: 4,
    todo: "inProgress list 만들기",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
  {
    userId: 1,
    cardId: 5,
    todo: "todolist만들기4",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
  {
    userId: 1,
    cardId: 6,
    todo: "todolist만들기5",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
];
const doneList = [
  {
    userId: 1,
    cardId: 7,
    todo: "Done list 만들기",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
  {
    userId: 1,
    cardId: 8,
    todo: "todolist만들기6",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
  {
    userId: 3,
    cardId: 9,
    todo: "todolist만들기7",
    date: "11-15",
    detail: "피그마까지 만드는 것은 무리.. 너무 못해.",
  },
];

export default function Home({}) {
  const currentUser = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const isUpdated = useSelector((state) => state.isCardUpdated.value);
  console.log(isUpdated);
  useEffect(() => {
    console.log(currentUser);
    const updateAllChangedLists = () => {
      if (!isUpdated) return;
      try {
        axios({
          method: "put",
          url: "/api/updateCard",
          data: currentUser,
        });
        dispatch(isCardUpdated(false));
      } catch (error) {
        console.error(error);
      }
    };
    updateAllChangedLists();
    /* window.addEventListener("beforeunload", updateAllChangedLists);
    return () => {
      window.removeEventListener("beforeunload", updateAllChangedLists);
    }; */
  }, [currentUser]);
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
}
