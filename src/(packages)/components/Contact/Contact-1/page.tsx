"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import ReactTextareaAutosize from "react-textarea-autosize"

const FirstContact = () => {
    return (
        <div className="max-w-3xl mx-auto p-3">
            <div className="flex w-full flex-col">
                <h1 className="text-center text-4xl font-semibold mb-4">Contact Us</h1>
                <p className="text-center text-lg text-muted-foreground mb-8">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                <div className="flex flex-col w-[80%] justify-center mx-auto">
                <h2 className="text-xl font-medium ">Name</h2>
                <Input className="focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 bg-slate-100 focus:bg-white" />
                <h2 className="text-xl mt-4 font-medium">Email</h2>
                <Input className=" focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 bg-slate-100 focus:bg-white" />
                <h2 className="text-xl mt-4 font-medium">Message</h2>
                <ReactTextareaAutosize minRows={7}
                placeholder="Type your message..." 
                className="appearance-none resize-none p-2 focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 bg-slate-100 focus:bg-white" />
                <div className="flex items-center space-x-2 mt-2">
                    <Checkbox />
                    <h3>I agree to the terms and condition</h3>
                </div>
                <Button className="my-[3rem]">Submit</Button>
            </div>
        </div>
        </div>
    )
}

export default FirstContact