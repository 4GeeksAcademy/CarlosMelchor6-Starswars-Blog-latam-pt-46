import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { PeopleDetails } from "../components/PeopleDetails";
import { PlanetDetails } from "../components/PlanetsDetails";
import { VehicleDetails } from "../components/VehiclesDetails";
import { fetchData } from "../services/fetchData";

export const Single = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid, type } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(type, uid, dispatch, setLoading);
  }, [uid, type, dispatch]);

  const itemDetails = store.SelectById;

  const renderContent = () => {
    if (loading) return <LoadingSpinner />;
    if (!itemDetails) return <NotFoundAlert />;

    return (
      <div className="card-body">
        <h1 className="card-title text-center mb-4">{itemDetails.name}</h1>

        {type === "people" && <PeopleDetails data={itemDetails} />}

        {type === "planets" && <PlanetDetails data={itemDetails} />}

        {type === "vehicles" && <VehicleDetails data={itemDetails} />}
      </div>
    );
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ width: "40rem" }}>
        {renderContent()}
      </div>
    </div>
  );
};
