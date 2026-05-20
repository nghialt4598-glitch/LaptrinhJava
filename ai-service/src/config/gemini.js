const { GoogleGenerativeAI } = require("@google/generative-ai");

if (!process.env.GEMINI_API_KEY) {
    console.error("❌ QUÊN CHƯA CÀI API KEY TRONG .ENV RỒI!");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = genAI;