import styled from "styled-components";

const HomeLayout = styled.div`
  height: 100vh;
`;
const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  animation: slideIntroduction 0.5s ease;
  @keyframes slideIntroduction {
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
export default function Home({}) {
  return (
    <HomeLayout>
      {/* <TodoList
        listItems={currentUser && currentUser.toDoList}
        currentUser={currentUser}
        boardName="To Do"
      />
      <InProgressList currentUser={currentUser} boardName="In Progress" />
      <DoneList currentUser={currentUser} boardName="Done" /> */}
      <Introduction>
        <h1>나만의 To Do List에 오신 것을 환영합니다</h1>
        <h2>일정을 관리하세요</h2>
        <h3>해야 할 일, 진행중인 일, 완료한 일을 따로 관리할 수 있습니다</h3>
      </Introduction>
    </HomeLayout>
  );
}
