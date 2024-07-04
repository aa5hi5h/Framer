
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Discord from "../../../../../images/discord.png"
import Google from "../../../../../images/Google.png"
import Image from "next/image"

const FirstSignUp = () => {
    return (
        <div className="max-w-lg mx-auto my-[2rem]">
            <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-center">Sign up</h1>
                <p className="text-center text-muted-foreground text-lg pt-[0.4rem] pb-[1.3rem]">" lor mipsum Neque porro quisquam est qui dolorem ipsum "</p>
                <span className="space-y-1">
                <h3 className="text-lg text-slate-800 font-medium">Name</h3>
                <Input 
                placeholder=""
                className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none focus:border-slate-500" />
                </span>
                <span className="space-y-1 pt-[0.3rem]">
                <h3 className="text-lg text-slate-800 font-medium">Email</h3>
                <Input 
                placeholder="xyz@gmail.com"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none focus:border-slate-500" />
                </span>
                <span className="space-y-1 pt-[0.3rem]">
                <h3 className="text-lg text-slate-800 font-medium">Password</h3>
                <Input 
                className="focus-visible:ring-offset-0  focus-visible:ring-0 focus:outline-none focus:border-slate-500" />
                </span>
                <Button className="">Sign up</Button>
                <Button variant={"outline"} className="flex gap-x-2 border-slate-400">
                    <Image src={Google} width={20} height={20} className="object-cover" alt="Google Image" />
                    Sign up with Google
                    </Button>
            </div>
        </div>
    )
}

export default FirstSignUp