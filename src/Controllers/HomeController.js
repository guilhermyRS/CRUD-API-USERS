class HomeController {
    retornaViewHome(req, res) {
        res.render("Index");
    }
}

module.exports = new HomeController();