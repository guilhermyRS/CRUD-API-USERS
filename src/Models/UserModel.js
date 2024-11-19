const db = require("../Database/Database.js");

class UserModel {
    criaUsuario(user, callback) {
        const query = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)";
        db.run(query, user, function (err) {
            callback(err, this ? this.lastID : null);
        });
    }

    obterUsuarios(callback) {
        const query = "SELECT * FROM users";
        db.all(query, [], (err, users) => {
            callback(err, users);
        });
    }
    obterUsuarioPorId(id, callback) {
        const query = "SELECT * FROM users WHERE id = ?";
        db.get(query, [id], (err, user) => {
            callback(err, user);
        });
    }

    editarUsuario(id, user, callback) {
        const query = "UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?";
        db.run(query, [user.nome, user.email, user.senha, id], function (err) {
            callback(err);
        });
    }

    deletarUsuario(id, callback) {
        const query = "DELETE FROM users WHERE id = ?";
        db.run(query, [id], function (err) {
            callback(err);
        })
    }
}

module.exports = new UserModel();