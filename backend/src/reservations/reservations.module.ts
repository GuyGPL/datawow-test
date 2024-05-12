import { Module } from "@nestjs/common";
import { ReservationsService } from "./reservations.service";
import { ReservationsController } from "./reservations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConcertEntity } from "src/concerts/entitles/concert.entity";
import { ReservationEntity } from "./entities/reservation.entity";
import { UserEntity } from "src/users/entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ConcertEntity,
            ReservationEntity,
            UserEntity,
        ]),
    ],
    controllers: [ReservationsController],
    providers: [ReservationsService],
})
export class ReservationsModule {}
