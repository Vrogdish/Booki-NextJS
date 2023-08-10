"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { goToId } from "@/utils/goToId";

export default function Header() {
  const linkClass =
    " cursor-pointer py-6 text-center w-full border-b-2 hover:border-blue-600 md:border-t-2 md:border-transparent hover:text-blue-600 md:border-b-0 md:hover:border-t-2 md:hover:border-blue-600 transition-all";

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
        <div onClick={() => goToId("search")} className={linkClass}>
          Hébergement
        </div>
        <div onClick={()=> goToId("activities")} className={linkClass}>
          Activités
        </div>
      </nav>
    </header>
  );
}
