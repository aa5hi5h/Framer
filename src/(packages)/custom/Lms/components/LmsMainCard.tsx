import { BarChart4, Cctv, Clapperboard, GlobeLock, MonitorSmartphone, Piano } from "lucide-react"
import LmsProductCard from "./LmsProductCard"


const LmsMainCard = () => {

    const itemsList = [
        {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1}, {one:1},
    ]
    return (
        <div className="flex flex-col space-y-6 mt-[-0.9rem]">
            <div className=" gap-x-4 hidden md:flex">
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <BarChart4 size={20} />
                    Accounting
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <MonitorSmartphone size={20} />
                    Computer Science
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <GlobeLock size={20} />
                    Accounting
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full hover:bg-slate-100 transition-all border-[1px] border-slate-600 max-w-max">
                    <Clapperboard size={20} />
                    Filming
                </span>
                <span className="flex gap-x-1 text-sm font-medium items-center p-2 rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <Piano size={20} />
                    Music
                </span>
                <span className="flex gap-x-1 text-sm items-center font-medium p-2 rounded-full border-[1px] hover:bg-slate-100 transition-all border-slate-600 max-w-max">
                    <Cctv size={20} />
                    Network and Security
                </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 space-x-4">
                {
                    itemsList.map((item,index) => (
                        <LmsProductCard />
                    ))
                }
            </div>
        </div>
    )
}

export default LmsMainCard