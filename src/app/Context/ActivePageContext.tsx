"use client"
import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useAiResponse } from "./AiResponseContext";

interface PageSelectionContextProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const PageSelectionContext = createContext<PageSelectionContextProps | undefined>(undefined);

export const PageSelectionProvider = ({ children }: { children: ReactNode }) => {
    const { aiResponse } = useAiResponse();
    const [currentPage, setCurrentPage] = useState<string>("");

    useEffect(() => {
        if (aiResponse.toLowerCase() === "ecommerce") {
            setCurrentPage("Landing");
        } else {
            setCurrentPage(aiResponse);
        }
    }, [aiResponse]);

    return (
        <PageSelectionContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageSelectionContext.Provider>
    );
};

export const usePageSelection = () => {
    const context = useContext(PageSelectionContext);
    if (!context) {
        throw new Error("usePageSelection must be used within a PageSelectionProvider");
    }
    return context;
};
