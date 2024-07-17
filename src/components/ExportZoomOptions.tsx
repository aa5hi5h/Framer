"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";


interface ExportZoomOptionsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const ExportZoomOptions = ({onZoomIn,onZoomOut}:ExportZoomOptionsProps) => {

  const [isZoomInActive, setIsZoomInActive] = useState<boolean>(false);
  const [isZoomOutActive, setIsZoomOutActive] = useState<boolean>(false);

  const handleZoomInClick = () => {
    setIsZoomOutActive(false);
    setIsZoomInActive(true);
    onZoomIn()
  };

  const handleZoomOutClick = () => {
    setIsZoomInActive(false);
    setIsZoomOutActive(true);
    onZoomOut()
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={handleZoomOutClick}
            className={`w-6 h-6 p-1 ${
              isZoomOutActive ? "bg-slate-100" : "hover:bg-slate-100"
            } rounded-md cursor-pointer`}
          >
            <ZoomOut className="w-full h-full" />
          </div>
        </TooltipTrigger>
        <TooltipContent>Zoom Out</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={handleZoomInClick}
            className={`w-6 h-6 p-1 ${
              isZoomInActive ? "bg-slate-100" : "hover:bg-slate-100"
            } rounded-md cursor-pointer`}
          >
            <ZoomIn className="w-full h-full" />
          </div>
        </TooltipTrigger>
        <TooltipContent>Zoom In</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ExportZoomOptions;
