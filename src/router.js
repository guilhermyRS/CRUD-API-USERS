const router = require("express").Router();
const HomeController = require("./Controllers/HomeController.js");
const UserController = require("./Controllers/UserController.js");

//Rota Home
router.get("/", HomeController.retornaViewHome);

/**
 * Rotas de Usuários
 */
router.get("/users", UserController.retornaViewUsuarios);
router.get("/user/view", UserController.retornaViewCriaUsuario);
router.post("/user/add", UserController.criaUsuario);
router.get("/user/edit/:id", UserController.retornaViewEditaUsuario); 
router.post("/user/edit/:id", UserController.editaUsuario);

router.post("/user/delete/:id", UserController.deletaUsuario);

// Exibir a tela de login
router.get("/login", UserController.retornaViewLogin);
// Processar login
router.post("/login", UserController.validaUsuario);

// Exibir a tela de registro
router.get("/register", UserController.retornaViewRegistro);
// Processar registro
router.post("/register", UserController.criaUsuario);



module.exports = router;