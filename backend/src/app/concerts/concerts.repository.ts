import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { ConcertEntity } from "./entitles/concert.entity";

@Injectable()
export class ConcertsRepository {
    constructor(
        @InjectRepository(ConcertEntity)
        private readonly repository: Repository<ConcertEntity>
    ) {}

    async findAll(): Promise<ConcertEntity[]> {
        return this.repository.find({ relations: ["reservations"] });
    }

    async findOne(id: string): Promise<ConcertEntity | undefined> {
        return this.repository.findOne({ where: { id } });
    }

    async create(concertData: ConcertEntity): Promise<ConcertEntity> {
        return this.repository.save(concertData);
    }

    async delete(id: string): Promise<DeleteResult> {
        return this.repository.delete({ id });
    }
}
