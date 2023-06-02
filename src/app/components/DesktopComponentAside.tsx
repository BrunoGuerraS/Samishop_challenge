"use client";
import { PersonCell } from "@/components/PersonCell/PersonCell";
import { GlobalContext } from "@/context/GlobalContext";
import { ICharacter } from "@/models/ICharacters";
import { useContext } from "react";

interface Prop {
  character: ICharacter;
  index: number;
}

export const DesktopComponentAside: React.FC<Prop> = ({ character, index }) => {
  const { setCharacter } = useContext(GlobalContext);
  return (
    <div onClick={() => {setCharacter(character)}}>
      <PersonCell
        name={character.name}
        homeworld={character.homeworld}
        species={character.species[0]}
      />
    </div>
  );
};
