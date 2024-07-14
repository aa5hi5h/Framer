import axios from 'axios';

export const generateWebsiteIdeaGemini = async (prompt: string) => {
    try {
        console.log("Loading...")
        const response = await axios({
            url:'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDpxqWHUNVqwfOJ9t0X9DCZCLFeJHLMM_g',
            method: "post",
            data: {
                contents: [
                    {parts: [{text: `Classify the following website idea into one of these categories: ecommerce, blog, lms, rental, saas, social media, or other:\n\n${prompt}\n\nGive a one-word answer from these options only:`}]}
                ]
            } ,
        }
        );
        console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
        return response.data;
    } catch (error) {
        console.error("Error generating website idea:", error);
        return null;
    }
};
