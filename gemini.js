import axios from 'axios';
import { API_KEY } from './API';

// api info

const GEMINI_MODEL_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
// ?key=AIzaSyB4dsNp-vXJ9ez-LTqY7nh3_i1hlQpdPPU
// funciton querying gemini api
export const queryGeminiApi = async(prompt) => {
  try {
    const response = await axios.post(GEMINI_MODEL_URL, {
      contents: [{ 
        role: "user", 
        parts: [{ 
          text: prompt 
        }]
      }]
    }, { 
      params: {
        key: API_KEY  
      },
      headers: { 
        'Content-Type': 'application/json' 
      } 
    });
    console.log(response.text);
    return response.data; 
    
  } catch (error) {
  
    console.error("Error querying Gemini API:", error);
    return null;
  }
}
