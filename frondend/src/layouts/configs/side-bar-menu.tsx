import { ElementType } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FaInbox } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { PiUserSwitchThin } from "react-icons/pi";

export type SideMenu = {
    icon: IconType;
    label: string;
    path: string;
    adminPermission: boolean;
};

export const SETTING_SIDE_MENUS: SideMenu[] = [
    {
        icon: GoHomeFill,
        label: "Home",
        path: "/",
        adminPermission: true,
    },
    {
        icon: FaInbox,
        label: "History",
        path: "/history",
        adminPermission: true,
    },
    {
        icon: PiUserSwitchThin,
        label: "Switch to user",
        path: "/switch-role",
        adminPermission: true,
    },
    {
        icon: PiUserSwitchThin,
        label: "Switch to admin",
        path: "/switch-role",
        adminPermission: false,
    },
];
