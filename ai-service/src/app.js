import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("AI Service OK 🚀");
});

app.get("/api/ai/test", (req, res) => {
  res.json({ message: "AI API OK 🚀" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/", (req, res) => {
  res.send("AI Service Root OK 🚀");
});

app.get("/", (req, res) => {
  res.send("AI Service Root OK 🚀");
});