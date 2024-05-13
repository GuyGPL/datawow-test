import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReservationEntity } from "./entities/reservation.entity";

@Injectable()
export class ReservationsRepository {
    constructor(
        @InjectRepository(ReservationEntity)
        private readonly repository: Repository<ReservationEntity>
    ) {}

    async create(
        reservationData: ReservationEntity
    ): Promise<ReservationEntity> {
        return this.repository.create(reservationData);
    }

    async findAll(): Promise<ReservationEntity[]> {
        return this.repository.find({ relations: ["_concerts", "_users"] });
    }

    async findByUserId(userId: string): Promise<ReservationEntity[]> {
        return this.repository.find({
            relations: ["_concerts", "_users"],
            where: { userId },
        });
    }
}
