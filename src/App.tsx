import React, { useEffect, useState } from "react";
import { data } from "./data";
import { PlantList } from "./PlantList";
import { Filters } from "./Filters";
import { IPlant } from "./models";
import "./styles.css";

/*
## Task
1. I should be able to see a list of plants displaying `{genus} {species}`.
2. I should be able to see an indicator next to the plant displaying if its deceased or alive.
3. I should be able to see and click on an [X] button to indicate that the plant has died.
4. I should be able to filter data by family using a select.
5. I should be able to filter data by genus using a select.
6. I should be able to see the filters on the left hand side, and the list on the right hand side.
7. I should be able to see a card/box around the filters.
8. I should be able to see a styled select.
9. I should be able to see a styled list.
*/

export const App: React.FC = () => {
  const [plantData, setPlantData] = useState<IPlant[]>([]);
  const [familyOptions, setFamilyOptions] = useState({});
  const [genusOptions, setGenusOptions] = useState({});
  const [filters, setFilters] = useState({
    family: "all",
    genus: "all"
  });

  useEffect(() => {
    data.then((plantsObj) => {
      let myPlants: IPlant[] = [];
      let families: Object = { all: "all" };
      let genera: Object = { all: "all" };
      Object.values(plantsObj).forEach((item: IPlant[]) => {
        Object.values(item).forEach((plant: IPlant, index) => {
          families = { ...families, [plant.family]: plant.family }; // Get the available families
          genera = { ...genera, [plant.genus]: plant.genus }; // Get the available generas
          myPlants.push({ ...plant, key: index });
        });
      });
      setPlantData(myPlants);
      setFamilyOptions(families);
      setGenusOptions(genera);
    });
  }, []);

  const handleDeceased = (plantKey: number) => {
    const updatedStatus = plantData.map((item) => {
      if (plantKey === item.key) {
        return { ...item, deceased: !item.deceased };
      }
      return item;
    });
    setPlantData(updatedStatus);
  };

  const handleFilterOptions = (selectName: string, selection: string) => {
    setFilters({ ...filters, [selectName]: selection });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>
          You must fail at gardening
          <br />
          To master it.
        </h1>
      </div>
      <div className="filters">
        <Filters
          familyOptions={familyOptions}
          genusOptions={genusOptions}
          handleFilterOptions={handleFilterOptions}
        />
      </div>
      <div className="list">
        <div className="list__card">
          <PlantList
            filters={filters}
            plantData={plantData}
            handleDeceased={handleDeceased}
          />
        </div>
      </div>
    </div>
  );
};
