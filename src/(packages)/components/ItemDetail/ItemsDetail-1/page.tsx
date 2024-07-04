"use client"
import { Image, Minus, Plus, Star } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import FeaturedItems from "../../props/FeaturedItems"


const FirstItemDetail = () => {


    const [cart ,setCart] = useState(1)


    const ItemsList = [
       {one:"1"},{two:"2"},{three:"3"},{four:"4"}
    ]

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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 p-4">
                    {
                        ItemsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstItemDetail