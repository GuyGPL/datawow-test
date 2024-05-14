import "./CustomModal.scss";
import { MdCancel } from "react-icons/md";

type CustomModalProps = {
    visible: boolean;
    description: string;
    leftButtonLabel: string;
    rightButtonLabel: string;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
};

export default function CustomModal({
    visible,
    description,
    leftButtonLabel,
    rightButtonLabel,
    onLeftButtonClick,
    onRightButtonClick,
}: CustomModalProps) {
    if (!visible) return null;
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <MdCancel size={40} color="red" />
                </div>
                <div className="modal-content">
                    <p>Are you sure to delete?</p>
                    <p>{description}</p>
                </div>
                <div className="modal-footer">
                    <button
                        className="button button-left"
                        onClick={onLeftButtonClick}
                    >
                        {leftButtonLabel}
                    </button>
                    <button
                        className="button button-right"
                        onClick={onRightButtonClick}
                    >
                        {rightButtonLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
