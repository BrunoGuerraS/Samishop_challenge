"use client";
import { ICharacter } from "@/models/ICharacters";
import { getCharacterService } from "@/service/service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardCharacter } from "../../../components/CardCharacter";
import { Back } from "./components/Union";

const PeoplePage = ({ params }: any) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  useEffect(() => {
    getCharacterService(params.id)
      .then((data) => setCharacter(data))
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);
  return (
    <>
      <header className="h-20 flex justify-center items-center text-center bg-ravnBlack ">
        <Link className="absolute left-4 top-8" href={"/"}>
          <Back />
        </Link>
        <h2 className="text-center text-white text-lg">
          {character ? character.name : "Loading..."}
        </h2>
      </header>
      <CardCharacter character={character} />
    </>
  );
};
export default PeoplePage;
