import express from "express";
import {
    getVeiculos,
    getVeiculoById,
    createVeiculo,
    updateVeiculo,
    deleteVeiculo,
    getVeiculosByProprietario,
    getVeiculosByTipo
} from "../Controllers/veiculo_controller.js";
import { verifyToken } from "../Controllers/auth_controller.js";

const router = express.Router();

router.get('/veiculos', getVeiculos);
router.get('/veiculos/:placa_veiculo', getVeiculoById);
router.post('/veiculos', verifyToken, createVeiculo); // Rota protegida
router.put('/veiculos/:placa_veiculo', verifyToken, updateVeiculo); // Rota protegida
router.delete('/veiculos/:placa_veiculo', verifyToken, deleteVeiculo); // Rota protegida
router.get('/veiculos/proprietario/:cpf_proprietario', getVeiculosByProprietario);
router.get('/veiculos/tipo/:id_tipo', getVeiculosByTipo);

export default router;
