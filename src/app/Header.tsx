import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center md:flex-row md: justify-between ">
      <Image
        className="h-full py-6"
        src="/Booki.png"
        alt="logo"
        width={63}
        height={19}
      ></Image>
      <nav className="flex w-full md:w-auto md:gap-20">
        <Link

          href="/#search"
          scroll={false}
          className=" py-6 text-center w-full border-b-2 hover:border-blue-600 md:border-t-2 md:border-transparent hover:text-blue-600 md:border-b-0 md:hover:border-t-2 md:hover:border-blue-600"
        >
          Hébergement
        </Link>
        <Link
          
          href="/#activities"
          scroll={false}
          className=" py-6 text-center w-full border-b-2 hover:border-blue-600 md:border-t-2 md:border-transparent hover:text-blue-600 md:border-b-0 md:hover:border-t-2 md:hover:border-blue-600"
        >
          Activités
        </Link>
      </nav>
    </header>
  );
}
