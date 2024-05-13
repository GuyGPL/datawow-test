import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
} from "@nestjs/common";
import { ReservationsService } from "./reservations.service";
import {
    CreateReservationDto,
    createReservationSchema,
} from "./dto/reservation.request.dto";
import { ZodValidatorPipe } from "src/validations/zod-validator.pipe";
import { ReservationEntity } from "./entities/reservation.entity";

@Controller("reservations")
export class ReservationsController {
    constructor(private readonly reservationsService: ReservationsService) {}

    @Post()
    @UsePipes(new ZodValidatorPipe(createReservationSchema))
    async create(
        @Body() createReservationDto: CreateReservationDto
    ): Promise<ReservationEntity> {
        return await this.reservationsService.create(createReservationDto);
    }

    @Get()
    async findAll(): Promise<ReservationEntity[]> {
        return this.reservationsService.findAll();
    }

    @Get("/users/:userId")
    async findByUserId(
        @Param("userId") userId: string
    ): Promise<ReservationEntity[]> {
        return this.reservationsService.findByUserId(userId);
    }
}
