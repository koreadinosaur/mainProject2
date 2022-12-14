import { Button } from "@mui/material";
import { Fragment, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../src/redux/hook";
import { isUpdated } from "../../src/redux/slices/isCardUpdated";
import { loginUser } from "../../src/redux/slices/userSlice";
import BoardLayout from "../layout/BoardLayout";
import NewToDoForm from "./NewToDoForm";
import ToDoItem from "./ToDoItem";
import AddIcon from "@mui/icons-material/Add";
import { ToDoFormDataType } from "./ToDoFormType";
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
function TodoList({ boardName }: { boardName: string }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.value);
  const listItems = currentUser?.toDoList;
  const openForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  const removeFromBoard = (cardId: string) => {
    console.log("cardId : ", cardId);

    let newToDoLists = currentUser?.toDoList?.filter(
      (item: ToDoFormDataType) => item.cardId !== cardId
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
            listItems.map((item: ToDoFormDataType) => (
              <ToDoItem
                removeFromBoard={removeFromBoard}
                key={item.cardId}
                toDoItem={item}
              />
            ))}
        </ul>
        <Button variant="contained" onClick={openForm} style={{ fontSize: 13 }}>
          {isOpenForm ? (
            "??????"
          ) : (
            <Fragment>
              <AddIcon />
              To Do ????????????
            </Fragment>
          )}
        </Button>
        {/* <button onClick={openForm}>
          {isOpenForm ? "??????" : "To Do ????????????"}
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
