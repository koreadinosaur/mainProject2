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
import { useDispatch, useSelector } from "react-redux";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { RegisterUserFormValue } from "../../types/interface";

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

const MyPage = ({ session }) => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(session);
  const [disabledInput, setDisabledInput] = useState(
    currentUser ? true : false
  );
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
  /* useEffect(() => {
    async function getUser() {
      try {
        const response = await axios({
          method: "post",
          url: "/api/user",
          data: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        dispatch(loginUser(response.data));
        return response.data;
      } catch (e) {
        console.error(e);
      }
    }
    getUser();
  }, []); */
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

  const onSubmit = handleSubmit(async (data: RegisterUserFormValue) => {
    const birth = data.dateOfBirth?.split("-");
    const updated = {
      dateOfBirth: { year: birth[0], month: birth[1], date: birth[2] },
      email: `${data.email}@${data.selectedEmailHost || data.emailHost}`,
      gender: data.gender,
      introduction: data.introduction,
      phone: [data.nationCode, data.phone1, data.phone2, data.phone3],
      username: data.username,
      password: data.password,
      _id: currentUser._id,
    };
    async function updateUser() {
      try {
        const response = await axios({
          method: "put",
          url: "/api/user/updateUser",
          data: updated,
        });
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    const updatedUser = await updateUser();

    if (updatedUser) {
      alert("변경되었습니다");
    } else {
      alert("변경실패");
    }
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
          url: `http://localhost:5000/user?username=${watchObject.username}`,
        });

        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    const isDuplicated = await getUser();
    if (!isDuplicated) {
      alert("사용가능한 username입니다");
    } else {
      alert("중복된 username입니다");
    }
  };
  const domain = ["naver.com", "daum.net", "gmail.com"];

  const countryCode = ["1", "7", "33", "44", "49", "61", "82"];
  return (
    <LoginContainer>
      <form onSubmit={onSubmit}>
        <Header title="My Page" />

        <InputLayout label="아이디 ">
          <TextInput
            label="username"
            required="required"
            register={register}
            validation={usernameValidation}
            type="text"
            placeholder="username"
            user={String(currentUser?.username)}
          />
          <Button
            buttonName="중복확인"
            onClick={handleClick}
            errors={errors?.username}
          />
          {<ErrorMessage>{errors?.username?.message}</ErrorMessage>}
        </InputLayout>
        <InputLayout label="비밀번호 ">
          <TextInput
            register={register}
            required="required"
            label="password"
            type="password"
            placeholder="password"
            user={String(currentUser?.password)}
          />
        </InputLayout>
        <InputLayout label="생년월일">
          <TextInput
            required="required"
            register={register}
            label="dateOfBirth"
            type="date"
            user={
              currentUser?.dateOfBirth &&
              Object.values(currentUser?.dateOfBirth).join("-")
            }
          />
        </InputLayout>
        <InputLayout label="성별">
          <RadioButton
            register={register}
            label="gender"
            name="gender"
            value="female"
            user={currentUser?.gender}
          />
          <RadioButton
            register={register}
            label="gender"
            name="gender"
            value="male"
            user={currentUser?.gender}
          />
        </InputLayout>
        <InputLayout label="이메일">
          <TextInput
            label="email"
            required="required"
            register={register}
            type="text"
            width="10rem"
            user={currentUser?.email?.split("@")[0]}
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
            user={currentUser?.email?.split("@")[1]}
            label="selectedEmailHost"
            required="required"
            register={register}
          />
        </InputLayout>
        <InputLayout label="전화번호">
          <DropDown
            options={countryCode}
            name="nationCode"
            user={currentUser?.phone && currentUser.phone?.[0]}
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
            user={currentUser?.phone?.[1]}
          />
          -
          <TextInput
            label="phone2"
            required="required"
            register={register}
            type="text"
            width="8rem"
            user={currentUser?.phone?.[2]}
          />
          -
          <TextInput
            label="phone3"
            required="required"
            register={register}
            type="text"
            width="8rem"
            user={currentUser?.phone?.[3]}
          />
        </InputLayout>
        <InputLayout label="자기소개">
          <TextArea
            label="introduction"
            required="required"
            register={register}
            user={currentUser?.introduction}
          />
        </InputLayout>

        <Footer width="50%">
          <Button type="submit" buttonName="홈으로" bgColor="skyblue" />

          <Button
            type="submit"
            buttonName={currentUser ? "수정하기" : "가입하기"}
            bgColor="skyblue"
          />
        </Footer>
      </form>
    </LoginContainer>
  );
};

export default MyPage;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: JSON.stringify(session.user.userData),
    },
  };
}
