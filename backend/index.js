import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import { notFound, errorHandler } from "./middleware/errMiddleware";
import userRoute from "./routes/userRoutes";

const app = express();
dotenv.config();

// middleware
app.use(express.json({ limit: "5mb" }));
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/user", userRoute);

// connecting to the database
connectDB();

// error handler readdirSync
app.use(notFound);
app.use(errorHandler);

// listen on port
app.listen(process.env.PORT || 5000, () =>
  console.log(`Server Running ${process.env.NODE_ENV} mode on port 5000`)
);
