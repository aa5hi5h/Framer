"use client"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import FeaturedItems from "@/(packages)/components/props/FeaturedItems"
import useMeasure from "react-use-measure"
import { animate, useMotionValue,motion } from "framer-motion"
import ItemsCaraousel from "../../../components/props/ItemsCarousel"
import { useState,useEffect } from "react"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface EcommerceFeaturedPageProp{
    viewMode: string
}

const EcommerceFeaturedPage = ({viewMode}:EcommerceFeaturedPageProp) => {

    
    const FAST_DURATION = 10
    const SLOW_DURATION = 35

    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1}
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

      if (viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4">
        <SecondNavbar  viewMode="monitor" />
        <div className="p-6">
        <div className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Trending product this week</h1>
                        <p className="text-sm text-slate-700">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Sale on products</h1>
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col space-y-4 mb-[6rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Featured products</h1>
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold tracking-tight">Category 1</h2>
                <div className="overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div className=" w-full flex gap-x-8" ref={ref} style={{x:xStyles}}
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
        <SecondFooter viewMode="monitor" />
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-4">
        <SecondNavbar  viewMode="mobile" />
        <div className="p-2">
        <div className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight">Trending product this week</h1>
                        <p className="text-sm text-slate-700">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col space-y-4 mb-[4rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight">Sale on products</h1>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col space-y-4 mb-[6rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight">Featured products</h1>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {
                        ItemsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold tracking-tight">Category 1</h2>
                <div className="overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div className=" w-full flex gap-x-8" ref={ref} style={{x:xStyles}}
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
        <SecondFooter viewMode="mobile" />
        </div>
    )
}
}

export default EcommerceFeaturedPage