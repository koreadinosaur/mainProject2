import React from "react";
import Button from "../../components/common/Button";
import styled from "styled-components";
import InputLayout from "../../components/layout/InputLayout";
import Header from "../../components/common/Header";
import TextInput from "../../components/common/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
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

const Login = ({ users, setCurrentUser }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    /*     async function getUser() {
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
*/

    async function getUser() {
      try {
        const response = await axios({
          method: "post",
          url: "/api/getUser",
          data: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.data;
      } catch (e) {
        console.error(e);
      }
    }
    const user = await getUser();

    if (!user) {
      return alert("아이디 또는 비밀번호를 확인해주세요");
    } else {
      setCurrentUser(user);
      router.push("/mypage");
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
