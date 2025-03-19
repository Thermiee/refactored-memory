import React from "react";
import { MainButton } from "../../Components/Form/button";
import { FormInput } from "../../Components/Form/input";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginUser } from "../../types";

const schema = yup.object().shape({
  email: yup.string().required("email is required"),
  password: yup.string().required("Password is required"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: yupResolver(schema),
  });

  const formSubmit: SubmitHandler<LoginUser> = async (data) => {
    console.log(data); 
    navigate("/home");
  };

  return (
    <div className=" flex flex-col">
      <h1 className="text-3xl font-medium">Welcome to your login screen</h1>
      <p>Login to your account</p>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col w-96 space-y-4 mt-4"
      >
        <FormInput
          type="email"
          placeholder="Email"
          register={register("email")}
          error={errors.email?.message}
        />
        <FormInput
          type="password"
          placeholder="Password"
          register={register("password")}
          error={errors.password?.message}
        />{" "}
        <Link
          to="/auth/forgot-password"
          className="text-end text-black  cursor-pointer "
        >
          Forgot password?
        </Link>
        <MainButton type="submit">Login</MainButton>
      </form>
    </div>
  );
};

export default Login;
