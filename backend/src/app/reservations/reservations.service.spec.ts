import { Test, TestingModule } from "@nestjs/testing";
import { ReservationsService } from "./reservations.service";
import { ReservationsRepository } from "./reservations.repository";
import { CreateReservationDto } from "./dto/reservation.request.dto";
import { ReservationEntity } from "./entities/reservation.entity";
import { ReservationStatusEnum } from "src/enums/reservation-status.enum";

describe("ReservationsService", () => {
    let service: ReservationsService;
    let repository: ReservationsRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ReservationsService,
                {
                    provide: ReservationsRepository,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        findByUserId: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<ReservationsService>(ReservationsService);
        repository = module.get<ReservationsRepository>(ReservationsRepository);
    });

    describe("create", () => {
        it("should create a reservation", async () => {
            const createReservationDto: CreateReservationDto = {
                userId: "a4a7581d-6d4f-4f4b-9848-11de34e27615",
                concertId: "7b5ffaa8-9f3d-4610-9668-4b05e94b2cff",
                status: ReservationStatusEnum.RESERVED,
            };
            const createdReservation = new ReservationEntity({
                ...createReservationDto,
                id: "aa0ffca4-361e-4fe9-904a-5997a09ef794",
            });
            jest.spyOn(repository, "create").mockResolvedValue(
                createdReservation
            );

            const result = await service.create(createReservationDto);

            expect(result).toEqual(createdReservation);
        });
    });

    describe("findAll", () => {
        it("should return all reservations", async () => {
            const reservations: ReservationEntity[] = [
                new ReservationEntity({ id: "1", userId: "1" }),
                new ReservationEntity({ id: "2", userId: "2" }),
            ];
            jest.spyOn(repository, "findAll").mockResolvedValue(reservations);
            // Call the service method
            const result = await service.findAll();

            // Assertions
            expect(result).toEqual(reservations);
        });
    });

    describe("findByUserId", () => {
        it("should return reservations by user ID", async () => {
            // Mock data
            const userId = "1";
            const reservations: ReservationEntity[] = [
                new ReservationEntity({ id: "1", userId }),
                new ReservationEntity({ id: "2", userId }),
            ];

            jest.spyOn(repository, "findByUserId").mockResolvedValue(
                reservations
            );

            const result = await service.findByUserId(userId);

            expect(result).toEqual(reservations);
        });
    });
});
