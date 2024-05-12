// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ name: "first_name", type: "varchar", length: 50 })
    firstName!: string;

    @Column({ name: "last_name", type: "varchar", length: 50 })
    lastName!: string;
}