const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const app = express();
const Alarm = require("./src/model/alarm");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "oi express" });
});

// Criar
app.post("/", async (req, res) => {
  try {
    setInterval(async () => {
      const data = {
        serial: "123456789",
        type: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        checked: false,
        deviceType: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      };

      console.log("SendData", data);

      const alarm = new Alarm(data);
      await alarm.save();

      axios
        .post("http://localhost:8082/alarm", data)
        .then((response) => {
          console.log("dado enviado");
        })
        .catch((error) => {
          console.error(error);
        });
      res.status(201).json({ msg: "criado com sucesso" });
    }, 5000);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Bionic")
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(8082);
  })
  .catch((err) => console.log(err));
