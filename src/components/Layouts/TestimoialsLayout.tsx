import Image from "next/image"
import FirstTestimonialPng from "../../../images/FirstTestimonial.png"
import SecondTestimonialPng from "../../../images/SecondTestimonial.png"
import ThirdTestimonialPng from "../../../images/ThirdTestimonial.png"
import {useComponentPageConfig } from "../../app/Context/ComponentPageContext"
import { usePageSelection } from "@/app/Context/ActivePageContext"
import { usePageConfig } from "@/app/Context/pageConfigContext"
import { useBlankPageConfig } from "@/app/Context/BlankPageContext"

const TestimonialsLayout = () => {

    const { currentPage, setCurrentPage } = usePageSelection();
    const { ensureBlankPage, blankPageConfig } = useBlankPageConfig();

    const Layouts = [
        {id:1,name:'Testimonials 1',img:FirstTestimonialPng},
        {id:2,name:'Testimonials 2',img:SecondTestimonialPng},
        {id:3,name:'Testimonials 3',img:ThirdTestimonialPng}
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

export default TestimonialsLayout