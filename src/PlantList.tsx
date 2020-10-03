import React, { Fragment, useEffect, useState } from "react";
import { Slider } from "./slider/Slider";
import { IPlant } from "./models";

interface IProps {
  filters: { [key: string]: string };
  plantData: IPlant[];
  handleDeceased: (plantKey: number) => void;
}

export const PlantList: React.FC<IProps> = ({
  filters,
  plantData,
  handleDeceased
}) => {
  const [plantList, setPlantList] = useState<IPlant[]>();

  useEffect(() => {
    const { family, genus } = filters;

    const filteredData = plantData.filter((item) => {
      if (family === "all" && genus === "all") return plantData;
      if (family === "all") return item["genus"] === genus;
      if (genus === "all") return item["family"] === family;
      return item["family"] === family && item["genus"] === genus;
    });

    setPlantList(filteredData);
  }, [filters, plantData]);

  return (
    <Fragment>
      {plantList?.map((item) => {
        const { genus, species, deceased, key } = item;
        return (
          <div
            className="list__item"
            style={{ backgroundColor: deceased ? "green" : "red" }}
            key={key}
          >
            {`${genus} ${species}, ${deceased ? "ALIVE" : "DEAD"}`}
            <Slider
              plantKey={key}
              handleDeceased={handleDeceased}
              deceased={deceased}
            />
          </div>
        );
      })}
    </Fragment>
  );
};
