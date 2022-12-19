import { ReactElement, ReactNode } from "react";

interface RegisterUserFormValue {
  dateOfBirth: string;
  email: string;
  selectedEmailHost?: string;
  emailHost?: string;
  gender: string;
  introduction?: string;
  nationCode: string;
  phone1: string;
  phone2: string;
  phone3: string;
  username: string;
  password: string;
}
interface RadioButtonProps {
  name: string;
  user: string;
  label: string;
  value: string;
  register: UseFormRegister<FieldValues>;
}
type LayoutProps = {
  // children: ReactElement;
  children: ReactNode;
};
interface BoardLayoutProps extends LayoutProps {}
interface FooterLayoutProps extends LayoutProps {
  width: string;
}
interface InputLayoutProps extends LayoutProps {
  label?: string;
}

export type {
  LayoutProps,
  RegisterUserFormValue,
  BoardLayoutProps,
  FooterLayoutProps,
  InputLayoutProps,
  RadioButtonProps,
};
