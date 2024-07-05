import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import FeaturedItems from "@/(packages)/components/props/FeaturedItems"
import SecondFeaturedProp from "@/(packages)/components/props/FetauredList-2"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"


const EcommerceLanding = () => {


    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1}, {name:1},{name:1},{name:1},{name:1},
    ]
    return (
        <div className="flex flex-col space-y-4">
            <SecondNavbar />
            <div className="p-6">
            <div className="flex flex-col space-y-4 max-w-4xl mb-[14.5rem] mx-auto mt-[4.3rem]">
                    <h1 className="text-5xl font-bold text-center tracking-tight">Foundation for your commerce platform</h1>
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
            <SecondFooter />
        </div>
        </div>
    )
}

export default EcommerceLanding