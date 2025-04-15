const API_URL = "https://www.swapi.tech/api";

export const getPeople = async () => {
    try {
        const response = await fetch(`${API_URL}/people`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error: ", response.status);
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getPlanets = async () => {
    try {
        const response = await fetch(`${API_URL}/planets`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error: ", response.status);
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getVehicles = async () => {
    try {
        const response = await fetch(`${API_URL}/vehicles`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error: ", response.status);
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

