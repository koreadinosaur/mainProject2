import React from "react";
import Button from "../component/button";
import InputLayout from "../component/inputLayout";
import RadioButton from "../component/radioButton";
import users from "../data/data";

const Login = (props) => {
  return (
    <div>
      <InputLayout users={users}>
        <Button buttonName="중복확인" />
      </InputLayout>
      <InputLayout>
        <RadioButton />
      </InputLayout>
    </div>
  );
};

export default Login;
