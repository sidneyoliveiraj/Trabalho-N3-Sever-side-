import express from "express";
import cors from "cors";
import db from "./Config/database.js";
import dotenv from 'dotenv'; 
import proprietarioRoutes from "./Routes/proprietario_routes.js";
import veiculoRoutes from "./Routes/veiculo_routes.js";
import authRoutes from "./Routes/auth_routes.js";

dotenv.config(); 

const server = express();
server.use(express.json());
server.use(cors());

try {
  await db.authenticate();
  console.log("Conexão com o MySQL estabelecida");
} catch (e) {
  console.log("Conexão com o MySQL não estabelecida", e);
}

server.use(authRoutes); 
server.use(proprietarioRoutes);
server.use(veiculoRoutes);

server.listen(5000, () => console.log("Servidor executando em http://localhost:5000"));
