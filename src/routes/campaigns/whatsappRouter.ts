import express from "express";
import whatsappController from "../../controller/campaign/whatsapp/whatsappController";

const whatsappRouter = express.Router();

whatsappRouter.post("/single", whatsappController.sendSingleMessage);

export default whatsappRouter;