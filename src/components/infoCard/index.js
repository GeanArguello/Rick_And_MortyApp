import React from "react";
import "./index.css";

export const InfoCard = ({ info }) => {
  const { name, image, status, species, type, gender } = info;

  return (
    <div className="card_container">
      <div className="card_image">
        <img src={image} alt="" />
      </div>
      <div className="card_info">
        <h3>{name}</h3>
        <ul>
          <li>
            Estado: <span>{status}</span>
          </li>
          <li>
            Especie: <span>{species}</span>
          </li>
          <li>
            Tipo: <span>{type}</span>
          </li>
          <li>
            Genero: <span>{gender}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
