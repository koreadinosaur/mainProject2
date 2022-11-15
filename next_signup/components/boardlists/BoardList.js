import { useState } from "react";
import styled from "styled-components";
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
function BoardList({ listItems, boardName, currentUser, setCurrentUser }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const addToForm = () => {
    setIsOpenForm(!isOpenForm);
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
              <ToDoItem key={item.cardId} toDoItem={item} />
            ))}
        </ul>
        {isOpenForm && boardName === "To Do" ? (
          <div>
            <button onClick={addToForm}>접기</button>
            <NewToDoForm
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </div>
        ) : (
          <button onClick={addToForm}>할 일 추가하기</button>
        )}
      </CardContainer>
    </BoardLayout>
  );
}
export default BoardList;
