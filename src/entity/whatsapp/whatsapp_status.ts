import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export default class whatsapp_messages extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    web_id!: string;

    @Column()
    template!: string;

    @Column()
    message_id!: string;

    @Column()
    status!: string;

    @Column()
    time!: Date;
}