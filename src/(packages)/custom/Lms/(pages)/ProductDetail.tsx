import Searchbar from "@/(packages)/components/props/Searchbar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CirclePlay, Lock, Menu } from "lucide-react"
import LmsDetailCard from "../components/LmsDetailCard"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import BlogNavbar from "../../Blog/components/Navbar"


interface LmsProductDetailProp{
    viewMode: string
}


const LmsProductDetail = ({viewMode}:LmsProductDetailProp) => {

if(viewMode === "monitor"){
    return (
        <div className="grid grid-cols-7">
        <div className="col-span-1 flex">
            <div className="flex ">
            <div className="flex flex-col space-y-6 h-[90vh]  border-r-[1px] border-slate-500 sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold tracking-tight pt-[0.7rem]">Course Name</h2>
            <ul className="flex flex-col space-y-4 px-4">
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
        <div className="col-span-6  pl-[7rem] pr-[0.5rem] ">
        <div className="flex justify-between items-center px-2 pt-2 w-full ">
            <div className="w-[33%] flex">
                <Searchbar />
                </div>
                <div className=" hidden md:flex gap-x-2">
                    <Button className="" variant={"ghost"}>Become a teacher</Button>
                    <Button>Sign in</Button>
                </div>
            </div>
            <hr className="w-full  h-[1px] border-gray-700 my-[1.7rem] " />
            <div className="p-2 pb-[4rem]">
                <LmsDetailCard viewMode="monitor" />
            </div>
        </div>
        <div className="col-span-7 mt-[-58px]">
            <SecondFooter viewMode="monitor" />
            </div>
    </div>
    )
}

if(viewMode === "mobile"){
    return (
        <div className="grid grid-cols-5 p-2">
             <div className="col-span-5">
         <div className="flex pr-4">
                  <BlogNavbar viewMode="mobile" />
         </div>
        </div>
        <div className="col-span-5">
            <h2 className="text-2xl pt-[20px] font-bold tracking-tight">Course Name</h2>
        </div>
            <div className="col-span-5 px-2">
                <LmsDetailCard viewMode="mobile" />
            </div>
            <div className="col-span-5">
        <SecondFooter  viewMode="mobile" />
        </div>
        </div>
    )
}


}
export default LmsProductDetail