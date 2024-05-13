import React from "react";
import { ReservationResponse } from "@/types/reservations.response.dto";
import "./HistoryTable.scss";

type HistoryComponentProps = {
    headers: string[];
    contents: ReservationResponse[];
};

const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const HistoryComponent: React.FC<HistoryComponentProps> = ({
    headers,
    contents,
}) => {
    return (
        <div className="history-container">
            <table className="table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="header-cell">
                                <span className="title">{header}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {contents.map(
                        ({
                            reservationId,
                            createdAt,
                            userFirstName,
                            userLastName,
                            concertName,
                            status,
                        }) => (
                            <tr key={reservationId} className="row">
                                <td className="cell">
                                    {formatDate(createdAt)}
                                </td>
                                <td className="cell">
                                    {userFirstName} {userLastName}
                                </td>
                                <td className="cell">{concertName}</td>
                                <td className="cell">{status}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryComponent;
