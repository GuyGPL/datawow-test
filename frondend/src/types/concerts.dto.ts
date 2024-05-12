import { z } from "zod";

export type ConcertSummaryResponse = {
    totalSeats: number;
    totalReservation: number;
    totalCancelation: number;
};

export type ConcertListResponse = [
    {
        id: string;
        name: string;
        description: string;
        seats: number;
        reserved: number;
    }
];

export const concertSchema = z.object({
    name: z.string(),
    description: z.string(),
    seats: z.number(),
});

export type CreateConcertBodyRequest = z.infer<typeof concertSchema>;
