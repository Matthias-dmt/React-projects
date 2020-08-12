import React, { useState } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour.jsx";
import { tourData } from "./tourData";

function TourList() {
  const [tours, setTours] = useState(tourData);

  const handleDelete = (id) => {
    const filterTours = tours.filter((tour) => tour.id !== id);

    setTours(filterTours);
  };

  return (
    <section className="tourlist">
      {tours.map((tour, i) => {
        return <Tour key={i} {...tour} onDelete={handleDelete} />;
      })}
    </section>
  );
}

export default TourList;
