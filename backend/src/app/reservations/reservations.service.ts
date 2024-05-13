import { Injectable } from "@nestjs/common";
import { CreateReservationDto } from "./dto/reservation.request.dto";
import { ReservationEntity } from "./entities/reservation.entity";
import { ReservationsRepository } from "./reservations.repository";
import { ReservationStatusEnum } from "src/enums/reservation-status.enum";

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

    async findAll(): Promise<ReservationEntity[]> {
        return this.reservationsRepository.findAll();
    }

    async findByUserId(userId: string): Promise<ReservationEntity[]> {
        return this.reservationsRepository.findByUserId(userId);
    }
}
