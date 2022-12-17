import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../src/redux/hook";
import { isUpdated } from "../../src/redux/slices/isCardUpdated";
import { loginUser } from "../../src/redux/slices/userSlice";
import BoardLayout from "../layout/BoardLayout";
import ListOnModal from "./ListOnModal";
import { ToDoFormDataType } from "./ToDoFormType";
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
function DoneList({ boardName }: { boardName: string }) {
  const currentUser = useAppSelector((state) => state.user.value);

  const dispatch = useAppDispatch();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    let DoneItem;

    let newInProgressList = currentUser.inProgressList.filter(
      (item: ToDoFormDataType) => {
        if (item && item.cardId !== e.target.id) {
          return true;
        } else {
          DoneItem = item;
          return false;
        }
      }
    );
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
    dispatch(isUpdated(true));
  };
  const removeFromBoard = (cardId: string) => {
    let newDoneLists = currentUser.doneList.filter(
      (item: ToDoFormDataType) => item.cardId !== cardId
    );
    dispatch(loginUser({ ...currentUser, doneList: newDoneLists }));
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
          currentUser.doneList.map((item: ToDoFormDataType) => (
            <ToDoItem
              removeFromBoard={removeFromBoard}
              key={item && item.cardId}
              toDoItem={item}
            />
          ))}
        <ListOnModal
          handleClick={handleClick}
          displayList={currentUser?.inProgressList}
          buttonName="완료된 작업"
        />
        {/* {isOpenForm ? (
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
        )} */}
      </CardContainer>
    </BoardLayout>
  );
}
export default DoneList;
