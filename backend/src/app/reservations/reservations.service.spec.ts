import { Test, TestingModule } from "@nestjs/testing";
import { ReservationsService } from "./reservations.service";
import { ReservationsRepository } from "./reservations.repository";
import { CreateReservationDto } from "./dto/reservation.request.dto";
import { ReservationEntity } from "./entities/reservation.entity";
import { ReservationStatusEnum } from "src/enums/reservation-status.enum";
import { UserEntity } from "../users/entities/user.entity";
import { ConcertEntity } from "../concerts/entitles/concert.entity";

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
                new ReservationEntity({
                    id: "1",
                    userId: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                    _user: new UserEntity({
                        id: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                        firstName: "john",
                        lastName: "sara",
                    }),
                    concertId: "78e1d771-7aed-4e51-9e4f-d256d135c914",
                    _concert: new ConcertEntity({ name: "concert two" }),
                }),
                new ReservationEntity({
                    id: "2",
                    userId: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                    _user: new UserEntity({
                        id: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                        firstName: "john",
                        lastName: "sara",
                    }),
                    concertId: "3dd6965f-2815-4b5a-b9e6-1d0ab1984f77",
                    _concert: new ConcertEntity({
                        name: "concert one",
                    }),
                }),
            ];
            jest.spyOn(repository, "findAll").mockResolvedValue(reservations);

            const result = await service.findAll();

            expect(result).toEqual(
                reservations.map((reservation) => ({
                    reservationId: reservation.id,
                    concertName: reservation._concert.name,
                    userFirstName: reservation._user.firstName,
                    userLastName: reservation._user.lastName,
                    createdAt: reservation.createdAt,
                    status: reservation.status,
                }))
            );
        });
    });

    describe("findByUserId", () => {
        it("should return reservations by user ID", async () => {
            const reservations: ReservationEntity[] = [
                new ReservationEntity({
                    id: "1",
                    userId: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                    _user: new UserEntity({
                        id: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                        firstName: "john",
                        lastName: "sara",
                    }),
                    concertId: "78e1d771-7aed-4e51-9e4f-d256d135c914",
                    _concert: new ConcertEntity({ name: "concert two" }),
                }),
                new ReservationEntity({
                    id: "2",
                    userId: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                    _user: new UserEntity({
                        id: "665f24eb-89c7-4cfa-ae8b-bd4649a91c43",
                        firstName: "john",
                        lastName: "sara",
                    }),
                    concertId: "3dd6965f-2815-4b5a-b9e6-1d0ab1984f77",
                    _concert: new ConcertEntity({
                        name: "concert one",
                    }),
                }),
            ];

            jest.spyOn(repository, "findByUserId").mockResolvedValue(
                reservations
            );

            const result = await service.findByUserId(
                "665f24eb-89c7-4cfa-ae8b-bd4649a91c43"
            );

            expect(result).toEqual(
                reservations.map((reservation) => ({
                    reservationId: reservation.id,
                    concertName: reservation._concert.name,
                    userFirstName: reservation._user.firstName,
                    userLastName: reservation._user.lastName,
                    createdAt: reservation.createdAt,
                    status: reservation.status,
                }))
            );
        });
    });
});
