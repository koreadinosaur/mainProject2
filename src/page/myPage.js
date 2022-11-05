import React, { useRef, useState } from "react";
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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SignUp from "./signUp";
import { useLocation } from "react-router-dom";

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

const MyPage = ({}) => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(location.state);
  return (
    <>
      <SignUp
        user={currentUser}
        setCurrentUser={setCurrentUser}
        title="My Page"
      />
    </>
  );
};

export default MyPage;
