"use client"

import React from "react";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { logIn } from "@/api/auth";


interface Inputs {
  email : string
  password : string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await logIn(data.email, data.password)
    console.log(status);
  };

  return (
    <form action="" className="flex flex-col justify-between h-96" onSubmit={handleSubmit(onSubmit)} >
      <div className="flex flex-col px-8 gap-4 ">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email">Adresse email :</label>
          <input type="email" id="email" {...register("email")}/>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" {...register("password")}/>
        </div>
        <div className="text-gray-400 text-right">mot de passe oublié ?</div>
      </div>
      <Button type="submit" className="">
        Me connecter
      </Button>
    </form>
  );
}
