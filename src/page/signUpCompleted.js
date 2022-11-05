import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/button";
import styled from "styled-components";
const CompletedContainer = styled.section`
  height: 60rem;
  width: 60rem;
  margin: auto;
  margin-top: 15rem;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const SignUpCompleted = ({ user }) => {
  return (
    <CompletedContainer>
      <TextContainer>안녕하세요 {user || "형진"}님!</TextContainer>
      <TextContainer>회원가입이 완료되었습니다</TextContainer>
      <ButtonContainer>
        <Link to="/">
          <Button buttonName="홈으로" width="10rem" />
        </Link>
      </ButtonContainer>
    </CompletedContainer>
  );
};

export default SignUpCompleted;
