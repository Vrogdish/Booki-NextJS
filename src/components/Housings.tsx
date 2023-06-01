// import { DocumentData } from 'firebase/firestore'
// import React from 'react'
// import Card from './Card'
// import Link from 'next/link'

// const cardRow={
//   card:"flex flex-row  md:flex-col rounded-2xl bg-white p-2 shadow-lg",
//   image : "w-1/3 rounded-l-xl md:w-full h-32 object-cover md:rounded-b-none md:rounded-t-xl  "
// }

// export const cardCol = {
//   card : "flex w-full rounded-2xl bg-white p-2 shadow-lg",
//   image : "w-1/3 rounded-l-xl  h-32 object-cover"
// }


// export default function Housings({hotels,city}:{hotels: DocumentData, city:string}) {
//   return (
//     <section className=" w-full xl:w-2/3 bg-gray-100 p-8 md:rounded-2xl">
//     <h2 className="font-bold mb-6 text-xl">Hébergement à {city}</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {hotels.map((hotel: DocumentData, index: number) => (
//         <Link href={ `/Retails/${hotel.id}`}  key={index}><Card cardItem={hotel}  style={cardRow}/></Link>))}
        
      
//     </div>
//   </section>)
// }
