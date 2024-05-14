import { z } from "zod";

export const createConcertSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    seats: z.number().positive(),
});

export type CreateConcertBodyRequest = z.infer<typeof createConcertSchema>;
