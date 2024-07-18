"use client"
import { useEffect, useRef, useState } from "react"
import ViewOptions from "@/components/ViewOptions"
import WireMapView from "@/components/WireMapView"
import { usePageConfig } from "../Context/pageConfigContext"
import Image, { StaticImageData } from "next/image"
import { usePageSelection } from "../Context/ActivePageContext"
import { AiResponseProvider, useAiResponse } from "../Context/AiResponseContext"
import SidePannel from "@/components/SidePannel"
import { Button } from "@/components/ui/button"
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import html2canvas from 'html2canvas';
import { ChevronLeft, Download, HardDriveDownload } from "lucide-react"
import ExportViewOptions from "@/components/ExportViewOption"
import ExportZoomOptions from "@/components/ExportZoomOptions"


interface itemComponentProp {
    id: number,
    name: string,
    img: StaticImageData,
    exportImg: StaticImageData
}
const Page = () => {

    const [viewMode ,setViewMode] = useState<string>("monitor")
    const[exportViewMode,setExportViewMode] = useState<string>("monitor")
    const [exportMode,setExportMode] = useState<boolean>(false)
    const [scale, setScale] = useState<number>(1);


    const { pageConfig, addPageConfig } = usePageConfig();
    const { currentPage, setCurrentPage } = usePageSelection();
    const { aiResponse } = useAiResponse();

    console.log("current Pagre......................",currentPage)
    console.log("pageConfig........",pageConfig)
    console.log("Garima....",pageConfig[currentPage])
    console.log("AIresposne.........",aiResponse)


    const canvasRef = useRef<HTMLDivElement>(null)
    
    const handleExport = async () => {
        if (canvasRef.current) {
          const canvas = await html2canvas(canvasRef.current, {
            useCORS: true,
            logging: true,
            allowTaint: false,
          });
          const link = document.createElement("a");
          link.download = "canvas.png";
          link.href = canvas.toDataURL();
          link.click();
        }
      };

    
    const handleViewChange = (view:string) => {
        console.log(`View changed to: ${view}`);
        setViewMode(view)
    }

    const handleExportViewChange = (view:string) => {
      console.log(`View changed to: ${view}`);
      setViewMode(view)
    }

    const handlePageChange = (pageName: string) => {
        console.log("Pikachu",pageName)
        setCurrentPage(pageName);
    };

    const toggleExportMode = () => {
        console.log("bulbasaur",exportMode)
        setExportMode((prev) => !prev)
    }

    useEffect(() => {
        if (aiResponse.toLowerCase() === 'ecommerce' || "lms" || "blog" || 'rental' || 'social' || 'saas') {
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

    const handleZoomIn = () => {
      setScale((prevScale) => Math.min(prevScale + 0.1, 2));
    };
  
    const handleZoomOut = () => {
      setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); 
    };

    if(exportMode === false){
    return (
        <div className="grid grid-cols-3 gap-[6px] lg:grid-cols-10">
            <div className="hidden lg:flex lg:col-span-1  h-full pb-2 bg-slate-50 rounded-r-md">
            <div className="flex flex-col  h-[95vh] overflow-y-auto space-y-2">
                    {pageConfig[aiResponse]?.map((item:itemComponentProp) => (
                        <div onClick={() => handlePageChange(item.name)} key={item.id} className="flex hover:bg-purple-100 cursor-pointer rounded-md flex-col items-center p-2">
                            <Image src={item.img} 
                            alt={item.name} 
                            width={100}
                            height={100}
                            className={`h-15 w-35 border-[2px] rounded-md object-cover ${currentPage === item.name ? "border-purple-600": "border-zinc-300"}`}  />
                             <h3 className="text-[10px] text-center pt-[4px] text-muted-foreground font-medium">{item.name}</h3>
                        </div>
                    ))}
                    {pageConfig['blank']?.map((item: itemComponentProp) => (
                        <div onClick={() => handlePageChange(item.name)} key={item.id} className="flex hover:bg-purple-100 cursor-pointer rounded-md flex-col items-center p-2">
                        <Image src={item.img} 
                        alt={item.name} 
                        width={100}
                        height={100}
                        className={`h-15 w-35 border-[2px] rounded-md object-cover ${currentPage === item.name ? "border-zinc-700": "border-zinc-300"}`}  />
                         <h3 className="text-[10px] text-center pt-[4px] text-muted-foreground font-medium">{item.name}</h3>
                    </div>
                    ))}
                </div>
            </div>
            <div className="col-span-3 lg:col-span-7  bg-slate-100 p-2 rounded-md flex flex-col space-y-4">
                <div className="flex gap-x-4 items-center ml-auto">
                <Button onClick={() => toggleExportMode()} className="bg-purple-500 mt-[1rem] hover:bg-purple-700">Export</Button>
               <div className="bg-white flex gap-2 items-center max-w-max p-2 rounded-md ml-auto mr-[2rem] mt-[1rem]">
                <ViewOptions onViewChange={handleViewChange} />
               </div>
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
if(exportMode === true){
    return (
        <div className="bg-purple-100 flex flex-col rounded-lg p-6">
           <div className="flex justify-between items-center p-2">
      <Button
        variant={"outline"}
        onClick={toggleExportMode}
        className="bg-slate-100 border-slate-300 max-w-max mb-2 mt-[-0.5rem] flex items-center"
      >
        <ChevronLeft size={18} />
        Back
      </Button>
      <div className="bg-white flex gap-2 items-center max-w-max p-2 rounded-md mx-auto mb-2 mt-[-0.5rem]">
        <ExportViewOptions onViewChange={handleViewChange} />
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white flex gap-2 items-center max-w-max p-2 rounded-md mb-2 mt-[-0.5rem]">
          <ExportZoomOptions onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
        </div>
        <Button  onClick={handleExport}
        className="max-w-max mb-2 mt-[-0.5rem] gap-x-2 flex items-center bg-purple-500 hover:bg-purple-600">
          Download
        <Download size={22} />
          </Button>
      </div>
    </div>
          <div className="w-[200vh] h-full bg-slate-200 overflow-hidden rounded-sm" ref={canvasRef} >
          <div className="w-[200vh] h-full " style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
          <TransformWrapper>
            <>
              <TransformComponent>
                <div className="w-[200vh] h-[100vh] my-[4rem] mx-[8rem] flex justify-center items-start" style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                  {pageConfig[aiResponse]?.map((item: itemComponentProp) => (
                    <div onClick={() => handlePageChange(item.name)} key={item.id} className="flex hover:bg-green-100 cursor-pointer rounded-md flex-col items-center p-2">
                      <Image src={item.exportImg}
                        alt={item.name}
                        width={400}
                        height={400}
                        className={`h-15 w-35 object-cover items-start`} />
                      <h3 className="text-[10px] text-center pt-[4px] text-muted-foreground font-medium">{item.name}</h3>
                    </div>
                  ))}
                </div>
              </TransformComponent>
              <div className="hidden">
              </div>
            </>
        </TransformWrapper>
        </div>
          </div>
        </div>
      );
}
}

export default Page