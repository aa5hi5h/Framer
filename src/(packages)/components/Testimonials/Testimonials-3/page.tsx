"use client"
import { useEffect, useState } from "react"
import TestimonialProp from "../../props/TestimonialProp"
import useMeasure from "react-use-measure"
import {animate ,motion , useMotionValue} from "framer-motion"
const ThirdTestimonial = () => {

    const SLOW_DURATION = 85
    const FAST_DURATION = 40

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

    const [mustFinish,setMustFinish] = useState(false)
    const [render,setRender] = useState(false)
    const [duration,setDuration] = useState(FAST_DURATION)

    let [ref,{width}] = useMeasure()

    const xStyles = useMotionValue(0)

    useEffect(() => {
        let carouselControl;
        let finishPosition = -width/2 -16;
    
        if (mustFinish) {
          carouselControl = animate(xStyles, [xStyles.get(), finishPosition], {
            ease: "linear",
            duration: duration * (1 - xStyles.get() / finishPosition),
            onComplete: () => {
              setMustFinish(false);
              setRender(!render)
            },
          });
        } else {
          carouselControl = animate(xStyles, [0, finishPosition], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          });
        }
    
        return () => carouselControl?.stop();
      }, [xStyles, width, duration, mustFinish,render]);


    return (
        <div className="flex w-full h-full justify-center my-[4rem]  items-center p-6">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight">Clients Testimonials</h1>
                <p className="text-lg text-muted-foreground mt-[0.7rem]">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className=" w-full mt-[2.3rem]">
              
            <div className="p-4 overflow-hidden">
                
             <div className="flex w-full px-4 gap-8  space-y-8 lg:space-y-0 mb-4">
               <motion.div className=" gap-6 mt-8 px-4" ref={ref} style={{x:xStyles}}
                onHoverStart={() => {
                    setMustFinish(true)
                    setDuration(SLOW_DURATION)
                }}
                onHoverEnd={() => {
                    setDuration(FAST_DURATION)
                    setMustFinish(true)
                }} >
                    <div className="flex gap-8">
                    {
                        [...TestimonialPropList,...TestimonialPropList].map((items,index) => (
                        <TestimonialProp key={index}  />
                        ))
                    }
                    </div>
                </motion.div>
                </div>
               </div>
            </div>
                </div>
            </div>
    )
}

export default ThirdTestimonial