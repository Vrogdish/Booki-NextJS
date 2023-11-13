import { getHotelRetails } from "@/api/hotelsData";
import Image from "next/image";
import Rating from "@/components/Rating";
import Activities from "@/components/Activities";
import ScrollToTop from "@/utils/ScrollToTop";
import BookIt from "@/components/BookIt";
import Container from "@/components/Container";

export default async function Retails({params}: {params : {id : string}}) {
  const id = Number(params.id);
  const hotel = await getHotelRetails(id);

  return (
   
    <div>
       <Container title= {`${hotel[0].name} - ${hotel[0].city}`} color="gray">
        <div className="flex flex-col items-start md:flex-row  md:items-center md:gap-10">
          <Rating hotel={hotel[0]}></Rating>
          <span>0 commentaire</span>
          <span>Genre : {hotel[0].tag}</span>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 rounded-2xl  ">
          <div className="h-96 m-auto w-full xl:rounded-l-2xl lg:min-w-[400px] relative">
            <Image
              src={hotel[0].image}
              fill
              alt="chambre d'hôtel"
              className="absolute h-96 xl:rounded-l-2xl w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
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
      </Container>

      <Activities city={hotel[0].city} />

      <ScrollToTop />
    </div>
  );
}
