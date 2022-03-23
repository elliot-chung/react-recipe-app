import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: [100, "Name must be less than 100 characters"],
      required: true,
    },
    email: {
      type: String,
      maxlength: [100, "Email must be less than 100 characters"],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      unique: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FavoriteList",
      },
    ],
  },
  { collection: "users" }
);

const model = mongoose.model("User", User);

export default model;
