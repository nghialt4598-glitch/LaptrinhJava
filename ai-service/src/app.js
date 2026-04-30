require("dotenv").config();

const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/aiRoutes");
const ocrRoutes = require("./routes/ocrRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROOT TEST
app.get("/", (req, res) => {
    res.send("AI Service Running 🚀");
});

// ROUTES
app.use("/api/ai", aiRoutes);
app.use("/api/ocr", ocrRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("🔥 SERVER STARTED");
    console.log(`👉 http://localhost:${PORT}`);
});