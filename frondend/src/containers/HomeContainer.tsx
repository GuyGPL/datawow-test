import ConcertInfoBox from "@/components/concert-info-box/ConcertInfoBox";
import CustomModal from "@/components/custom-modal/CustomModal";
import LabelWithNumberBox from "@/components/label-with-number-box/LabelWithNumberBox";
import { ReactElement, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import ConcertFormBox from "@/components/concert-form-box/ConcertFormBox";
import { useRole } from "@/contexts/UserContext";
import { useNotification } from "@/contexts/NotificationContext";
import { MdOutlineCancel } from "react-icons/md";
import { PiMedalLight } from "react-icons/pi";
import "./HomeContainer.scss";

const MOCK_DESCRIPTION =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis massa non ligula interdum, non commodo augue imperdiet. Proin auctor.";

export default function HomeContainer(): ReactElement {
    const { isAdmin } = useRole();
    const { notificationSuccess, notificationError } = useNotification();

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedConcert, setSelectedConcert] = useState<string>("");
    const [activeTab, setActiveTab] = useState<"overview" | "create">(
        "overview"
    );

    const handleOnDelete = (concertId: string): void => {
        // TODO call api delete data

        setModalVisible(false);
        setSelectedConcert("");
        notificationSuccess("Concert deleted successfully");
    };

    const handleOnSubmit = (concertId: string, isSelected: boolean): void => {
        if (isSelected) {
            try {
                // TODO call api cancel api in useConcert
                notificationSuccess("Reservation canceled");
            } catch {
                notificationError("Something went wrong, please try again");
            }
        } else {
            try {
                // TODO call api reserve api in useConcert
                notificationSuccess("Reservation successful");
            } catch {
                notificationError("Something went wrong, please try again");
            }
        }
    };

    return isAdmin ? (
        <div>
            <div className="info-container">
                <LabelWithNumberBox
                    icon={IoPersonOutline}
                    label="Total of seats"
                    number={500}
                    bgColor="blue"
                />
                <LabelWithNumberBox
                    icon={PiMedalLight}
                    label="Reserve"
                    number={500}
                    bgColor="green"
                />
                <LabelWithNumberBox
                    icon={MdOutlineCancel}
                    label="Cancel"
                    number={500}
                    bgColor="red"
                />
            </div>
            <div className="concert-container">
                <div className="tabs">
                    <div
                        className={`tab ${
                            activeTab === "overview" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("overview")}
                    >
                        Overview
                    </div>
                    <div
                        className={`tab ${
                            activeTab === "create" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("create")}
                    >
                        Create
                    </div>
                </div>
                <div className="tabContent">
                    {activeTab === "overview" && (
                        <ConcertInfoBox
                            title="concert one"
                            description={MOCK_DESCRIPTION}
                            totalSeats={2000}
                            disabled={false}
                            handleOnClick={() => {
                                setSelectedConcert("concert one");
                                setModalVisible(true);
                            }}
                            isSelected={true}
                        />
                    )}
                    {activeTab === "create" && <ConcertFormBox />}
                </div>
            </div>
            <CustomModal
                visible={modalVisible}
                description="Concert Name 2"
                leftButtonLabel="Cancel"
                rightButtonLabel="Yes, Delete"
                onLeftButtonClick={() => {
                    setModalVisible(false);
                }}
                onRightButtonClick={() => {
                    handleOnDelete(selectedConcert);
                }}
            />
        </div>
    ) : (
        <div className="concert-list">
            <ConcertInfoBox
                title="concert one"
                description={MOCK_DESCRIPTION}
                totalSeats={2000}
                disabled={false}
                isSelected={true}
                handleOnClick={() => handleOnSubmit("click submit", true)}
            />
            <ConcertInfoBox
                title="concert one"
                description={MOCK_DESCRIPTION}
                totalSeats={2000}
                disabled={false}
                isSelected={false}
                handleOnClick={() => handleOnSubmit("click submit", false)}
            />
        </div>
    );
}
