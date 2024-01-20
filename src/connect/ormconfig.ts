import ProductName from "../entity/product/productName";
import User from "../entity/user";
import { DataSource } from "typeorm";
import Otp from "../entity/otp";
import WhatsappMessage from "../entity/whatsapp/whatsappMessage";


export const connectTypeOrm = async () => {
    try {
        const connectDb = new DataSource({
            type: "mysql",
            host: "localhost",
            username: 'root',
            password: '12345678',
            port: 3306,
            database: 'queue_worker',
            logging: false,
            synchronize: true,
            entities: [
                User,
                WhatsappMessage,
                ProductName,
                Otp,
                "../entity/*.ts",
                "../entity/*/*.ts",
                // "./src/entity/*.ts",
            ],
        })

        const connection: any = await connectDb.initialize();
        console.log("MySql connected successfully", `${connection.options.username}@${connection.options.host}`);

        return connectDb;

        // await User.create({username:"paras",email:"email@gmail.com",mobile:"8445840329",password:"Paras&Kumar12"});

    } catch (err) {
        console.log("Error while connecting database", err.message);
        return null;
    }
}
export const saveRec = async () => {
    try {

    } catch (err) {
        return err.message;
    }
}

