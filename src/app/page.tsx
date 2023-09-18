"use client";

import { getHotels } from "@/api/hotelsData";
import Activities from "@/components/Activities";
import FilterBar from "@/components/FilterBar";
import SearchBar, { Inputs } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import Card from "@/components/Card";
import { Hotel } from "@/types/data-firebase";

export default function Home() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [bestHotels, setBestHotels] = useState<Hotel[]>([]);
  const [city, setCity] = useState("Marseille");
  const [tag, setTag] = useState("");

  const search = (data: Inputs) => {
    // gestion majuscule
    let result = data.city;
    result = result[0].toUpperCase() + result.slice(1);
    setCity(result);
  };

  const filter = (e: any) => {
    const filter = e.target.id;
    filter === "Tous" ? setTag("") : setTag(filter);
  };

  useEffect(() => {
    const displayHotels = async () => {
      const result = await getHotels(city);
      const filteredHotlels = result.filter((hotel) => hotel.tag === tag);
      const bestHotels = result.filter((hotel) => hotel.rating > 4);

      if (tag != "") {
        setHotels(filteredHotlels);
      } else {
        setHotels(result);
      }
      setBestHotels(bestHotels);
    };

    displayHotels();
  }, [city, tag]);

  return (
    <main>
      <SearchBar onSubmit={search} />
      <FilterBar filter={filter} />
      <div className="flex gap-6 flex-col-reverse  xl:flex-row ">
        <Gallery
          title={`Hébergements à ${city}`}
          size="w-full xl:w-2/3"
          gridCol="grid-cols-1 md:grid-cols-3"
        >
          {hotels.map((hotel, index) => (
            <Link href={`/Retails/${hotel.id}`} key={index}>
              <Card cardItem={hotel} cardStyle={"col"} />
            </Link>
          ))}
        </Gallery>

        <Gallery
          title="Les plus populaires"
          size="w-full xl:w-1/3"
          gridCol="grid-cols-1"
        >
          {bestHotels.map((hotel, index) => (
            <Link href={`/Retails/${hotel.id}`} key={index}>
              <Card cardItem={hotel} key={index} cardStyle={"row"} />
            </Link>
          ))}
        </Gallery>
      </div>
      <Activities city={city} />
    </main>
  );
}
