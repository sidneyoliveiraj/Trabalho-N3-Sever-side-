import { Sequelize } from "sequelize";
import db from "../Config/database.js";

const TipoVeiculo = db.define('tipo_veiculo', {
    id_tipo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING(50)
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default TipoVeiculo;
