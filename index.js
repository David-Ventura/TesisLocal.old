import express from "express";
import { PORT } from "./Config/config.js";
import cors from "cors";
import serverroutes from './routes/ServerRoutes.js'

console.log("Iniciado...");

const app = express();
app.use(cors());

app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
//Servidor con error
server.on('error', (error) => {
    console.error('Error al iniciar el servidor:', error);
  });


app.use(serverroutes)
