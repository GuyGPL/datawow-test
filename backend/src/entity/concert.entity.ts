import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ConcertEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({ name: "name", type: "varchar", length: 250 })
    name: string;

    @Column({ name: "description", type: "varchar", length: 500 })
    description: string;

    @Column({ name: "total_seats", type: "smallint" })
    totalSeats: number;
}
