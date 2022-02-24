import React from "react";
import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";

import {Link} from "react-router-dom";


export const Personaje = ({ name, image, status, species, gender, id }) => {

  const styleList = {
    paddingBottom: '0.5rem'
  }

  return (
    <>
      <Col sm style={{padding: '0', flexGrow: '0',margin: '1rem'}}>
        <Card
          style={{ width: "310px", margin: "0 auto"}}
        >
          <Card.Img variant="top" src={image} />
          <Card.Body style={{padding: ' 1rem 1rem'}}>
            <Card.Title style={{textAlign: 'center'}}>{name}</Card.Title>
          </Card.Body >
          <ListGroup className="list-group-flush">
            <ListGroupItem style={styleList}>
              <span style={{ color: "red" }}>Estado: </span>
              {status}
            </ListGroupItem>
            <ListGroupItem style={styleList} >
              <span style={{ color: "red" }}>Especie: </span>
              {species}
            </ListGroupItem>
            <ListGroupItem style={styleList} >
              <span style={{ color: "red" }}>Genero: </span>
              {gender}
            </ListGroupItem>
          </ListGroup>
          <Card.Body style={{padding: ' 0.5rem 1rem'}}>
            <Card.Link ><Link to={`./personaje/${id}`}> Mas Info</Link></Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
