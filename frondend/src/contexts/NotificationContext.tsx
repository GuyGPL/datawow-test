import Notification from "@/components/notification/Notification";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const STATES = {
    SUCCESS: "success",
    ERROR: "error",
};

type NotificationContextValues = {
    notification: string | null;
    message: string;
    notificationSuccess: (text: string) => void;
    notificationError: (text: string) => void;
    clear: () => void;
};

const NotificationContext = createContext<
    NotificationContextValues | undefined
>(undefined);

export const NotificationProvider = ({ children }: PropsWithChildren) => {
    const [notification, setNotification] = useState<string | null>(null);
    const [message, setMessage] = useState<string>("");

    const notificationSuccess = (text: string, duration?: number) => {
        window.scroll(0, 0);
        setMessage(text);
        setNotification(STATES.SUCCESS);
        console.log("success called");
        clear(duration);
    };

    const notificationError = (text: string, duration?: number) => {
        window.scroll(0, 0);
        setMessage(text);
        setNotification(STATES.ERROR);
        clear(duration);
    };

    const clear = (duration: number = 3) => {
        setTimeout(() => {
            setMessage("");
            setNotification(null);
            console.log("clear called");
        }, duration * 1000);
    };

    return (
        <NotificationContext.Provider
            value={{
                notificationSuccess,
                notificationError,
                clear,
                notification,
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
