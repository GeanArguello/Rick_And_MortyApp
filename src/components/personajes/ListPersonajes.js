import React, { useState, useEffect } from "react";

import "./ListPersonajes.css";

import { Personaje } from "./PersonajeCard";
import { Container, Row } from "react-bootstrap";

const URL = "https://rickandmortyapi.com/api/character";

export const ListPersonajes = () => {
  const [person, setPerson] = useState([]);

  const getPersonajes = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPerson(data.results));
  };
  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    <div className="home">
      <Container className="contenedor">
        <Row className="justify-content-md-center">
          {!person ? (
            <div className="products_loader">
              <h3>Cargando...</h3>
            </div>
          ) : (
            person.map((item) => {
              return (
                <Personaje
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  species={item.species}
                  gender={item.gender}
                  id={item.id}
                ></Personaje>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
};
