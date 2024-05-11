"use client";
import MainLayout from "@/layouts/MainLayout";
import "./global.css";
import { UserProvider } from "@/contexts/UserContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import Notification from "@/components/notification/Notification";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <UserProvider>
                    <NotificationProvider>
                        <MainLayout>{children}</MainLayout>
                    </NotificationProvider>
                </UserProvider>
            </body>
        </html>
    );
}
