import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import RadioButton from "../../components/common/RadioButton";
import TextArea from "../../components/common/TextArea";
import TextInput from "../../components/common/TextInput";
import Footer from "../../components/layout/Footer";
import InputLayout from "../../components/layout/InputLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import DropDown from "../../components/common/DropDown";
import axios from "axios";
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

const ErrorMessage = styled.div`
  font-size: 1.5rem;
  color: red;
  text-align: center;
  position: absolute;
  margin-top: 0.5rem;
`;

const SignUp = ({ user, title, setCurrentUser }) => {
  const [disabledInput, setDisabledInput] = useState(user ? true : false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    formState,
  } = useForm();

  const watchArray = ["username", "selectedEmailHost", "emailHost"];
  const watchFields = watch(watchArray);
  const watchObject = {};
  watchArray.forEach((item, index) => {
    watchObject[item] = watchFields[index];
  });
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value.selectedEmailHost !== "직접입력") {
        if (!disabledInput) setDisabledInput(true);
      } else {
        setDisabledInput(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watchFields]);
  const usernameValidation = {
    required: "username을 입력해주세요",
    minLength: {
      value: 5,
      message: "최소 5자 이상 입력해주세요",
    },
    maxLength: {
      value: 12,
      mesaage: "username은 12자 이하만 가능합니다",
    },
    pattern: {
      value: /^[a-zA-Z0-9]{5,12}$/,
    },
  };

  const onSubmit = handleSubmit(async (data) => {
    const birth = data.dateOfBirth.split("-");
    const createdUser = {
      dateOfBirth: { year: birth[0], month: birth[1], date: birth[2] },
      email: `${data.email}@${data.selectedEmailHost || data.emailHost}`,
      gender: data.gender,
      introduction: data.introduction,
      phone: [data.nationCode, data.phone1, data.phone2, data.phone3],
      username: data.username,
      password: data.password,
      uuid: Math.floor(Date.now() / 1000),
    };
    /* async function createOrUpdateUser(method) {
      try {
        const response = await axios({
          method: method,
          url: "http://localhost:5000/user",
          data: createdUser,
        });
        return response.data;
      } catch (error) {
        console.error(error);
      }
    } */
    async function createUser() {
      try {
        const response = await axios({
          method: "post",
          url: "/api/signUpUser",
          data: createdUser,
        });
        return response.data;
      } catch (e) {
        console.error(e);
      }
    }
    const user = await createUser();
    if (typeof user === "string") {
      alert("중복된 아이디입니다.");
    } else {
      setCurrentUser(user);
    }
    /*     if (!user) {
      const registeredUser = await createOrUpdateUser("post");
      return registeredUser ? router.push("/completed") : null;
    } else {
      const updatedUser = await createOrUpdateUser("put");
      if (updatedUser) {
        alert("변경되었습니다");
      } else {
        alert("변경실패");
      }
    } */
  });

  const handleClick = async () => {
    if (watch().username.length < 5) {
      return alert("username을 5자이상 입력해주세요");
    }
    if (formState.errors.username) {
      return alert(formState.errors.username.message);
    }

    async function getUser() {
      try {
        const response = await axios({
          method: "get",
          url: `/api/getUser/${watch().username}`,
        });
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    const isDuplicated = await getUser();
    alert(isDuplicated);
  };
  const domain = ["naver.com", "daum.net", "gmail.com"];

  const countryCode = ["1", "7", "33", "44", "49", "61", "82"];
  return (
    <LoginContainer>
      <form onSubmit={onSubmit}>
        <Header title={title || "SignUp Page"} />

        <InputLayout label="아이디 ">
          <TextInput
            label="username"
            required="required"
            register={register}
            validation={usernameValidation}
            type="text"
            placeholder="username"
            user={user && String(user.username)}
          />
          <Button
            buttonName="중복확인"
            onClick={handleClick}
            errors={errors && errors.username}
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </InputLayout>
        <InputLayout label="비밀번호 ">
          <TextInput
            register={register}
            required="required"
            label="password"
            type="password"
            placeholder="password"
            user={user && String(user.password)}
          />
        </InputLayout>
        <InputLayout label="생년월일">
          <TextInput
            required="required"
            register={register}
            label="dateOfBirth"
            type="date"
            user={user && Object.values(user.dateOfBirth).join("-")}
          />
        </InputLayout>
        <InputLayout label="성별">
          <RadioButton
            register={register}
            label="gender"
            name="gender"
            value="female"
            user={user && user.gender}
          />
          <RadioButton
            register={register}
            label="gender"
            name="gender"
            value="male"
            user={user && user.gender}
          />
        </InputLayout>
        <InputLayout label="이메일">
          <TextInput
            label="email"
            required="required"
            register={register}
            type="text"
            width="10rem"
            user={user && user.email.split("@")[0]}
            placeholder="email"
          />
          @
          <TextInput
            label="emailHost"
            required="required"
            register={register}
            type="text"
            width="9rem"
            user={watchObject.selectedEmailHost}
            disabledInput={disabledInput}
          />
          <DropDown
            options={domain}
            name="site"
            user={user && user.email.split("@")[1]}
            label="selectedEmailHost"
            required="required"
            register={register}
          />
        </InputLayout>
        <InputLayout label="전화번호">
          <DropDown
            options={countryCode}
            name="nationCode"
            user={user && user.phone[0]}
            label="nationCode"
            required="required"
            register={register}
          />
          -
          <TextInput
            label="phone1"
            required="required"
            register={register}
            type="text"
            width="8rem"
            user={user && user.phone[1]}
          />
          -
          <TextInput
            label="phone2"
            required="required"
            register={register}
            type="text"
            width="8rem"
            user={user && user.phone[2]}
          />
          -
          <TextInput
            label="phone3"
            required="required"
            register={register}
            type="text"
            width="8rem"
            user={user && user.phone[3]}
          />
        </InputLayout>
        <InputLayout label="자기소개">
          <TextArea
            label="introduction"
            required="required"
            register={register}
            user={user && user.introduction}
          />
        </InputLayout>

        <Footer width="50%">
          <Button type="submit" buttonName="홈으로" bgColor="skyblue" />

          <Button
            type="submit"
            buttonName={user ? "수정하기" : "가입하기"}
            bgColor="skyblue"
          />
        </Footer>
      </form>
    </LoginContainer>
  );
};

export default SignUp;
