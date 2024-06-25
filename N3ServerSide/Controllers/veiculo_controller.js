import Veiculo from "../Models/veiculo_model.js";
import TipoVeiculo from "../Models/tipo_veiculo_model.js";

export const getVeiculos = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        res.json(veiculos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getVeiculoById = async (req, res) => {
    try {
        const veiculo = await Veiculo.findByPk(req.params.placa_veiculo);
        res.json(veiculo);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createVeiculo = async (req, res) => {
    try {
        const { preco_veiculo } = req.body;
        let id_tipo;

        if (preco_veiculo < 45000) {
            id_tipo = 1; 
        } else if (preco_veiculo >= 45000 && preco_veiculo < 90000) {
            id_tipo = 2; 
        } else {
            id_tipo = 3; 
        }

        await Veiculo.create({ ...req.body, id_tipo });
        res.json({ "message": "Veículo criado com sucesso!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updateVeiculo = async (req, res) => {
    try {
        const { preco_veiculo } = req.body;
        let id_tipo;

        if (preco_veiculo < 45000) {
            id_tipo = 1; 
        } else if (preco_veiculo >= 45000 && preco_veiculo < 90000) {
            id_tipo = 2; 
        } else {
            id_tipo = 3; 
        }

        await Veiculo.update({ ...req.body, id_tipo }, {
            where: { placa_veiculo: req.params.placa_veiculo }
        });
        res.json({ "message": "Veículo atualizado com sucesso!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deleteVeiculo = async (req, res) => {
    try {
        await Veiculo.destroy({
            where: { placa_veiculo: req.params.placa_veiculo }
        });
        res.json({ "message": "Veículo deletado com sucesso!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getVeiculosByProprietario = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll({
            where: { cpf_proprietario: req.params.cpf_proprietario }
        });
        res.json(veiculos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getVeiculosByTipo = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll({
            where: { id_tipo: req.params.id_tipo }
        });
        res.json(veiculos);
    } catch (error) {
        res.json({ message: error.message });
    }
};
