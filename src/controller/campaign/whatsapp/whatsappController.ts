import { Request, Response } from "express";
import generalFunctions from "../../../generalFunctions/generalFunctions";
import WhatsappMessage from "../../../entity/whatsapp/whatsappMessage";



const whatsappController = {
    sendSingleMessage: async (req: Request, res: Response) => {
        try {
            const { template, mobile } = req.body;

            console.log(template, mobile);

            const message = new WhatsappMessage();
            const wab_id: string = await generalFunctions.generateWabId();
            message.wab_id = wab_id as string;
            message.template = template.name as string;
            message.mobile = mobile as string;
            message.status = 0;

            const generateUID: string = await generalFunctions.generateUID();
            message.message_id = generateUID as string;

            let response;

            //  integrate the whatsapp sending code

            try {
                response = await message.save();
                return res
                    .status(200)
                    .json({
                        success: true,
                        message: "Message Sent Successfully",
                        data: response
                    })
            } catch (err: any) {
                message.error = true;
                message.error_message = err.message;
                response = await message.save();
                return res
                    .status(400)
                    .json({
                        success: true,
                        message: "Error while sent message",
                        data: response
                    });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: err.message });
        }
    }
}

export default whatsappController;