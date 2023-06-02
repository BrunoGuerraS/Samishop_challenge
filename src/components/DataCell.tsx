import React from "react";

interface Props {
  feature: string;
  value?: string | string[];
}

function cleanStr(str: string) {
  const words = str.split("_");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}

export const DataCell: React.FC<Props> = ({ feature, value }) => {
  return (
    
      <div className="flex justify-between items-center border-b border-gray-300 pt-[14px] pb-[15px] mx-4">
        <p className="text-textLight">{cleanStr(feature) ?? "ficture"}</p>
        <p className="text-textDarck capitalize font-bold">{value ?? "default"}</p>
      </div>
  );
};
