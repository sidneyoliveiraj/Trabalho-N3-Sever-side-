import Proprietario from "../Models/proprietario_model.js";

export const getProprietarios = async (req, res) => {
    try {
        const proprietarios = await Proprietario.findAll();
        res.json(proprietarios);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getProprietarioById = async (req, res) => {
    try {
        const proprietario = await Proprietario.findByPk(req.params.cpf);
        res.json(proprietario);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createProprietario = async (req, res) => {
    try {
        await Proprietario.create(req.body);
        res.json({ "message": "Proprietário criado com sucesso!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updateProprietario = async (req, res) => {
    try {
        await Proprietario.update(req.body, {
            where: { cpf: req.params.cpf }
        });
        res.json({ "message": "Proprietário atualizado com sucesso!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deleteProprietario = async (req, res) => {
    try {
        await Proprietario.destroy({
            where: { cpf: req.params.cpf }
        });
        res.json({ "message": "Proprietário deletado com sucesso!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};
