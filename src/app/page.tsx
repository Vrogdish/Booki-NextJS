"use client";

import { getHotels } from "@/pages/api/api";
import Activities from "@/components/Activities";
import FilterBar from "@/components/FilterBar";

import SearchBar from "@/components/SearchBar";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import Card from "@/components/Card";



export default  function Home() {
  const [hotels, setHotels] = useState<DocumentData[]>([]);
  const [bestHotels, setBestHotels] = useState<DocumentData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("Marseille");
  const [tag, setTag] = useState("");
  const [input, setInput] = useState("");

  const handleClick = (e: SubmitEvent) => {
    e.preventDefault;
    setTag("");
    setCity(input);
  };
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const filter = (e: any) => {
    const filter = e.target.id;
    setTag(filter);
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
      <SearchBar onClick={handleClick} onChange={handleChange} />
      <FilterBar activeFilter={filter} />
      <div className="flex gap-6 flex-col-reverse  xl:flex-row ">
        <Gallery
          title={`Hébergements à ${city}`}
          size="w-full xl:w-2/3"
          gridCol="grid-cols-1 md:grid-cols-3"
        >
          {hotels.map((hotel: DocumentData, index: number) => (
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
          {bestHotels.map((hotel: DocumentData, index: number) => (
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
