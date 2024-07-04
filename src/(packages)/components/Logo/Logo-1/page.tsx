import { Blocks, Box, Package2, PackageCheck, PackageSearch } from "lucide-react"


const FirstLogo = () => {

    const LogoList = [
        {name:1}
    ]
    return (
        <div className="p-6 mt-[2.3rem]">
            <div className="flex flex-col justify-center items-center w-full space-y-4">
                <h1 className="text-xl font-semibold tracking-tight pb-[1.7rem]">Build with in partnership with these companies </h1>
                <div className=" max-w-5xl mx-auto w-full ">
                    {LogoList.map((item,index) => (
                        <div key={index} className="grid grid-cols-2 items-center md:grid-cols-3 gap-y-8 gap-x-5">
                            <span className="flex gap-x-1 items-center">
                            <Box size={42} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <Blocks size={42} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <Package2 size={42} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <PackageSearch size={42} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                            <span className="flex gap-x-1 items-center">
                            <PackageCheck size={42} />
                            <h3 className="text-3xl font-semibold tracking-tight">Partner</h3>
                            </span>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FirstLogo