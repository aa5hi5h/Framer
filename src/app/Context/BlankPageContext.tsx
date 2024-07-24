"use client";
import { StaticImageData } from "next/image";
import { createContext, useState, useContext, ReactNode } from "react";
import BlankSectionPng from "../../../images/BlankSection.png"

interface BlankPage {
    id: number;
    name: string;
    img: StaticImageData
}


interface BlankPageContextType {
    blankPageConfig: BlankPage[];
    addBlankPage: () => void;
    resetBlankPageConfig: () => void;
    ensureBlankPage: () => void;
    removeBlankPage: (id: number) => void
}


const BlankPageContext = createContext<BlankPageContextType | undefined>(undefined);


export const useBlankPageConfig = () => {
    const context = useContext(BlankPageContext);
    if (context === undefined) {
        throw new Error('useBlankPageConfig must be used within a BlankPageProvider');
    }
    return context;
};


export const BlankPageProvider = ({ children }: { children: ReactNode }) => {
    const [blankPageConfig, setBlankPageConfig] = useState<BlankPage[]>([]);

    const addBlankPage = () => {
        const newBlankPage: BlankPage = {
            id: Date.now(),
            name: `blank-page-${blankPageConfig.length + 1}`,
            img: BlankSectionPng 
        };
        setBlankPageConfig(prevConfig => [...prevConfig, newBlankPage]);
        console.log("Blank page addedd:",newBlankPage)
    };

    const resetBlankPageConfig = () => {
        setBlankPageConfig([]);
    };

    const ensureBlankPage = () => {
        if (blankPageConfig.length === 0) {
            addBlankPage();
        }
    };

    const removeBlankPage = (id: number) => {
        setBlankPageConfig((prevConfig) => prevConfig.filter((page) => page.id !== id));
    };

    return (
        <BlankPageContext.Provider value={{ blankPageConfig, addBlankPage, resetBlankPageConfig,ensureBlankPage,removeBlankPage }}>
            {children}
        </BlankPageContext.Provider>
    );
};
