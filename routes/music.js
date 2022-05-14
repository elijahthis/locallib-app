var express=require("express");
var filesCon=require("../controllers/musicCon");
var router=express.Router();
router.get("/", filesCon.getfiles);
module.exports=router;






