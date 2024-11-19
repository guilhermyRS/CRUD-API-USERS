const UserModel = require("../Models/UserModel.js");
const bcrypt = require("bcrypt");

class UserController {

    
    retornaViewUsuarios(req, res) {
        UserModel.obterUsuarios((err, users) => {
            if (err) {
                console.error("Erro ao criar usuário:", err);
                return res.status(500).send("Erro interno no servidor.");
            }
            res.render("users/listaUsuarios", {
                users
            });
        });
    }

    retornaViewCriaUsuario(req, res) {
        res.render("users/criaUsuario");
    }

    criaUsuario(req, res) {
        const {
            nome,
            email,
            senha
        } = req.body;

        UserModel.criaUsuario([nome, email, senha], (err) => {
            if (err) {
                console.error("Erro ao criar usuário:", err);
                return res.status(500).send("Erro interno no servidor.");
            }
            res.redirect("/users");
        });
    }
    retornaViewEditaUsuario(req, res) {
        const userId = req.params.id;
        UserModel.obterUsuarioPorId(userId, (err, user) => {
            if (err || !user) {
                console.error("Erro ao obter usuário:", err);
                return res.status(404).send("Usuário não encontrado.");
            }
            res.render("users/editaUsuario", { user });
        });
    }

    // Atualiza as informações de um usuário
    editaUsuario(req, res) {
        const userId = req.params.id;
        const { nome, email, senha } = req.body;
        const user = { nome, email, senha };

        UserModel.editarUsuario(userId, user, (err) => {
            if (err) {
                console.error("Erro ao editar usuário:", err);
                return res.status(500).send("Erro interno no servidor.");
            }
            res.redirect("/users");
        });
    }

    deletaUsuario(req, res) {
        const userId = req.params.id;

        UserModel.deletarUsuario(userId, (err) => {
            if(err) {
                console.error("Erro em deletar usuário:", err);
                return res.status(500).send("Erro interno do servidor");
            }
            res.redirect("/users");
        });
    }
}

module.exports = new UserController();