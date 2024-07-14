import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import FeaturedItems from "@/(packages)/components/props/FeaturedItems"
import SecondFeaturedProp from "@/(packages)/components/props/FetauredList-2"
import { Image } from "lucide-react"


interface EcommerceStoreDetailProp{
    viewMode : string
}


const EcommerceStoreDetail = ({viewMode}: EcommerceStoreDetailProp) => {

    const ItemsList = [
        {name:1},{name:1},{name:1},{name:1}
    ]

    const ProductsList = [
        {name:1},{name:1},{name:1},{name:1}, {name:1},{name:1},{name:1},{name:1}
    ]

    if(viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4">
        <SecondNavbar viewMode="monitor" />
        <div className="p-6">
        <div className="flex flex-col space-y-4">
        <div className="p-4  rounded-md space-y-4">
        <div className="h-[30vh] w-full bg-slate-200 rounded-t-lg flex justify-center items-center">
            <Image size={36} />
        </div>
        <div className="flex justify-center items-center pb-2">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold tracking-tight">Store Name</h1>
            <div className="flex gap-8 mt-4 items-center ml-[-1rem]">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold">10</h2>
                    <h2 className="text-lg font-medium">Products</h2>
                </div>
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-semibold">322</h2>
                    <h2 className="text-lg font-medium">Customers</h2>
                </div>
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-semibold">$1.5k</h2>
                    <h2 className="text-lg font-medium">Sales</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-col space-y-4 mb-[4rem] pt-[1.3rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Popular products</h1>
                    </span>
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
            <div className="flex flex-col space-y-4 mb-[4rem] pt-[5.7rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">All products</h1>
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        ProductsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-4">
        <SecondNavbar viewMode="mobile" />
        <div className="p-6">
        <div className="flex flex-col space-y-4">
        <div className="p-4  rounded-md space-y-4">
        <div className="h-[30vh] w-full bg-slate-200 rounded-t-lg flex justify-center items-center">
            <Image size={36} />
        </div>
        <div className="flex justify-center items-center pb-2">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold tracking-tight">Store Name</h1>
            <div className="flex gap-8 mt-4 items-center ml-[-1rem]">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold">10</h2>
                    <h2 className="text-lg font-medium">Products</h2>
                </div>
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-semibold">322</h2>
                    <h2 className="text-lg font-medium">Customers</h2>
                </div>
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-semibold">$1.5k</h2>
                    <h2 className="text-lg font-medium">Sales</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-col space-y-4 mb-[4rem] pt-[1.3rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Popular products</h1>
                    </span>
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
            <div className="flex flex-col space-y-4 mb-[4rem] pt-[5.7rem] mx-[0.7rem]">
                <div className="flex justify-between items-center">
                    <span className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">All products</h1>
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        ProductsList.map((item,index) => (
                            <FeaturedItems key={index} />
                        )

                        )
                    }
                    </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

}
export default EcommerceStoreDetail