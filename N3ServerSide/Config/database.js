import { Sequelize } from "sequelize";

        const db = new Sequelize('veiculo', 'root', '',{
            host: 'localhost',
            dialect: 'mysql'

        })

export default db