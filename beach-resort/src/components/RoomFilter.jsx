import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context.jsx";

import Title from "../components/Title.jsx";

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
          ></select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
}
