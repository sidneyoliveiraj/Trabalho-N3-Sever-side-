import { Sequelize } from "sequelize";
import db from "../Config/database.js";

const Proprietario = db.define('proprietario', {
    cpf: {
        type: Sequelize.STRING(11),
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100)
    },
    fone: {
        type: Sequelize.STRING(15)
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Proprietario;
