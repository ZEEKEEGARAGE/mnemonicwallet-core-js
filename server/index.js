const express = require("express");
const indexRouter = require("./routes");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/wallet/", indexRouter);

module.exports = app.listen(port, () => {
  console.log(`🚀 Sever is working on ${port}`);
});
