import { SelectHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const Select = styled.select`
  height: 3rem;
`;

export type UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = {
  register: UseFormRegister<TFieldValues>;
};
interface DropDownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  name: string;
  user: string;
  label: string;
  register: UseFormRegister<FieldValues>;
}

const DropDown = ({ options, name, user, register, label }: DropDownProps) => {
  return (
    <>
      <Select name={name} {...register(label)} defaultValue={user}>
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
