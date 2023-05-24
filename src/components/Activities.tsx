import { DocumentData } from "firebase/firestore";
import Image from "next/image";

import React from "react";

export default function Activities({ activities, city }: DocumentData) {
  return (
    <section className="w-full  p-8 md:rounded-2xl" id="activities">
      <h2 className="font-bold mb-6 text-xl">Activités à {city}</h2>
      <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
        {activities.map((activitie: DocumentData, index: number) => (
          <article key={index} className="rounded-2xl shadow-lg">
            <Image className="rounded-t-2xl w-full h-36 xl:h-96 md:h-52 object-cover"
              src={activitie.image}
              alt={activitie.title}
              width={500}
              height={500}
            ></Image>
            <h3 className="font-bold  m-4">{activitie.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
