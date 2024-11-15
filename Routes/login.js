const express=require("express");
const router=express.Router();

const bcrypt = require('bcrypt');
const login=require("../Controller/login");


router.post("/", login.login);

module.exports=router;