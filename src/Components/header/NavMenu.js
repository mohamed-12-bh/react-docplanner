import React from "react";
import "./NavMenu.css";
const Navmenu = ({ drop, name }) => {
  return (
    <div>
      <li className="link-nav">
        {name}

        {drop && (
          <ul className="dropdown-departement">
            {drop.map((el, key) => (
              <li key={key}>{el}</li>
            ))}
          </ul>
        )}
      </li>
    </div>
  );
};

export default Navmenu;
