import Image from "next/image"
import FirstFeatureSectionPng from "../../../images/FirstItemDetail.png"
import SecondFeatureScetionPng from "../../../images/SecondItemDetail.png"
import {useComponentPageConfig } from "../../app/Context/ComponentPageContext"

const Featurelayout = () => {
    const Layouts = [
        {id:1,name:'Feature 1',img:FirstFeatureSectionPng},
        {id:2,name:'Feature 2',img:SecondFeatureScetionPng}
    ]
    const { addComponent} = useComponentPageConfig();

    const handleClick = (componentName:string) => {
        addComponent(componentName)
    }
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

export default Featurelayout