import React from "react";
import styled from "styled-components";

const Select = styled.select`
  height: 3rem;
`;

const DropDown = ({ options, name, user }) => {
  console.log("dropDown : ", user);
  return (
    <>
      <Select name={name}>
        {(options &&
          options.map((item, index) => {
            console.log(item);
            console.log(user);
            if (user === item) {
              return (
                <option key={index} value={item} selected>
                  {item}
                </option>
              );
            } else {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            }
          })) || <option name="select">선택하세요</option>}
      </Select>
    </>
  );
};

export default DropDown;
