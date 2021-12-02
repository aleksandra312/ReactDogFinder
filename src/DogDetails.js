import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const currentDog = dogs.find(
    (d) => d.name.toLowerCase() === name.toLowerCase()
  );

  if (!currentDog) return <Navigate to="/dogs" />;

  return (
    <div className="DogDetails">
      <h2>{currentDog.name}</h2>
      <img src={currentDog.src} />
      <h3>age: {currentDog.age}</h3>
      <ul>
        {currentDog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
};

export default DogDetails;
