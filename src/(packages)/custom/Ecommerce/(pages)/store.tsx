"use client"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import SecondFeaturedProp from "@/(packages)/components/props/FetauredList-2"
import ItemsCaraousel from "@/(packages)/components/props/ItemsCarousel"
import {animate,motion, useMotionValue} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState,useEffect } from "react"
import useMeasure from "react-use-measure"

const EcommerceStore = () => {

    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1}
    ]
    const FAST_DURATION = 15
    const SLOW_DURATION = 35

    const itemsList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    ]

    const[mustFinish,setMustFinish] = useState(false)
    const[render,setRender] = useState(false)
    const [duration,setDuration] = useState(FAST_DURATION)


    let[ref,{width}] = useMeasure()

        const xStyles = useMotionValue(0)

        useEffect(() => {
            let clothingControls;
            let finishPosition = -width -170;
        
            if (mustFinish) {
              clothingControls = animate(xStyles, [xStyles.get(), finishPosition], {
                ease: "linear",
                duration: duration * (1 - xStyles.get() / finishPosition),
                onComplete: () => {
                  setMustFinish(false);
                  setRender(!render)
                },
              });
            } else {
              clothingControls = animate(xStyles, [0, finishPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
              });
            }
        
            return () => clothingControls?.stop();
          }, [xStyles, width, duration, mustFinish,render]);

    return (
        <div className="flex flex-col space-y-4">
        <SecondNavbar />
        <div className="p-6">
        <div className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Trending store&apos;s this week</h1>
                        <p className="text-sm text-slate-700">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <SecondFeaturedProp key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Store&apos;s having sales</h1>
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <SecondFeaturedProp key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col space-y-4 mb-[6rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Featured Store</h1>
                    </span>
                </div>
                <div className="flex flex-col p-4  ">
            <div className=" flex justify-center items-center h-[30vh] w-[65vh] md:w-[150vh] mx-auto rounded-t-lg bg-blue-200">
                <h1 className="px-4 py-2 bg-black text-white text-sm rounded-full flex items-center gap-1">Urban Styles<ArrowUpRight /></h1>
            </div>
            <div className="flex flex-col w-[65vh] md:w-[150vh] rounded-b-lg mx-auto border-[1px] border-blue-200 p-4">
                <h1 className="text-2xl font-bold tracking-tight ">Products</h1>
                <div className=" flex gap-[4rem] px-2 py-8 ">
                <div className="overflow-hidden">
                <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4" ref={ref} style={{x:xStyles}}
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
                        [...itemsList,...itemsList].map((product,index) => (
                        <ItemsCaraousel key={index} />
                        ))
                    }
                    </div>
                </motion.div>
                </div>
                </div>
            </div>
        </div>
            </div>
            </div>
            </div>
    )
}

export default EcommerceStore