const express = require("express");
const router = express.Router();

// 분기할 엔드포인트들
const newMnemonicRouter = require("./newmnemonic");
const newWalletRouter = require("./newwallet");

router.use("/newmnemonic", newMnemonicRouter);
router.use("/newwallet", newWalletRouter);

module.exports = router;
