import { ReservationStatusEnum } from "src/enums/reservation-status.enum";
import { z } from "zod";

export const createReservationSchema = z.object({
    userId: z.string().uuid(),
    concertId: z.string().uuid(),
    status: z.nativeEnum(ReservationStatusEnum),
});

export type CreateReservationDto = z.infer<typeof createReservationSchema>;
