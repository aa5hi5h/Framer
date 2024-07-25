import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Atom, ChevronRight, Satellite } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"


const Navbar = () => {
    return (
        <div className="p-3 justify-between items-center flex pt-5">
            <Link href={"/"}>
            <ul className=" text-2xl flex gap-x-1 items-center font-semibold cursor-pointer">
                <Satellite size={46} />
                Emitter
                </ul>
                </Link>
            <ul className="flex gap-x-4 items-center">
                <SignedOut>
              <Link href={'/sign-in'}><Button className="">SignIn</Button></Link>
              <Link className="hidden md:flex" href={'/sign-up'}><Button variant={"outline"} className="border-purple-30 gap-x-1 hover:bg-purple-100 flex items-center bg-purple-200">
                Get Started
                <ChevronRight size={18} />
                </Button>
                </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </ul>
        </div>
    )
}

export default Navbar