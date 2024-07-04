import { Box } from "lucide-react"

const SecondFeaturedProp = () => {
    return (
        <div className="border-2 border-slate-300 p-4 mt-4  bg-slate-200 rounded-lg shadow-sm">
        <div className="flex flex-col space-y-8 cursor-pointer">
            <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">item&apos;s name</h2>
            <h3 className="text-sm text-gray-700 font-medium">description</h3>
            </div>
            <div className="flex gap-2 items-center">
                <Box size={18}/>
                <h4 className="text-sm font-semibold text-gray-700 ">"X" products</h4>
                </div>
        </div>
        </div>
    )
}

export default SecondFeaturedProp