class SiteController {
    // [GET] /
    index(req, res) {
        res.json({
            name: "test",
        });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
