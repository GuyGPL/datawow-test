import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Concert } from "src/entity/concert.entity";
import { Reservation } from "src/entity/reservation.entity";
import { User } from "src/entity/user.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "myuser",
            password: "mypassword",
            database: "mydatabase",
            synchronize: true,
            entities: [],
            autoLoadEntities: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
