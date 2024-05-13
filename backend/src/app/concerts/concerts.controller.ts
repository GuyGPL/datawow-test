import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    UsePipes,
} from "@nestjs/common";
import { ConcertsService } from "./concerts.service";
import { ConcertEntity } from "src/app/concerts/entitles/concert.entity";
import {
    CreateConcertDto,
    createConcertSchema,
} from "./dto/concert.request.dto";
import { ZodValidatorPipe } from "src/validations/zod-validator.pipe";
import { ConcertsResponse } from "./dto/concert.response.dto";

@Controller("concerts")
export class ConcertsController {
    constructor(private readonly concertService: ConcertsService) {}

    @Get()
    async findAll(): Promise<ConcertsResponse> {
        return await this.concertService.findAll();
    }

    @Post()
    @UsePipes(new ZodValidatorPipe(createConcertSchema))
    async create(
        @Body() createConcertDto: CreateConcertDto
    ): Promise<ConcertEntity> {
        return await this.concertService.create(createConcertDto);
    }

    @Delete(":concertId")
    async delete(
        @Param("concertId", ParseUUIDPipe) concertId: string
    ): Promise<void> {
        return await this.concertService.delete(concertId);
    }
}
