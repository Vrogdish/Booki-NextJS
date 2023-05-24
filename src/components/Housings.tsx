import { DocumentData } from 'firebase/firestore'
import React from 'react'
import Card from './Card'

export default function Housings({hotels,city}:DocumentData) {
  return (
    <section className=" w-full xl:w-2/3 bg-gray-100 p-8 md:rounded-2xl">
    <h2 className="font-bold mb-6 text-xl">Hébergement à {city}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels.map((hotel: DocumentData, index: number) => (
        <Card cardItem={hotel} key={index}/>
      ))}
    </div>
  </section>)
}
