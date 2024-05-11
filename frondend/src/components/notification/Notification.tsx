import { useNotification } from "@/contexts/NotificationContext";
import React from "react";

export default function Notification() {
    const { notification, message } = useNotification();
    return (
        notification !== null && (
            <div className={notification}>
                <p>{message}</p>
            </div>
        )
    );
}
