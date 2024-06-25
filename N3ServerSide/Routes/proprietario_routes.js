import express from "express";
import {
    getProprietarios,
    getProprietarioById,
    createProprietario,
    updateProprietario,
    deleteProprietario
} from "../Controllers/proprietario_controller.js";

const router = express.Router();

router.get('/proprietarios', getProprietarios);
router.get('/proprietarios/:cpf', getProprietarioById);
router.post('/proprietarios', createProprietario);
router.put('/proprietarios/:cpf', updateProprietario);
router.delete('/proprietarios/:cpf', deleteProprietario);

export default router;
