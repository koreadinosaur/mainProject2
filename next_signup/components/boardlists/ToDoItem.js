import styled from "styled-components";
const ListContainer = styled.li`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const Todo = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
function ToDoItem({ toDoItem }) {
  return (
    <ListContainer>
      <Todo>{toDoItem && toDoItem.todo}</Todo>
      <li>기한 : {toDoItem && toDoItem.date}</li>
    </ListContainer>
  );
}
export default ToDoItem;
