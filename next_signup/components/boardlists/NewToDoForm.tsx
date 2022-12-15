import { useForm } from "react-hook-form";
import InputLayout from "../layout/InputLayout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { loginUser } from "../../src/store/modules/userSlice";
import { isUpdated } from "../../src/store/modules/isCardUpdated";
import { useAppSelector } from "../../src/store/hook";
import { TextField } from "@mui/material";
import { ToDoFormDataType } from "./ToDoFormType";
const Form = styled.form`
  color: white;
  margin-top: 1.5rem;
`;
const ToDoInputLayout = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  display: flex;
`;
const Label = styled.label`
  margin-right: 2rem;
`;
const Input = styled.input`
  width: 23rem;
`;
const TextArea = styled.textarea`
  width: 20rem;
  height: 5rem;
  &:focus {
    height: 15rem;
    transition: all 0.5s ease;
  }
  transition: all 0.5s ease;
`;
const ButtonCotainer = styled.div`
  display: flex;
`;
function NewToDoForm({}) {
  const dispatch = useDispatch();
  const currentUser = useAppSelector((state) => state.user.value);
  // const currentUser = useSelector((state) => state.user.value);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    formState,
  } = useForm();
  const onSubmit = handleSubmit((data: ToDoFormDataType) => {
    const toDoItem = { ...data, cardId: uuidv4() };
    const newToDoList = currentUser?.toDoList
      ? [...currentUser.toDoList, toDoItem]
      : [toDoItem];
    if (currentUser?.username) {
      dispatch(loginUser({ ...currentUser, toDoList: newToDoList }));
      dispatch(isUpdated(true));
    }
  });
  return (
    <Form onSubmit={onSubmit}>
      <ToDoInputLayout>
        {/* <Label htmlFor="todo">할일 </Label>
        <Input type="text" placeholder="작업 목록을 추가하세요" /> */}
        <TextField
          {...register("todo")}
          id="todo"
          label="To Do"
          variant="outlined"
          placeholder="할일 추가하기"
          size="medium"
          fullWidth
          InputLabelProps={{ style: { fontSize: 16 } }}
          inputProps={{ style: { fontSize: 16 } }}
        />
      </ToDoInputLayout>
      <ToDoInputLayout>
        {/* <Label htmlFor="deadline">기한 </Label>
        <Input {...register("date")} id="deadline" type="date" /> */}
        <TextField
          {...register("date")}
          id="deadline"
          type="date"
          variant="outlined"
          fullWidth
          inputProps={{ style: { fontSize: 16 } }}
        />
      </ToDoInputLayout>
      <ToDoInputLayout>
        {/* <Label htmlFor="detail">세부사항 </Label>
        <TextArea {...register("detail")} id="detail" /> */}
        <TextField
          {...register("detail")}
          id="detail"
          label="detail"
          placeholder="세부사항을 입력해주세요"
          multiline
          rows={4}
          defaultValue=""
          fullWidth
          InputLabelProps={{ style: { fontSize: 16 } }}
          inputProps={{ style: { fontSize: 16 } }}
        />
      </ToDoInputLayout>
      <ButtonCotainer>
        <button>할 일 추가하기</button>
      </ButtonCotainer>
    </Form>
  );
}
export default NewToDoForm;
