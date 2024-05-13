import HistoryComponent from "@/components/history-table/HistoryTable";
import { ReservationStatusEnum } from "@/enums/reservation-status.enum";
import { ReservationResponse } from "@/types/reservations.response.dto";
import { ReactElement } from "react";

const MOCK_HISTORY: ReservationResponse[] = [
    {
        reservationId: "fbbce271-1491-478e-bfda-4553b6bb2265",
        concertName: "The festival Int 2024",
        userFirstName: "Sara",
        userLastName: "John",
        createdAt: new Date(2024, 8, 12, 15, 0, 0),
        status: ReservationStatusEnum.CANCELED,
    },
    {
        reservationId: "a4b172c5-94bd-45a3-bb22-c784d7ace417",
        concertName: "The festival Int 2024",
        userFirstName: "Sara",
        userLastName: "John",
        createdAt: new Date(2024, 8, 12, 10, 39, 20),
        status: ReservationStatusEnum.RESERVED,
    },
];

export default function HistoryContainer(): ReactElement {
    return (
        <div>
            <HistoryComponent
                headers={["Date time", "Username", "Concert Name", "Action"]}
                contents={MOCK_HISTORY}
            />
        </div>
    );
}
