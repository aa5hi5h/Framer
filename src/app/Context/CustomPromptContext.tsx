"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CustomPromptContextProps {
  customPrompt: string;
  setCustomPrompt: (prompt: string) => void;
}

const CustomPromptContext = createContext<CustomPromptContextProps | undefined>(undefined);

export const useCustomPrompt = (): CustomPromptContextProps => {
  const context = useContext(CustomPromptContext);
  if (!context) {
    throw new Error('useCustomPrompt must be used within a CustomPromptProvider');
  }
  return context;
};

interface CustomPromptProviderProps {
  children: ReactNode;
}

export const CustomPromptProvider: React.FC<CustomPromptProviderProps> = ({ children }) => {
  const [customPrompt, setCustomPrompt] = useState<string>('');

  return (
    <CustomPromptContext.Provider value={{ customPrompt, setCustomPrompt }}>
      {children}
    </CustomPromptContext.Provider>
  );
};
