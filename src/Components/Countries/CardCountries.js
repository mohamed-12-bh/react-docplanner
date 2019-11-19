import React from "react";
import "./Countries.css";

const CardCountries = ({ p, image, button }) => {
  return (
    <div className="card-countries">
      <img className="img-countries" src={image} alt="..." />
      <div className="title-card">
        <p className="name-countries">{p}</p>
        <button className="btn">{button}</button>
      </div>
    </div>
  );
};

export default CardCountries;
