import { ReservationResponse } from "@/types/reservations.response.dto";
import axios from "axios";

export const createReservation = async (): Promise<ReservationResponse[]> => {
    return await axios
        .post("http://localhost:3001/api/reservations", {
            headers: { "Content-Type": "application/json" },
        })
        .then(({ data }) => data);
};

export const findAllReservation = async (): Promise<ReservationResponse[]> => {
    return await await axios
        .get("http://localhost:3001/api/reservations")
        .then(({ data }) => data);
};

export const findUserReservation = async (
    userId: string
): Promise<ReservationResponse[]> => {
    return await await axios
        .get(`http://localhost:3001/api/reservations/users/${userId}`)
        .then(({ data }) => data);
};
