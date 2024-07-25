"use client"
import { createContext, useContext, useState } from "react";

const ComponentPageConfigContext = createContext();

export const useComponentPageConfig = () => useContext(ComponentPageConfigContext);

export const ComponentPageConfigProvider = ({ children }) => {
    const [ComponentpageConfig, setComponentPageConfig] = useState([]);
    const [hasBlankPage, setHasBlankPage] = useState(false);

    const addComponent = (component, pageName) => {
        setComponentPageConfig((prevConfig) => {
            const pageIndex = prevConfig.findIndex(page => page.name === pageName);
            if (pageIndex > -1) {
                const updatedConfig = prevConfig.map((page, index) => {
                    if (index === pageIndex) {
                        return { ...page, components: [...page.components, component] };
                    }
                    return page;
                });
                console.log("Updated config after adding component:", updatedConfig);
                return updatedConfig;
            } else {
                const newPage = { name: pageName, components: [component] };
                const updatedConfig = [...prevConfig, newPage];
                console.log("Added new page with component:", updatedConfig);
                return updatedConfig;
            }
        });
    };

    const addBlankPage = () => {
        if (!hasBlankPage) {
            const newPage = { id: Date.now(), name: "blank-page-1", components: [] };
            setComponentPageConfig((prevConfig) => [...prevConfig, newPage]);
            setHasBlankPage(true);
            console.log("Blank page added:", newPage);
        }
    };

    const reorderComponents = (pageName, startIndex, endIndex) => {
        setComponentPageConfig((prevConfig) => {
            return prevConfig.map((page) => {
                if (page.name === pageName) {
                    const components = Array.from(page.components);
                    const [removed] = components.splice(startIndex, 1);
                    components.splice(endIndex, 0, removed);
                    return { ...page, components };
                }
                return page;
            });
        });
    };


    return (
        <ComponentPageConfigContext.Provider value={{ ComponentpageConfig, addComponent, addBlankPage, hasBlankPage,reorderComponents}}>
            {children}
        </ComponentPageConfigContext.Provider>
    );
};
