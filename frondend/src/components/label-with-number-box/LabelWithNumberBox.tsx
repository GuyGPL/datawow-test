import { ReactElement } from "react";
import "./LabelWithNumberBox.scss";
import { IconType } from "react-icons";

type LabelWithNumberBoxProps = {
    icon: IconType;
    label: string;
    number: number;
    bgColor: string;
};

export default function LabelWithNumberBox({
    icon,
    label,
    number,
    bgColor,
}: LabelWithNumberBoxProps): ReactElement {
    const Icon = icon;

    return (
        <div className={`container color-${bgColor}`}>
            <Icon size={40} color="#ffffff" />
            <div className="text">{label}</div>
            <div className="number">{number}</div>
        </div>
    );
}
