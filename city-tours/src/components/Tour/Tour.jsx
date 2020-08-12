import React, { useState } from "react";
import "./Tour.scss";

function Tour({ id, city, img, name, info, onDelete }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = (e) => {
    setShowInfo(!showInfo);
  };

  const handleDelete = () => onDelete(id);

  return (
    <article className="tour">
      <figure className="img-container">
        <img src={img} alt={name} />
        <span onClick={handleDelete} className="close-btn">
          <i className="fas fa-window-close"></i>
        </span>
      </figure>
      <section className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={handleInfo}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </section>
    </article>
  );
}

export default Tour;
