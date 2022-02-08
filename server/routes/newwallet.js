const router = require("express").Router();
const controller = require("./../controllers");

// post
router.post("/", controller.newwallet.post);

module.exports = router;
