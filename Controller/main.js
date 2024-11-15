module.exports.welcome= (req, res) => {
    res.render("welcome.ejs");
};

module.exports.postreq= (req, res) => {
    res.send("POST request to /main handled");
};