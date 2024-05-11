import axios from "axios";

export const createReservation = async (): Promise<unknown> => {
    return await axios
        .post("/api/reservations", {
            headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => data);
};

export const updateReservation = async (): Promise<unknown> => {
    return await await axios
        .put("/api/reservations", {
            headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => data);
};
