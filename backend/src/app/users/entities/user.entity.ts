import { ReservationEntity } from "src/app/reservations/entities/reservation.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "first_name", type: "varchar", length: 50 })
    firstName!: string;

    @Column({ name: "last_name", type: "varchar", length: 50 })
    lastName!: string;

    @OneToMany(() => ReservationEntity, (reservation) => reservation._user)
    reservations: ReservationEntity[];

    constructor(user: Partial<UserEntity>) {
        Object.assign(this, user);
    }
}
