"use client";

import { getHotelRetails } from "@/pages/api/api";
import { DocumentData } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "@/components/Rating";
import Activities from "@/components/Activities";

export default async function Retails() {
  // const [hotel, setHotel] = useState<DocumentData[]>([{}]);
  // const [city, setCity] = useState("");

  const params: any = useParams();

  // useEffect(() => {
  //   const id = Number(params.id);

  //   const retails = async () => {
  //     const result = await getHotelRetails(id);
  //     setHotel(result);
  //     const city: string = result[0].city;
  //     setCity(city);
  //   };

  //   retails();
  // }, [params.id]);

  const id = Number(params.id)
  const hotel = await getHotelRetails(id)

  return (
    <div>
      <h1 className="font-bold text-2xl py-2 ">
        {hotel[0].name} - {hotel[0].city}
      </h1>
      <Rating hotel={hotel[0]}></Rating>
      <div className="flex gap-6 rounded-2xl my-10">
        <Image
          src={hotel[0].image}
          alt="chambre d'hôtel"
          width={600}
          height={600}
          className="h-96 w-1/2  rounded-l-2xl object-cover"
        ></Image>
        <div className="flex flex-col  justify-between">
          <h2>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illum officiis non, inventore repellat distinctio aspernatur
            cupiditate asperiores aliquam est ipsa veniam? Laboriosam,
            voluptatem eum accusamus optio sunt quo sequi ut!{" "}
          </h2>
          <p>Tarif : Nuit à partir de {hotel[0].price} €</p>
        </div>
      </div>
      <Activities city={hotel[0].city} />
    </div>
  );
}
