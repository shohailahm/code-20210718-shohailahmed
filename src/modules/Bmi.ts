import { riskFactor } from "../utils";
import { join } from "path";

import { BMIPERSON, DATASET } from "../controllers/bmiController";
import StormDB from "stormdb";
type Data = DATASET[] | null;
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);
db.default({ persons: [] });

export class BMI {
  constructor() {}

  async getBMI(data: BMIPERSON): Promise<DATASET> {
    const heightInMetersSquare = (data.HeightCm / 100) * (data.HeightCm / 100);
    const calculatedBMI: number = Math.round(
      data.WeightKg / heightInMetersSquare
    );
    let list: any = db.get("persons");
    const DATA = {
      ...data,
      bmi: calculatedBMI,
      risk: riskFactor(calculatedBMI),
    } as DATASET;

    list.push(DATA);
    await db.save();

    return DATA;
  }

  async getTotalCountOfOverWeight(): Promise<number> {
    let data: any = db.get("persons").value() || [];
    return data && data.length > 0
      ? data.filter((cur: DATASET) => cur.risk === "very_high_risk").length
      : 0;
  }
}
