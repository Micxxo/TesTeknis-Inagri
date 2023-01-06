import { Sequelize } from "sequelize";

const db = new Sequelize('multi', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;