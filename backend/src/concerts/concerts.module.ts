import { Module } from "@nestjs/common";
import { ConcertsController } from "./concerts.controller";
import { ConcertsService } from "./concerts.service";
import { ConcertsRepository } from "./concerts.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConcertEntity } from "./entitles/concert.entity";
import { ReservationEntity } from "src/reservations/entities/reservation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ConcertEntity, ReservationEntity])],
    controllers: [ConcertsController],
    providers: [ConcertsService, ConcertsRepository],
})
export class ConcertsModule {}
