import { Module } from "@nestjs/common";
import { ReservationsService } from "./reservations.service";
import { ReservationsController } from "./reservations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConcertEntity } from "src/app/concerts/entitles/concert.entity";
import { ReservationEntity } from "./entities/reservation.entity";
import { UserEntity } from "src/app/users/entities/user.entity";
import { ReservationsRepository } from "./reservations.repository";

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
