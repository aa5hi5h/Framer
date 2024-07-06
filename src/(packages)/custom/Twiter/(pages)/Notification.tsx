"use client"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ArrowBigDown, ArrowBigUp, BellDot, ChevronLeft, CircleUser, Menu, MessageSquareMore} from "lucide-react"
import FollowCard from "../components/FollowCard"
import Sidebar from "../components/Sidebar"
import  TextareaAutosize  from "react-textarea-autosize"
import { Button } from "@/components/ui/button"

const TwitterNotification = () => {
    return (
        <div className="p-6">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        <div className="md:hidden col-span-3">
            <div className="flex md:hidden mr-8">
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
                <Sidebar />
            </div>
            <div className="col-span-3 flex flex-col  mt-[1.3rem] lg:mt-[1rem] w-full">
                <h2 className="text-2xl md:text-4xl font-bold flex items-center gap-x-1 cursor-pointer tracking-tight"><ChevronLeft size={32} />Notifications</h2>
                <hr className="w-full ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                <div className="flex flex-col space-y-4 p-4">
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot  />
                        Someone like your recent post
                    </span>
                    <hr className="w-full ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot />
                        someone replied to your post
                    </span>
                    <hr className="w-full ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot />
                        Someone Followed you back
                    </span>
                    <hr className="w-full ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                    <span className="flex items-center text-lg font-semibold tracking-tight  gap-x-2">
                        <BellDot />
                        Someone like your comment
                    </span>
                    <hr className="w-full ml-0  lg:ml-[-2rem]  h-[1px] border-gray-300 my-[1.4rem]" />
                </div>
            </div>
            <div className="hidden col-span-1 lg:flex">
                <FollowCard />
            </div>
        </div>
    </div>
    )
}

export default TwitterNotification