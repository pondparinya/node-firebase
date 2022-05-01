const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const config = require("./config");
const gateways = require('./routes/factory');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json({
    message: "Services is running",
  });
});
app.use("/kpop-profile", gateways);

var port = process.env.PORT || 1323;
app.listen(port, () => console.log("App is RUNNING on PORT:" + port));
