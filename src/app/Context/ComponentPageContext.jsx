"use client"
import { createContext, useContext, useState } from "react";

const ComponentPageConfigContext = createContext();

export const useComponentPageConfig = () => useContext(ComponentPageConfigContext);

export const ComponentPageConfigProvider = ({ children }) => {
    const [ComponentpageConfig, setComponentPageConfig] = useState([]);
    const [hasBlankPage, setHasBlankPage] = useState(false);

    const addComponent = (component) => {
        setComponentPageConfig((prevConfig) => [...prevConfig, component]);
    };

    const addBlankPage = () => {
        if (!hasBlankPage) {
            setComponentPageConfig((prevConfig) => [...prevConfig, { name: "Blank" }]);
            setHasBlankPage(true);
        }
    };

    return (
        <ComponentPageConfigContext.Provider value={{ ComponentpageConfig, addComponent, addBlankPage, hasBlankPage }}>
            {children}
        </ComponentPageConfigContext.Provider>
    );
};
