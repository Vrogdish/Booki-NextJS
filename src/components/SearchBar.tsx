'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faLocationDot,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";


export type Inputs = {
  city : string
} 

interface Props {
  onSubmit : SubmitHandler<Inputs>
}

export default function SearchBar({onSubmit}:Props) {
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <div className="pb-10 px-10 md:px-0" id="search">
      <h1 className="font-bold text-2xl py-2">
        Trouvez votre hébergement pour des vacances de rêve
      </h1>
      <p>En plein centre-ville ou en pleine nature</p>
      <form onSubmit={handleSubmit(onSubmit)}  className="my-10 flex" >
        <label htmlFor="city" className="p-3 border-2 rounded-l-2xl bg-gray-200" >
        <FontAwesomeIcon
    icon={faLocationDot}
    style={{ fontSize: 20, color: "black" }}
/>
        </label>
        <input type="text"   {...register("city",{required:"Veuillez remplir le champ", minLength:{value : 3 , message : "Le champ doit contenir au minimum 3 caractères"}}) } name="city" id="city" placeholder="Ex : Marseille"  className="p-3 border-t-2 border-b-2 border-r-0 w-full md:w-auto focus:outline-none" />
        <button type="submit"   className="p-3 hidden md:block text-white font-bold border-blue-600 border-2 rounded-r-2xl bg-blue-600">Rechercher</button>
        <button type="submit"   className="md:hidden p-3 text-white font-bold border-blue-600 border-2 rounded-r-2xl bg-blue-600" >
        <FontAwesomeIcon
    icon={faMagnifyingGlass}
    style={{ fontSize: 20, color: "white" }}
/>
        </button>
        
      </form>
      <div className="ml-16 text-red-500">(Mode démo : Essayez Marseille ou Paris)
      <ErrorMessage
        errors={errors}
        name="city"
        render={({ message }) => <p>{message}</p>}
      /></div>
    </div>
  );
}
