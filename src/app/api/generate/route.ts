import { NextApiRequest, NextApiResponse } from 'next';
import { generateWebsiteIdeaGemini } from '../../../lib/Gemini';
import { useCustomPrompt } from '@/app/Context/CustomPromptContext';


export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();
        if (!prompt) {
            return new Response("Prompt is required", { status: 400 });
        }


        const response = await generateWebsiteIdeaGemini(prompt);

        return new Response(JSON.stringify(response), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal server error", { status: 500 });
    }
}
