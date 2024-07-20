"use client"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ArrowBigDown, ArrowBigUp, BellDot, ChevronLeft, CircleUser, Menu, MessageSquareMore} from "lucide-react"
import FollowCard from "../components/FollowCard"
import Sidebar from "../components/Sidebar"
import  TextareaAutosize  from "react-textarea-autosize"
import { Button } from "@/components/ui/button"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"

interface TwitterNotificationProp{
    viewMode: string
}

const TwitterNotification = ({viewMode}:TwitterNotificationProp) => {

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
                <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-x-1 cursor-pointer tracking-tight"><ChevronLeft size={32} />Notifications</h2>
                <hr className="w-[65vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-600 my-[1.4rem]" />
                <div className="flex flex-col space-y-4 p-4">
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot  />
                        Someone like your recent post
                    </span>
                    <hr className="w-[60vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot />
                        someone replied to your post
                    </span>
                    <hr className="w-[60vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot />
                        Someone Followed you back
                    </span>
                    <hr className="w-[60vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot />
                        Someone like your comment
                    </span>
                    <hr className="w-[60vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                </div>
            </div>
        </div>
        <div className=" flex">
                <FollowCard />
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
             <div className="">
                <SecondNavbar viewMode="mobile" />
            </div>
        <div className="p-2">
        <div className="grid grid-cols-3">
            <div className="col-span-3 flex flex-col  mt-[1.3rem] lg:mt-[1rem] w-full">
                <h2 className="text-3xl  font-bold flex items-center gap-x-1 cursor-pointer tracking-tight"><ChevronLeft size={32} />Notifications</h2>
                <hr className="w-[60vh] ml-0  lg:ml-[-2rem]  h-[1px] border-gray-800 my-[1.4rem]" />
                <div className="flex flex-col space-y-4 p-4">
                    <span className="flex items-center text-[16px] font-semibold tracking-tight  gap-x-2">
                        <BellDot  size={20} />
                        Someone like your recent post
                    </span>
                    <hr className="w-[58vh] ml-0  lg:ml-[-2rem]  h-[1px] border-slate-300 my-[1.4rem]" />
                    <span className="flex items-center text-[16px] font-semibold tracking-tight  gap-x-2">
                        <BellDot size={20} />
                        someone replied to your post
                    </span>
                    <hr className="w-[58vh] ml-0  lg:ml-[-2rem]  h-[1px] border-slate-300 my-[1.4rem]" />
                    <span className="flex items-center text-[16px] font-semibold tracking-tight  gap-x-2">
                        <BellDot size={20} />
                        Someone Followed you back
                    </span>
                    <hr className="w-[58vh] ml-0  lg:ml-[-2rem]  h-[1px] border-slate-300 my-[1.4rem]" />
                    <span className="flex items-center text-[16px] font-semibold tracking-tight  gap-x-2">
                        <BellDot size={20} />
                        Someone like your comment
                    </span>
                    <hr className="w-[58vh] ml-0  lg:ml-[-2rem]  h-[1px] border-slate-300 my-[1.4rem]" />
                </div>
            </div>
            <div className="hidden ">
                <FollowCard />
            </div>
        </div>
    </div>
    <SecondFooter viewMode="mobile" />
    </div>
    )
}

}

export default TwitterNotification