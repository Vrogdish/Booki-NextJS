import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DocumentData } from "firebase/firestore";
import React from "react";

export default function rating({hotel}:DocumentData) {
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
