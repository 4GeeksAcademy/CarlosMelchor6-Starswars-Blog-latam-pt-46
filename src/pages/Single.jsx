import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { peopleById, planetsById, vehiclesById } from "../services/fetchApi";

export const Single = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid, type } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        let data;

        switch (type) {
          case "people":
            data = await peopleById(uid);
            break;
          case "planets":
            data = await planetsById(uid);
            break;
          case "vehicles":
            data = await vehiclesById(uid);
            break;
          default:
            throw new Error("Tipo de categoría no válido");
        }

        dispatch({
          type: "GET_BY_ID",
          payload: {
            category: type,
            id: uid,
            data: data,
          },
        });

      } catch (error) {
        console.error("Error obteniendo detalles:", error);
      } finally {
        setLoading(false)
      }
    };


    fetchData();
  }, [uid, type, dispatch]);

  const itemDetails = store.SelectById;

  const renderContent = () => {

    if (loading) {
      return (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      );
    }

    if (!itemDetails) {
      return (
        <div className="alert alert-warning">
          No se encontró la información solicitada
        </div>
      );
    }
    return (
      <>
        <div className="card-body">
          <h1 className="card-title text-center mb-4">{itemDetails.name}</h1>

          {type === "people" && (
            <div className="card-text">
              <p>
                <strong>Género:</strong> {itemDetails.gender}
              </p>
              <p>
                <strong>Año de nacimiento:</strong> {itemDetails.birth_year}
              </p>
              <p>
                <strong>Color de ojos:</strong> {itemDetails.eye_color}
              </p>
              <p>
                <strong>Color de pelo:</strong> {itemDetails.hair_color}
              </p>
              <p>
                <strong>Altura:</strong> {itemDetails.height} cm
              </p>
              <p>
                <strong>Peso:</strong> {itemDetails.mass} kg
              </p>
              <p>
                <strong>Color de piel:</strong> {itemDetails.skin_color}
              </p>
            </div>
          )}

          {type === "planets" && (
            <div className="card-text">
              <p>
                <strong>Clima:</strong> {itemDetails.climate}
              </p>
              <p>
                <strong>Terreno:</strong> {itemDetails.terrain}
              </p>
              <p>
                <strong>Población:</strong> {itemDetails.population}
              </p>
              <p>
                <strong>Diámetro:</strong> {itemDetails.diameter}
              </p>
              <p>
                <strong>Periodo de rotación:</strong>{" "}
                {itemDetails.rotation_period}
              </p>
              <p>
                <strong>Periodo orbital:</strong> {itemDetails.orbital_period}
              </p>
            </div>
          )}

          {type === "vehicles" && (
            <div className="card-text">
              <p>
                <strong>Modelo:</strong> {itemDetails.model}
              </p>
              <p>
                <strong>Fabricante:</strong> {itemDetails.manufacturer}
              </p>
              <p>
                <strong>Clase:</strong> {itemDetails.vehicle_class}
              </p>
              <p>
                <strong>Costo en créditos:</strong>{" "}
                {itemDetails.cost_in_credits}
              </p>
              <p>
                <strong>Velocidad máxima:</strong>{" "}
                {itemDetails.max_atmosphering_speed}
              </p>
              <p>
                <strong>Longitud:</strong> {itemDetails.length}
              </p>
              <p>
                <strong>Capacidad de carga:</strong>{" "}
                {itemDetails.cargo_capacity}
              </p>
            </div>
          )}
        </div>
      </>
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