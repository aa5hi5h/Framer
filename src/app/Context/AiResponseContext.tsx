"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface AiResponseContextProps {
    aiResponse : string,
    setAiResponse : Dispatch<SetStateAction<string>>
}

const AiResponseContext = createContext<AiResponseContextProps | null>(null)

export const AiResponseProvider = ({children}:{children:ReactNode}) => {

    const [aiResponse, setAiResponse] = useState<string>("")

    return (
        <AiResponseContext.Provider value={{aiResponse,setAiResponse}} >
            {children}
        </AiResponseContext.Provider>
    )
}
export const useAiResponse = () => {
    const context = useContext(AiResponseContext);
    if (!context) {
        throw new Error("useAiResponse must be used within an AiResponseProvider");
    }
    return context;
};