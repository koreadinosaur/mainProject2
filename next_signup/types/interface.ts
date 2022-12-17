import { ReactElement } from "react";

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
type LayoutProps = {
  children: ReactElement;
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
};
