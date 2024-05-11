import { useNotification } from "@/contexts/NotificationContext";
import React from "react";
import { STATES } from "@/constants/notification-type";
import { MdCancel } from "react-icons/md";
import "./Notification.scss";
import { FaCheckCircle } from "react-icons/fa";

export default function Notification() {
    const { notificationType, message } = useNotification();
    return (
        notificationType && (
            <div className={`notification ${notificationType}`}>
                <div className="notification-context">
                    {notificationType === STATES.SUCCESS ? (
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
