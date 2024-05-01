export enum RoastLevels {
    Light = "Light",
    Medium = "Medium",
    Dark = "Dark",
    OmniRoasted = "OmniRoasted",
  }
  
export enum BrewMethods {
    Espresso = "Espresso",
    Filter = "Filter",
    Any = "Any",
  }

export interface BeanType {
_id: string;
name: string;
origin: {
  region: string;
  country: string
};
process: string;
elevation: string;
notes: any;
roastLevel: RoastLevels;
brewMethods: BrewMethods;
roaster: string;
}