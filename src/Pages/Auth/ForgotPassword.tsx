import React from "react";
import { MainButton } from "../../Components/Form/button";
import { FormInput } from "../../Components/Form/input";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col">
      <h1 className="text-3xl font-medium">Forgot password</h1>
      <p>We will send a reset link to your email</p>
      <form className="flex flex-col w-96 space-y-4 mt-4">
        <FormInput
          type="email"
          placeholder="Email"
          // register={register("email")}
          // error={errors.email?.message}
        />

        <MainButton>Send reset link</MainButton>
      </form>
      {/* <div className="space-x-2 mt-4">
        <p className="text-center mt-4 text-black">
          Don't have an account?
          <span
            className="text-primary ml-1 font-bold cursor-pointer"
            onClick={() => navigate("/auth/register")}
          >
            Sign Up
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default ForgotPassword;
