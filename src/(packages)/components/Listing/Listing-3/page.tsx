"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import FeaturedItems from "../../props/FeaturedItems"
import {motion,animate,useMotionValue} from "framer-motion"
import useMeasure from "react-use-measure"
import { useEffect,useState } from "react"
import ItemsCaraousel from "../../props/ItemsCarousel"

const ThirdListing = () => {

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
        <div className="p-6">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-4xl font-semibold tracking-tight">Featured Prodcuts</h1>
                        <p className="text-[16px] text-slate-700">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                    </span>
                    <Button className="flex gap-x-2">
                        view all products
                        <ChevronRight size={18} /></Button>
                </div>
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
                            <ItemsCaraousel key={index} />
                        )

                        )
                    }
                    </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdListing