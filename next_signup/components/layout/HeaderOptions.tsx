import styled from "styled-components";
import Link from "next/link";
import { Fragment } from "react";
const NavLink = styled(Link)`
  margin-right: 3rem;

  &:hover {
    border-bottom: 3px solid red;
    color: gray;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderOptions = ({ Icon, title, href }) => {
  return (
    <li>
      <NavLink href={href}>
        <Icon style={{ fontSize: 40 }} />
        {title || ""}
      </NavLink>
    </li>
  );
};

export default HeaderOptions;
