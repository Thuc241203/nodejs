import express from "express";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import authRouter from "./routes/auth";
import uploadImageRouter from "./routes/uploadImage";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
// app.use("/api", uploadImageRouter);
mongoose.connect("mongodb://127.0.0.1:27017/nodejs");
export const viteNodeApp = app;
