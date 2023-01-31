import express from "express";
import cors from "cors";
import morgan from "morgan";
import api from "./routes/api.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { connectAdmin } from "./admin/admin.js";
import swaggerDocs from "./utils/swagger.js";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("tiny"));

swaggerDocs(app)
connectAdmin(app)
app.use("/api/v1", api);
app.use(notFound);
app.use(errorHandler);

export default app;
