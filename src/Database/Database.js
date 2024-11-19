const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbFilePath = path.join(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) console.error("Erro ao conectar ao banco de dados:", err.message);
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    )`);
});

module.exports = db;