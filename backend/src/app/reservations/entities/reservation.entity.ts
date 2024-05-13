// reservation.entity.ts

import { ConcertEntity } from "src/app/concerts/entitles/concert.entity";
import { ReservationStatusEnum } from "src/enums/reservation-status.enum";
import { UserEntity } from "src/app/users/entities/user.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from "typeorm";

@Entity("reservation")
export class ReservationEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ name: "user_id", type: "uuid" })
    userId!: string;

    @ManyToOne(() => UserEntity, { eager: true })
    @JoinColumn({ name: "user_id" })
    _user: UserEntity;

    @Column({ name: "concert_id", type: "uuid" })
    concert_id!: string;

    @ManyToOne(() => ConcertEntity, { eager: true })
    @JoinColumn({ name: "concert_id" })
    _concert: ConcertEntity;

    @Column({
        type: "enum",
        enum: ReservationStatusEnum,
    })
    status: ReservationStatusEnum;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    constructor(reservation: Partial<ReservationEntity>) {
        Object.assign(this, reservation);
    }
}
