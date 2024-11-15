const bcrypt=require("bcrypt");
const User=require("../models/ImageGeneration.js");
module.exports.login=async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            res.send("Invalid email");
            return;
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            res.send("Invalid password");
            return;
        }

        res.render("index.ejs");
    } catch (err) {
        console.log(err);
        res.send("Error during login");
    }
}