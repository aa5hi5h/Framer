import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"


const FirstPricing = () => {
    return (
        <div className="p-3 mt-[2rem]">
            <div className="max-w-3xl mx-auto flex flex-col justify-center items-center">
                <h1 className="mb-4 text-5xl font-semibold tracking-tight">Pricing Plan</h1>
                <p className="mb-12  text-center">Lorem Ipsum mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                <div className="border-[1px] max-w-sm w-full mb-4 rounded-md items-center border-gray-700 p-6">
                    <div className="flex flex-col w-full">
                        <h2 className="text-2xl font-semibold tracking-tight mb-2">Basic Plan</h2>
                        <h1 className="text-5xl font-semibold mb-2 ">$19/mo</h1>
                        <h4 className="text-lg font-medium mb-4">or $189/yearly</h4>
                        <hr className=" mb-4 border-slate-800 w-full" />
                        <h3 className="text-xl mb-4 font-medium">Includes:</h3>
                        <span className="flex gap-x-2 mb-2">
                            <Check className="" />
                            <h4 className="text-xl font-medium">Add plan feature here</h4>
                        </span>
                        <span className="flex gap-x-2 mb-2">
                            <Check />
                            <h4 className="text-xl font-medium">Add plan feature here</h4>
                        </span>
                        <span className="flex gap-x-2 mb-2">
                            <Check />
                            <h4 className="text-xl font-medium ">Add Plan Feature here</h4>
                        </span>
                        <span className="flex gap-x-2 mb-2">
                            <Check />
                            <h4 className="text-xl font-medium ">Add Plan Feature here</h4>
                        </span>
                        <span className="flex gap-x-2 mb-4 ">
                            <Check />
                            <h4 className="text-xl font-medium">Add Plan Feature here</h4>
                        </span>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPricing