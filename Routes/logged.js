const express=require("express");
const router=express.Router();
const bcrypt = require('bcrypt');
const logged=require("../Controller/logged");

router.get("/",logged.loggged);

module.exports=router;