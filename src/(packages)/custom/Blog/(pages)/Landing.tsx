import { Button } from "@/components/ui/button"
import BlogNavbar from "../components/Navbar"
import { Image } from "lucide-react"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface BlogLandingProp{
    viewMode: string
}

const BlogLanding = ({viewMode}:BlogLandingProp) => {

    if(viewMode === "monitor"){
    return (
        <div>
            <BlogNavbar viewMode="monitor" />
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
                    <div className="grid grid-cols-2">
                        <div className="h-[35vh] w-[40vh] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="p-4 mt-[-1.1rem]">
                            <h4 className="text-sm font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-lg font-semibold pt-[1.3rem] pb-[0.7rem]">Easiet way for React State Management</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[35vh] w-[40vh] mt-[4rem] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="mt-[4rem] p-4">
                            <h4 className="text-sm font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-lg font-semibold pt-[1.3rem] pb-[0.7rem]">Second blog title</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[35vh] mt-[4rem] w-[40vh] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="mt-[4rem] p-4">
                            <h4 className="text-sm font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-lg font-semibold pt-[1.3rem] pb-[0.7rem]">Third blog title</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[35vh] mt-[4rem] w-[40vh] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="mt-[4rem] p-4 ">
                            <h4 className="text-sm font-medium tracking-tight">DD-MM-YYYY</h4>
                            <h1 className="text-lg font-semibold pt-[1.3rem] pb-[0.7rem]">Fourth Blog title</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex ml-[2rem]">
                    <div className="flex flex-col p-1">
                   <h2 className="my-[1.4rem] text-2xl font-bold tracking-tight pb-[1rem]">Most Popular</h2>
                   <span className="flex flex-col w-[30vh] hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Blog title 1</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 text-sm rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-[10px]">DD-MM-YY</h3>
                    </span>
                   </span>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Blog title 2</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 text-sm  rounded-full border-[1px] border-slate-500">Category</button>
                    <h3 className="text-[10px]">DD-MM-YY</h3>
                    </span>
                   </span>
                   <span className="flex flex-col hover:bg-slate-100 p-2 mb-[0.6rem] rounded-md">
                    <h3 className="text-lg px-4 font-semibold tracking-tight pb-[0.4rem]">Blog title 3</h3>
                    <span className="flex items-center gap-x-4 justify-between">
                    <button className="px-4 py-1 rounded-full text-sm border-[1px] border-slate-500">Category</button>
                    <h3 className="text-[10px]">DD-MM-YYYY</h3>
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
if(viewMode === "mobile"){
    return (
        <div>
            <BlogNavbar viewMode="mobile" />
            <div className="p-2">
            <div className="flex flex-col space-y-4 max-w-xl mx-auto mt-[4.3rem]">
                    <h1 className="text-3xl font-bold text-center tracking-tight">Discover my stories and ideas</h1>
                    <p className="text-slate-800 text-sm text-center pb-[1.1rem]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labo"</p>
                        <div className="flex justify-center gap-x-4">
                            <Button>Popular</Button>
                            <Button variant={"outline"} className="border-slate-300">Join</Button>
                        </div>
            </div>
            <div className="grid grid-cols-3  mt-[4rem] p-2">
                <div className="col-span-3 flex flex-col">
                    <h2 className="my-[1.4rem] text-2xl font-bold tracking-tight">Recent Posts</h2>
                    <div className="grid grid-cols-1 p-2">
                        <div className="h-[40vh] w-full col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="p-4 mt-[-1rem] ">
                            <h1 className="text-xl font-semibold pt-[1.3rem] pb-[0.7rem]">Easiet way for React State Management</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[40vh] p-2 w-full mt-[4rem] col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="p-4 mt-[-1rem] ml-[0.3rem]">
                            <h1 className="text-lg font-semibold pt-[1.3rem] pb-[0.7rem]">Second blog title</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[40vh] mt-[4rem] w-full p-2 col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className=" p-4 mt-[-1rem] ml-[0.3rem]">
                            <h1 className="text-lg font-semibold pt-[1.3rem] pb-[0.7rem]">Third blog title</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                        <div className="h-[40vh] mt-[4rem] p-2 w-full col-span-1 flex justify-center bg-slate-200 items-center">
                            <Image />
                        </div>
                        <div className="mt-[-1rem] p-4 ml-[0.3rem]">
                            <h1 className="text-lg font-semibold pt-[1.3rem] pb-[0.7rem]">Fourth Blog title</h1>
                            <h2 className="text-sm font-normal pb-[1.3rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labo</h2>
                            <Button variant={"link"} className="ml-[-1rem]">Read more</Button>
                        </div>
                    </div>
                </div>
                <div className="hidden col-span-1  ml-[4rem]">
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
            <SecondFooter viewMode="mobile" />
            </div>
        </div>

    )
}

}

export default BlogLanding