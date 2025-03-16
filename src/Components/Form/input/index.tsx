
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { FormInputProps } from "../../../types";




export const FormInput: React.FC<FormInputProps> = ({
  type = "text",
  id,
  value,
  onFocus,
  onKeyDown,
  onChange,
  placeholder,
  className = "",
  register,
  error,
  disabled = false,
  label,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="relative space-y-2">
      <label htmlFor={id} className="text-base font-medium text-black">
      {label ? label : placeholder}
      </label>
      <div className="relative">
        <input
          type={inputType}
          id={id}
          value={value}
          {...register}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder={placeholder}
          min={type === "number" ? 0 : undefined}
          disabled={disabled}
          className={`${className} w-full px-4 py-4 rounded-[100px] font-medium border h-[48px] border-[#00000033] placeholder-[#00000080] text-[16px] focus:outline-none ${
            disabled
              ? "bg-gray-100 cursor-not-allowed"
              : "focus:border-gray-400 focus:bg-white"
          }`}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center justify-center w-6 h-6 my-auto text-gray-500 focus:outline-none"
            disabled={disabled}
          >
            {inputType === "password" ? (
              <IoEyeOff className="w-6 h-6" />
            ) : (
              <IoEye className="w-6 h-6" />
            )}
          </button>
        )}
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};