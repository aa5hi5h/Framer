import { Image, Star } from "lucide-react"
import Testimonial from "../../props/Testimonials"


const FirstTestimonial = () => {
    return (
        <div className="flex w-full h-full justify-center mt-[4rem] items-center p-6">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight">Clients Testimonials</h1>
                <p className="text-lg text-muted-foreground mt-[0.7rem]">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 mt-[3.5rem] lg:grid-cols-3 w-full px-8  gap-8 space-y-8 lg:space-y-0 mb-4">
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstTestimonial