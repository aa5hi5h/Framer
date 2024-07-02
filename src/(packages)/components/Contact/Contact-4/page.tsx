"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Image } from "lucide-react"
import ReactTextareaAutosize from "react-textarea-autosize"


const FourthContact = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[2rem]">
            <div className="col-span-1">
                <div className="w-full h-[100vh] flex justify-center items-center  bg-slate-200 mt-[1rem]">
                    <Image size={48} className="" />
                </div>
            </div>
            <div className="col-span-1 ">
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
                <Button className="my-[3rem] max-w-max">Submit</Button>
            </div>
        </div>
            </div>
        </div>
    )
}

export default FourthContact