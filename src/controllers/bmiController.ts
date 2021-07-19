import { Request, Response, NextFunction } from "express";

import { BMI } from "./../modules/Bmi";

export interface BMIPERSON {
  Gender: string;
  HeightCm: number;
  WeightKg: number;
}
export interface DATASET {
  Gender: string;
  HeightCm: number;
  WeightKg: number;
  bmi: number;
  risk: string;
  category: string;
}

export const bmiCalculator = async (req: Request, res: Response) => {
  const { Gender, HeightCm, WeightKg } = req.body;
  if (!Gender || !HeightCm || !WeightKg) {
    return res.status(400).json({
      success: false,
      message: "gender , height and weight are required",
    });
  }
  try {
    const massIndex = new BMI();
    const bmiData = await massIndex.getBMI({ Gender, HeightCm, WeightKg });
    return res.status(200).json({ success: true, bmiData });
  } catch (error) {
    //logger can be placed here
    return res
      .status(500)
      .json({ success: false, messgae: "Error on the server" });
  }
};

export const getOverWeightCount = async (req: Request, res: Response) => {
  const massIndex = new BMI();
  const totalOverWeightCount = await massIndex.getTotalCountOfOverWeight();
  return res.json({
    totalOverWeightCount,
  });
};
