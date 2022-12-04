import React from "react";
import Button from "../../components/common/Button";
import styled from "styled-components";
import InputLayout from "../../components/layout/InputLayout";
import Header from "../../components/common/Header";
import TextInput from "../../components/common/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../src/store/modules/userSlice";
import { signIn } from "next-auth/react";

const LoginContainer = styled.form`
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

const Login = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        data: JSON.stringify(data),
      });
      if (!result?.ok) {
        alert("username 또는 password를 확인해주세요");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <LoginContainer onSubmit={onSubmit}>
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
        <Button
          buttonName="계정이 없으신가요? 가입하기"
          bgColor="skyblue"
          width="100%"
          display="block"
          type="submit"
        ></Button>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
