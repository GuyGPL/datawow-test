import { ReservationStatusEnum } from "src/enums/reservation-status.enum";
import { z } from "zod";

export const createReservationSchema = z.object({
    userId: z.string().min(1),
    concertId: z.string().min(1),
    status: z.nativeEnum(ReservationStatusEnum),
});

export type CreateReservationDto = z.infer<typeof createReservationSchema>;
