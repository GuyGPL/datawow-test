import { ReactElement } from "react";
import "./CustomButton.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
type CustomButtonProps = {
    isAdmin: boolean;
    isSelected: boolean;
    disabled: boolean;
    onClick: () => void;
};

export default function CustomButton({
    isAdmin,
    isSelected,
    disabled,
    onClick,
}: CustomButtonProps): ReactElement {
    if (isAdmin)
        return (
            <button className="custom-button color-red" onClick={onClick}>
                <RiDeleteBin6Line />
                <span>Delete</span>
            </button>
        );
    if (isSelected)
        return (
            <button className="custom-button color-red" onClick={onClick}>
                <span>Cancel</span>
            </button>
        );

    return (
        <button
            className="custom-button color-blue"
            onClick={onClick}
            disabled={disabled}
        >
            <span>Reserve</span>
        </button>
    );
}
