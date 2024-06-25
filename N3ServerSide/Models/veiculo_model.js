import { Sequelize } from "sequelize";
import db from "../Config/database.js";
import Proprietario from "./proprietario_model.js";
import TipoVeiculo from "./tipo_veiculo_model.js";

const Veiculo = db.define('veiculo', {
    placa_veiculo: {
        type: Sequelize.STRING(10),
        primaryKey: true
    },
    modelo_veiculo: {
        type: Sequelize.STRING(100)
    },
    preco_veiculo: {
        type: Sequelize.DECIMAL(10, 2)
    },
    cpf_proprietario: {
        type: Sequelize.STRING(11),
        references: {
            model: Proprietario,
            key: 'cpf'
        }
    },
    id_tipo: {
        type: Sequelize.INTEGER,
        references: {
            model: TipoVeiculo,
            key: 'id_tipo'
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Veiculo;
