import { BedDouble, Cable, CableCar, Gem, HandPlatter, Hotel, Palmtree, Soup, TentTree } from "lucide-react"
import Navbar from "../components/Navbar"
import FeaturedItems from "@/(packages)/components/props/FeaturedItems"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"


const RentalLanding = () => {

    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},{name:1},
        {name:1},{name:1},{name:1},
    ]
    return (
        <div className="flex flex-col space-y-4">
        <Navbar />
        <div className="p-6">
            <div className="flex flex-col">
                <div className="md:flex hidden mx-auto gap-x-8 px-4 mt-[-1.5rem]">
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <Palmtree />
                    <h3>Beach</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <Hotel />
                    <h3>Hotel</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <BedDouble />
                    <h3>Sharing</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <Soup />
                    <h3>Zostel</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <CableCar />
                    <h3>Arctic</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <TentTree />
                    <h3>Camping</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <HandPlatter />
                    <h3>Luxious</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <Gem />
                    <h3>Recommended</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <BedDouble />
                    <h3>Category-1</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <Soup />
                    <h3>Category-2</h3>
                    </span>
                    <span className="flex flex-col items-center gap-y-1 cursor-pointer">
                    <CableCar />
                    <h3>Category-3</h3>
                    </span>
                </div>
                <div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
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
            <SecondFooter />
        </div>
    )
}

export default RentalLanding