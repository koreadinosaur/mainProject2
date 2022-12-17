import styled from "styled-components";
import { BoardLayoutProps } from "../../types/interface";
const BoardLayoutElement = styled.div`
  width: 30rem;
  margin-left: 3.5rem;
`;
function BoardLayout({ children }: BoardLayoutProps) {
  return <BoardLayoutElement>{children}</BoardLayoutElement>;
}
export default BoardLayout;
