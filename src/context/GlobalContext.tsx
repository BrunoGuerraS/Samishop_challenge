"use client"
import { ICharacter } from "@/models/ICharacters";
import { createContext, useState } from "react";

interface IGlobalContext {
    character: ICharacter | null;
    setCharacter: (character: ICharacter | null) => void;
    isInDesktop: boolean;
    setIsInDesktop: (isInDesktop: boolean) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
    character: null,
    setCharacter: () => {},
    isInDesktop: false,
    setIsInDesktop: () => {},
})

interface Props {
    children: React.ReactNode;
}

export const GlobalProvider = ({children}: Props) => {
    const [character, setCharacter] = useState<ICharacter | null>(null);
    const [isInDesktop, setIsInDesktop] = useState<boolean>(false);
    const value = {
        character,
        setCharacter,
        isInDesktop,
        setIsInDesktop
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}