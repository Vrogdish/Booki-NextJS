"use client";

import React from "react";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { logIn } from "@/api/auth";
import { useRouter } from "next/navigation";

interface Inputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const login = await logIn(data.email, data.password);

    if (login.error) {
      alert("Email ou mot de passe incorrect");
    } else {
      router.back();
    }
  };

  return (
    <form
      className="flex flex-col justify-between h-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col px-8 gap-4 ">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email">Adresse email :</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="text-gray-400 text-right">mot de passe oublié ?</div>
      </div>
      <Button type="submit">Me connecter</Button>
    </form>
  );
}
