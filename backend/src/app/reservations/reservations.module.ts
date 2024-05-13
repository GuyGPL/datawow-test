import { Module } from "@nestjs/common";
import { ReservationsService } from "./reservations.service";
import { ReservationsController } from "./reservations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReservationEntity } from "./entities/reservation.entity";
import { ReservationsRepository } from "./reservations.repository";
import { ConcertEntity } from "../concerts/entitles/concert.entity";
import { UserEntity } from "../users/entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ConcertEntity,
            ReservationEntity,
            UserEntity,
        ]),
    ],
    controllers: [ReservationsController],
    providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
