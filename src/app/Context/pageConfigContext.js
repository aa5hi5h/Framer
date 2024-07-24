"use client"
import { createContext, useState, useContext } from "react";
import { pageConfig as defaultConfig, addPageConfig as addConfig } from "./pageConfig";
import BlankSectionPng from "../../../images/BlankSection.png"

const PageConfigContext = createContext();

export const PageConfigProvider = ({ children }) => {
    const [pageConfig, setPageConfig] = useState(defaultConfig);

    const addPageConfig = (pageName, components) => {
        const newConfig = { ...pageConfig, [pageName]: components };
        setPageConfig(newConfig);
        addConfig(pageName, components); 
    };

    const resetPageConfig = () => {
        setPageConfig(defaultConfig);
    };

    return (
        <PageConfigContext.Provider value={{ pageConfig, addPageConfig,resetPageConfig }}>
            {children}
        </PageConfigContext.Provider>
    );
};

export const usePageConfig = () => useContext(PageConfigContext);