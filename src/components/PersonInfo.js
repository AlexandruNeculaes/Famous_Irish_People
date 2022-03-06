import React, { useEffect, useState } from "react";
import persons from "../data/persons.json";

function PersonInfo() {
  const [personInfo, setPersonInfo] = useState(null);
  const hashValue = document.location.hash.split("#").pop();
  console.log("hash", hashValue);
  useEffect(() => {
    const person = persons.find((person) => person.id == hashValue);
    console.log("hashTo", hashValue);
    setPersonInfo(person);
  }, [window.location.href]);
  console.log("personInfo", personInfo);
  return (
    personInfo && (
      <>
        <h2 className="name">{personInfo.name}</h2>
        <p className="content">{personInfo.content}</p>
      </>
    )
  );
}

export default PersonInfo;
