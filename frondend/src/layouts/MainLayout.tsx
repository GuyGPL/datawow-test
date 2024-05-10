// MainLayout.tsx
import { ReactElement, ReactNode, useState } from "react";
import "./MainLayout.scss";
import { useRouter } from "next/navigation";
import { SETTING_SIDE_MENUS, SideMenu } from "./configs/side-bar-menu";
import { useRole } from "@/contexts/UserContext";
import { IoIosLogOut } from "react-icons/io";

type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({
    children,
}: MainLayoutProps): ReactElement {
    const router = useRouter();
    const { isAdmin, setIsAdmin, displayRole } = useRole();

    const handleMenuItemClick = (path: string) => {
        if (path === "/switch-role") {
            setIsAdmin(!isAdmin);
            router.push("/");
        } else {
            router.push(path);
        }
    };

    return (
        <div className="main-layout">
            <div className="sidebar">
                <div className="title">
                    {displayRole.charAt(0).toUpperCase() + displayRole.slice(1)}
                </div>
                {SETTING_SIDE_MENUS.map(
                    (
                        { icon, label, path, adminPermission }: SideMenu,
                        index: number
                    ) => {
                        const Icon = icon;
                        return (
                            isAdmin === adminPermission && (
                                <div
                                    key={index}
                                    className="menu"
                                    onClick={() => handleMenuItemClick(path)}
                                >
                                    <Icon size={24} />
                                    <span>{label}</span>
                                </div>
                            )
                        );
                    }
                )}
                <div className="menu footer">
                    <IoIosLogOut size={24} />
                    <span>Log out</span>
                </div>
            </div>
            <div className="content">{children}</div>
        </div>
    );
}
