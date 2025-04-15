import { getPeople, getPlanets, getVehicles } from "../services/fetchApi";
import useGlobalReducer from "./useGlobalReducer";
import { useEffect } from "react";

export const useCard = () => {
    const { store, dispatch } = useGlobalReducer();

    const loadPeople = async () => {
        const results = await getPeople();
        dispatch({ type: "Load_Data", payload: { resultPeople: results } });
    };

    const loadPlanet = async () => {
        const results = await getPlanets();
        dispatch({ type: "Load_Data", payload: { resultPlanets: results } });
    }

    const loadVehicles = async () => {
        const results = await getVehicles();
        dispatch({ type: "Load_Data", payload: { resultVehicles: results } });
    }

    useEffect(() => {
        loadPeople();
        loadPlanet();
        loadVehicles();
    }, []);

    return {
        resultPeople: store.resultPeople,
        resultPlanets: store.resultPlanets,
        resultVehicles: store.resultVehicles
    };
};
