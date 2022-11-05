import React, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  margin-left: 1rem;
`;

const RadioButton = ({ value, name, user, register, label }) => {
  const [genderChecked, setGenderChecked] = useState();

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
