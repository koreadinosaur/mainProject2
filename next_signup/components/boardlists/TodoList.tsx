import { Button } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../src/store/hook";
import { isUpdated } from "../../src/store/modules/isCardUpdated";
import { loginUser } from "../../src/store/modules/userSlice";
import BoardLayout from "../layout/BoardLayout";
import NewToDoForm from "./NewToDoForm";
import ToDoItem from "./ToDoItem";
import AddIcon from "@mui/icons-material/Add";
const CardContainer = styled.div`
  border-radius: 0.7rem;
  background-color: #59b4d1;
  padding: 1rem;
`;
const BoardHeader = styled.div`
  color: white;
  height: 3rem;
  margin-bottom: 1rem;
`;
const FormContainer = styled.div`
  animation: slideForm 0.5s ease;
  @keyframes slideForm {
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
function TodoList({ boardName }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.value);
  const listItems = currentUser?.toDoList;
  const openForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  const removeFromBoard = (cardId) => {
    console.log("cardId : ", cardId);

    let newToDoLists = currentUser?.toDoList?.filter(
      (item) => item.cardId !== cardId
    );
    if (currentUser?.username) {
      console.log("hi");

      dispatch(loginUser({ ...currentUser, toDoList: newToDoLists }));
      dispatch(isUpdated(true));
    }
  };
  return (
    <BoardLayout>
      <CardContainer>
        <BoardHeader>
          <h2>{boardName}</h2>
        </BoardHeader>
        <ul>
          {listItems &&
            listItems.map((item) => (
              <ToDoItem
                removeFromBoard={removeFromBoard}
                key={item.cardId}
                toDoItem={item}
              />
            ))}
        </ul>
        <Button variant="contained" onClick={openForm} style={{ fontSize: 13 }}>
          {isOpenForm ? (
            "닫기"
          ) : (
            <Fragment>
              <AddIcon />
              To Do 추가하기
            </Fragment>
          )}
        </Button>
        {/* <button onClick={openForm}>
          {isOpenForm ? "닫기" : "To Do 추가하기"}
        </button> */}
        {isOpenForm && boardName === "To Do" ? (
          <FormContainer>
            <NewToDoForm />
          </FormContainer>
        ) : null}
      </CardContainer>
    </BoardLayout>
  );
}
export default TodoList;
