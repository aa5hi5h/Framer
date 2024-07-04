import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"


const FirstHero = () => {
    return (
        <div className="p-6 mt-[1.3rem]">
            <div className="grid grid-cols-1 items-center md:grid-cols-2">
                <div className="p-4 ">
                    <div className="flex flex-col space-y-4 max-w-xl">
                    <h1 className="text-5xl font-bold tracking-tight">Title heading  goes here </h1>
                    <p className="text-slate-800 pb-[1.1rem]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip"</p>
                        <div className="flex gap-x-4">
                            <Button>Button</Button>
                            <Button variant={"outline"}>Button</Button>
                        </div>
                        </div>
                </div>
                <div className="p-4 ">
                    <div className="flex justify-center h-[80vh] items-center">
                        <div className="w-full h-full flex justify-center items-center bg-slate-200">
                            <Image size={42} className="opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstHero