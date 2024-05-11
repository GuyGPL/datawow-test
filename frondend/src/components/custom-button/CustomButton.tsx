import { ReactElement } from "react";
import "./CustomButton.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSaveOutline } from "react-icons/io5";
import { IconType } from "react-icons";
type CustomButtonProps = {
    icon: IconType | null;
    label: string;
    buttonColor: string;
    disabled: boolean;
    onClick: () => void;
};

export default function CustomButton({
    icon,
    label,
    buttonColor,
    disabled,
    onClick,
}: CustomButtonProps): ReactElement {
    const Icon = icon;

    return (
        <button
            className={`custom-button color-${buttonColor}`}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <Icon />}
            <span>{label}</span>
        </button>
    );
}
