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
    password: {
      type: String,
      maxlength: [100, "Password must be less than 100 characters"],
      match: [
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one number, one letter and one special character",
      ],
      required: true,
    },
  },
  { collection: "users" }
);

const model = mongoose.model("User", User);

export default model;
