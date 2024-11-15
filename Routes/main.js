const express=require("express");
const router=express.Router();
const bcrypt = require('bcrypt');

const main=require("../Controller/main")
router.get("/",main.welcome);

router.post("/",main.postreq);

module.exports=router;