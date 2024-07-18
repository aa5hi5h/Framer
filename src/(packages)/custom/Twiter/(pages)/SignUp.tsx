import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import FollowCard from "../components/FollowCard"
import Sidebar from "../components/Sidebar"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"


const TwitterSignUp = () => {
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
                <div className="col-span-3 w-full">
                    <div className="hidden w-full mx-auto mr-[4rem] lg:flex ">
                </div>
                    <ThirdSignUp viewMode="monitor" />
                </div>
                <div className="hidden col-span-1 lg:flex">
                    <FollowCard />
                </div>
            </div>
        </div>
    )
}

export default TwitterSignUp