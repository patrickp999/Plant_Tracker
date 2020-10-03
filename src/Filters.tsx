import React from "react";
import { Select } from "./select/Select";

interface IProps {
  familyOptions: Object;
  genusOptions: Object;
  handleFilterOptions: (selectName: string, selection: string) => void;
}

export const Filters: React.FC<IProps> = ({
  familyOptions,
  genusOptions,
  handleFilterOptions
}) => {
  return (
    <div className="filter__card">
      <div className="filter__card__select">
        <label>
          Sort by Family
          <Select
            selectName={"family"}
            options={familyOptions}
            handleFilterOptions={handleFilterOptions}
          />
        </label>
      </div>
      <div className="filter__card__select">
        <label>
          Sort by Genus
          <Select
            selectName={"genus"}
            options={genusOptions}
            handleFilterOptions={handleFilterOptions}
          />
        </label>
      </div>
    </div>
  );
};
