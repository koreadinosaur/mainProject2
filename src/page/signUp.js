import React, { useState } from "react";
import Button from "../component/button";
import InputLayout from "../component/inputLayout";
import RadioButton from "../component/radioButton";
import users from "../data/data";
import styled from "styled-components";
import Header from "../component/header";
import TextInput from "../component/textInput";
import DropDown from "../component/dropDown";
import TextArea from "../component/textArea";
import Footer from "../component/footerLayout";

const LoginContainer = styled.section`
  height: 60rem;
  width: 55rem;
  margin: auto;
  margin-top: 15rem;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: inline-block;
`;
const Login = (props) => {
  const [options, setOptions] = useState([
    "naver.com",
    "daum.net",
    "google.co.kr",
  ]);
  const countryCode = ["1", "7", "33", "44", "49", "61", "82"];
  return (
    <LoginContainer>
      <Header title="SignUp Page" />
      <InputLayout label="아이디 " users={users}>
        <TextInput type="text" placeholder="username" />
        <Button buttonName="중복확인" />
      </InputLayout>
      <InputLayout label="비밀번호 " users={users}>
        <TextInput type="password" placeholder="password" />
      </InputLayout>
      <InputLayout label="생년월일">
        <TextInput type="date" />
      </InputLayout>
      <InputLayout label="성별">
        <RadioButton name="성별" value="여자" />
        <RadioButton name="성별" value="남자" />
      </InputLayout>
      <InputLayout label="이메일">
        <TextInput type="text" width="10rem" placeholder="email" />
        @
        <TextInput type="text" width="9rem" />
        <DropDown options={options} name="site" />
      </InputLayout>
      <InputLayout label="전화번호">
        <DropDown options={countryCode} name="site" />
        -
        <TextInput type="text" width="8rem" />
        -
        <TextInput type="text" width="8rem" />
        -
        <TextInput type="text" width="8rem" />
      </InputLayout>
      <InputLayout label="자기소개">
        <TextArea />
      </InputLayout>
      <Footer>
        <Button buttonName="가입하기" />
      </Footer>
    </LoginContainer>
  );
};

export default Login;
