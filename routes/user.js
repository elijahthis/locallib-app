var express = require("express");
const app = express();
const userCon = require("../controllers/usercon");
const router = express.Router();
router.get("/login", (req, res, next) => {
  res.render("login");
});
router.get("/signup", (req, res, next) => {
  res.render("signup");
});
router.post("/signup", userCon.create_user_post);
router.post("/login", userCon.login);
module.exports = router;
