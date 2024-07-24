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
                // Page exists, update it
                const updatedConfig = prevConfig.map((page, index) => {
                    if (index === pageIndex) {
                        return { ...page, components: [...page.components, component] };
                    }
                    return page;
                });
                console.log("Updated config after adding component:", updatedConfig);
                return updatedConfig;
            } else {
                // Page does not exist, create it
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


    return (
        <ComponentPageConfigContext.Provider value={{ ComponentpageConfig, addComponent, addBlankPage, hasBlankPage}}>
            {children}
        </ComponentPageConfigContext.Provider>
    );
};
