import express from "express";
import authRouter from "./auth";
import campaignRouter from "./campaigns/campaign";


const router = express.Router();
router.use("/auth", authRouter);
router.use("/campaign", campaignRouter);
/**
  * @swagger
  * /:
  *   get:
  *     description: Returns the homepage
  *     responses:
  *       200:
  *         description: This is the most advance node server
  */



export default router;