"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone } from "lucide-react"
import ReactTextareaAutosize from "react-textarea-autosize"


const SecondContact = () => {
    return (
        <div className="px-6 py-3 mt-[2rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="col-span-1 md:mt-[4.5rem]  p-4 ">
            <h1 className=" text-5xl font-semibold mb-2">Contact Us</h1>
            <p className=" text-lg text-muted-foreground mb-8">lore mipsum Neque porro quisquam est qui dolorem  quia dolor</p>
            <div className="mt-[2.5rem] space-y-6">
                <span className="flex gap-x-2">
                    <Mail />
                    <h2>Comapany@gmail.com</h2>
                </span>
                <span className="flex gap-x-2">
                    <Phone />
                    <h2> +91 555-555-5555</h2>
                </span>
                <span className="flex gap-x-2">
                    <MapPin />
                    <h2>Office Location</h2>
                </span>
            </div>
            </div>
            <div className="col-span-1 mt-[2rem] md:mt-[0] ">
            <h2 className="text-xl font-medium ">Name</h2>
                <Input className="focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 bg-slate-100 focus:bg-white" />
                <h2 className="text-xl mt-4 font-medium">Email</h2>
                <Input className=" focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 bg-slate-100 focus:bg-white" />
                <h2 className="text-xl mt-4 font-medium">Message</h2>
                <ReactTextareaAutosize minRows={7} className="appearance-none w-full resize-none p-2 focus-visible:ring-offset-0 focus-visible:ring-0 mt-2 bg-slate-100 focus:bg-white" />
                <div className="mt-[2rem]">
                    <Button>Submit</Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SecondContact