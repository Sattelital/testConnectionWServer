import express from "express";
import { PORT } from "../config/server.config.js";
import { apiRouter } from "../routers/api.router.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json())


app.use('/api', apiRouter)

const httpServer = app.listen(PORT, () => { console.log(`Conectado al servidor mediante el puerto: ${PORT}`); });