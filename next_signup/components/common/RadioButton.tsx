import { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  margin-left: 1rem;
`;
interface RadioButtonProps {
  name: string;
  user: string;
  label: string;
  value: string;
}
const RadioButton = ({
  value,
  name,
  user,
  register,
  label,
}: RadioButtonProps) => {
  const [genderChecked, setGenderChecked] = useState<string | null>();

  const handleClick = (e) => {
    setGenderChecked("checked");
  };

  return (
    <>
      <label>
        {value || "라벨"}
        <Input
          type="radio"
          {...register(label, { required: false })}
          name={name}
          value={value}
          onClick={handleClick}
          genderChecked
          {...(user === value ? { defaultChecked: true } : {})}
        ></Input>
      </label>
    </>
  );
};

export default RadioButton;
