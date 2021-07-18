import request from "supertest";
import { app } from "../app";

describe("GET / - a simple api endpoint", () => {
  it("overweight API Request", async () => {
    const result = await request(app).get("/api/overWeight");
    expect(result.body).toHaveProperty("totalOverWeightCount");
    expect(result.statusCode).toEqual(200);
  });

  it("POST /bmi - success", async () => {
    let Obj = {
      Gender: "male",
      HeightCm: 182,
      WeightKg: 80,
    };
    const { body } = await request(app).post("/api/bmi").send(Obj);
    expect(body).toEqual({
      success: true,
      bmiData: {
        Gender: "male",
        HeightCm: 182,
        WeightKg: 80,
        bmi: 24,
        risk: "Low_risk",
      },
    });
  });

  it("POST /bmi - failure", async () => {
    let Obj = {
      Gender: "male",
      WeightKg: 80,
    };
    const result = await request(app).post("/api/bmi").send(Obj);
    expect(result.body).toEqual({
      error: true,
      message: "gender , height and weight are required",
    });
    expect(result.statusCode).toEqual(400);
  });
});
