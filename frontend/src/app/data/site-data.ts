import {FieldSeason} from "./field-season";
export class SiteData {

  static andrew_farm: string = "Andrew's Wheat Field"

  static sitesByYear: { [year: number]: FieldSeason } = {
    2024: {
      sites: ["Othello"],
      cameras: [1,2,3,4,5,6,7,8]
    },
    2025: {
      sites: [SiteData.andrew_farm],
      cameras: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    }
  };
}


