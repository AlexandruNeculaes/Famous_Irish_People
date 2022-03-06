import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <Card className="cardAbout" style={{ width: "60rem", height: "20rem" }}>
      <Card />
      <Card.Body>
        <Card.Title className="aboutContent">
          <h2>Welcome to our about page</h2>
        </Card.Title>
        <Card.Text className="aboutContent">
          In order to remind the Irish public about the great Irish people who
          made history we will continuously update our site. <br></br>
          <br></br>
          Stay tunned!
        </Card.Text>
        <Nav.Link
          href="https://github.com/AlexandruNeculaes/Famous_Irish_People"
          target="_blank"
        >
          <Button
            className="buttonAbout btn btn-success mb-2 mx-2"
            variant="primary"
          >
            <FontAwesomeIcon className="aboutIcon" icon={faLaptop} />
            Visit GitHub project
          </Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
}

export default About;
