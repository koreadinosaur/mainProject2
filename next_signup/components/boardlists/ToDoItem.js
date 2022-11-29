import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isCardUpdated } from "../../src/store/modules/cardSlice";
import Button from "../common/Button";
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
  const isUpdated = useSelector((state) => state.isCardUpdated.value);
  const dispatch = useDispatch();
  const removeCard = (e) => {
    removeFromBoard(e.target.id);
    dispatch(isCardUpdated(true));
  };
  return (
    <ListContainer>
      <Todo>{toDoItem && toDoItem.todo}</Todo>
      <span>기한 : {toDoItem && toDoItem.date}</span>
      <RemoverButton onClick={removeCard} id={toDoItem && toDoItem.cardId}>
        삭제
      </RemoverButton>
    </ListContainer>
  );
}
export default ToDoItem;
