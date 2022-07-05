import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Timestamps } from "../inheritance";
import { Orders } from "../orders/orders.entity";

@Entity('users_project_end')
export class UsersEntity extends Timestamps {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    lastnames: string;

    @Column()
    age: number;

    @Column({ type: 'bigint', nullable: true })
    phone: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    photos: string

    @Column({ nullable: true, default: false })
    state: boolean;

    @OneToMany(type => Orders, orders => orders.users)
    orders: Orders;
}