import styled from "styled-components";
const ButtonElement = styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  border-radius: 0.3rem;
  background-color: ${(props) => props.bgColor};
  height: 3rem;
  color: white;
  width: ${(props) => props.btnWidth};

  &:hover {
    cursor: pointer;
  }
`;

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  bgColor?: any;
  width?: string;
  type?: "button" | "submit" | "reset";
  errors?: any;
  buttonName?: string;
  btnWidth?: string;
}
const Button = ({
  buttonName,
  bgColor,
  width,
  type,
  onClick,
  errors,
}: ButtonProps) => {
  return (
    <>
      <ButtonElement
        type={type || "submit"}
        bgColor={bgColor || "skyblue"}
        btnWidth={width}
        onClick={onClick}
        {...(errors ? { disabled: true } : {})}
      >
        {buttonName || "제출"}
      </ButtonElement>
    </>
  );
};

export default Button;
