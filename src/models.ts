// Created a model for the plant data
export interface IPlant {
  family: string;
  genus: string;
  species: string;
  deceased: boolean;
  key: number; // Added a key to identify the plant
}
