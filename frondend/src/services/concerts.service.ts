import {
    ConcertListResponse,
    ConcertSummaryResponse,
    CreateConcertBodyRequest,
} from "@/types/concerts.dto";
import axios from "axios";

export const fetchConcertList = async (): Promise<ConcertListResponse> => {
    return await axios.get("/concerts").then(({ data }) => data);
};

export const fetchConcertSummary =
    async (): Promise<ConcertSummaryResponse> => {
        return await axios.get("/concerts/summary").then(({ data }) => data);
    };

export const removeConcert = async (concertId: string): Promise<unknown> => {
    return await axios
        .delete(`/concerts/${concertId}`, {
            headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => data);
};

export const createConcert = async (
    body: CreateConcertBodyRequest
): Promise<unknown> => {
    return await axios.post(`/concerts/create`, body).then(({ data }) => data);
};
