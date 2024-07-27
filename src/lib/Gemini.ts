import { useCustomPrompt } from '../app/Context/CustomPromptContext';
import axios from 'axios';

export const generateWebsiteIdeaGemini = async (prompt: string) => {

    try {
        console.log("Loading...")
        const response = await axios({
            url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
            method: "post",
            data: {
                contents: [
                    {parts: [{text: `Classify the following website idea into one of these categories: ecommerce, blog, lms, rental, saas, social , or other :\n\n${prompt}\n\nGive a one-word answer from these options only:`}]}
                ]
            } ,
        }
        );
        const category = response.data.candidates[0].content.parts[0].text.trim().toLowerCase();
        console.log('Category :', category)

        if (category === "other") {
            const customPrompt = await generateCustomPromptGemini(prompt);
            if(customPrompt){
                return { customPrompt , category}
            }else {
                return {category}
            }
        } else {
            return {category}
        }
    } catch (error) {
        console.error("Error generating website idea:", error);
        return null;
    }
};


const generateCustomPromptGemini = async (prompt: string) => {
    try {
        console.log("Generating custom prompt...");
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
            method: "post",
            data: {
                contents: [
                    {parts: [{text: `Generate a concise, 6-7 word title or heading based on the following prompt for a website:\n\n${prompt}\n\nProvide a single line response:`}]}
                ]
            }
        });

        const customPrompt = response.data.candidates[0].content.parts[0].text.trim();
        return customPrompt;
    } catch (error) {
        console.error("Error generating custom prompt:", error);
        return null;
    }
};