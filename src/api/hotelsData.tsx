import { db } from "@/config/firebase";
import { Hotel } from "@/types/data-firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getHotels = async (city: string) => {
  
    const dataRef = collection(db, "hotels");
    const datas = query(dataRef, where("city", "==", city));
    const querySnapshot = await getDocs(datas);
    const result = querySnapshot.docs.map((doc) => doc.data());

    let hotelList: Hotel[] = [];
    result.map((item) => {
      const hotel: Hotel = {
        id: item.id,
        name: item.name,
        city: item.city,
        image: item.image,
        price: item.price,
        rating: item.rating,
        tag: item.tag,
        comments: item.comments,
        describe: item.describe,
      };
      hotelList.push(hotel);
    });

    return hotelList;
};

export const getActivities = async (city: string) => {
  
  const dataRef = collection(db, "activities");
  const datas = query(dataRef, where("city", "==", city));
  const querySnapshot = await getDocs(datas);
  const activities = querySnapshot.docs.map((doc) => doc.data());
  return activities;

};

export const getHotelRetails = async (id: number) => {
  const dataref = collection(db, "hotels");
  const datas = query(dataref, where("id", "==", id));
  const querySnapshot = await getDocs(datas);
  const result = querySnapshot.docs.map((doc) => doc.data());

  let hotelList: Hotel[] = [];
  result.map((item) => {
    const hotel: Hotel = {
      id: item.id,
      name: item.name,
      city: item.city,
      image: item.image,
      price: item.price,
      rating: item.rating,
      tag: item.tag,
      comments: item.comments,
      describe: item.describe,
    };
    hotelList.push(hotel);
  });

  return hotelList;
};
