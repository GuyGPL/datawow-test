import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConcertEntity } from "src/concerts/entitles/concert.entity";
import { DeleteResult, EntityRepository, Repository } from "typeorm";

@Injectable()
export class ConcertsRepository {
    constructor(
        @InjectRepository(ConcertEntity)
        private readonly repository: Repository<ConcertEntity>
    ) {}

    async findAll(): Promise<ConcertEntity[]> {
        return this.repository.find({ relations: ["reservations"] });
    }

    async findSummary(): Promise<unknown> {
        return;
    }

    async findOne(id: string): Promise<ConcertEntity | undefined> {
        return this.repository.findOne({ where: { id } });
    }

    async create(concertData: ConcertEntity): Promise<ConcertEntity> {
        return this.repository.save(concertData);
    }

    async delete(id: string): Promise<void> {
        this.repository.delete({ id });
    }
}
