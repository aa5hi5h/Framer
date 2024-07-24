import Image from "next/image"
import FirstPricingPng from "../../../images/FirstPricing.png"
import SecondPricingPng from "../../../images/SecondPricing.png"
import ThirdPricingPng from "../../../images/ThirdPricing.png"
import {useComponentPageConfig } from "../../app/Context/ComponentPageContext"
import { usePageConfig } from "@/app/Context/pageConfigContext"
import { usePageSelection } from "@/app/Context/ActivePageContext"
import { useBlankPageConfig } from "@/app/Context/BlankPageContext"

const PricingLayout = () => {

    const { currentPage, setCurrentPage } = usePageSelection();
    const { ensureBlankPage, blankPageConfig } = useBlankPageConfig();
    const Layouts = [
        {id:1,name:'Pricing 1',img:FirstPricingPng},
        {id:2,name:'Pricing 2',img:SecondPricingPng},
        {id:3,name:'Pricing 3',img:ThirdPricingPng}
    ]
    const { addComponent} = useComponentPageConfig();

    const handleClick = (componentName:string) => {
        ensureBlankPage();
        const targetPage = currentPage || blankPageConfig[0].name;
        setCurrentPage(targetPage);
        addComponent(componentName, targetPage);
    };
    return (
        <div className="flex flex-col my-[8px] space-y-2">
            <h4  className="text-sm text-start px-[4px] pt-[4px] text-muted-foreground font-medium mb-1">Components</h4>
            {Layouts.map((layout) => (
                <div onClick={() => handleClick(`${layout.name}`)} key={layout.id} className="mb-2 rounded-sm w-full bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer flex flex-col items-center">
                    <Image src={layout.img} alt={layout.name} width={180} height={200} className="rounded-sm mt-[6px]" />
                    <h3 className="text-[10px] text-center pt-[4px] text-muted-foreground font-medium mb-2">{layout.name}</h3>
                </div>
            ))}
        </div>
    )
}
export default PricingLayout