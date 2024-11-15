const express=require("express");
const router=express.Router();



app.get("/logged", (req, res) => {
    res.render("index.ejs");
});

app.get("/main", (req, res) => {
    res.render("welcome.ejs");
});

app.post("/main", (req, res) => {
    res.send("POST request to /main handled");
});

app.get("/signup", (req, res) => {
    res.render("Signup.ejs");
});

app.post("/signup", async (req, res) => {
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
});

// app.get("/login", (req, res) => {
//     res.render("login.ejs");
// });

app.post("/login", async (req, res) => {
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
});

