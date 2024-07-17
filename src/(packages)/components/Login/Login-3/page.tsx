import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Google from "../../../../../images/Google.png"
import Discord from "../../../../../images/discord.png"
import Image from "next/image"

interface ThirdSignInProp{
    viewMode: string
}

const ThirdSignIn = ({viewMode}:ThirdSignInProp) => {

    if(viewMode === "monitor"){
    return (
        <div className="max-w-lg mx-auto w-full" >
           <div className="flex flex-col space-y-4 p-6 border-[2px] my-[2.3rem] rounded-lg shadow-md border-slate-200">
            <div>
                <h2 className="text-3xl font-semibold tracking-tight">Sign in</h2>
                <p className="text-md mt-[0.2rem] text-muted-foreground">Choose your preferred sign in method</p>
                <div className="flex mt-[0.9rem] justify-between">
                    <Button variant={"outline"} className="flex gap-x-2">
                        <Image width={20} height={20} src={Google} alt="Google" />
                        Google
                    </Button>
                    <Button variant={"outline"} className="flex gap-x-2">
                        <Image width={20} height={20} src={Discord} alt="Discord" />
                        Discord
                    </Button>
                </div>
                <div className="mt-[0.9rem] flex gap-x-1 items-center justify-center">
                    <hr className="w-[29%] h-[1px] border-slate-700" />
                    <p className="text-md tracking-tight">OR CONTINUE WITH</p>
                    <hr className="w-[29%] h-[1px] border-slate-700" />
                </div>
                <div className="mt-[1rem]">
                    <h2 className="text-lg font-medium mb-[0.2rem]">Email</h2>
                    <Input />
                    <h2 className="text-lg font-medium mb-[0.2rem] mt-[0.9rem]">Password</h2>
                    <Input />
                    <Button className="my-4">Continue</Button>
                    <span className="flex gap-x-1">Don&apos;t have an account? <p className="font-semibold hover:underline  underline-offset-4">Sign up</p></span>
                </div>
            </div>
           </div>
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="max-w-lg mx-auto w-full" >
           <div className="flex flex-col space-y-4 p-6 border-[2px] my-[2.3rem] rounded-lg shadow-md border-slate-200">
            <div>
                <h2 className="text-3xl font-semibold tracking-tight">Sign in</h2>
                <p className="text-md mt-[0.2rem] text-muted-foreground">Pick one to sign in</p>
                <div className="flex mt-[0.9rem] justify-between">
                    <Button variant={"outline"} className="flex gap-x-2">
                        <Image width={20} height={20} src={Google} alt="Google" />
                        Google
                    </Button>
                    <Button variant={"outline"} className="flex gap-x-2">
                        <Image width={20} height={20} src={Discord} alt="Discord" />
                        Discord
                    </Button>
                </div>
                <div className="mt-[0.9rem] flex gap-x-1 items-center justify-center">
                    <hr className="w-[25%] h-[1px] border-slate-700" />
                    <p className="text-sm tracking-tight">OR CONTINUE WITH</p>
                    <hr className="w-[25%] h-[1px] border-slate-700" />
                </div>
                <div className="mt-[2rem]">
                    <h2 className="text-lg font-medium mb-[0.2rem]">Email</h2>
                    <Input />
                    <h2 className="text-lg font-medium mb-[0.2rem] mt-[0.9rem]">Password</h2>
                    <Input />
                    <Button className="my-4">Continue</Button>
                    <span className="flex gap-x-1">Don&apos;t have an account? <p className="font-semibold hover:underline  underline-offset-4">Sign in</p></span>
                </div>
            </div>
           </div>
        </div>
    )
}
}
export default ThirdSignIn