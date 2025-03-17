import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type MainButtonProps = {
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    style?: React.CSSProperties;
    variant?: "filled" | "outlined"; 
  };
  

  export type FormInputProps = {
    type?: "text" | "email" | "password" | "number";
    id?: string;
    value?: string;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    error?: string;
    register?: UseFormRegisterReturn;
    disabled?: boolean;
  }; 

export interface SidebarLayoutProps {
  image?: string | React.ReactElement
  title: string
}