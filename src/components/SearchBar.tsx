'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useState } from "react";
import {faLocationDot,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";




export default function SearchBar({onClick, onChange}:any) {


  return (
    <div className="py-10 px-10 md:px-0" id="search">
      <h1 className="font-bold text-2xl py-2">
        Trouvez votre hébergement pour des vacances de rêve
      </h1>
      <p>En plein centre-ville ou en pleine nature</p>
      <form method="post"  className="my-10 flex" >
        <label htmlFor="location" className="p-3 border-2 rounded-l-2xl bg-gray-200" >
        <FontAwesomeIcon
    icon={faLocationDot}
    style={{ fontSize: 20, color: "black" }}
/>
        </label>
        <input type="text"  onChange={onChange} name="location" id="location" placeholder="Ex : Marseille"  className="p-3 border-t-2 border-b-2 border-r-0 w-full md:w-auto focus:outline-none" />
        <button type="button"  onClick={onClick} className="p-3 hidden md:block text-white font-bold border-blue-600 border-2 rounded-r-2xl bg-blue-600">Rechercher</button>
        <button type="submit" onClick={onClick}  className="md:hidden p-3 text-white font-bold border-blue-600 border-2 rounded-r-2xl bg-blue-600" >
        <FontAwesomeIcon
    icon={faMagnifyingGlass}
    style={{ fontSize: 20, color: "white" }}
/>
        </button>
        
      </form>
      <p className="ml-16 text-red-500">(Mode démo : Essayez Marseille ou Paris)</p>
    </div>
  );
}
