import { Bot, Mail, MapPin, Phone } from "lucide-react"


const ThirdContact = () => {
    return (
        <div className="p-3 flex flex-col mt-[2rem]">
            <div className="p-4">
            <h1 className=" text-5xl font-semibold mb-2">Contact Us</h1>
            <p className=" text-lg text-muted-foreground mb-8">lorem ipsum Neque porro  est qui dolorem  quia dolor</p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-around space-y-6 md:space-y-0 md:space-x-6 ">
                <span className="flex flex-col px-4 md:px-0 items-start md:items-center">
                    <Mail size={36}/>
                    <h2 className="text-2xl font-semibold mt-2 mb-2">Mail</h2>
                    <p className="text-lg text-muted-foreground mb-6">ore mipsum Neque porroest qui dolorem  quia dolor</p>
                    <h4 className="text-md text-bold">hello@gmail.com</h4>
                </span>
                <span className="flex flex-col px-4 md:px-0 pt-[2rem] md:pt-[0] items-start md:items-center">
                    <Bot size={36} />
                    <h2 className="text-2xl font-semibold mt-2 mb-2" >Chat with Ai </h2>
                    <p className="text-lg text-muted-foreground mb-6">ore mipsum Neque porro est qui dolorem  quia dolor</p>
                    <h4 className="text-md text-bold" >hello@gmail.com</h4>
                </span>
                <span className="flex flex-col px-4 md:px-0 pt-[2rem] md:pt-[0] items-start md:items-center">
                    <Phone size={36} />
                    <h2 className="text-2xl font-semibold mt-2 mb-2">Phone Call</h2>
                    <p className="text-lg text-muted-foreground mb-6" >ore mipsum Neque porro  est qui dolorem  quia dolor</p>
                    <h4 className="text-md text-bold">hello@gmail.com</h4>
                </span>
                <span className="flex flex-col px-4 md:px-0 pt-[2rem] pb-[4rem] md:pb-[0]  md:pt-0 items-start md:items-center">
                    <MapPin size={36} />
                    <h2 className="text-2xl font-semibold mt-2 mb-2 ">Office Location</h2>
                    <p className="text-lg text-muted-foreground mb-6">ore mipsum Neque porro est qui dolorem  quia dolor</p>
                    <h4 className="text-md text-bold">hello@gmail.com</h4>
                </span>
            </div>
        </div>
    )
}

export default ThirdContact