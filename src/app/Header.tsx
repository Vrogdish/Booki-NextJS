"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { goToId } from "@/utils/goToId";
import useAuthState from "@/hooks/use-auth-state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false)
  const linkClass =
    " cursor-pointer py-6 text-center w-full border-b-2 hover:border-blue-600 md:border-t-2 md:border-transparent hover:text-blue-600 md:border-b-0 md:hover:border-t-2 md:hover:border-blue-600 transition-all " ;

  const {authUser, authUserIsLoading} = useAuthState()  


useEffect(()=>{
  if (authUser && authUserIsLoading === false) {
    setIsLogin(true)
  } else
  {setIsLogin(false)}
},[authUser, authUserIsLoading])

  return (
    <header className="flex flex-col items-center md:flex-row md: justify-between mb-10">
      <Link href={"/"}>
        <Image
          className="h-full py-6"
          src="/Booki.png"
          alt="logo"
          width={63}
          height={19}
        ></Image>
      </Link>
      <nav className="flex w-full md:w-auto md:gap-20">
        <Link href={"/"} className={linkClass}>Hébergements</Link>
        <Link href={"/Account"} className={linkClass}>
          {!isLogin ? "Se connecter" : <div className="flex items-center justify-center gap-3"><FontAwesomeIcon  icon={faUser}/>{authUser?.firstname}</div>}
          
        </Link>
      </nav>
    </header>
  );
}
