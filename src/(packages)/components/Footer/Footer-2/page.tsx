import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SecondFooterProp{
    viewMode: string
}

const SecondFooter = ({viewMode}:SecondFooterProp) => {

    if(viewMode === "monitor"){
    return (
        <div className="p-3 flex w-full flex-col mb-[2rem]">
            <hr className="w-full  mt-[3rem] h-[1px] border-gray-700 my-[3rem]" />
            <div className="flex flex-col md:flex-row space-y-8 mb-[2rem] md:space-y-0 justify-between items-start">
             <h1 className="text-4xl font-bold tracking-tight cursor-pointer pr-8">Logo</h1>
             <div className="flex gap-12 items-center">
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium text-slate-700 mb-2 cursor-pointer">Column 1</h2>
                    <h3>Link 1</h3>
                    <h3>Link 2</h3>
                    <h3>Link 3</h3>
                    <h3>Link 4</h3>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium text-slate-700 mb-2">Column 2</h2>
                    <h3>Link 5</h3>
                    <h3>Link 6</h3>
                    <h3>Link 7</h3>
                    <h3>Link 8</h3>
                </div>
             </div>
             <div className="flex flex-col pl-8">
                <h2 className="text-xl font-semibold text-slate-700">Subscribe</h2>
                <h3 className="text-sm text-muted-foreground">Join our newsletter to stay up to date on features and releases.</h3>
                <div className="flex gap-4 mt-4">
                <Input 
                type="email"
                placeholder="Enter your email"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none p-3 rounded-md" />
                <Button>Subscribe</Button>
                </div>

             </div>
             </div>
        </div>
    )
}

if(viewMode === "mobile"){
    return (
        <div className=" flex w-full flex-col mb-[2rem]">
            <hr className="w-full  mt-[3rem] h-[1px] border-gray-700 my-[3rem]" />
            <div className="grid grid-cols-3  space-y-8 mb-[2rem] md:space-y-0 justify-between items-start">
             <h1 className="text-4xl col-span-3 font-bold tracking-tight cursor-pointer">Logo</h1>
             <div className="flex pt-[2rem] gap-6 col-span-3 items-center">
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium text-slate-700 cursor-pointer">Column 1</h2>
                    <h3>Link 1</h3>
                    <h3>Link 2</h3>
                    <h3>Link 3</h3>
                    <h3>Link 4</h3>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium text-slate-700">Column 2</h2>
                    <h3>Link 5</h3>
                    <h3>Link 6</h3>
                    <h3>Link 7</h3>
                    <h3>Link 8</h3>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-medium text-slate-700 ">Column 3</h2>
                    <h3>Link 9</h3>
                    <h3>Link 10</h3>
                    <h3>Link 11</h3>
                    <h3>Link 12</h3>
                </div>
             </div>
             <div className="flex pt-[2rem] flex-col col-span-3">
                <h2 className="text-xl font-bold text-slate-700">Subscribe</h2>
                <h3 className="text-sm text-muted-foreground">Join our newsletter to stay up to date on features and releases.</h3>
                <div className="flex flex-col gap-4 mt-4">
                <Input 
                type="email"
                placeholder="Enter your email"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none p-3 rounded-md" />
                <Button className="max-w-max">Subscribe</Button>
                </div>

             </div>
             </div>
        </div>
    )
}
}

export default SecondFooter