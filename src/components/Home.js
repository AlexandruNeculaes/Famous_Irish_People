import React from "react";
import { CardGroup } from "react-bootstrap";
import PersonCard from "./PersonCard";
import personInfo from "../data/persons.json";

function Home() {
  return (
    <div className="homeContainer">
      <CardGroup>
        {personInfo.map((person) => (
          <PersonCard
            id={person.id}
            name={person.name}
            image={person.image}
            key={person.id}
          />
        ))}
      </CardGroup>
    </div>
  );
}

export default Home;
