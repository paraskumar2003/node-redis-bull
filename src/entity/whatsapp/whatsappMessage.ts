import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("whatsapp_message")

export default class WhatsappMessage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    wab_id!: string;

    @Column()
    template!: string;

    @Column()
    mobile!: string;

    @Column()
    message_id!: string;

    @Column()
    status!: number;

    @Column({ default: () => false })
    error!: boolean;

    @Column({ default: null, nullable: true })
    error_message!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    static async createWhatsappMessage(wab_id: string, template: string, message_id: string, status: number, mobile: string) {
        const message = new WhatsappMessage();
        message.wab_id = wab_id;
        message.template = template;
        message.message_id = message_id;
        message.status = status;
        message.mobile = mobile;
        return message.save();
    }
}