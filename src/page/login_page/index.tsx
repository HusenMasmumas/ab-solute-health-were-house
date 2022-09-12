import React, { useState } from "react";
import { Input, Checkbox, Button } from "antd";
import style from "./style.module.css";
import clsx from "clsx";
import "../../styles/tailwind.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuthContextDispatch } from "context/Auth/store";
const LoginPage = () => {
  const navigate = useNavigate();
  const { _signIn } = useAuthContextDispatch();
  return (
    <div className="min-w-screen min-h-screen grid grid-cols-3 !text-white">
      <div className="col-span-2 w-full h-full relative bg-secondary flex flex-col justify-center items-center">
        <h1 className="text-white text-[50px] font-bold">
          Starter Template Backoffice{" "}
        </h1>
        <h1 className="text-white text-[50px] font-bold"> With TailwindCSS </h1>
        <h2 className="text-white text-[20px] absolute bottom-6 left-6 ">
          {" "}
          Create by Pat
        </h2>
      </div>

      <div className="w-full h-full bg-[#123265] flex flex-col gap-6 items-center justify-center  p-[6rem]">
        <h1 className="text-white !font-semibold !text-3xl">Login Account</h1>
        <Input
          className="w-full !mt-12 !h-12 !p-4 !border-l-[6px] !border-[#2053a4] !text-xl text-black"
          placeholder="Email ID"
          type={"email"}
        />
        <Input
          className="w-full mt-6 !h-12 !p-4 !border-l-[6px] !border-[#2053a4] !text-xl text-black"
          placeholder="Password"
          type={"password"}
        />
        <div className="flex justify-between mt-6 !text-lg  w-full">
          <Checkbox
            className={clsx(
              "w-full !text-lg !sr-onlyfont-medium  !pb-4 border-l-6 border-[#2053a4] !text-white flex items-start check_box",
              style.check_box
            )}
          >
            <span className="opacity-50">Keep me signed in</span>
          </Checkbox>
          <p className="text-white w-full opacity-50 flex justify-end items-center">
            Already a member?
          </p>
        </div>
        <Button
          className="w-full !mt-6 !bg-[#2053a4] !border-[#2053a4] !tracking-wider !uppercase !text-xl !py-8 !p-4 !rounded-full text-white !flex !justify-center !items-center"
          type="primary"
          onClick={() => {
            console.log("sign in");
            navigate("/");
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
