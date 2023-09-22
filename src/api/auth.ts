import {  auth, db } from "@/firebase/config";
import { SignUpInputs } from "@/types/inputs";
import { FirebaseError } from "firebase/app";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Firestore, doc, getFirestore, setDoc } from "firebase/firestore";



export const signUp = async (user: SignUpInputs) => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const data = {
      firstname: user.firstname,
      lastname: user.lastname,
      adress: user.adress,
      city: user.city,
    };
    await setDoc(doc(db, "users", userCredential.user.uid), data);
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    console.log(error);
    return {
      error: {
        message: firebaseError.message,
        code: firebaseError.code,
      },
    };
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;

    return {
      error: {
        message: firebaseError.message,
        code: firebaseError.code,
      },
    };
  }
};

export const logOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
