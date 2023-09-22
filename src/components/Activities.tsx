"use client";
import { getActivities } from "@/api/hotelsData";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Activity } from "@/types/data-firebase";

interface Props {
  city : string
}

export default function Activities({ city }: Props) {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const displayActivities = async () => {
      const result = await getActivities(city);
      setActivities(result);
    };

    displayActivities();
  }, [city]);

  return (
    <Container title={`Activités à ${city}`} columns={"4"} >
    {activities.map((activitie: Activity, index: number) => (
             <article key={index} className="rounded-2xl shadow-lg">
             <Image
                 className="rounded-t-2xl w-full h-36 xl:h-96 md:h-52 object-cover"
                 src={activitie.image}
                 alt={activitie.title}
                 width={500}
                 height={500}
             ></Image>
            <h3 className="font-bold  m-4">{activitie.title}</h3>
            </article>
           ))}
    </Container>
  );
}
