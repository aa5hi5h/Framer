import { Image, Star } from "lucide-react"


const FirstTestimonial = () => {
    return (
        <div className="flex w-full h-full justify-center items-center p-6">
            <div className="flex flex-col">
                <h1>Clients Testimonials</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full px-8  gap-8 space-y-8 lg:space-y-0 mb-4">
                        <div className="border-[1px] col-span-1  w-full  rounded-md items-center border-gray-700 p-6 space-y-4">
                            <div className="flex gap-x-2">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <div className="flex gap-x-2 items-center">
                                <div className="w-12 h-12 rounded-full bg-slate-600 opacity-40 flex justify-center items-center">
                                     <Image className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                       <h3>Customer name</h3>
                                        <h3>Freelance</h3>
                                     </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstTestimonial