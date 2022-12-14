import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isUpdated } from "../../src/redux/slices/isCardUpdated";
import { loginUser } from "../../src/redux/slices/userSlice";
import BoardLayout from "../layout/BoardLayout";
import ToDoItem from "./ToDoItem";
import ListOnModal from "./ListOnModal";
import { ToDoFormDataType } from "./ToDoFormType";
import { useAppDispatch, useAppSelector } from "../../src/redux/hook";
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

function InProgressList({ boardName }: { boardName: string }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const currentUser = useAppSelector((state) => state.user.value);

  const dispatch = useAppDispatch();
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    let inProgressItem;
    let newToDoList = currentUser.toDoList.filter((item: ToDoFormDataType) => {
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
  const removeFromBoard = (cardId: string) => {
    let newInProgressLists = currentUser.inProgressList.filter(
      (item: ToDoFormDataType) => item.cardId !== cardId
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
          currentUser.inProgressList.map((item: ToDoFormDataType) => (
            <ToDoItem
              removeFromBoard={removeFromBoard}
              key={item && item.cardId}
              toDoItem={item}
            />
          ))}
        <ListOnModal
          handleClick={handleClick}
          displayList={currentUser?.toDoList}
          buttonName="???????????? ??????"
        />
        {/* <Button
          variant="contained"
          onClick={addToForm}
          style={{ fontSize: 13 }}
        >
          {isOpenForm ? (
            "??????"
          ) : (
            <Fragment>
              <AddIcon />
              ???????????? ??????
            </Fragment>
          )}
        </Button>
        {isOpenForm ? (
          // <ul onClick={handleClick}>
          //   {currentUser?.toDoList?.map((item) => (
          //     <ToDoLi key={item && item.cardId} id={item && item.cardId}>
          //       <span>{item && item.todo}</span>
          //       <button id={item && item.cardId}>????????????</button>
          //     </ToDoLi>
          //   ))}
          // </ul>

        ) : null} */}
      </CardContainer>
    </BoardLayout>
  );
}
export default InProgressList;
