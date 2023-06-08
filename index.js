const express = require("express");
const mongoose = require("mongoose");
const app = express();
const alarmRoutes = require("./src/routes/alarmRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/alarm", alarmRoutes);



app.get("/", (req, res) => {
  res.json({ msg: "uhu" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/bionicAlarms")
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(8082);
  })
  .catch((err) => console.log(err));
