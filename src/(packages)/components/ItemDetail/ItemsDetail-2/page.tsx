"use client"
import { Image, Minus, Plus, Star } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import FeaturedItems from "../../props/FeaturedItems"
import useMeasure from "react-use-measure"
import { animate, useMotionValue,motion } from "framer-motion"
import ItemsCaraousel from "../../props/ItemsCarousel"


const SecondItemDetail = () => {


    const [cart ,setCart] = useState(1)

    const FAST_DURATION = 15
    const SLOW_DURATION = 35

    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},
        {name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},
        {name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},
    ]

    const [mustFinish,setMustFinish] = useState(false)
    const [duration,setDuration] = useState(FAST_DURATION)
    const [render,setRender] = useState(false)

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
        <div className="flex flex-col mt-[-1rem]">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-4 p-6">
                <div className="col-span-1 bg-slate-200">
                    <div className="h-[80vh] flex items-center justify-center" >
                        <Image size={38} />
                    </div>
                </div>
                <div className="cols-span-1  pl-8 space-y-2 ">

                    <h1 className="text-3xl font-bold tracking-tight">Product title</h1>
                    <h2 className="text-xl font-medium">Price</h2>
                    <h3 className="text-xl font-medium pb-4"><Button variant={"outline"}>StoreName</Button></h3>
                    <hr className="w-full h-[2px]  bg-slate-800" />
                    <h3 className="text-xl font-medium pt-4 ">80 in stock</h3>
                    <div className="flex gap-1 pt-1">
                        <Star size={18} />
                        <Star size={18} />
                        <Star size={18} />
                        <Star size={18} />
                        <Star size={18} />
                    </div>
                    <div className="flex flex-col pt-[1.5rem] space-y-4 pb-6">
                    <div className="flex items-center border-2 rounded-md border-slate-200 w-fit justify-between">
                        <Minus onClick={() => setCart((prev) => prev - 1)} size={28} className="p-2 border-r-2 border-slate-200 hover:opacity-60 cursor-pointer" />
                        <h2 className="px-4">{cart}</h2>
                        <Plus size={28} onClick={() => setCart((prev) => prev + 1)} className="p-2 border-l-2 border-blue-200 hover:opacity-60 cursor-pointer" />
                        </div>
                        <div className="flex gap-2">
                            <Button className="px-8 py-4">Buy now</Button>
                            <Button variant={"outline"} className="bg-slate-300 hover:bg-slate-400 ">Add to cart</Button>
                        </div>
                    </div>
                    <hr className="w-full h-[2px] bg-slate-600" />
                    <Accordion type="single"  collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold">Description</AccordionTrigger>
                            <AccordionContent>description of the post to be shown here</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-col">
                <h2 className="text-3xl font-bold tracking-tight">More products from shopName</h2>
                <div className="max-w-7xl mx-auto">
                    <div className="overflow-hidden">
                    <motion.div className=" w-full flex gap-x-8 " ref={ref} style={{x:xStyles}}
                onHoverStart={() => {
                    setMustFinish(true)
                    setDuration(SLOW_DURATION)
                }}
                onHoverEnd={() => {
                    setMustFinish(true)
                    setDuration(FAST_DURATION)
                }} >
                    {
                        [...ItemsList,...ItemsList].map((item,index) => (
                            <div key={index} className="mt-[1.3rem]">
                            <ItemsCaraousel />
                            </div>
                        )

                        )
                    }
                    </motion.div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SecondItemDetail