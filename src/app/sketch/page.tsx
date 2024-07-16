"use client"
import { useEffect, useState } from "react"
import ViewOptions from "@/components/ViewOptions"
import WireMapView from "@/components/WireMapView"
import { usePageConfig } from "../Context/pageConfigContext"
import Image, { StaticImageData } from "next/image"
import { usePageSelection } from "../Context/ActivePageContext"
import { AiResponseProvider, useAiResponse } from "../Context/AiResponseContext"
import SidePannel from "@/components/SidePannel"

interface itemComponentProp {
    id: number,
    name: string,
    img: StaticImageData
}
const Page = () => {

    const [viewMode ,setViewMode] = useState<string>("monitor")
    
    const { pageConfig, addPageConfig } = usePageConfig();
    const { currentPage, setCurrentPage } = usePageSelection();
    const { aiResponse } = useAiResponse();

    console.log("current Pagre......................",currentPage)
    console.log("pageConfig........",pageConfig)
    console.log("Garima....",pageConfig[currentPage])
    console.log("AIresposne.........",aiResponse)


    
    const handleViewChange = (view:string) => {
        console.log(`View changed to: ${view}`);
        setViewMode(view)
    }

    const handlePageChange = (pageName: string) => {
        console.log("Pikachu",pageName)
        setCurrentPage(pageName);
    };

    useEffect(() => {
        if (aiResponse.toLowerCase() === 'ecommerce') {
            setCurrentPage('landing');
        }
    }, [aiResponse, setCurrentPage]);



    const viewScreen = () => {
        switch (viewMode) {
            case 'mobile':
              return 'max-w-sm mx-auto';
            case 'tablet':
              return 'max-w-xl mx-auto';
            case 'monitor':
              return 'max-w-full';
            default:
              return '';
          }
    }

    return (
        <div className="grid grid-cols-3 gap-[6px] lg:grid-cols-10">
            <div className="hidden lg:flex lg:col-span-1  h-full pb-2 bg-slate-50 rounded-r-md">
            <div className="flex flex-col  h-[95vh] overflow-y-auto space-y-2">
                    {pageConfig[aiResponse]?.map((item:itemComponentProp) => (
                        <div onClick={() => handlePageChange(item.name)} key={item.id} className="flex hover:bg-green-100 cursor-pointer rounded-md flex-col items-center p-2">
                            <Image src={item.img} 
                            alt={item.name} 
                            width={100}
                            height={100}
                            className={`h-15 w-35 border-[2px] rounded-md object-cover ${currentPage === item.name ? "border-zinc-950": "border-zinc-300"}`}  />
                             <h3 className="text-[10px] text-center pt-[4px] text-muted-foreground font-medium">{item.name}</h3>
                        </div>
                    ))}
                    {pageConfig['blank']?.map((item: itemComponentProp) => (
                        <div onClick={() => handlePageChange(item.name)} key={item.id} className="flex hover:bg-green-100 cursor-pointer rounded-md flex-col items-center p-2">
                        <Image src={item.img} 
                        alt={item.name} 
                        width={100}
                        height={100}
                        className={`h-15 w-35 border-[2px] rounded-md object-cover ${currentPage === item.name ? "border-zinc-950": "border-zinc-300"}`}  />
                         <h3 className="text-[10px] text-center pt-[4px] text-muted-foreground font-medium">{item.name}</h3>
                    </div>
                    ))}
                </div>
            </div>
            <div className="col-span-3 lg:col-span-7 bg-slate-100 p-2 rounded-md flex flex-col space-y-4">
               <div className="bg-white flex gap-2 items-center max-w-max p-2 rounded-md ml-auto mr-[2rem] mt-[1rem]">
                <ViewOptions onViewChange={handleViewChange} />
               </div>
               <div className={`${viewScreen()} overflow-y-auto h-[80vh] rounded-md p-3 w-full border-2 bg-white border-gray-300`}>
                <WireMapView viewMode={viewMode} />
               </div>
            </div>
            <div className="hidden lg:flex lg:col-span-2 bg-slate-100 px-2 py-6 rounded-l-md h-full ">
                <SidePannel />
            </div>
        </div>
    )
}


export default Page