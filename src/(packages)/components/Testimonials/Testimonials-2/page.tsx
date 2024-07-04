
import TestimonialProp from "../../props/TestimonialProp"
import Testimonial from "../../props/Testimonials"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
const SecondTestimonial = () => {

    const TestimonialPropList = [
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},
        {name:"movingTestimonials"},

    ]


    return (
        <div className="flex w-full h-full justify-center mt-[4rem] items-center p-6">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight">Clients Testimonials</h1>
                <p className="text-lg text-muted-foreground mt-[0.7rem]">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className=" w-full mt-[2.3rem]">
                <Carousel className="w-full max-w-5xl">
      <CarouselContent className="-ml-1">
        {TestimonialPropList.map((items, index) => (
          <CarouselItem key={index} className="pl-1 ">
            <div className="p-1 overflow-hidden">
                
             <div className="flex w-full px-4 gap-8  space-y-8 lg:space-y-0 mb-4">
                {TestimonialPropList.map((items,index) => (
                <div key={index} className="w-[55vh]">
                  <TestimonialProp  />
                </div>
                ))}
               </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default SecondTestimonial


