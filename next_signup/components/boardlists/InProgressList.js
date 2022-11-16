import { useState } from "react";
import styled from "styled-components";
import BoardLayout from "../layout/BoardLayout";
import NewToDoForm from "./NewToDoForm";
import ToDoItem from "./ToDoItem";
const ToDoLi = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const CardContainer = styled.div`
  border-radius: 0.7rem;
  background-color: #d0935a;
  padding: 1rem;
  transition: all 0.5s ease;
`;
const BoardHeader = styled.div`
  color: white;
  height: 3rem;
  margin-bottom: 1rem;
`;

function InProgressList({ listItems, boardName, currentUser, setCurrentUser }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    let inProgressItem;
    let newToDoList = currentUser.toDoList.filter((item) => {
      if (item && item.cardId !== e.target.id * 1) {
        return true;
      } else {
        inProgressItem = item;
        return false;
      }
    });
    let newInProgressList = [...currentUser.inProgressList, inProgressItem];
    setCurrentUser({
      ...currentUser,
      toDoList: newToDoList,
      inProgressList: newInProgressList,
    });
  };
  const addToForm = (e) => {
    e.stopPropagation();
    setIsOpenForm(!isOpenForm);
  };
  return (
    <BoardLayout>
      <CardContainer>
        <BoardHeader>
          <h2>{boardName}</h2>
        </BoardHeader>
        {currentUser &&
          currentUser.inProgressList &&
          currentUser.inProgressList.map((item) => (
            <ToDoItem key={item && item.cardId} toDoItem={item} />
          ))}
        {isOpenForm ? (
          <ul onClick={handleClick}>
            <button onClick={addToForm}>접기</button>
            {currentUser &&
              currentUser.toDoList.map((item) => (
                <ToDoLi key={item && item.cardId} id={item && item.cardId}>
                  <span>{item && item.todo}</span>
                  <button id={item && item.cardId}>이동하기</button>
                </ToDoLi>
              ))}
          </ul>
        ) : (
          <button onClick={addToForm}>진행중인 작업 추가</button>
        )}
      </CardContainer>
    </BoardLayout>
  );
}
export default InProgressList;
