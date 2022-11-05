import React from "react";
import styled from "styled-components";

const Select = styled.select`
  height: 3rem;
`;

const DropDown = ({ options, name, user, register, label, required }) => {
  return (
    <>
      <Select
        name={name}
        {...register(label, { required })}
        defaultValue={user}
      >
        {name === "site" ? (
          <option key="a0" value="직접입력">
            직접입력
          </option>
        ) : null}
        {options &&
          options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </Select>
    </>
  );
};

export default DropDown;
