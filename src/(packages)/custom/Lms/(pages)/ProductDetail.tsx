import Searchbar from "@/(packages)/components/props/Searchbar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CirclePlay, Lock, Menu } from "lucide-react"
import LmsDetailCard from "../components/LmsDetailCard"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"



const LmsProductDetail = () => {
    return (
        <div className="grid grid-cols-5 md:grid-cols-6 p-6">
        <div className="col-span-5 md:hidden sm:flex">
         <div className="flex md:hidden  pt-6">
                    <Sheet>
                       <SheetTrigger asChild><Menu /></SheetTrigger>
                            <SheetContent className="space-y-4" side={"left"}>
                                <SheetTitle className="text-3xl font-bold tracking-tight cursor-pointer">Course Name</SheetTitle>
                                <SheetTitle>Chapter</SheetTitle>
                                <SheetTitle>Notification</SheetTitle>
                                <SheetTitle>Profile</SheetTitle>
                                <SheetTitle>Logout</SheetTitle>
                            </SheetContent>
                        </Sheet>
         </div>
        </div>
        <div className="hidden col-span-1 md:flex">
            <div className="flex ">
            <div className="flex flex-col space-y-6 h-[88vh] px-3 border-r-[1px] border-slate-500 sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold tracking-tight pt-[0.7rem]">Course Name</h2>
            <ul className="flex flex-col space-y-4">
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Chapters</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><CirclePlay /> Introduction</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><Lock /> Objectives</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><Lock />Basics</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><Lock />Deep Dive</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><Lock />Outro</li>
            </ul>
        </div>
            </div>
        </div>
        <div className="col-span-5 ">
        <div className="flex justify-between items-center px-2 pt-2 w-full md:hidden lg:flex">
            <div className="w-[33%] hidden md:flex">
                <Searchbar />
                </div>
                <div className=" hidden md:flex gap-x-2">
                    <Button className="" variant={"ghost"}>Become a teacher</Button>
                    <Button>Sign in</Button>
                </div>
            </div>
            <hr className="w-full  h-[1px] border-gray-700 my-[1.7rem] " />
            <div className="p-6">
                <LmsDetailCard />
            </div>
            <SecondFooter viewMode="monitor" />
        </div>
    </div>
    )
}

export default LmsProductDetail