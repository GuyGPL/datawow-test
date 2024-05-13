import { Injectable } from "@nestjs/common";
import { ConcertsRepository } from "./concerts.repository";
import { CreateConcertDto } from "./dto/concert.request.dto";
import {
    ConcertsResponse,
    DeleteConcertsResponse,
} from "./dto/concert.response.dto";
import { ConcertEntity } from "./entitles/concert.entity";
import { ReservationStatusEnum } from "src/enums/reservation-status.enum";
import { ReservationEntity } from "../reservations/entities/reservation.entity";
import { DeleteResult } from "typeorm";

@Injectable()
export class ConcertsService {
    constructor(private readonly concertRepository: ConcertsRepository) {}

    async findAll(): Promise<ConcertsResponse> {
        const concerts = await this.concertRepository.findAll();

        let totalSeats = 0;
        let totalReservations = 0;
        let totalCancellations = 0;

        concerts.map((concert) => {
            totalSeats += concert.seats;
            totalReservations += concert.reservations.filter(
                (reservation) =>
                    reservation.status === ReservationStatusEnum.RESERVED
            ).length;
            totalCancellations += concert.reservations.filter(
                (reservation) =>
                    reservation.status === ReservationStatusEnum.CANCELED
            ).length;

            const latestReservations: { [userId: string]: ReservationEntity } =
                concert.reservations.reduce((latest, reservation) => {
                    const { userId, createdAt } = reservation;

                    if (
                        !latest[userId] ||
                        createdAt > latest[userId].createdAt
                    ) {
                        latest[userId] = reservation;
                    }

                    return latest;
                }, {});

            const latestReservationsCount = Object.values(
                latestReservations
            ).filter(
                (reservation) =>
                    reservation.status === ReservationStatusEnum.RESERVED
            ).length;

            concert["isFull"] = concert.seats < latestReservationsCount;
        });

        return {
            concerts: [...concerts],
            totalSeats,
            totalReservations,
            totalCancellations,
        };
    }

    async create(createItemDto: CreateConcertDto): Promise<ConcertEntity> {
        const concert = new ConcertEntity(createItemDto);
        return this.concertRepository.create(concert);
    }

    async delete(concertId: string): Promise<DeleteConcertsResponse> {
        const { affected } = await this.concertRepository.delete(concertId);
        return { affectedRows: affected };
    }
}
