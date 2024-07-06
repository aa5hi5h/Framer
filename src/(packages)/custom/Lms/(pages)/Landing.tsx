import FirstHero from "@/(packages)/components/Hero/Hero-1/page"
import BlogNavbar from "../../Blog/components/Navbar"
import SecondHero from "@/(packages)/components/Hero/Hero-2/page"
import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import SecondTestimonial from "@/(packages)/components/Testimonials/Testimonials-2/page"
import SecondFAQ from "@/(packages)/components/FAQ/FAQ-2/page"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import FirstTestimonial from "@/(packages)/components/Testimonials/Testimonials-1/page"


const LmsLanding = () => {
    return (
        <div>
            <BlogNavbar />
            <div className="p-6">
            <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 max-w-2xl mx-auto mt-[5.7rem]">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Improve your learning experience</h1>
                    <p className="text-slate-800 pb-[1.1rem] text-sm md:text-lg text-center pt-[0.2rem]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip"</p>
                        <div className="flex gap-x-4 mx-auto">
                            <Button>View courses</Button>
                            <Button className="border-slate-300" variant={"outline"}>Login</Button>
                        </div>
                        </div>
                        <div className="flex justify-center h-screen w-full pt-[2.7rem] items-center">
                        <div className="w-full h-full flex justify-center items-center bg-slate-200">
                            <Image size={52} className="opacity-60" />
                        </div>
                    </div>
            </div>
        </div>
        <FirstTestimonial />
        <SecondFAQ />
        <SecondFooter />
        </div>
    )
}

export default LmsLanding