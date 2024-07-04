import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

const ThirdHero = () => {
    return (
        <div className="w-full h-[100vh] p-6 sm:p-0  bg-zinc-500 relative">
            <div className="absolute inset-0 flex justify-center items-center">
                <Image size={100} className="opacity-20 text-slate-700" />
            </div>
            <div className=" flex flex-col z-10 space-y-4 max-w-2xl mx-auto pt-[13rem]">
                <h1 className="text-5xl font-bold tracking-tight text-center text-white">Title heading of the website goes here</h1>
                <p className="text-slate-200 pb-[1.1rem] text-center pt-[0.2rem]  bg-opacity-70">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip"</p>
                <div className="flex gap-x-4 mx-auto">
                    <Button>Button</Button>
                    <Button className="border-slate-300" variant={"outline"}>Button</Button>
                </div>
            </div>
        </div>
    );
};

export default ThirdHero;
