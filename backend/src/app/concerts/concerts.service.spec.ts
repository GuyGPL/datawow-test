import { Test, TestingModule } from "@nestjs/testing";
import { ConcertsService } from "./concerts.service";
import { CreateConcertBodyRequest } from "./dto/concert.request.dto";
import { ConcertEntity } from "./entitles/concert.entity";
import { ConcertsRepository } from "./concerts.repository";
import { ReservationStatusEnum } from "src/enums/reservation-status.enum";
import { DeleteResult } from "typeorm";

describe("ConcertsService", () => {
    let service: ConcertsService;
    let repository: ConcertsRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ConcertsService,
                {
                    provide: ConcertsRepository,
                    useValue: {
                        findAll: jest.fn(),
                        create: jest.fn(),
                        delete: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<ConcertsService>(ConcertsService);
        repository = module.get<ConcertsRepository>(ConcertsRepository);
    });

    describe("findAll", () => {
        it("should return concerts response with totalSeats, totalReservations, and totalCancellations", async () => {
            const concerts = [
                new ConcertEntity({
                    id: "befb0ee1-d02e-4e35-88d1-ed8b0c108944",
                    name: "Concert A",
                    seats: 100,
                    reservations: [
                        {
                            id: "250fa2a1-5aac-4c2e-aed3-5a5e1ed871b5",
                            concertId: "befb0ee1-d02e-4e35-88d1-ed8b0c108944",
                            userId: "69d38919-ef47-4e83-8f6f-2f9988109108",
                            status: ReservationStatusEnum.CANCELED,
                            createdAt: new Date(),
                        },
                        {
                            id: "e74f54e0-033d-443a-a28d-b77973246fbe",
                            concertId: "befb0ee1-d02e-4e35-88d1-ed8b0c108944",
                            userId: "b122bd6b-7661-4fa5-b3c6-ed6208f9a5bc",
                            status: ReservationStatusEnum.RESERVED,
                            createdAt: new Date(),
                        },
                        {
                            id: "9602f67f-6415-4563-8311-a4edbb714dad",
                            concertId: "befb0ee1-d02e-4e35-88d1-ed8b0c108944",
                            userId: "c8b21809-a9d2-49b0-adbc-842f9e2273dc",
                            status: ReservationStatusEnum.RESERVED,
                            createdAt: new Date(),
                        },
                    ],
                }),
                new ConcertEntity({
                    id: "2",
                    name: "Concert B",
                    seats: 200,
                    reservations: [],
                }),
            ];
            jest.spyOn(repository, "findAll").mockResolvedValue(concerts);

            const response = await service.findAll();

            expect(response.concerts).toEqual(concerts);
            expect(response.totalReservations).toBe(2);
            expect(response.totalCancellations).toBe(1);
            expect(response.totalSeats).toBe(300); // 100 + 200
        });
    });

    describe("create", () => {
        it("should create a concert", async () => {
            const createConcertDto: CreateConcertBodyRequest = {
                name: "New Concert",
                seats: 150,
            };
            const createdConcert = new ConcertEntity({
                ...createConcertDto,
                id: "aa0ffca4-361e-4fe9-904a-5997a09ef794",
            });
            jest.spyOn(repository, "create").mockResolvedValue(createdConcert);

            const result = await service.create(createConcertDto);

            expect(result).toEqual(createdConcert);
        });
    });

    describe("delete", () => {
        it("should delete a concert successfully", async () => {
            const deletedConcent: DeleteResult = { affected: 0, raw: "" };
            const concertId = "54188ddf-b2c1-4c69-a886-bd923af637b6";
            const affectedRows = 0;
            jest.spyOn(repository, "delete").mockResolvedValue(deletedConcent);

            const result = await service.delete(concertId);

            expect(repository.delete).toHaveBeenCalledWith(concertId);
            expect(result).toEqual({ affectedRows: affectedRows });
        });
    });
});
