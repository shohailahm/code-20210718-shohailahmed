import { riskFactor } from "../utils";

describe("utility functions test", () => {
  it("should return proper values", () => {
    expect(riskFactor(42)).toMatch("very_high_risk");
    expect(riskFactor(38)).toMatch("high_risk");
    expect(riskFactor(33)).toMatch("medium_risk");
    expect(riskFactor(28)).toMatch("enhanced_risk");
    expect(riskFactor(23)).toMatch("Low_risk");
    expect(riskFactor(18)).toMatch("malnutrition_risk");
  });
});
