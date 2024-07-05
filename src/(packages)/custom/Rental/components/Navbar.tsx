import { Button } from "@/components/ui/button"


const Navbar = () => {
    return (
        <div className="flex flex-col w-full ">
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

export default Navbar