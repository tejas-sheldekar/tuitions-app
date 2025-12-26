// src/app.ts
import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const app = express();
app.use(express.json());

// src/app.ts
const swaggerDocument = YAML.load(
  path.join(__dirname, "swagger", "openapi.yaml")
);


app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
