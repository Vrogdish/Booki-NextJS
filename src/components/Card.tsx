import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { DocumentData } from "firebase/firestore";

const gridRating = [1, 2, 3, 4, 5];

export default function Card({ cardItem }: DocumentData) {
  return (
    <article className="flex flex-row  md:flex-col rounded-2xl bg-white p-2 shadow-lg">
      <Image
        className="w-1/3 rounded-l-xl md:w-full h-32 object-cover md:rounded-b-none md:rounded-t-xl  "
        src={cardItem.image}
        width={500}
        height={500}
        alt={cardItem.name}
      />{" "}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-bold  mx-4 my-2">{cardItem.name}</h3>
          <span className="mx-4 my-2">Nuit à partir de {cardItem.price} €</span>
        </div>
        <div className="mx-4  my-2">
          {gridRating.map((rank) =>
            cardItem.rating >= rank ? (
              <FontAwesomeIcon
                key={rank}
                icon={faStar}
                style={{ fontSize: 20, color: "#0065FC" }}
              />
            ) : (
              <FontAwesomeIcon
                key={rank}
                icon={faStar}
                style={{ fontSize: 20, color: "gray" }}
              />
            )
          )}
        </div>
      </div>
    </article>
  );
}
