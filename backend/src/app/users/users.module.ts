import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { ReservationEntity } from "src/app/reservations/entities/reservation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, ReservationEntity])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
