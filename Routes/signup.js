const express=require("express");
const router=express.Router();

const Generator = require("../models/ImageGeneration");

const authenticate=require("../Controller/signup");

router.get("/",authenticate.signup );

router.post("/",authenticate.verification);


module.exports=router;
