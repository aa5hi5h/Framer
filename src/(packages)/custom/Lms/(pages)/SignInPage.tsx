"use client"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Searchbar from "@/(packages)/components/props/Searchbar"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import BlogNavbar from "../../Blog/components/Navbar"


interface LmsSignInProp{
    viewMode: string
}

const LmsSignIn = ({viewMode}:LmsSignInProp) => {

if(viewMode === "monitor"){
    return (
        <div className="grid grid-cols-7 p-2">
        <div className="col-span-1 flex">
            <div className="flex">
            <div className="flex flex-col space-y-6 h-[88vh] px-6 border-r-[1px] border-slate-500 sticky top-0 bg-white z-10">
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
        <div className="col-span-6 pl-[85px] pr-[0.5rem] ">
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
            <ThirdSignIn viewMode="monitor" />
        </div>
        <div className="col-span-7 mt-[-58px]">
            <SecondFooter viewMode="monitor" />
            </div>
    </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="grid grid-cols-5">
             <div className="col-span-5">
         <div className="flex pr-4">
                  <BlogNavbar viewMode="mobile" />
         </div>
        </div>
        <div className="col-span-5">
            <ThirdSignIn viewMode="mobile" />
        </div>
        <div className="col-span-5">
            <SecondFooter viewMode="mobile" />
        </div>
    </div>
    )
}

}
export default LmsSignIn