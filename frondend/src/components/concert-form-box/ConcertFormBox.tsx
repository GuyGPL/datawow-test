import { ReactElement } from "react";
import "./ConcertFormBox.scss";
import CustomButton from "../custom-button/CustomButton";
import { useConcertForm } from "@/hooks/useConcertForm";
import { LiaSave } from "react-icons/lia";
import { GoPerson } from "react-icons/go";

export default function ConcertFormBox(): ReactElement {
    const { setConcertName, setSeats, setDescription } = useConcertForm();

    return (
        <form className="concert-form-box-container">
            <div className="title">Create</div>
            <div className="line" />
            <div className="concert-form">
                <div className="input-container">
                    <div className="form-label">Concert Name</div>
                    <input
                        type="text"
                        name="concertName"
                        className="form-input"
                        placeholder="Please input concert name"
                        onChange={(e) => setConcertName(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <div className="form-label">Total of seat</div>
                    <div className="input-with-icon">
                        <input
                            type="number"
                            name="totalSeats"
                            className="form-input"
                            placeholder="Please input total of seat"
                            onChange={(e) => setSeats(e.target.value)}
                        />
                        <GoPerson size={24} className="input-icon" />
                    </div>
                </div>
                <div className="input-container">
                    <div className="form-label">Description</div>
                    <textarea
                        className="form-textarea"
                        rows={5}
                        name="description"
                        placeholder="Please input description"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="form-button">
                <CustomButton
                    icon={LiaSave}
                    label="Save"
                    buttonColor="blue"
                    disabled={false}
                    onClick={() => undefined}
                />
            </div>
        </form>
    );
}
