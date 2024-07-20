import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import FollowCard from "../components/FollowCard"
import Sidebar from "../components/Sidebar"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ChevronLeft, Menu } from "lucide-react"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import { Button } from "@/components/ui/button"

interface TwitterSignUpProp{
    viewMode: string
}

const TwitterSignUp = ({viewMode}:TwitterSignUpProp) => {

    if(viewMode === "monitor"){
    return (
        <div>
        <div className="p-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                <div className="hidden col-span-1 md:flex">
                    <Sidebar />
                </div>
                <div className="col-span-3 w-full ml-[6rem]">
                    <ThirdSignUp viewMode="monitor" />
                </div>
            </div>
        </div>
        <div className="mt-[-5.2rem]">
        <SecondFooter  viewMode="monitor" />
        </div>
        </div>
    )
}

if(viewMode === "mobile"){
    return (
        <div>
             <div className="col-span-3">
                    <SecondNavbar viewMode="mobile" />
                </div>
        <div className="">
            <div className="grid grid-cols-3 ">
                <div className="col-span-3 w-full">
                <div className="mt-[1.5rem]">
                <Button variant={"outline"} className="flex bg-slate-100 hover:bg-slate-200 items-center max-w-max">
                <ChevronLeft size={18} />Back
            </Button>
            </div>
                    <ThirdSignUp viewMode="mobile" />
                </div>
            </div>
        </div>
        <SecondFooter viewMode="mobile" />
        </div>
    )
}
}
export default TwitterSignUp