"use client"
import { Blocks, Box, Package2, PackageCheck, PackageSearch } from "lucide-react"
import { useEffect, useState } from "react"
import useMeasure from "react-use-measure"
import {animate, motion ,useMotionValue} from "framer-motion"
const ThirdLogo = () => {

    const FAST_DURATION = 15
    const SLOW_DURATION = 45
    const LogoList = [
        {name:1}, {name:1}, {name:1}, {name:1},{name:1}, {name:1}, {name:1}, {name:1},
    ]
    const [duration,setDuration] = useState(FAST_DURATION)
    const [mustFinish,setMustFinish] = useState(false)
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
        <div className="p-6 mt-[2.3rem]">
            <div className="flex flex-col justify-center items-center w-full space-y-4">
                <h1 className="text-xl font-semibold tracking-tight pb-[1.7rem]">Build with in partnership with these companies </h1>
                <div className="max-w-5xl mx-auto">
                    <div className="overflow-hidden">
                <motion.div className=" w-full flex " ref={ref} style={{x:xStyles}}
                onHoverStart={() => {
                    setMustFinish(true)
                    setDuration(SLOW_DURATION)
                }}
                onHoverEnd={() => {
                    setMustFinish(true)
                    setDuration(FAST_DURATION)
                }} >
                    {[...LogoList,...LogoList].map((item,index) => (
                        <div key={index} className="">
                            <div className="flex items-center justify-center gap-y-8 gap-x-12 hover:cursor-pointer">
                            <span className="flex gap-x-1 items-center">
                            <Box size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <Blocks size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <Package2 size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <PackageSearch size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <PackageCheck size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <Box size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <Blocks size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <Package2 size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <PackageSearch size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <PackageCheck size={36} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            </div>
                        </div>
                        
                    ))}
                </motion.div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdLogo