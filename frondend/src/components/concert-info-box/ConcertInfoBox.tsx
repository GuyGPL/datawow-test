import { ReactElement } from "react";
import "./ConcertInfoBox.scss";
import { IoPersonOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import CustomButton from "./custom-button/CustomButton";

type ConcertInfoBoxProps = {
    title: string;
    description: string;
    buttonLabel: string;
    totalSeats: number;
    disable: boolean;
    onClick: () => void;
};

export default function ConcertInfoBox({
    title,
    description,
    buttonLabel,
    totalSeats,
    disable,
    onClick,
}: ConcertInfoBoxProps): ReactElement {
    const formattedSeat = Number(totalSeats).toLocaleString("en-US");

    return (
        <div className="concert-info-container">
            <div className="title">{title}</div>
            <div className="line" />
            <div className="description">{description}</div>
            <div className="footer">
                <div className="seats">
                    <IoPersonOutline />
                    <span>{formattedSeat}</span>
                </div>
                <CustomButton
                    isAdmin={true}
                    isSelected={false}
                    disabled={false}
                    onClick={onClick}
                />
            </div>
        </div>
    );
}
