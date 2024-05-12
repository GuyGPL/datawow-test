import { useNotification } from "@/contexts/NotificationContext";
import { createConcert } from "@/services/concerts.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

export const useConcertForm = () => {
    const [concertName, setConcertName] = useState<string>("");
    const [seats, setSeats] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const { notificationSuccess, notificationError } = useNotification();
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: createConcert,
        onSuccess: () => {
            return queryClient.invalidateQueries({ queryKey: ["concerts"] });
        },
    });

    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await mutateAsync({
                name: concertName,
                seats: Number(seats),
                description,
            });
            setConcertName("");
            setSeats("");
            setDescription("");
            notificationSuccess("Create concert successfully");
        } catch (error) {
            notificationError("Error submitting concert");
        }
    };

    return { handleOnSubmit, setConcertName, setSeats, setDescription };
};
