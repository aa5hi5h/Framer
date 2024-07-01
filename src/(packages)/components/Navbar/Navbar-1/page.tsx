"use client"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "react-responsive"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Searchbar from "../../props/Searchbar"

const Navbar = () => {
    return (
        <div className="p-3 border-b-[1px]  border-gray-200">
            <div className="justify-between flex items-center">

                <h1 className="text-3xl hidden md:flex font-bold tracking-tight cursor-pointer">Logo</h1>
                <div className="md:hidden pr-8">
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
                <ul className="hidden md:flex gap-4 border  border-gray-800 rounded-full p-3">
                    <li>Link One</li>
                    <li>link two</li>
                    <li>Link three</li>
                </ul>
                <div className="md:hidden  mx-auto w-[80%] max-w-2xl flex flex-col">
                <Searchbar />
                </div>
                <div className="space-x-4 flex">
                <Button className="hidden md:flex" variant={"outline"}>Download</Button>
                <Button>SignIn</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar