import { NextApiRequest, NextApiResponse } from 'next';
import Ollama from 'ollama';

const generateWebsiteIdea = async (prompt: string) => {
    try {
        const output = await Ollama.generate({
            model: "llama2",
            prompt: prompt,
        });
        return output;
    } catch (error) {
        console.error("Error generating website idea:", error);
        return null;
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    try {
        const { prompt } = req.body;
        console.log(prompt)
        if (!prompt) {
            res.status(400).json({ message: 'Prompt is required' });
            return;
        }

        const response = await generateWebsiteIdea(prompt);
        console.log(response)
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
