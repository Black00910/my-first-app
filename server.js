const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 MongoDB
mongoose.connect("mongodb+srv://oybekovulugbek3_db_user:<db_password>@cluster0.prrku5i.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// 📦 Модель
const Invite = mongoose.model("Invite", {
  name1: String,
  name2: String,
  date: String,
  message: String
});

// ➕ Создать приглашение
app.post("/create", async (req, res) => {
  const invite = new Invite(req.body);
  await invite.save();
  res.json({ success: true, id: invite._id });
});

// 📥 Получить приглашение
app.get("/invite/:id", async (req, res) => {
  const invite = await Invite.findById(req.params.id);
  res.json(invite);
});

// 🚀 запуск
app.listen(3000, () => console.log("Server started"));