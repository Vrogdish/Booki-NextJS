import {
  faFire,
  faGlobe,
  faHeart,
  faMoneyBillWave,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  filter : any
}

export default function FilterBar({filter}:Props) {
  const [activeFilter , setActivefilter] = useState(0)

  console.log(activeFilter)

  const filterList = [
    {
      icone : (
        <FontAwesomeIcon 
        icon={faGlobe}
        style={{ fontSize: 22, color: "#0065FC" }}
        className="mr-5"
        />
      ),
      title: "Tous"
    },

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

  ];




  return (
    <div className="mb-10 px-2">
    <div className="my-6 grid md:grid-cols-2 gap-10 px-10 lg:grid-cols-4 md:px-0 ">
      {filterList.map((element,index)=>(
        <button key={index} 
          onClick={(e : any)=>{filter(e);setActivefilter(index)}}
          className= {`px-6 py-3 border-2 rounded-full font-bold hover:bg-blue-200 transition-all ${activeFilter===index?"bg-blue-200":""}`} id={element.title}>{element.icone}{element.title}</button>
      ))}
    </div>
    <span className="" >Plus de 500 logements disponibles dans cette ville</span>
    </div>
  );
}
