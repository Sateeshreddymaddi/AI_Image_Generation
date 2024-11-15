const Generator=require("../models/ImageGeneration");
const bcrypt = require('bcrypt');
module.exports.signup=(req, res) => {
    res.render("Signup.ejs");
}

module.exports.verification=async (req, res) => {
    const { email, userName, password, confirmPassword } = req.body;

    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    if (password !== confirmPassword || password.length < 8 || !isValidEmail(email)) {
        res.send("Invalid password or email");
        return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new Generator({
        email: email,
        userName: userName,
        password: hashedPassword
    });

    try {
        await newUser.save();
        console.log("User saved successfully:", newUser);
        res.redirect("/main");
    } catch (err) {
        console.log(err);
        res.send("Error saving user");
    }
}