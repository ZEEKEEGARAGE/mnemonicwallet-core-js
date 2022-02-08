const router = require("express").Router();
const controller = require("../controllers");

// Post
router.post("/", controller.newmnemonic.post);

module.exports = router;
