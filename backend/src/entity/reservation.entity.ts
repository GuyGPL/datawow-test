// reservation.entity.ts

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { ConcertEntity } from "./concert.entity";

@Entity()
export class ReservationEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({ name: "user_id", type: "uuid" })
    userId!: string;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: "user_id" })
    _user: UserEntity;

    @Column({ name: "concert_id", type: "uuid" })
    concert_id!: string;

    @ManyToOne(() => ConcertEntity)
    @JoinColumn({ name: "concert_id" })
    _concert: ConcertEntity;

    @Column()
    seatCount!: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
}
