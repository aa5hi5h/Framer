"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import ReactTextareaAutosize from "react-textarea-autosize"


const SearchBar = () => {
    return (
        <div className="relative selection:placeholder: w-full h-full flex flex-col space-y-2">
             <ReactTextareaAutosize minRows={1} 
                className=" p-3 rounded-md appearance-none border-[1px] border-zinc-400 focus:border-zinc-600 outline-none resize-none h-full"
                placeholder="a protfolio website to showcase my projects" />
            <Button className="max-w-max ml-auto">
                Generate
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </div>
    )
}

export default SearchBar