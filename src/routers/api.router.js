import { Router } from "express";
import { testRouter } from "./API/test.router.js";


export const apiRouter = Router();

apiRouter.use('/test', testRouter)