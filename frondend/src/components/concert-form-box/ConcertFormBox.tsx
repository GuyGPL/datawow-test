import { FormEvent, ReactElement, useState } from "react";
import "./ConcertFormBox.scss";
import { IoPersonOutline } from "react-icons/io5";
import CustomButton from "../custom-button/CustomButton";
import { FaMusic } from "react-icons/fa";
import { useConcertForm } from "@/hooks/useConcertForm";

export default function ConcertFormBox(): ReactElement {
    const { setConcertName, setSeats, setDescription } = useConcertForm();

    return (
        <form className="concert-form-box-container" onSubmit={undefined}>
            <div className="title">Create</div>
            <div className="line"></div>
            <div className="concert-form">
                <div className="form-input">
                    <div className="form-label">Concert Name</div>
                    <input
                        type="text"
                        name="concertName"
                        className="form-input"
                        onChange={(e) => setConcertName(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <div className="form-label">Total of seat</div>
                    <div className="input-with-icon">
                        <input
                            type="number"
                            name="totalSeats"
                            className="form-input"
                            onChange={(e) => setSeats(e.target.value)}
                        />
                        <FaMusic className="input-icon" />
                    </div>
                </div>
                <div className="form-input">
                    <div className="form-label">Description</div>
                    <textarea
                        className="form-textarea"
                        rows={5}
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div></div>
            <button type="submit">Save</button>
        </form>
    );
}
