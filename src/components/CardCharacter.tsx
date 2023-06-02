import { DataCell } from "@/components/DataCell";
import { SectionHeader } from "@/components/SectionHeader";
import { GlobalContext } from "@/context/GlobalContext";
import { ICharacter } from "@/models/ICharacters";
import { IStarships } from "@/models/IStarships";
import { getVehiclesService } from "@/service/service";
import { useContext, useEffect, useState } from "react";
interface Props {
  character: ICharacter | null;
}

export const CardCharacter: React.FC<Props> = ({ character }) => {
  const { isInDesktop } = useContext(GlobalContext);
  const [vehicles, setVehicles] = useState<IStarships[] | null>(null);
  const details = ["eye_color", "hair_color", "skin_color", "birth_year"];
  useEffect(() => {
    if (!character) return;
    getVehiclesService(character.vehicles)
      .then((data) => setVehicles(data))
      .catch((error) => {
        console.log(error);
      });
  }, [character]);

  return (
    <section className={`${isInDesktop && "mx-[100px]"}`}>
      <SectionHeader />
      <div className="">
        {character &&
          details.map((detail, index) => {
            return (
              <DataCell
                key={index}
                feature={detail}
                value={character[detail as keyof ICharacter]}
              />
            );
          })}
      </div>
      <div className="h-16 flex items-end">
        <h3 className="text-textDarck mx-4 mb-2 font-bold">Vehicles</h3>
      </div>
      {vehicles &&
        vehicles.map((vehicle, index) => {
          return (
            <div className="w-full" key={index}>
              <p className="text-textLight mt-[14px] mb-[15px] ml-4">
                {vehicle.name}
              </p>
            </div>
          );
        })}
    </section>
  );
};
