"use client";
import MainLayout from "@/layouts/MainLayout";
import "./global.css";
import { UserProvider } from "@/contexts/UserContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    <UserProvider>
                        <NotificationProvider>
                            <MainLayout>{children}</MainLayout>
                        </NotificationProvider>
                    </UserProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
