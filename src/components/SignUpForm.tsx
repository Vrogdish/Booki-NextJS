"use client";

import React from "react";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUp } from "@/api/auth";
import { SignUpInputs } from "@/types/inputs";


export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    console.log(data);
    signUp(data);
  };

  return (
    <form 
      action=""
      className="flex flex-col justify-between h-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col px-8 gap-4 ">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="lastname">Nom :</label>
            <input
              type="text"
              id="lastname"
              {...register("lastname",{ required: true })}
              
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="firstname">Prénom :</label>
            <input
              type="text"
              id="firstname"
              {...register("firstname",{ required: true })}
              
            />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="adress">Adresse :</label>
            <input type="text" id="adress" {...register("adress",{ required: true })} />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="city">Ville :</label>
            <input type="text" id="city" {...register("city",{ required: true })} />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="register-email">Adresse email :</label>
            <input
              type="email"
              id="register-email"
              autoComplete="off"
              {...register("email", { required: true })}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="register-password">Mot de passe :</label>
            <input
              type="password"
              id="register-password"
              autoComplete="off"
              {...register("password", { minLength: 6, required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/2 ml-auto pl-2">
          <label htmlFor="confirm">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirm"
            {...register("confirm", { minLength: 6 })}
            disabled
          />
        </div>
      </div>
      <Button className="mt-4" type="submit">
        Créer mon compte
      </Button>
    </form>
  );
}
