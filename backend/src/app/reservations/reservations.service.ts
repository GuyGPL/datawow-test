import { Injectable } from "@nestjs/common";
import { CreateReservationDto } from "./dto/reservation.request.dto";
import { ReservationEntity } from "./entities/reservation.entity";
import { ReservationsRepository } from "./reservations.repository";
import { ReservationResponse } from "./dto/reservation.response.dto";

@Injectable()
export class ReservationsService {
    constructor(
        private readonly reservationsRepository: ReservationsRepository
    ) {}

    async create(
        createReservationDto: CreateReservationDto
    ): Promise<ReservationEntity> {
        const reservation = new ReservationEntity({
            ...createReservationDto,
        });
        return this.reservationsRepository.create(reservation);
    }

    async findAll(): Promise<ReservationResponse[]> {
        const reservations = await this.reservationsRepository.findAll();
        return this.mapReservationToResponse(reservations);
    }

    async findByUserId(userId: string): Promise<ReservationResponse[]> {
        const reservations =
            await this.reservationsRepository.findByUserId(userId);
        return this.mapReservationToResponse(reservations);
    }

    private mapReservationToResponse(
        reservations: ReservationEntity[]
    ): ReservationResponse[] {
        return reservations.map((reservation) => ({
            reservationId: reservation.id,
            concertName: reservation._concert.name,
            userFirstName: reservation._user.firstName,
            userLastName: reservation._user.lastName,
            createdAt: reservation.createdAt,
            status: reservation.status,
        }));
    }
}
