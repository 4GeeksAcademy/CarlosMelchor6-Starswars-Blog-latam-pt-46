import React from "react";
import { Card } from "../components/Card.jsx";
import { useCard } from "../hooks/useCard.jsx";

export const Home = () => {
  const { resultPeople, resultPlanets, resultVehicles } = useCard();

  return (
    <div className="container">
      <div className="row">
        <div className="overflow-hidden p-5">
          <h2 className="text-danger">Characters</h2>
          <div className="d-flex align-items-stretch gap-3 overflow-x-scroll">
            {resultPeople.map((results) => (
              <Card
                key={results.uid}
                name={results.name}
                uid={results.uid}
                type={"people"}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden p-5">
          <h2 className="text-danger">Planets</h2>
          <div className="d-flex align-items-stretch gap-3 overflow-x-scroll">
            {resultPlanets.map((results) => (
              <Card
                key={results.uid}
                name={results.name}
                uid={results.uid}
                type={"planets"}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden p-5">
          <h2 className="text-danger">Vehicles</h2>
          <div className="d-flex align-items-stretch gap-3 overflow-x-scroll">
            {resultVehicles.map((results) => (
              <Card
                key={results.uid}
                name={results.name}
                uid={results.uid}
                type={"vehicles"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
