import { ClipLoader } from "react-spinners";
import { MainButtonProps } from "../../../types";


export const MainButton: React.FC<MainButtonProps> = ({
  isLoading,
  onClick,
  type = "button",
  children,
  className = "",
  disabled = false,
  variant = "filled", 
  ...props
}) => {
  const baseStyles =
    "p-3 h-[41px] text-[16px] justify-center flex items-center py-6 px-4 rounded-3xl border transition-all duration-200";
  
  const filledStyles =
    "bg-primary text-white border-primary hover:bg-white hover:text-primary";
  
  const outlinedStyles =
    "bg-transparent text-primary border-primary hover:bg-primary hover:text-white";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variant === "filled" ? filledStyles : outlinedStyles} ${className}`}
      {...props}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <ClipLoader color={variant === "filled" ? "#fff" : "#000"} size="20px" /> : children}
    </button>
  );
};
