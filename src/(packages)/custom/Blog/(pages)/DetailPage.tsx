import { ChevronLeft, CircleUser, Image, UserRound } from "lucide-react"
import BlogNavbar from "../components/Navbar"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import { Button } from "@/components/ui/button"

interface BlogDetailPageProp{
    viewMode: string
}

const BlogDetailPage = ({viewMode}:BlogDetailPageProp) => {

    if(viewMode === "monitor"){
    return (
        <div>
            <BlogNavbar viewMode="monitor" />
            <div className="p-6">
                <div className="flex flex-col">
                    <div className="grid items-center grid-cols-4">
                        <div className="col-span-2 text-3xl  font-bold tracking-tight px-4 ">Specific Blog title goes here</div>
                        <div className="col-span-2">
                        <div className="h-[40vh] w-full  mb-[1.3rem] md:mb-0  flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center px-8 mt-0 md:mt-[-3.7rem]   space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <div className="grid grid-cols-3  mt-[1.3rem] md:mt-[4rem] p-6">
                    <div className="col-span-3 flex flex-col">
                        <p className="text-lg font-medium text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                             fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                             fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                             fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <div className="mt-[2.5rem]">
                                <h2 className="text-2xl font-bold tracking-tight">Comments</h2>
                                <div className="flex flex-col">
                                <div className="flex items-center px-8 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-lg font-medium ">Comment title displays here. e.g-"Rust is cool"</h3>
                    </div>
                    <div className="flex flex-col">
                                <div className="flex items-center px-8 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-lg font-medium ">Comment title displays here. e.g-"Wow this blog was helpfull"</h3>
                    </div>
                    <div className="flex flex-col">
                                <div className="flex items-center px-8 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-lg font-medium ">Comment title displays here. e.g-"Fullstack doesnot mean F.E + B.E instead it is F.E + B.E + Devops"</h3>
                    </div>
                    <div className="flex flex-col">
                                <div className="flex items-center px-8 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-lg font-medium ">Comment title displays here. e.g-"Time to learn and integrate ai"</h3>
                    </div>
                    
                            </div>
                    </div>
                    <div className="hidden col-span-1 ml-[4rem]">
                    <div className="flex flex-col ">
                   <h2 className="mb-[1.4rem] text-2xl font-bold tracking-tight pb-[1rem]">Most Popular</h2>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Feature Blog title 1</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-sm">DD-MM-YYYY</h3>
                    </span>
                   </span>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Feature Blog title 1</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-sm">DD-MM-YYYY</h3>
                    </span>
                   </span>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Feature Blog title 1</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-sm">DD-MM-YYYY</h3>
                    </span>
                   </span>
                   </div>
                   </div>
                    </div>
                    </div>
                    </div>
                    <SecondFooter viewMode="monitor" />
                </div>
    )
}
if(viewMode === 'mobile'){
    return (
        <div>
            <BlogNavbar viewMode="mobile" />
            <div className="p-2">
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 items-center ">
                        <div className="col-span-2 mb-[0.7rem]">
                            <Button variant="outline" className="border-slate-300 mt-[1rem] mb-[2rem]">
                                <ChevronLeft size={18} />
                                Back
                                </Button>
                        <div className="h-[40vh] w-full  mb-[1.3rem] md:mb-0  flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        </div>
                    </div>
                    <h1 className="col-span-2 text-2xl pb-[0.7rem] pt-[0.3rem] font-bold tracking-tight px-4 ">Specific Blog title goes here</h1>
                    <div className="hidden items-center px-8 mt-0   space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 p-4">
                    <div className="col-span-2 flex flex-col">
                        <p className="text-[16px] font-medium text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                             fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                             fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                             fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <div className="mt-[2.2rem] ml-[-0.3rem]">
                                <h2 className="text-2xl font-bold tracking-tight">Comments</h2>
                                <div className="flex flex-col">
                                <div className="flex items-center px-4 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-[16px] font-medium ">Comment title displays here. e.g-"Rust is cool"</h3>
                    </div>
                    <div className="flex flex-col">
                                <div className="flex items-center px-4 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-[16px] font-medium ">Comment title displays here. e.g-"Wow this blog was helpfull"</h3>
                    </div>
                    <div className="flex flex-col">
                                <div className="flex items-center px-4 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-[16px] font-medium ">Comment title displays here. e.g-"Fullstack doesnot mean F.E + B.E instead it is F.E + B.E + Devops"</h3>
                    </div>
                    <div className="flex flex-col">
                                <div className="flex items-center px-4 mt-[2rem]  space-x-2">
                        <CircleUser size={28} />
                        <span className="flex flex-col items-center">
                            <h3 className="text-sm">Username</h3>
                            <h3 className="text-sm">DD-MM-YYYY</h3>
                        </span>
                    </div>
                    <h3 className="px-8 mt-[0.7rem] text-[16px] font-medium ">Comment title displays here. e.g-"Time to learn and integrate ai"</h3>
                    </div>
                    
                            </div>
                    </div>
                    <div className="hidden col-span-1 ml-[4rem]">
                    <div className="flex flex-col ">
                   <h2 className="mb-[1.4rem] text-2xl font-bold tracking-tight pb-[1rem]">Most Popular</h2>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Feature Blog title 1</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-sm">DD-MM-YYYY</h3>
                    </span>
                   </span>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Feature Blog title 1</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-sm">DD-MM-YYYY</h3>
                    </span>
                   </span>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Feature Blog title 1</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-sm">DD-MM-YYYY</h3>
                    </span>
                   </span>
                   </div>
                   </div>
                    </div>
                    </div>
                    </div>
                    <SecondFooter viewMode="mobile" />
                </div>
    )
}

}
export default BlogDetailPage