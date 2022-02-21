import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT;

mongoose
  .connect(`${process.env.CONNECTION_URL}`)
  .then(() =>
    app.listen(PORT, () => console.log(`It's alive on port: ${PORT}`))
  )
  .catch(err => console.log(err));
