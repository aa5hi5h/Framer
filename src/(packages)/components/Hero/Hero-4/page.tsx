import { Button } from "@/components/ui/button"
import { Image, Youtube } from "lucide-react"


const FourthHero = () => {
    return (
        <div className="p-6">
            <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 max-w-2xl mx-auto mt-[5.7rem]">
                    <h1 className="text-5xl font-bold tracking-tight text-center">Title heading of the website goes here </h1>
                    <p className="text-slate-800 pb-[1.1rem] text-center pt-[0.2rem]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip"</p>
                        <div className="flex gap-x-4 mx-auto">
                            <Button>Button</Button>
                            <Button className="border-slate-300" variant={"outline"}>Button</Button>
                        </div>
                        </div>
                        <div className="flex justify-center h-screen w-full pt-[2.7rem] items-center">
                        <div className="w-full h-full flex justify-center items-center bg-slate-200">
                            <Youtube size={52} className="opacity-60" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default FourthHero