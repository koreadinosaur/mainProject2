import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../../src/store/modules/userSlice";
import BoardLayout from "../layout/BoardLayout";
import NewToDoForm from "./NewToDoForm";
import ToDoItem from "./ToDoItem";

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
function TodoList({ boardName }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.value);
  const listItems = currentUser.toDoList;
  const addToForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  const removeFromBoard = (cardId) => {
    let newToDoLists = currentUser.toDoList.filter(
      (item) => item.cardId !== cardId
    );
    dispatch(loginUser({ ...currentUser, toDoList: newToDoLists }));
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
        {isOpenForm && boardName === "To Do" ? (
          <div>
            <button onClick={addToForm}>접기</button>
            <NewToDoForm />
          </div>
        ) : (
          <button onClick={addToForm}>할 일 추가하기</button>
        )}
      </CardContainer>
    </BoardLayout>
  );
}
export default TodoList;
