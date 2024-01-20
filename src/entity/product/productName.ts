import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: "product_list" })

export default class ProductName extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    amount!: number;

    @Column()
    ratings!: number;

    @Column()
    category!: number;

    static async createProduct(name: string, amount: number, ratings: number, category: number) {
        const product = new ProductName();
        product.name = name;
        product.amount = amount;
        product.ratings = ratings;
        product.category = category;
        const response = product.save();
        console.log({ response });
        return response;
    }
}
