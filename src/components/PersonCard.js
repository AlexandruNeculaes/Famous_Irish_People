import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function PersonCard(props) {
  return (
    <Col md={4}>
      <Card className="mx-2 mb-3">
        <Card.Img variant="top" src={props.image} className="images" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Read more about me.</Card.Text>
        </Card.Body>
        <LinkContainer to={`/person/#${props.id}`}>
          <Button className="btn btn-success mb-2 mx-2" variant="primary">
            View
          </Button>
        </LinkContainer>
      </Card>
    </Col>
  );
}

export default PersonCard;
