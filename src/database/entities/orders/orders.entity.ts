import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Timestamps } from "../inheritance";
import { UsersEntity } from "../users";

@Entity('orders')
export class Orders extends Timestamps {

    @PrimaryGeneratedColumn('uuid')
    ordersId: string;

    @Column()
    nameProduct: string;

    @Column()
    price: string

    @Column()
    amount: number 

    @Column()
    brand: string;

    @ManyToOne(type => UsersEntity, user => user.orders)
    users: UsersEntity
}

