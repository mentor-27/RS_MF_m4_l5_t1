import { JSX, ReactNode } from 'react';

export type TJDButtonProps = {
  className?: string;
  children?: string | JSX.Element | ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};

export type TJDTextInputProps = {
  className?: string;
  type?: 'text' | 'email' | 'password';
  name?: string;
  value?: string;
  placeholder?: string;
  rightSection?: JSX.Element;
  required?: boolean;
  error?: boolean;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};
