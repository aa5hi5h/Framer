"use client"
import { ChevronLeft, ChevronRight, FileDown, FolderPlus, FolderUp, Plus, Search, X } from "lucide-react"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import NavbarLayout from "./Layouts/NabarLayout"
import FooterLayout from "./Layouts/FooterLayout"
import SignUpLayout from "./Layouts/SignUpLayout"
import LoginLayout from "./Layouts/LoginLayout"
import PricingLayout from "./Layouts/PricingLayout"
import LogoLayout from "./Layouts/LogoLayout"
import ListingLayout from "./Layouts/ListingLayout"
import HeroLayout from "./Layouts/HeroLayout"
import HeaderLayout from "./Layouts/HeaderLayout"
import Featurelayout from "./Layouts/FeatureLayout"
import FaqLayout from "./Layouts/FaqLayout"
import ContactLayout from "./Layouts/ContactLayout"
import BlankSectionLayout from "./Layouts/BlankLayout"
import TestimonialsLayout from "./Layouts/TestimoialsLayout"
import {useComponentPageConfig } from "../app/Context/ComponentPageContext"


const SidePannelCard = () => {

    const {addBlankPage, hasBlankPage } = useComponentPageConfig();
    const [selectedComponents,setSelectedComponents] = useState<string | null>(null)

    const ComponentsList=[
        {id:1,name:"Blank Section"},
        {id:2,name:"Contact"},
        {id:3,name:'FAQ'},
        {id:4,name:'Feature'},
        {id:5,name:"Footer"},
        {id:6,name:'Header'},
        {id:7,name:'Hero'},
        {id:8,name:'Listing'},
        {id:9,name:'Login'},
        {id:10,name:'Logo lists'},
        {id:11,name:'Navbar'},
        {id:12,name:'Pricing'},
        {id:13,name:'SignUp'},
        {id:14,name:'Testimonials'}
    ]

    useEffect(() => {
        if (!hasBlankPage) {
            addBlankPage();
        }
    }, [hasBlankPage, addBlankPage]);

    

    const RenderComponentLayout = () => {
        switch(selectedComponents) {
            case "Navbar":
                return <NavbarLayout />;
            case "Footer":
                return <FooterLayout />;
            case 'SignUp':
                return <SignUpLayout />;
            case 'Login':
                return <LoginLayout />;
            case 'Pricing':
                return <PricingLayout />;
            case 'Logo lists':
                return <LogoLayout />;
            case 'Listing':
                return <ListingLayout />;
            case 'Hero':
                return <HeroLayout />;
            case 'Header':
                return <HeaderLayout />;
            case 'Feature':
                return <Featurelayout />;
            case 'FAQ':
                return <FaqLayout />;
            case 'Contact':
                return <ContactLayout />;
            case 'Blank Section':
                return <BlankSectionLayout />;
            case 'Testimonials':
                return <TestimonialsLayout />
    }
    }

    if(!selectedComponents){
    return (
        <div className="flex w-full flex-col space-y-4">
            <Input className="bg-slate-100 flex gap-x-4 border-[1px] focus:outline-none focus:bg-white focus:border-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Type here to search..." >
            </Input>
            <div className="flex gap-x-4">
                <div className="w-[45%] h-[10vh] pt-[4px] cursor-pointer flex flex-col items-center justify-center rounded-md bg-slate-100">
                    <FolderPlus className="text-slate-500" />
                    <h5 className="text-[12px] font-semibold mt-[1px]">Create</h5>
                </div>
                <div className="w-[45%] h-[10vh] pt-[4px] cursor-pointer flex flex-col items-center justify-center rounded-md bg-slate-100">
                    <FileDown className="text-slate-500" />
                    <h5 className="text-[12px] font-semibold mt-[1px]">Pages</h5>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h3 className="text-sm pt-[0.5rem] text-muted-foreground font-medium">Feature Section</h3>
                <div className=" flex w-full">
                    <span onClick={() => setSelectedComponents("Footer")} className="w-full mt-[8px] flex justify-between px-2 py-1  rounded-md border-[1px] border-slate-300 items-center">
                        <h3 className="text-[1rem]  w-full font-medium">Footer</h3>
                        <Plus />
                    </span>
                </div>
                <div className=" flex w-full">
                    <span onClick={() => setSelectedComponents("Navbar")} className="w-full mt-[8px] flex justify-between px-2 py-1  rounded-md border-[1px] border-slate-300 items-center">
                        <h3 className="text-[1rem]  w-full font-medium">Navbar</h3>
                        <Plus />
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h3 className="text-sm pt-[4px] text-muted-foreground font-medium">All Section</h3>
                <div className=" flex flex-col w-full">
                    {ComponentsList.map((item,index) => (
                        <span key={item.id} onClick={() => setSelectedComponents(item.name)} className="w-full mt-[8px] flex justify-between px-2 py-1  rounded-md border-[1px] border-slate-300 items-center">
                        <h3 className="text-[1rem]  w-full font-medium">{item.name}</h3>
                        <Plus />
                    </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

if(selectedComponents){
    return (
        <div className="flex w-full flex-col space-y-2">
        <div className="flex items-center gap-x-4 justify-between">
        <div className="flex items-center gap-x-1">
        <ChevronLeft onClick={() => setSelectedComponents(null)} className="h-6 w-6 p-1 rounded-md cursor-pointer hover:bg-slate-100 " />
        <h3 className="text-[14px] font-medium">{selectedComponents} Section</h3>
        </div>
        <X className="h-6 w-6 p-1 rounded-md cursor-pointer hover:bg-slate-100 "/>
        </div>
        <div className="pt-[-8px]">
        <Input className="bg-slate-100  flex gap-x-4 border-[1px] focus:outline-none focus:bg-white focus:border-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Type here to search..." >
        </Input>
        </div>
        <div className="mt-4">
                {RenderComponentLayout()}
            </div>
        </div>
    )
}
}

export default SidePannelCard