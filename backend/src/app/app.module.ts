import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "src/app/database/database.module";
import { ConcertsModule } from "src/app/concerts/concerts.module";
import { ReservationsModule } from "src/app/reservations/reservations.module";
@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        ConcertsModule,
        ReservationsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
