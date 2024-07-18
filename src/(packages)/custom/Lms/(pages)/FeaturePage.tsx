import Searchbar from "@/(packages)/components/props/Searchbar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import LmsMainCard from "../components/LmsMainCard"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import BlogNavbar from "../../Blog/components/Navbar"

interface LmsFeaturePageProp{
    viewMode: string
}

const LmsFeaturePage = ({viewMode}:LmsFeaturePageProp) => {

if(viewMode === "monitor"){
    return (
        <div className="grid grid-cols-7 p-4">
        <div className="col-span-1 flex">
            <div className="flex">
            <div className="flex flex-col space-y-6 h-[90vh]  border-r-[1px] border-slate-500 sticky top-0 bg-white z-10">
            <h2 className="text-4xl font-bold tracking-tight px-4">Logo</h2>
            <ul className="flex flex-col px-4 space-y-4">
                <li className="flex gap-x-2  py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Home</li>
                <li className="flex gap-x-2 py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Browse</li>
                <li className="flex gap-x-2  py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Purchased</li>
                <li className="flex gap-x-2  py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Dashboard</li>
                <li className="flex gap-x-2  py-2 hover:bg-slate-200 rounded-md text-xl font-medium">Logout</li>
            </ul>
        </div>
            </div>
        </div>
        <div className="col-span-6 p-6 ">
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
            <LmsMainCard viewMode="monitor" />
        </div>
        <div className="col-span-7 mt-[-60px]">
        <SecondFooter  viewMode="monitor" />
        </div>
    </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="grid grid-cols-5">
        <div className="col-span-5 flex">
         <div className="flex">
                  <BlogNavbar viewMode="mobile" />
         </div>
        </div>
        <div className="col-span-5">
            <h2 className="text-3xl pt-[20px] font-bold tracking-tight">Courses</h2>
        </div>
        <div className="col-span-5 ">
            <LmsMainCard viewMode="mobile" />
        </div>
        <div className="col-span-5">
        <SecondFooter  viewMode="mobile" />
        </div>
    </div>
    ) 
}
}

export default LmsFeaturePage