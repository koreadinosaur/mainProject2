import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toDoCard } from "../../src/store/modules/cardSlice";
import { isUpdated } from "../../src/store/modules/isCardUpdated";
import { loginUser } from "../../src/store/modules/userSlice";
import BoardLayout from "../layout/BoardLayout";
import ToDoItem from "./ToDoItem";
import ListOnModal from "./ListOnModal";
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

function InProgressList({ boardName }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const currentUser = useSelector((state) => state.user.value);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    let inProgressItem;
    let newToDoList = currentUser.toDoList.filter((item) => {
      if (item && item.cardId !== e.target.id) {
        return true;
      } else {
        inProgressItem = item;
        return false;
      }
    });

    if (!inProgressItem) return;
    let newInProgressList =
      currentUser && currentUser.inProgressList
        ? [...currentUser.inProgressList, inProgressItem]
        : [inProgressItem];

    dispatch(
      loginUser({
        ...currentUser,
        toDoList: newToDoList,
        inProgressList: newInProgressList,
      })
    );
    dispatch(isUpdated(true));
  };
  const removeFromBoard = (cardId) => {
    let newInProgressLists = currentUser.inProgressList.filter(
      (item) => item.cardId !== cardId
    );
    dispatch(loginUser({ ...currentUser, inProgressList: newInProgressLists }));
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
            <ToDoItem
              removeFromBoard={removeFromBoard}
              key={item && item.cardId}
              toDoItem={item}
            />
          ))}
        <ListOnModal
          handleClick={handleClick}
          displayList={currentUser?.toDoList}
          buttonName="진행중인 작업"
        />
        {/* <Button
          variant="contained"
          onClick={addToForm}
          style={{ fontSize: 13 }}
        >
          {isOpenForm ? (
            "닫기"
          ) : (
            <Fragment>
              <AddIcon />
              진행중인 작업
            </Fragment>
          )}
        </Button>
        {isOpenForm ? (
          // <ul onClick={handleClick}>
          //   {currentUser?.toDoList?.map((item) => (
          //     <ToDoLi key={item && item.cardId} id={item && item.cardId}>
          //       <span>{item && item.todo}</span>
          //       <button id={item && item.cardId}>이동하기</button>
          //     </ToDoLi>
          //   ))}
          // </ul>

        ) : null} */}
      </CardContainer>
    </BoardLayout>
  );
}
export default InProgressList;
