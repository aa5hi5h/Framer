import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface BlogNavbarProp{
    viewMode: string
}

const BlogNavbar = ({viewMode}:BlogNavbarProp) => {

if(viewMode === "monitor"){
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold tracking-tight">Logo</h1>
                <div className="flex items-center gap-x-4">
                    <ul className="flex gap-x-2">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex gap-4 border-b border-gray-300 p-3 items-center justify-between">
        <div className="flex ">
        <Sheet>
                       <SheetTrigger asChild><Menu /></SheetTrigger>
                            <SheetContent className="space-y-4" side={"left"}>
                                <SheetTitle className="text-3xl font-bold tracking-tight cursor-pointer">Logo</SheetTitle>
                                <SheetTitle>Link one</SheetTitle>
                                <SheetTitle>Link two</SheetTitle>
                                <SheetTitle>Link three</SheetTitle>
                            </SheetContent>
                        </Sheet>
        </div>
        <div className="flex w-full gap-2 pl-[40px] ">
        <div className="flex items-center gap-x-4">
                    <ul className="flex gap-x-2">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                    <Button>Login</Button>
                </div>
        </div>
        </div>
    )
}

}
export default BlogNavbar