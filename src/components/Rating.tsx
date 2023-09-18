import { Hotel } from "@/types/data-firebase";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  hotel : Hotel
}

export default function rating({hotel}:Props) {
  const gridRating = [1, 2, 3, 4, 5];

  return (
    <div className="my-2">
      {gridRating.map((rank) =>
        hotel.rating >= rank ? (
          <FontAwesomeIcon
            key={rank}
            icon={faStar}
            style={{ fontSize: 20, color: "#0065FC" }}
          />
        ) : (
          <FontAwesomeIcon
            key={rank}
            icon={faStar}
            style={{ fontSize: 20, color: "gray" }}
          />
        )
      )}
    </div>
  );
}
