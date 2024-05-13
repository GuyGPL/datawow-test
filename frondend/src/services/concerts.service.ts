import {
    ConcertsResponse,
    CreateConcertBodyRequest,
    DeleteConcertsResponse,
} from "@/types/concerts.response.dto";
import axios from "axios";

export const fetchConcerts = async (): Promise<ConcertsResponse> => {
    return await axios
        .get("http://localhost:3001/concerts")
        .then(({ data }) => {
            console.log(data);
            return data;
        });
};

export const removeConcert = async (
    concertId: string
): Promise<DeleteConcertsResponse> => {
    return await axios
        .delete(`http://localhost:3001/concerts/${concertId}`, {
            headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => data);
};

export const createConcert = async (
    body: CreateConcertBodyRequest
): Promise<unknown> => {
    return await axios
        .post(`http://localhost:3001/concerts/create`, body)
        .then(({ data }) => data);
};
