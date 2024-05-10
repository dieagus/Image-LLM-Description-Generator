

const { GoogleGenerativeAI } = require("@google/generative-ai");

//const fs = require('fs');

//const fs = require("fs");
const API_KEY = "AIzaSyAp5tntIzgenwvwEA_HSqCsCLRA7GWBL_o";

const genAI = new GoogleGenerativeAI(API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }
  
export const runModel = async( prompt ) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  
    /*
    const imageParts = [
      fileToGenerativePart("image1.png", "image/png"),
      fileToGenerativePart("image2.jpeg", "image/jpeg"),
    ];
    */

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}


  
  