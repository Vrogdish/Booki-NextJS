import { DocumentData } from 'firebase/firestore'
import React from 'react'
import Card from './Card'
import CardBestOf from './CardBestOf'

export default function Populars({hotels}:DocumentData) {
  return (
    <section className="w-full xl:w-1/3 bg-gray-100 p-8 md:rounded-2xl">
    <h2 className="font-bold mb-6 text-xl">Les plus populaires</h2>
    <div className="grid grid-cols-1  gap-6">
      {hotels.map((hotel: DocumentData, index: number) => (
        <CardBestOf cardItem={hotel} key={index} />
      ))}
    </div>
  </section>)
}

