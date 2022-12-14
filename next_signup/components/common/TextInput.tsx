import styled from "styled-components";
import { ComponentPropsType } from "./propsType";
const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height || "3rem"};
`;
const InputContainer = styled.div`
  width: 100%;
`;
interface InputProps extends ComponentPropsType {
  width?: string;
  placeholder?: string;
  disabledInput?: boolean;
  validation?: {};
}

const TextInput = ({
  type,
  width,
  placeholder,
  name,
  user,
  register,
  required,
  label,
  disabledInput,
  validation,
}: InputProps) => {
  return (
    <InputContainer>
      <Input
        type={type || "text"}
        width={width || "100%"}
        defaultValue={user === "직접입력" ? "" : user}
        placeholder={placeholder}
        className={name}
        id={label}
        {...register(label, validation || required)}
        {...(disabledInput || (name === "emailHost" && user)
          ? { disabled: true }
          : {})}
      />
    </InputContainer>
  );
};

export default TextInput;
