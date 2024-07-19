import Searchbar from "@/(packages)/components/props/Searchbar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"


interface NavbarProp{
    viewMode: string
}

const Navbar = ({viewMode}:NavbarProp) => {

    if(viewMode === "monitor"){
    return (
        <div className="flex flex-col w-full px-4 ">
            <div className="max-w-6xl w-full my-[1.3rem] mx-auto flex items-center justify-between">
                <h2 className="text-3xl font-semibold tracking-tight">Rentals</h2>
                <ul className="hidden md:flex gap-4 border  border-gray-800 rounded-full py-2 px-3">
                    <li>Link One</li>
                    <li>link two</li>
                    <li>Link three</li>
                </ul>
                <div className="flex gap-x-4">
                    <Button variant={"ghost"}>Bookings</Button>
                    <Button>Sign in</Button>
                </div>
            </div>
            <hr />

        </div>
    )
}
    if(viewMode==="mobile"){
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
            <div className="flex w-full gap-2 ">
                 <div className="flex w-full md:hidden lg:flex">
                    <Searchbar />
                </div>
              <Button>SignIn</Button>
            </div>
            </div>
        )
      }
}



export default Navbar