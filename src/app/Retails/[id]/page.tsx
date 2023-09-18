"use client";

import { getHotelRetails } from "@/api/hotelsData";
import { useParams } from "next/navigation";
import Image from "next/image";
import Rating from "@/components/Rating";
import Activities from "@/components/Activities";
import ScrollToTop from "@/utils/ScrollToTop";
import BookIt from "@/components/BookIt";

export default async function Retails() {
  const params: any = useParams();
  const id = Number(params.id);
  const hotel = await getHotelRetails(id);

  return (
    <div>
      <div className=" bg-gray-100 p-8 md:rounded-2xl">
        <h1 className="font-bold text-2xl py-2 ">
          {hotel[0].name} - {hotel[0].city}
        </h1>
        <div className="flex flex-col items-start md:flex-row  md:items-center md:gap-10">
          <Rating hotel={hotel[0]}></Rating>
          <span>0 commentaire</span>
          <span>Genre : {hotel[0].tag}</span>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 rounded-2xl my-10 ">
          <div className="h-96 m-auto w-full xl:rounded-l-2xl lg:min-w-[400px] relative">
            <Image
              src={hotel[0].image}
              fill
              alt="chambre d'hôtel"
              className="absolute h-96 xl:rounded-l-2xl w-full object-cover"
            ></Image>
          </div>
          <div className="flex flex-col justify-between gap-6 md:p-6 ">
            <div>
              <h3 className="font-bold">Description:</h3>
              <p>{hotel[0].describe}</p>
            </div>
            <div>
              <h3 className="font-bold">Tarif :</h3>
              <p> Nuit à partir de {hotel[0].price} €</p>
            </div>
            <BookIt hotel={hotel[0]} />
          </div>
        </div>
      </div>
      <Activities city={hotel[0].city} />
      <ScrollToTop />
    </div>
  );
}
