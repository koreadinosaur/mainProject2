import { FieldValues, UseFormRegister } from "react-hook-form";
export type ComponentPropsType = {
  name?: string;
  user?: string;
  label?: string;
  options?: string[];
  value?: string;
  register?: UseFormRegister<FieldValues>;
  errors?: string;
  required?: string;
  type?: string;
};
