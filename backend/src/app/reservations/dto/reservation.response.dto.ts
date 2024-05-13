import { ReservationStatusEnum } from "src/enums/reservation-status.enum";

export type ReservationResponse = {
    reservationId: string;
    concertName: string;
    userFirstName: string;
    userLastName: string;
    createdAt: Date;
    status: ReservationStatusEnum;
};
