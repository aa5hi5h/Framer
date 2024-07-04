import { Image, Star } from "lucide-react"



const TestimonialProp = () => {
    return (
        <div className="border-[1px] w-[50vh] col-span-1  rounded-md items-center border-gray-700 p-6 space-y-4">
        <div className="flex gap-x-1 tracking-tighter ">
            <Star fill="black" className="" />
            <Star fill="black" />
            <Star fill="black" />
            <Star fill="black" />
            <Star fill="black" />
        </div>
        <p className="text-lg font-normal ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</p>
        <div className="flex gap-x-2 items-center">
            <div className="w-12 h-12 rounded-full bg-slate-600 opacity-40 flex justify-center items-center">
                 <Image className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
                   <h3 className="font-medium tracking-tight text-md">Customer name</h3>
                    <h3 className="text-muted-foreground text-sm">Freelance, Duration</h3>
                 </div>
            </div>
    </div>
    )
}

export default TestimonialProp