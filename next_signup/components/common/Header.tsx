import styled from "styled-components";
const HeaderBar = styled.h1`
  text-align: start;
  margin-bottom: 5rem;
`;
interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <HeaderBar>{title || "제목"}</HeaderBar>
    </>
  );
};

export default Header;
