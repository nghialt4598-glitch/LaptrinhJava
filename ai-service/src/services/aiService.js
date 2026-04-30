const genAI = require("../config/gemini");

exports.askAI = async (prompt) => {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(prompt);

    return {
        result: result.response.text()
    };
};