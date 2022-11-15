import styled from "styled-components";
const BoardLayoutElement = styled.div`
  width: 30rem;
  margin-left: 3.5rem;
`;
function BoardLayout({ children }) {
  return <BoardLayoutElement>{children}</BoardLayoutElement>;
}
export default BoardLayout;
