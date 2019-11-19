import React from "react";

const CardFeatures = ({ h2, p, trans, svg }) => {
  return (
    <div
      className={trans ? "card-features" + " " + "card-trans" : "card-features"}
    >
      <img src={svg} alt="..." />

      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  );
};

export default CardFeatures;
