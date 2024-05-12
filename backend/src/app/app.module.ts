import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "src/database/database.module";
import { ConcertsModule } from "src/concerts/concerts.module";
import { ReservationsModule } from "src/reservations/reservations.module";
import { UsersModule } from "src/users/users.module";
@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        ConcertsModule,
        ReservationsModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
