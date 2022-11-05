import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
import Button from "../component/button";
import styled from "styled-components";
import InputLayout from "../component/inputLayout";
import Header from "../component/header";
import TextInput from "../component/textInput";
import { useForm } from "react-hook-form";
import axios from "axios";
const HomeContainer = styled.form`
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

const Home = ({ users }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    async function getUser() {
      try {
        const response = await axios({
          method: "get",
          url: `http://localhost:5000/user?username=${data.username}`,
        });

        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    const user = await getUser();
    if (!user) {
      return alert("아이디를 확인해주세요");
    } else if (String(user.password) === String(data.password)) {
      navigate("/myPage", { state: user });
      return console.log("success");
    } else {
      return alert("비밀번호를 확인해주세요");
    }
  });

  return (
    <HomeContainer onSubmit={onSubmit}>
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
        <Button
          type="submit"
          buttonName="로그인"
          bgColor="skyblue"
          width="100%"
        ></Button>
      </ButtonContainer>
      <ButtonContainer>
        <Link to="/signUp" className="link">
          <Button
            buttonName="계정이 없으신가요? 가입하기"
            bgColor="skyblue"
            width="100%"
            display="block"
            type="submit"
          ></Button>
        </Link>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
