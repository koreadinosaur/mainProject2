import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isCardUpdated } from "../../src/store/modules/cardSlice";
import { loginUser } from "../../src/store/modules/userSlice";
import BoardLayout from "../layout/BoardLayout";

import ToDoItem from "./ToDoItem";
const InProgressLi = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CardContainer = styled.div`
  border-radius: 0.7rem;
  background-color: #945ad1;
  padding: 1rem;
`;
const BoardHeader = styled.div`
  color: white;
  height: 3rem;
  margin-bottom: 1rem;
`;
function DoneList({ boardName }) {
  const currentUser = useSelector((state) => state.user.value);
  const isUpdated = useSelector((state) => state.isCardUpdated.value);
  const dispatch = useDispatch();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    let DoneItem;

    let newInProgressList = currentUser.inProgressList.filter((item) => {
      if (item && item.cardId !== e.target.id) {
        return true;
      } else {
        DoneItem = item;
        return false;
      }
    });
    let newDoneList =
      currentUser && currentUser.doneList
        ? [...currentUser.doneList, DoneItem]
        : [DoneItem];
    dispatch(
      loginUser({
        ...currentUser,
        inProgressList: newInProgressList,
        doneList: newDoneList,
      })
    );
    if (!isUpdated) dispatch(isCardUpdated(true));
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
          currentUser.doneList &&
          currentUser.doneList.map((item) => (
            <ToDoItem key={item && item.cardId} toDoItem={item} />
          ))}
        {isOpenForm ? (
          <ul onClick={handleClick}>
            <button onClick={addToForm}>접기</button>
            {currentUser &&
              currentUser.inProgressList &&
              currentUser.inProgressList.map((item) => (
                <InProgressLi key={item && item.cardId}>
                  <span>{item && item.todo}</span>
                  <button id={item && item.cardId}>이동하기</button>
                </InProgressLi>
              ))}
          </ul>
        ) : (
          <button onClick={addToForm}>완료된 작업 추가</button>
        )}
      </CardContainer>
    </BoardLayout>
  );
}
export default DoneList;
