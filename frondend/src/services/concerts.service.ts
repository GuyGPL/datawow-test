import axios from "axios";

export const fetchConcertList = async (): Promise<unknown> => {
    return await axios.get("/concerts").then(({ data }) => data);
};

export const fetchConcertSummary = async (): Promise<unknown> => {
    return await axios.get("/concerts/summary").then(({ data }) => data);
};

export const removeConcert = async (concertId: string): Promise<unknown> => {
    return await axios
        .delete(`/api/concerts/${concertId}`, {
            headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => data);
};
