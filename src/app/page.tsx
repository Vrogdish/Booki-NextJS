"use client"

import Activities from "@/components/Activities";
import FilterBar from "@/components/FilterBar";
import Housings from "@/components/Housings";
import Populars from "@/components/Populars";
import SearchBar from "@/components/SearchBar";
import { FirebaseApp, initializeApp } from "firebase/app";
import { DocumentData,
  Firestore,
  collection,
  getDocs,
  getFirestore,
  query,
  where, } from "firebase/firestore";
import { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "projet-booki",
  storageBucket: "projet-booki.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app:FirebaseApp = initializeApp(firebaseConfig);
const db:Firestore = getFirestore(app);

export default function Home() {
 
  const [hotels, setHotels] = useState<DocumentData[]>([]);
  const [bestHotels,setBestHotels] = useState<DocumentData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState ("Marseille")
  const [tag, setTag] = useState("")
  const [filterIsActive, setFilter] = useState (false)
  const [filteredHotlels, setFilterdeHotels]= useState<DocumentData[]>([])
  const [activities, setActivities] = useState<DocumentData[]>([])
  const [input,setInput] = useState("")

  

  
  const handleClick = (e:SubmitEvent) =>{
    e.preventDefault
    console.log(input)
    setTag("")
    setCity(input)
   
  }
  const handleChange = (e:any) => {
   setInput(e.target.value)
   

  }

  const filter = (e:any) => {
    // !filterIsActive ? setFilter(true) : setFilter(false)
    const filter = e.target.id
    setTag(filter)
  }
 
  useEffect(() => {
    
    const getData = async (city: string, tag: string) => {
      try {
        setLoading(true);
        const dataRef = collection(db, "hotels");
        const datas = query(dataRef, where("city", "==", city));
        const querySnapshot = await getDocs(datas);

        const hotelList = querySnapshot.docs.map((doc) => doc.data());
        const filteredHotlels = hotelList.filter((hotel) => hotel.tag === tag)
        const bestHotels = hotelList.filter((hotel)=>hotel.rating > 4)
  
        
        if (tag !="") {setHotels(filteredHotlels)}
        else {setHotels(hotelList)}
        
        ;
        setBestHotels(bestHotels)

      } catch (error) {
        console.log(error);
      }
    };
 
   const getActivities = async (city:string) => {
    try {
      setLoading(true)
      const dataRef= collection(db, "activities")
      const datas = query(dataRef, where("city", "==", city))
      const querySnapshot = await getDocs(datas)
      const activities = querySnapshot.docs.map((doc)=>doc.data())

      setActivities(activities)
    } catch (error) {
      console.log(error)
    }
   }
    
    
    getData(city, tag);
    getActivities(city)
    setLoading(false);


  }, [city, tag]);


 
 
  return (

    <main>
      <SearchBar onClick={handleClick} onChange={handleChange}/>
      <FilterBar activeFilter={filter}/>
      <div className="flex gap-6 flex-col-reverse  xl:flex-row ">
        <Housings  hotels={hotels}  city={city}/>
        
        <Populars hotels={bestHotels}/>
      </div>
      <Activities activities={activities} city={city}/>
    </main>
  );
}
