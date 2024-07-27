"use client"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import ReactTextareaAutosize from "react-textarea-autosize"
import { useState } from "react"
import { generateWebsiteIdea } from "@/lib/ollama"
import { useAiResponse } from "@/app/Context/AiResponseContext"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { useCustomPrompt } from "@/app/Context/CustomPromptContext"

const SearchBar = () => {

    const [prompt,setPrompt] = useState("")
    const { setAiResponse } = useAiResponse();
    const {setCustomPrompt} = useCustomPrompt();
    
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const router = useRouter()
    const {toast} = useToast()

    const handleGenerate = async () => {
        setIsLoading(true)
        try {
            console.log(prompt)
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
    
            if(!response.ok){
                toast({
                    variant:"destructive",
                    title:"Invalid Prompt",
                    description:"Please try re-entering a valid prompt "
                })
                setIsLoading(false)
                return;
            }
    
            const result = await response.json();
            const { category, customPrompt } = result;
            
            if (customPrompt) {
                setCustomPrompt(customPrompt);
                setAiResponse("other");
            } else {
                setAiResponse(category || "");
            }
    
            setTimeout(() => {
                setIsLoading(false);
                router.push("/sketch");
            }, 2000);
        } catch (error) {
            console.error("Error generating website idea:", error);
            alert(error);
        }
    };
    

    return (
        <div className="relative w-full h-full flex flex-col space-y-2">
             <ReactTextareaAutosize minRows={1} 
                onChange={(e) => setPrompt(e.target.value)}
                className=" p-3 rounded-md appearance-none border-[1px] border-zinc-400 focus:border-zinc-600 outline-none resize-none h-full"
                placeholder="a protfolio website to showcase my projects" />
            <Button disabled={isLoading} onClick={handleGenerate} className="max-w-max ml-auto">
                Generate
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> :<ChevronRight className="h-4 w-4"/> }
            </Button>
        </div>
    )
}

export default SearchBar