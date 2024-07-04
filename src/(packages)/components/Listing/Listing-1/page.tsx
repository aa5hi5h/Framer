import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import FeaturedItems from "../../props/FeaturedItems"


const FirstListing = () => {

    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1},
    ]
    return (
        <div className="p-6">
            <div className="flex flex-col space-y-4">
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
        </div>
    )
}

export default FirstListing