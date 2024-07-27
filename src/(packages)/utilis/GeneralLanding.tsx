import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import FeaturedItems from "@/(packages)/components/props/FeaturedItems"
import SecondFeaturedProp from "@/(packages)/components/props/FetauredList-2"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { animate, useMotionValue,motion } from "framer-motion"
import { useState,useEffect } from "react"
import useMeasure from "react-use-measure"
import ItemsCaraousel from "@/(packages)/components/props/ItemsCarousel"
import { useCustomPrompt } from "@/app/Context/CustomPromptContext"


interface GenerateLandingProp{
    viewMode: string
}

const GeneralLanding = ({viewMode}:GenerateLandingProp) => {


    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1}, {name:1},{name:1},{name:1},{name:1},
    ]

    const {customPrompt} = useCustomPrompt()

      
    const FAST_DURATION = 5
    const SLOW_DURATION = 35

    const CaraouselItemsList = [
        {name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1}, {name:1},{name:1}
    ]

    const storeList = [
        {name:1},{name:1},{name:1},{name:1},{name:1},{name:1}
    ]

    const [mustFinish,setMustFinish] = useState(false)
    const [duration,setDuration] = useState(FAST_DURATION)
    const [render,setRender] = useState(false)

    let [ref,{width}] = useMeasure()

    const xStyles = useMotionValue(0)

    useEffect(() => {
        let carouselControl;
        let finishPosition = -width/2 -50;
    
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


    console.log("viewMode in the Landing page",viewMode)

    if(viewMode==="monitor"){
         return (
            <div className={`flex flex-col space-y-4 w-full`}>
                <SecondNavbar viewMode={"monitor"} />
                <div className="p-6">
                <div className="flex flex-col space-y-4 max-w-4xl mb-[14.5rem] mx-auto mt-[4.3rem]">
                        <h1 className="text-5xl font-bold text-center tracking-tight">{ customPrompt || "Foundation for your next saas platform"}</h1>
                        <p className="text-slate-800 text-center pb-[1.1rem]">"Building and customizing your own Ecommerce platform with ease."</p>
                            <div className="flex justify-center gap-x-4">
                                <Button>Button</Button>
                                <Button variant={"outline"} className="border-slate-300">Button</Button>
                            </div>
                </div>
                <div className="flex flex-col space-y-4 mb-[8rem]">
                    <div className="flex justify-between items-center">
                        <span className="flex flex-col space-y-2">
                            <h1 className="text-4xl font-semibold tracking-tight">Featured Prodcuts</h1>
                            <p className="text-[16px] text-slate-700">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                        </span>
                        <Button className="flex gap-x-2">
                            view all products
                            <ChevronRight size={18} /></Button>
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
                <div className="flex flex-col space-y-4 mb-[4rem]">
                    <div className="flex justify-between items-center">
                        <span className="flex flex-col space-y-2">
                            <h1 className="text-4xl font-semibold tracking-tight">Featured Prodcuts</h1>
                            <p className="text-[16px] text-slate-700">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                        </span>
                        <Button className="flex gap-x-2">
                            view all items
                            <ChevronRight size={18} /></Button>
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
                <SecondFooter viewMode={"monitor"} />
            </div>
            </div>
        )
    }

    if(viewMode === "mobile"){
    return (
        <div className={`flex flex-col space-y-4 w-full`}>
            <SecondNavbar viewMode="mobile" />
            <div className="p-2">
            <div className="flex flex-col space-y-4 max-w-4xl mb-[14.5rem] mx-auto mt-[4.3rem]">
                    <h1 className="text-3xl font-bold text-center tracking-tight">Foundation for your next saas platform</h1>
                    <p className="text-slate-800 text-sm text-center pb-[1.1rem]">"Building and customizing your own Ecommerce platform with ease."</p>
                        <div className="flex justify-center gap-x-4">
                            <Button>Button</Button>
                            <Button variant={"outline"} className="border-slate-300">Button</Button>
                        </div>
            </div>
            <div className="flex flex-col space-y-4 mb-[8rem]">
                <div className="flex justify-between gap-x-2">
                    <span className="flex flex-col space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight">Featured Prodcuts</h1>
                        <p className="text-sm text-slate-700">lore mipsum Neque m ipsum quia dolor</p>
                    </span>
                    <Button className="flex mt-[6px]">
                        view
                        <ChevronRight size={18} /></Button>
                </div>
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
                        [...CaraouselItemsList,...CaraouselItemsList].map((item,index) => (
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
            <div className="flex flex-col space-y-4 mb-[4rem]">
                <div className="flex justify-between gap-x-2 items-center">
                    <span className="flex flex-col space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight">Featured shops</h1>
                        <p className="text-sm text-slate-700">lore mipsum Neque quia dolor</p>
                    </span>
                    <Button className="flex">
                        view
                        <ChevronRight size={18} /></Button>
                </div>
                <div className="grid grid-cols-2  gap-4 mt-8">
                    {
                        storeList.map((item,index) => (
                            <SecondFeaturedProp key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            <SecondFooter viewMode="mobile" />
        </div>
        </div>
    )
}
}
export default GeneralLanding