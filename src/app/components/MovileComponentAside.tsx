import { PersonCell } from "@/components/PersonCell/PersonCell";
import { ICharacter } from "@/models/ICharacters";
import Link from "next/link";

interface Prop {
    character: ICharacter;
    index: number
}
export const MovileComponentAside: React.FC<Prop> = ({ character, index }) => {
    return <Link href={`/character/${index + 1}`} key={index}>
      <PersonCell
        name={character.name}
        homeworld={character.homeworld}
        species={character.species[0]}
      />
    </Link>;
};