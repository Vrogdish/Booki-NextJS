import {
  faFire,
  faHeart,
  faMoneyBillWave,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



export default function FilterBar({activeFilter}:any) {

  const filterList = [
    {
      icone: (
        <FontAwesomeIcon
          icon={faMoneyBillWave}
          style={{ fontSize: 22, color: "#0065FC" }}
          className="mr-5"
        />
      ),
      title: "Economique"
    },
    {
      icone: (
        <FontAwesomeIcon
          icon={faPerson}
          style={{ fontSize: 22, color: "#0065FC" }}
          className="mr-5"
        />
      ),
      title: "Familiale"
    },
    {
      icone: (
        <FontAwesomeIcon
          icon={faHeart}
          style={{ fontSize: 22, color: "#0065FC" }}
          className="mr-5"
        />
      ),
      title: "Romantique"
    },
    {
      icone: (
        <FontAwesomeIcon
          icon={faFire}
          style={{ fontSize: 22, color: "#0065FC" }}
          className="mr-5"
        />
      ),
      title: "Nos pépites"
    },
  ];


  return (
    <div className="mb-10">
    <div className="my-6 grid grid-cols-2 gap-10 px-10 lg:grid-cols-4 md:px-0 ">
      {filterList.map((element)=>(
        <button key={element.title} onClick={activeFilter} className="  px-6 py-3 border-2 rounded-full font-bold hover:bg-blue-200" id={element.title}>{element.icone}{element.title}</button>
      ))}
    </div>
    <span >Plus de 500 logements disponibles dans cette ville</span>
    </div>
  );
}
