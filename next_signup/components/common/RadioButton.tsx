import { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { RadioButtonProps } from "../../types/interface";

const Input = styled.input`
  margin-left: 1rem;
`;

const RadioButton = ({
  value,
  name,
  user,
  register,
  label,
}: RadioButtonProps) => {
  const [genderChecked, setGenderChecked] = useState<boolean | null>(false);

  const handleClick = (e) => {
    setGenderChecked(true);
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
          {...(genderChecked ? { checked: true } : null)}
          {...(user === value ? { defaultChecked: true } : {})}
        ></Input>
      </label>
    </>
  );
};

export default RadioButton;
