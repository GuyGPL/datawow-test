import { useNotification } from "@/contexts/NotificationContext";
import React from "react";
import { MdCancel } from "react-icons/md";
import "./Notification.scss";
import { FaCheckCircle } from "react-icons/fa";
import { ReservationStatusEnum } from "@/enums/reservation-status.enum";

export default function Notification() {
    const { notificationType, message } = useNotification();
    return (
        notificationType && (
            <div className={`notification ${notificationType}`}>
                <div className="notification-context">
                    {notificationType === ReservationStatusEnum.RESERVED ? (
                        <FaCheckCircle />
                    ) : (
                        <MdCancel />
                    )}
                    <span className="message">{message}</span>
                </div>
            </div>
        )
    );
}
