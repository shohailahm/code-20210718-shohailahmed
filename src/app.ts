import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { bmiCalculator, getOverWeightCount } from "./controllers/bmiController";
import bodyParser from "body-parser";

dotenv.config({ path: path.join(__dirname, ".env.test") });

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    exposedHeaders: "X-Entitlement",
  })
);

app.post("/api/bmi", bmiCalculator);
app.get("/api/overWeight", getOverWeightCount);
app.listen(port, () => {
  console.info(`The application is listening on port ${port}!`);
});

export { app };
