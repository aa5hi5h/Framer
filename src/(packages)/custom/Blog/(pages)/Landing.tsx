import { Button } from "@/components/ui/button"
import BlogNavbar from "../components/Navbar"
import { Image } from "lucide-react"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"


const BlogLanding = () => {
    return (
        <div>
            <BlogNavbar />
            <div className="p-6">
            <div className="flex flex-col space-y-4 max-w-xl mx-auto mt-[4.3rem]">
                    <h1 className="text-5xl font-bold text-center tracking-tight">Discover my stories and ideas</h1>
                    <p className="text-slate-800 text-center pb-[1.1rem]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labo"</p>
                        <div className="flex justify-center gap-x-4">
                            <Button>Popular</Button>
                            <Button variant={"outline"} className="border-slate-300">Join</Button>
                        </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 mt-[4rem] p-6">
                <div className="col-span-3 flex flex-col">
                    <h2 className="my-[1.4rem] text-2xl font-bold tracking-tight">Recent Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-[40vh] w-[60vh] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="p-4 ml-[-2rem]">
                            <h4 className="text-sm hidden md:flex font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-xl font-semibold pt-[1.3rem] pb-[0.7rem]">Easiet way for React State Management</h1>
                            <h2 className="text-lg font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[40vh] w-[60vh] mt-[4rem] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="mt-[4rem] p-4 ml-[-2rem]">
                            <h4 className="text-sm font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-xl font-semibold pt-[1.3rem] pb-[0.7rem]">Second blog title</h1>
                            <h2 className="text-lg font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[40vh] mt-[4rem] w-[60vh] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="mt-[4rem] p-4 ml-[-2rem]">
                            <h4 className="text-sm font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-xl font-semibold pt-[1.3rem] pb-[0.7rem]">Third blog title</h1>
                            <h2 className="text-lg font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[40vh] mt-[4rem] w-[60vh] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="mt-[4rem] p-4 ml-[-2rem]">
                            <h4 className="text-sm font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-xl font-semibold pt-[1.3rem] pb-[0.7rem]">Fourth Blog title</h1>
                            <h2 className="text-lg font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                    </div>
                </div>
                <div className="hidden col-span-1 lg:flex ml-[4rem]">
                    <div className="flex flex-col ">
                   <h2 className="my-[1.4rem] text-2xl font-bold tracking-tight pb-[1rem]">Most Popular</h2>
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
            <SecondFooter viewMode="monitor" />
            </div>
        </div>

    )
}

export default BlogLanding