// //working
const express = require("express");
const app = express(require);
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require('bcrypt');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const logged=require("./Routes/logged.js");
const mainRoute=require("./Routes/main.js");
const loginRoute=require("./Routes/login.js");
const signupRoute=require("./Routes/signup.js");


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/DumboAi', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connection successful");
}
const userSchema = new mongoose.Schema({
    email: String,
    password: String
}, { collection: 'imagegenerations' });

const User = mongoose.model('User', userSchema);

main().catch(err => console.log(err));

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});


app.use("/logged",logged);
app.use("/main",mainRoute);
app.use("/signup",signupRoute);
app.use("/login",loginRoute);