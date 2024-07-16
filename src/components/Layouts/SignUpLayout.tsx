import Image from "next/image"
import FirstSignUpPng from "../../../images/FirstSignUp.png"
import SecondSignUpPng from "../../../images/SecondSignUp.png"
import THirdSignUpPng from "../../../images/ThirdSignUp.png"
import FouthSignUpPng from "../../../images/FourthSignUp.png"
import {useComponentPageConfig } from "../../app/Context/ComponentPageContext"
import { usePageSelection } from "@/app/Context/ActivePageContext"
import { usePageConfig } from "@/app/Context/pageConfigContext"

const SignUpLayout = () => {

    const { pageConfig, addPageConfig, ensureBlankPage } = usePageConfig();
    const { currentPage, setCurrentPage } = usePageSelection();

    const Layouts = [
        {id:1,name:'SignUp 1',img:FirstSignUpPng},
        {id:2,name:'SignUp 2',img:SecondSignUpPng},
        {id:3,name:'SignUp 3',img:THirdSignUpPng},
        {id:4,name:'SignUp 4',img:FouthSignUpPng}
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

export default SignUpLayout