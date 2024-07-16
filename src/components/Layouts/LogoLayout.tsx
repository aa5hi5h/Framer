import Image from "next/image"
import FirstLogoListPng from "../../../images/FirstLogoList.png"
import SecondLogoListPng from "../../../images/SecondLogoList.png"
import ThirdLogoListPng from "../../../images/ThirdLogoList.png"
import {useComponentPageConfig } from "../../app/Context/ComponentPageContext"
import { usePageConfig } from "@/app/Context/pageConfigContext"
import { usePageSelection } from "@/app/Context/ActivePageContext"

const LogoLayout = () => {

    const { pageConfig, addPageConfig, ensureBlankPage } = usePageConfig();
    const { currentPage, setCurrentPage } = usePageSelection();

    const Layouts = [
        {id:1,name:'Logo 1',img:FirstLogoListPng},
        {id:2,name:'Logo 2',img:SecondLogoListPng},
        {id:3,name:'Logo 3',img:ThirdLogoListPng}
    ]

    const { addComponent} = useComponentPageConfig();

    const handleClick = (componentName:string) => {
        ensureBlankPage();
        setCurrentPage('Blank');
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

export default LogoLayout