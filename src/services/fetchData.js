import { peopleById, planetsById, vehiclesById } from "./fetchApi";

export const fetchData = async (type, uid, dispatch, setLoading) => {
    setLoading(true);
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
            payload: { category: type, id: uid, data },
        });
    } catch (error) {
        console.error("Error obteniendo detalles:", error);
    } finally {
        setLoading(false);
    }
};
