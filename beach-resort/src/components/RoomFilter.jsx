import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context.jsx";

import Title from "../components/Title.jsx";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
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

  // get unique type
  let types = getUnique(rooms, "type");

  //add all
  types = ["all", ...types];

  //map to jsx
  types = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            onChange={(e) => handleChange(e)}
            name="type"
            id="type"
            value={type}
            className="form-control"
          >
            {types}
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
}
