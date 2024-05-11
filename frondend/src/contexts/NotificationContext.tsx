import Notification from "@/components/notification/Notification";
import { STATES } from "@/constants/notification-type";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type NotificationContextValues = {
    notificationType: string | null;
    message: string;
    notificationSuccess: (text: string) => void;
    notificationError: (text: string) => void;
    clear: () => void;
};

const NotificationContext = createContext<
    NotificationContextValues | undefined
>(undefined);

export const NotificationProvider = ({ children }: PropsWithChildren) => {
    const [notificationType, setNotificationType] = useState<string | null>(
        null
    );
    const [message, setMessage] = useState<string>("");

    const notificationSuccess = (text: string, duration?: number) => {
        setMessage(text);
        setNotificationType(STATES.SUCCESS);
        clear(duration);
    };

    const notificationError = (text: string, duration?: number) => {
        setMessage(text);
        setNotificationType(STATES.ERROR);
        clear(duration);
    };

    const clear = (duration: number = 3) => {
        setTimeout(() => {
            setMessage("");
            setNotificationType(null);
        }, duration * 1000);
    };

    return (
        <NotificationContext.Provider
            value={{
                notificationSuccess,
                notificationError,
                clear,
                notificationType,
                message,
            }}
        >
            <Notification />
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = (): NotificationContextValues => {
    return useContext(NotificationContext) as NotificationContextValues;
};
