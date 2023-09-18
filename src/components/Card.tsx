import React from "react";
import Image from "next/image";

import { DocumentData } from "firebase/firestore";
import Rating from "./Rating";
import { Hotel } from "@/types/data-firebase";



export default function Card({
  cardItem,
  cardStyle,
}: {
  cardItem: Hotel;
  cardStyle: string;
}) {

let style = {card : "", image:""}

if (cardStyle === "col") {
        style = {
        card: "flex flex-row h-full md:flex-col rounded-2xl bg-white p-2 shadow-lg",
        image:
          "w-1/3 rounded-l-xl md:w-full h-32 object-cover md:rounded-b-none md:rounded-t-xl  ",
      };
} else if (cardStyle === "row") {
        style = {
        card: "flex w-full rounded-2xl bg-white p-2 shadow-lg",
        image: "w-1/3 rounded-l-xl  h-32 object-cover",
      };
}



  return (
    <article className={style.card}>
      <Image
        className={style.image}
        src={cardItem.image}
        width={600}
        height={600}
        alt={cardItem.name}
      />
      <div className="flex flex-col justify-between mx-4 ">
        <div>
          <h3 className="font-bold   my-2">{cardItem.name}</h3>
          <span className=" my-2 ">Nuit à partir de {cardItem.price} €</span>
        </div>
        <Rating hotel={cardItem}></Rating>
      </div>
    </article>
  );
}
