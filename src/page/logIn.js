import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/button";
import styled from "styled-components";
import InputLayout from "../component/inputLayout";
import Header from "../component/header";
import Footer from "../component/footerLayout";
import TextInput from "../component/textInput";
import { useForm } from "react-hook-form";

const HomeContainer = styled.section`
  height: 60rem;
  width: 30rem;
  margin: auto;
  margin-top: 15rem;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const Home = ({ user }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <HomeContainer>
      <Header title="로그인 페이지" />
      <InputLayout label="아이디 ">
        <TextInput
          label="username"
          required="required"
          register={register}
          type="text"
          placeholder="username"
          width="19.2rem"
        />
      </InputLayout>
      <InputLayout label="비밀번호 ">
        <TextInput
          register={register}
          required="required"
          label="password"
          type="password"
          placeholder="password"
          width="19.2rem"
        />
      </InputLayout>

      <ButtonContainer>
        <Link to="/myPage" className="link">
          <Button buttonName="로그인" bgColor="skyblue" width="100%"></Button>
        </Link>
      </ButtonContainer>
      <ButtonContainer>
        <Link to="/signUp" className="link">
          <Button
            buttonName="계정이 없으신가요? 가입하기"
            bgColor="skyblue"
            width="100%"
            display="block"
          ></Button>
        </Link>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
