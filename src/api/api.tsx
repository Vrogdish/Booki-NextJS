import { hotel } from "@/types/data-firebase";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Firestore,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "projet-booki",
  storageBucket: "projet-booki.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export const getHotels = async (city: string) => {
  // try {

  const dataRef = collection(db, "hotels");
  const datas = query(dataRef, where("city", "==", city));
  const querySnapshot = await getDocs(datas);

  const hotelList = querySnapshot.docs.map((doc) => doc.data());

  return hotelList;

  // } catch (error) {
  //   console.log(error);
  // }
};

export const getActivities = async (city: string) => {
  // try {

  const dataRef = collection(db, "activities");
  const datas = query(dataRef, where("city", "==", city));
  const querySnapshot = await getDocs(datas);
  const activities = querySnapshot.docs.map((doc) => doc.data());
  return activities;

  // } catch (error) {
  //   console.log(error)
  // }
};

export const getHotelRetails = async (id: number) => {
  const dataref = collection(db, "hotels");
  const datas = query(dataref, where("id", "==", id));
  const querySnapshot = await getDocs(datas);

  const hotelRetails = querySnapshot.docs.map((doc) => doc.data());
  return hotelRetails;
};
