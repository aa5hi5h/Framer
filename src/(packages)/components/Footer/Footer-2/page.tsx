import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const SecondFooter = () => {
    return (
        <div className="p-3 flex flex-col my-[2rem]">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-start">
             <h1 className="text-4xl font-bold tracking-tight cursor-pointer">Logo</h1>
             <div className="flex gap-12 items-center">
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-xl font-medium text-slate-700 mb-2 cursor-pointer">Column 1</h2>
                    <h3>Link 1</h3>
                    <h3>Link 2</h3>
                    <h3>Link 3</h3>
                    <h3>Link 4</h3>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-xl font-medium text-slate-700 mb-2">Column 2</h2>
                    <h3>Link 5</h3>
                    <h3>Link 6</h3>
                    <h3>Link 7</h3>
                    <h3>Link 8</h3>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-xl font-medium text-slate-700 mb-2">Column 3</h2>
                    <h3>Link 9</h3>
                    <h3>Link 10</h3>
                    <h3>Link 11</h3>
                    <h3>Link 12</h3>
                </div>
             </div>
             <div className="flex flex-col">
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
             <hr className="w-full  mt-[3rem] h-[1px] border-gray-700" />
        </div>
    )
}

export default SecondFooter