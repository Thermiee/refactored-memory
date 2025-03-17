import React from "react";
import { MainButton } from "../../Components/Form/button";
import { FormInput } from "../../Components/Form/input";
import { Link, useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col">
      <h1 className="text-3xl font-medium">Welcome back</h1>
      <p>Login to your account</p>
      <form className="flex flex-col w-96 space-y-4 mt-4">
        <FormInput
          type="email"
          placeholder="Email"
          // register={register("email")}
          // error={errors.email?.message}
        />
        <FormInput
          type="password"
          placeholder="Password"
          // register={register("password")}
          // error={errors.password?.message}
        />{" "}
        <Link
          to="/auth/forgot-password"
          className="text-end text-black  cursor-pointer "
        >
          Forgot password?
        </Link>
        <MainButton 
           onClick={() => navigate("/home")}
        >Login</MainButton>
      </form>

    </div>
  );
};

export default Login;
