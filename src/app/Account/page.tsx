"use client";

import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";
import MyAccount from "@/components/MyAccount";
import SignUpForm from "@/components/SignUpForm";
import useAuthState from "@/hooks/use-auth-state";
import React, { useEffect, useState } from "react";

export default function Signup() {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  const {authUser,authUserIsLoading}=useAuthState()

  useEffect(()=>{
    if (authUser && authUserIsLoading === false) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  },[authUser, authUserIsLoading])

 
  if (isLogin === false ) {
    return (
      <div>
        <h1 className="font-bold text-2xl py-2 px-10 md:px-0">
          Créer votre compte ou identifiez-vous
        </h1>
        <p className="pb-10">
          Et reservez dès maintenant votre hotel au meilleur prix
        </p>
        <div className="flex gap-6 flex-col xl:flex-row ">
          <Container color="gray" title="Connexion" className="w-full xl:w-1/3">
            <LoginForm />
          </Container>
          <Container
            color="gray"
            title="Création de compte"
            className="w-full xl:w-2/3"
          >
            <SignUpForm />
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <MyAccount user={authUser} />
      </div>
    );
  }
}
