import styled from "styled-components";

const Select = styled.select`
  height: 3rem;
`;

interface DropDownProps {
  options: string[];
  name: string;
  user: string;
  label: string;
  required: string;
}

const DropDown = ({
  options,
  name,
  user,
  register,
  label,
  required,
}: DropDownProps) => {
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
