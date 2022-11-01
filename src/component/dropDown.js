import React from "react";
import styled from "styled-components";

const Select = styled.select`
  height: 3rem;
`;

const DropDown = ({ options, name }) => {
  return (
    <>
      <Select name={name}>
        {(options &&
          options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))) || <option name="select">선택하세요</option>}
      </Select>
    </>
  );
};

export default DropDown;
