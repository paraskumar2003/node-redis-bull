import express from "express";
import whatsappRouter from "./whatsappRouter";
import smsRouter from "./smsRouter";
import mailRouter from "./mailRouter";

const campaignRouter = express.Router();

campaignRouter.use("/whatsapp", whatsappRouter);
campaignRouter.use("/mails", mailRouter);
campaignRouter.use("/sms", smsRouter);


export default campaignRouter;