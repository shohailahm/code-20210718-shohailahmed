import { getCategory, riskFactor } from "../utils";

describe("utility functions test", () => {
  it("should return proper values", () => {
    expect(riskFactor(42)).toMatch("very_high_risk");
    expect(riskFactor(38)).toMatch("high_risk");
    expect(riskFactor(33)).toMatch("medium_risk");
    expect(riskFactor(28)).toMatch("enhanced_risk");
    expect(riskFactor(23)).toMatch("Low_risk");
    expect(riskFactor(18)).toMatch("malnutrition_risk");
  });

  it("should return proper values for category", () => {
    expect(getCategory(42)).toMatch("Very severely obese");
    expect(getCategory(38)).toMatch("Severely obese");
    expect(getCategory(33)).toMatch("Moderately obese");
    expect(getCategory(28)).toMatch("Overweight");
    expect(getCategory(23)).toMatch("Normal weight");
    expect(getCategory(18)).toMatch("Underweight");
  });
});
