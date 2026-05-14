const axios = require("axios"); // BẮT BUỘC PHẢI CÓ DÒNG NÀY

exports.askAI = async (prompt) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        const modelId = "gemini-flash-latest"; 
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;

        const response = await axios.post(url, {
            contents: [{ 
                parts: [{ 
                    text: prompt 
                }] 
            }]
        });

        if (response.data && response.data.candidates && response.data.candidates[0].content) {
            return {
                result: response.data.candidates[0].content.parts[0].text
            };
        }
        throw new Error("AI trả về dữ liệu trống");

    } catch (error) {
        const status = error.response ? error.response.status : "Local Error";
        
        if (status === 429) {
            console.error("🔥 Bạn bấm nhanh quá! Đợi khoảng 1 phút rồi thử lại nhé.");
        } else {
            console.error(`--- Lỗi AI (${status}) ---`);
            console.error(error.response ? error.response.data.error.message : error.message);
        }
        
        throw new Error(`AI_ERROR: ${status}`);
    }
};