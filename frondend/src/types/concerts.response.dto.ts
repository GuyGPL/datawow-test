import { z } from "zod";

export const createConcertSchema = z.object({
    name: z.string(),
    description: z.string(),
    seats: z.number(),
});

export type CreateConcertBodyRequest = z.infer<typeof createConcertSchema>;

export const concertSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1),
    description: z.string().optional(),
    seats: z.number().positive(),
    isFull: z.boolean(),
});

export type ConcertResponse = z.infer<typeof concertSchema>;

export type ConcertsResponse = {
    concerts: ConcertResponse[];
    totalSeats: number;
    totalReservations: number;
    totalCancellations: number;
};

export type DeleteConcertsResponse = {
    affectedRows: number;
};
