"use client"
import Searchbar from "@/(packages)/components/props/Searchbar"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"


const LmsSignIn = () => {
    return (
        <div className="grid grid-cols-5 md:grid-cols-6 p-6">
        <div className="col-span-5 md:hidden sm:flex">
         <div className="flex md:hidden  pt-6">
                    <Sheet>
                       <SheetTrigger asChild><Menu /></SheetTrigger>
                            <SheetContent className="space-y-4" side={"left"}>
                                <SheetTitle className="text-3xl font-bold tracking-tight cursor-pointer">Logo</SheetTitle>
                                <SheetTitle>Home</SheetTitle>
                                <SheetTitle>Notification</SheetTitle>
                                <SheetTitle>Profile</SheetTitle>
                                <SheetTitle>Logout</SheetTitle>
                            </SheetContent>
                        </Sheet>
         </div>
        </div>
        <div className="hidden col-span-1 md:flex">
            <div className="flex">
            <div className="flex flex-col space-y-6 h-[88vh] px-6 border-r-[1px] border-slate-500">
            <h2 className="text-4xl font-bold tracking-tight px-4">Logo</h2>
            <ul className="flex flex-col space-y-4">
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Home</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Browse</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Purchased</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Dashboard</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Logout</li>
            </ul>
        </div>
            </div>
        </div>
        <div className="col-span-5 ">
        <div className="flex justify-between items-center px-2 w-full md:hidden lg:flex">
            <div className="w-[33%] hidden md:flex">
                <Searchbar />
                </div>
                <div className=" hidden md:flex gap-x-2">
                    <Button className="" variant={"ghost"}>Become a teacher</Button>
                    <Button>Sign in</Button>
                </div>
            </div>
            <hr className="w-full  h-[1px] border-gray-700 my-[1.7rem] " />
            <ThirdSignUp />
        </div>
    </div>
    )
}


export default LmsSignIn