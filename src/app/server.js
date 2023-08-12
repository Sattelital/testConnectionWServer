import express from "express";
import { PORT } from "../config/server.config.js";
import { apiRouter } from "../routers/api.router.js";
import cors from "cors";

const app = express();
app.use(cors())
    .use(express.json())
    .use('/api', apiRouter)
    .listen(PORT, () => { console.log(`Conectado al servidor mediante el puerto: ${PORT}`); });