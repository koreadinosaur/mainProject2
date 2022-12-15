import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isUpdated } from "../../src/store/modules/isCardUpdated";
import { useAppDispatch } from "../../src/store/hook";

const ListContainer = styled.li`
  position: relative;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const Todo = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const RemoverButton = styled.button`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  border: none;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  opacity: 0;
  &:hover {
    cursor: pointer;
    animation: slideButton 0.5s ease forwards;
  }
  @keyframes slideButton {
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

function ToDoItem({ toDoItem, removeFromBoard }) {
  const dispatch = useAppDispatch();

  const removeCard = (e) => {
    console.log(e.target.id);
    dispatch(isUpdated(true));
    removeFromBoard(e.target.id);
  };
  return (
    <ListContainer>
      <Todo>{toDoItem && toDoItem.todo}</Todo>
      <span>기한 : {toDoItem && toDoItem.date}</span>
      <IconButton aria-label="update">
        <EditIcon />
      </IconButton>
      {/* <RemoverButton onClick={removeCard} id={toDoItem && toDoItem.cardId}>
        삭제
      </RemoverButton> */}
      <RemoverButton
        aria-label="delete"
        onClick={removeCard}
        id={toDoItem?.cardId}
      >
        <DeleteIcon fontSize="large" id={toDoItem?.cardId} />
      </RemoverButton>
    </ListContainer>
  );
}
export default ToDoItem;
