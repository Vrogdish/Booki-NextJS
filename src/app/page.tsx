"use client";

import { getHotels } from "@/api/hotelsData";
import Activities from "@/components/Activities";
import FilterBar from "@/components/FilterBar";
import SearchBar, { Inputs } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import { Hotel } from "@/types/data-firebase";
import Container from "@/components/Container";

export default function Home() {
  const [hotels, setHotels] = useState<Hotel[]>();
  const [bestHotels, setBestHotels] = useState<Hotel[]>([]);
  const [city, setCity] = useState("Marseille");
  const [tag, setTag] = useState("");
  const [isLoading, setIsloading] = useState(true);

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
      setIsloading(true);
      const result = await getHotels(city);
      if (result) {
        const filteredHotlels = result.filter((hotel) => hotel.tag === tag);
        const bestHotels = result.filter((hotel) => hotel.rating >= 4);

        if (tag != "") {
          setHotels(filteredHotlels);
        } else {
          setHotels(result);
        }
        setBestHotels(bestHotels);
      }
      setIsloading(false);
    };

    displayHotels();
  }, [city, tag]);

  return (
    <main>
      <SearchBar onSubmit={search} />
      <FilterBar filter={filter} />
      <div className="flex gap-6 flex-col-reverse  xl:flex-row ">
        <Container
          title={`Hébergements à ${city}`}
          color="gray"
          className="w-full xl:w-2/3"
          columns={"3"}
        >
          {!isLoading ? (
            hotels && hotels.length != 0 ? (
              hotels.map((hotel, index) => (
                <Link href={`/Retails/${hotel.id}`} key={index}>
                  <Card cardItem={hotel} cardStyle={"col"} />
                </Link>
              ))
            ) : (
              <div className="py-20">
                Désolé, aucun résultat ne correspond à votre recherche
              </div>
            )
          ) : (
            <div className="py-20">Chargement en cours ...</div>
          )}
        </Container>

        <Container
          title="Les plus populaires"
          color="gray"
          className="w-full xl:w-1/3"
        >
          {bestHotels.map((hotel, index) => (
            <Link href={`/Retails/${hotel.id}`} key={index}>
              <Card cardItem={hotel} key={index} cardStyle={"row"} />
            </Link>
          ))}
        </Container>
      </div>

      <Activities city={city} />
    </main>
  );
}
