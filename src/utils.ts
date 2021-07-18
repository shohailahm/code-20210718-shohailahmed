//setting true because switch case uses strict comparsion
export const riskFactor = (BMI: number): string => {
  if (!BMI && BMI !== 0) {
    return "Invalid";
  }
  switch (true) {
    case BMI >= 40:
      return "very_high_risk";
    case 35 <= BMI && BMI < 40:
      return "high_risk";
    case 30 <= BMI && BMI < 35:
      return "medium_risk";
    case 25 <= BMI && BMI < 30:
      return "enhanced_risk";
    case 18.5 <= BMI && BMI < 25:
      return "Low_risk";
    default:
      return "malnutrition_risk";
  }
};

export const getCategory = (BMI: number): string => {
  switch (true) {
    case BMI >= 40:
      return "Very severely obese";
    case 35 <= BMI && BMI < 40:
      return "Severely obese";
    case 30 <= BMI && BMI < 35:
      return "Moderately obese";
    case 25 <= BMI && BMI < 30:
      return "Overweight";
    case 18.5 <= BMI && BMI < 25:
      return "Normal weight";
    default:
      return "Underweight";
  }
};
