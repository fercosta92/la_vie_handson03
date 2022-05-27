const sequelize = require("sequelize");

const DB_NAME = "la_vie";
const DABE_USER = "lavie_user";
const DB_PASS = "handson03";
const DB_CONFIG = {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
};

let db = {};

try {
    db = new sequelize(DB_NAME, DABE_USER, DB_PASS, DB_CONFIG)
} catch (error) {
    console.error("Erro ao conectar o banco de dados:", error.message);
};

const hasConnection = async () => {
    try {
        await db.authenticate();
        console.log("Conexão realizada com sucesso!" );
    } catch (error) {
        console.error("Erro ao conectar o banco de dados:", error.message);
    }
};

Object.assign(db, { hasConnection });

module.exports = db;