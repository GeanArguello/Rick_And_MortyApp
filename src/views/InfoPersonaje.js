import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Container } from 'react-bootstrap'

import './infoPersonaje.css'

import {InfoCard} from '../components/infoCard'

export const InfoPersonaje = () => {
  const [person, setPerson] = useState([]);
  const { id } = useParams();

  const getPersonajes = () => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setPerson(data));
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  return (
  <div className="pageInfo">
      <Container>
          <InfoCard info={person}></InfoCard>
      </Container>
  </div>
  )
};
