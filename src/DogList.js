import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <h1>Available Dogs</h1>
      <div>
        {dogs.map((dog) => (
          <div key={dog.name}>
            <h3>
              {" "}
              <Link to={`/dogs/${dog.name.toLowerCase()}`}> {dog.name}</Link>
            </h3>
            <img src={dog.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
