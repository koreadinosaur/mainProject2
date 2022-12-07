import { useForm } from "react-hook-form";
import InputLayout from "../layout/InputLayout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { loginUser } from "../../src/store/modules/userSlice";
import { toDoCard } from "../../src/store/modules/cardSlice";
import { isUpdated } from "../../src/store/modules/isCardUpdated";
const ToDoInputLayout = styled.div`
  width: 45rem;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
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
  const currentUser = useSelector((state) => state.user.value);
  const toDoCards = useSelector((state) => state.toDoCard.value);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    formState,
  } = useForm();
  const onSubmit = handleSubmit((data) => {
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
    <form onSubmit={onSubmit}>
      <ToDoInputLayout>
        <Label htmlFor="todo">할일 </Label>
        <Input
          {...register("todo")}
          id="todo"
          type="text"
          placeholder="작업 목록을 추가하세요"
        />
      </ToDoInputLayout>
      <ToDoInputLayout>
        <Label htmlFor="deadline">기한 </Label>
        <Input {...register("date")} id="deadline" type="date" />
      </ToDoInputLayout>
      <ToDoInputLayout>
        <Label htmlFor="detail">세부사항 </Label>
        <TextArea {...register("detail")} id="detail" />
      </ToDoInputLayout>
      <ButtonCotainer>
        <button>할 일 추가하기</button>
      </ButtonCotainer>
    </form>
  );
}
export default NewToDoForm;
