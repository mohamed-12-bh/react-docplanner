import React from "react";
import "./Countries.css";
import CardCountries from "./CardCountries";


const Countries = ({count}) => {
  return (
    <div>
      <div className="intro-countries">
        <h1>
          Improve the lives of millions.
          <br /> Change yours forever
        </h1>
        <p>
          More than 1000 team mates share our same vision, goals and passion.
          <br />> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City
          and
          <br /> Curitiba, our search for great talent never stops.
        </p>
      </div>
      <div className="countries-img">
        {count.map(el => (
          <CardCountries image={el.image} p={el.p} button={el.button} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
