import { ReactElement } from "react";
import "./CustomButton.scss";
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
            {Icon && <Icon size={24} />}
            <span>{label}</span>
        </button>
    );
}
