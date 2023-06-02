"use client";
import { CardCharacter } from "@/components/CardCharacter";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export const DetailSection = () => {
  const { character } = useContext(GlobalContext);
  return (
    <section className="grow">
      <CardCharacter character={character} />
    </section>
  );
};
