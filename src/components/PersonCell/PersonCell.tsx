"use client";
import { getSpeciesService, getWorldService } from "@/service/service";
import { useEffect, useState } from "react";
import "./PersonCell.css";
interface Props {
  name: string;
  homeworld: string;
  species?: string;
}

export const PersonCell: React.FC<Props> = ({ name, homeworld, species }) => {
  const [world, setWorld] = useState("");
  const [race, letRace] = useState<string | null>();

  useEffect(() => {
    getWorldService(homeworld)
      .then((data) => setWorld(data))
      .catch((error) => console.error(error));
    if (species) {
      getSpeciesService(species).then((data) => letRace(data));
    } else {
      letRace("human");
    }
  }, [homeworld, species]);

  return (
    <div className="mx-4">
      <div className="flex justify-between items-center w-full border-b border-gray-300">
        <div className="my-4 w-[80%]">
          <h2 className="text-textDarck text-[17px] font-bold">{name}</h2>
          <p className="text-textLight text-[14px] font-normal">
            {race ?? "unknow"} from {world??"unknow"}
          </p>
        </div>
        <div>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
