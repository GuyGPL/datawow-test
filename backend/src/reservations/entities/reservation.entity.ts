// reservation.entity.ts

import { ConcertEntity } from "src/concerts/entitles/concert.entity";
import { UserEntity } from "src/users/entities/user.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from "typeorm";

@Entity()
export class ReservationEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

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
