import { Github, Twitter } from "lucide-react"
import Link from "next/link"


const Footer = () => {

    return (
        <div className="mt-[132px] ml-[25rem] lg:ml-[75rem]">
            <div className=" flex gap-x-2">
                <Link href="https://github.com/aa5hi5h/Emitter"><Github  className="cursor-pointer text-green-800 p-2 w-8 h-8 hover:bg-purple-200 rounded-full " /></Link>
                <Link href={'https://x.com/de6a5hi5h'}><Twitter className="cursor-pointer p-2 w-8 h-8  text-blue-700 hover:bg-purple-200 rounded-full " /></Link>
            </div>
        </div>
    )
}

export default Footer
