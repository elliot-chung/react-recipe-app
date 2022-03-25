import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import auth from "./middleware/auth";

import authRoutes from "./routes/authRoute";
import userRoutes from "./routes/usersRoute";
import favoritesRoutes from "./routes/favoritesRoute";
import spoonacularRoutes from "./routes/spoonacularRoute";

import {} from "./environment";

dotenv.config();

mongoose.connect(`${process.env.CONNECTION_URL}`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the backend" });
});

app.use("/users", userRoutes);
app.use("/spoonacular", spoonacularRoutes);
app.use("/auth", auth, authRoutes);
app.use("/favorites", auth, favoritesRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`It's alive on port: ${PORT}`));
