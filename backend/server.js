import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

connectDB();
const port = process.env.PORT;
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => console.log("Server running, listening to port 5000"));
