import { ReactElement } from "react";
import "./ConcertInfoBox.scss";
import { IoPersonOutline } from "react-icons/io5";
import CustomButton from "../custom-button/CustomButton";
import { useRole } from "@/contexts/UserContext";
import { RiDeleteBin6Line } from "react-icons/ri";

type ConcertInfoBoxProps = {
    title: string;
    description?: string;
    totalSeats: number;
    isSelected: boolean;
    disabled: boolean;
    handleOnClick: () => void;
};

const BUTTON_MAPPER = {
    Delete: {
        icon: RiDeleteBin6Line,
        label: "Delete",
        color: "red",
    },
    Cancel: {
        icon: null,
        label: "Cancel",
        color: "red",
    },
    Reserve: {
        icon: null,
        label: "Reserve",
        color: "blue",
    },
};

export default function ConcertInfoBox({
    title,
    description,
    totalSeats,
    isSelected,
    disabled,
    handleOnClick,
}: ConcertInfoBoxProps): ReactElement {
    const { isAdmin } = useRole();

    const formattedSeat = Number(totalSeats).toLocaleString("en-US");

    const button = isAdmin
        ? BUTTON_MAPPER.Delete
        : isSelected
        ? BUTTON_MAPPER.Cancel
        : BUTTON_MAPPER.Reserve;

    return (
        <div className="concert-info-box-container">
            <div className="title" onClick={handleOnClick}>
                {title}
            </div>
            <div className="line" />
            <div className="description">{description ?? "-"}</div>
            <div className="concert-footer">
                <div className="seats">
                    <IoPersonOutline />
                    <span>{formattedSeat}</span>
                </div>
                <CustomButton
                    icon={button?.icon}
                    label={button.label}
                    buttonColor={button.color}
                    disabled={disabled}
                    onClick={handleOnClick}
                />
            </div>
        </div>
    );
}
