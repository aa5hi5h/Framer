"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import ReactTextareaAutosize from "react-textarea-autosize"
import { useState } from "react"
import { generateWebsiteIdea } from "@/lib/ollama"
import { useAiResponse } from "@/app/Context/AiResponseContext"
import axios from "axios"
import { useRouter } from "next/navigation"
const SearchBar = () => {

    const [prompt,setPrompt] = useState("")
    const { setAiResponse } = useAiResponse();

    const router = useRouter()

    const handleGenerate = async () => {
        try {
            console.log(prompt)
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }      
    
            const result = await response.json();
            const text = result.candidates[0].content.parts[0].text
            const category = text.trim().toLowerCase();
            console.log(category)
            setAiResponse(category || "");
            router.push("/sketch");
        } catch (error) {
            console.error("Error generating website idea:", error);
            alert(error);
        }
    };
    

    return (
        <div className="relative selection:placeholder: w-full h-full flex flex-col space-y-2">
             <ReactTextareaAutosize minRows={1} 
                onChange={(e) => setPrompt(e.target.value)}
                className=" p-3 rounded-md appearance-none border-[1px] border-zinc-400 focus:border-zinc-600 outline-none resize-none h-full"
                placeholder="a protfolio website to showcase my projects" />
            <Button onClick={handleGenerate} className="max-w-max ml-auto">
                Generate
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </div>
    )
}

export default SearchBar