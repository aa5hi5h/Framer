"use client"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ArrowBigDown, ArrowBigUp, BellDot, ChevronLeft, CircleUser, Image, Menu, MessageSquareMore} from "lucide-react"
import FollowCard from "../components/FollowCard"
import Sidebar from "../components/Sidebar"
import  TextareaAutosize  from "react-textarea-autosize"
import { Button } from "@/components/ui/button"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"

interface TwitterProfileProp{
    viewMode: string
}

const TwitterProfile = ({viewMode}:TwitterProfileProp) => {

    if(viewMode === "monitor"){
    return (
            <div>
            <div className="p-6">
        <div className="flex gap-x-8">
            <div className="flex ml-[-1.5rem] max-w-max">
                <Sidebar />
            </div>
            <div className="col-span-3 flex flex-col mt-[1.3rem] lg:mt-[1rem] w-full">
                <Button variant={"outline"} className="flex bg-slate-100 hover:bg-slate-200 items-center max-w-max">
                    <ChevronLeft size={18} />Back
                </Button>
                <div className="col-span-3 flex flex-col  mt-[1.3rem] lg:mt-[1rem] w-full">
            <h2 className="text-2xl md:text-4xl font-bold flex items-center tracking-tight"><ChevronLeft className="hover:bg-slate-100 rounded-md p-2 w-12 h-12" />Username</h2>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-[30vh] rounded-t-md w-[85%] bg-slate-200 mt-[2rem]">
                    <Image size={28} className="opacity-80" />
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col space-y-1">
                     <h3 className="text-xl font-semibold tracking-tight">Aashish Rai</h3>
                     <h5 className="text-sm font-medium tracking-tight">@username</h5>
                     <p className="text-lg font-medium tracking-tight text-slate-600">A college student with a keen interest in web 3</p>
                     <span className="flex ml-[-1.3rem] gap-x-4">
                        <Button variant={"ghost"}>2 Following</Button>
                        <Button variant={"ghost"}>0 Followers</Button>
                     </span>
                    </div>
                    <Button className="mr-[7rem]">Edit</Button>
                </div>
                <hr className="w-[105vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-700 my-[1.4rem]" />
                <div className="flex flex-col space-y-4">
                    <span className="flex w-full gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[90vh]  my-[0.8rem]  h-[1px] border-slate-300 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[90vh] my-[0.8rem]  h-[1px] border-slate-300 " />
                        </span>
                    </span>
                    </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <div className="mt-[-5.2rem]">
            <SecondFooter viewMode="monitor" />
        </div>
    </div>
    )
}

if(viewMode === "mobile"){
    return (
        <div>
        <div className="grid grid-cols-3 p-2">
        <div className="col-span-3">
            <SecondNavbar viewMode="mobile" />
        </div>
        <div className="col-span-3 flex flex-col mt-[1.3rem] lg:mt-[1rem] w-full">
                <div className="col-span-3 flex flex-col  mt-[1.3rem] lg:mt-[1rem] w-full">
            <h2 className="text-2xl md:text-4xl font-bold flex items-center tracking-tight"><ChevronLeft className="hover:bg-slate-100 rounded-md p-2 w-12 h-12" />Username</h2>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-[30vh] rounded-t-md w-full bg-slate-200 mt-[2rem]">
                    <Image size={28} className="opacity-80" />
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col space-y-1">
                     <h3 className="text-xl font-semibold tracking-tight">Aashish Rai</h3>
                     <h5 className="text-sm font-medium tracking-tight">@username</h5>
                     <p className="text-lg font-medium tracking-tight text-slate-600">A college student with a keen interest in web 3</p>
                     <span className="flex ml-[-1.3rem] gap-x-4">
                        <Button variant={"ghost"}>2 Following</Button>
                        <Button variant={"ghost"}>0 Followers</Button>
                     </span>
                    </div>
                    <Button className="">Edit</Button>
                </div>
                <hr className="w-[60vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-700 my-[1.4rem]" />
                <div className="flex flex-col space-y-4">
                    <span className="flex w-full gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-lg font-semibold tracking-tight">Username</h3>
                            <p className="text-[16px] py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[45vh]  my-[0.8rem]  h-[1px] border-slate-300 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-lg font-semibold tracking-tight">Username</h3>
                            <p className="text-[16px] py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[45vh] my-[0.8rem]  h-[1px] border-slate-300 " />
                        </span>
                    </span>
                    </div>
            </div>
            </div>
            </div>
    </div>
    <div className="">
            <SecondFooter viewMode="mobile" />
        </div>
    </div>
    )
}

}
export default TwitterProfile