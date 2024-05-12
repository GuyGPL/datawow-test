import { ReservationEntity } from "src/reservations/entities/reservation.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm";

@Entity("concert")
export class ConcertEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ name: "name", type: "varchar", length: 250 })
    name?: string;

    @Column({ name: "description", type: "varchar", length: 500 })
    description?: string;

    @Column({ name: "total_seats", type: "smallint" })
    seats!: number;

    @OneToMany(() => ReservationEntity, (reservation) => reservation._user)
    reservations: ReservationEntity[];

    constructor(concert: Partial<ConcertEntity>) {
        Object.assign(this, concert);
    }
}
